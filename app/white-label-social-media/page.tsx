import WhiteLabelPage from "@/components/white-label/WhiteLabelPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label Social Media Management | Wildrank Technologies",
  description: "White label social media management for agencies. Content, scheduling, community management, and paid social under your brand.",
  alternates: { canonical: "/white-label-social-media" },
};

const features = [
  { icon: "PenTool", title: "Content Creation", desc: "Graphics, captions, reels, and videos crafted for each platform — under your brand.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: "Calendar", title: "Scheduling & Posting", desc: "Full content calendars planned, scheduled, and published for your clients.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: "MessageCircle", title: "Community Management", desc: "Daily monitoring and responding to comments and DMs as your agency.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: "Camera", title: "Reels & Story Creation", desc: "Short-form video content that drives engagement on Instagram and TikTok.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: "Share2", title: "Paid Social", desc: "Boosted posts and paid campaigns to amplify reach for your clients.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: "BarChart3", title: "Branded Analytics", desc: "Monthly engagement and growth reports with your logo and branding.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "Which platforms do you cover?", a: "Facebook, Instagram, LinkedIn, Twitter/X, TikTok, and Pinterest. We tailor the platform mix to each client's audience." },
  { q: "Who approves the content?", a: "You do. We create everything and submit it to you for approval before anything is published. You stay in full control." },
  { q: "Can you match my clients' brand voice?", a: "Yes. We build a brand voice guide for each client so all content sounds authentically theirs." },
  { q: "How many posts are included?", a: "It depends on the package, ranging from 12 to 30+ posts per month per client. We scale to fit your needs." },
];

export default function Page() {
  return <WhiteLabelPage badge="White Label Social Media" title="White Label" highlight="Social Media Management"
    description="Offer professional social media management to your clients without hiring designers, writers, or community managers."
    intro="Social media is a time sink that few agencies can staff profitably. Our white-label social media team handles content creation, scheduling, community management, and paid social — all under your brand — so you can offer the service and keep the margin without the headache."
    features={features} faqs={faqs} />;
}
