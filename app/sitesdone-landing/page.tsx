import type { Metadata } from "next";
import SitesDoneLanding from "./sites-done-landing";

export const metadata: Metadata = {
  title: "SitesDoneRight",
  description:
    "We build a professional business website in 90 minutes with a simple 3-minute intake.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SitesDoneLandingPage() {
  return <SitesDoneLanding />;
}
