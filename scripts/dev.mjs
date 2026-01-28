#!/usr/bin/env node
import { spawn } from 'node:child_process'
import net from 'node:net'

const startPort = Number(process.env.PORT || 5000)
const host = process.env.HOST || '0.0.0.0'

const isPortFree = (port) =>
  new Promise((resolve) => {
    const server = net.createServer()
    server.unref()
    server.on('error', () => resolve(false))
    server.listen({ port, host }, () => {
      server.close(() => resolve(true))
    })
  })

const findFreePort = async (port) => {
  let current = port
  for (let i = 0; i < 50; i += 1) {
    if (await isPortFree(current)) return current
    current += 1
  }
  return current
}

const run = async () => {
  const port = await findFreePort(startPort)
  if (port !== startPort) {
    console.log(`[dev] Port ${startPort} in use, using ${port} instead.`)
  }

  const nextCmd = process.platform === 'win32' ? 'next.cmd' : 'next'
  const child = spawn(nextCmd, ['dev', '-p', String(port)], {
    stdio: 'inherit',
    env: { ...process.env, PORT: String(port) }
  })

  child.on('exit', (code, signal) => {
    if (signal) process.exit(1)
    process.exit(code ?? 0)
  })
}

run().catch((err) => {
  console.error('[dev] Failed to start dev server', err)
  process.exit(1)
})
