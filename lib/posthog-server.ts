import { PostHog } from "posthog-node";

const posthogKey =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ??
  process.env.NEXT_PUBLIC_POSTHOG_TOKEN;

const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

let posthogServerClient: PostHog | null = null;

export function getPostHogServerClient() {
  if (!posthogKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_POSTHOG_KEY or NEXT_PUBLIC_POSTHOG_TOKEN.",
    );
  }

  if (!posthogServerClient) {
    posthogServerClient = new PostHog(posthogKey, {
      host: posthogHost,
    });
  }

  return posthogServerClient;
}
