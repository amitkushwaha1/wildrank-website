import WhiteLabelPage from "@/components/white-label/WhiteLabelPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label Virtual Assistant Services | Wildrank Technologies",
  description: "White label virtual assistant services for agencies. Admin, data entry, scheduling, and support staff under your brand.",
  alternates: { canonical: "/white-label-virtual-assistant" },
};

const features = [
  { icon: "Calendar", title: "Scheduling & Calendar", desc: "Appointment setting, calendar management, and meeting coordination for your clients.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: "FileText", title: "Admin & Data Entry", desc: "Accurate data entry, document management, and administrative support.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: "Mail", title: "Inbox & Email Management", desc: "Email triage, responses, and follow-ups handled professionally.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: "Database", title: "CRM Management", desc: "Lead entry, pipeline updates, and CRM hygiene to keep data clean.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: "Headphones", title: "Customer Support", desc: "Chat, email, and ticket support delivered under your brand.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: "Users", title: "Research & Outreach", desc: "Lead research, list building, and cold outreach support.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const faqs = [
  { q: "Are the VAs dedicated to my agency?", a: "Yes. You get dedicated virtual assistants who work consistently with your clients and learn your processes." },
  { q: "What hours do they work?", a: "We offer flexible coverage including US, UK, and overlapping time zones based on your clients' needs." },
  { q: "How is quality maintained?", a: "Every VA is supervised by a team lead, follows your SOPs, and is backed by quality checks and reporting." },
  { q: "Is it white-labeled?", a: "Completely. VAs represent your agency in all client-facing communication under NDA." },
];

export default function Page() {
  return <WhiteLabelPage badge="White Label Virtual Assistant" title="White Label" highlight="Virtual Assistant Services"
    description="Scale your agency's operations with reliable, trained virtual assistants working under your brand."
    intro="Administrative overload slows down agency growth. Our white-label virtual assistants handle scheduling, data entry, inbox management, CRM updates, and customer support — all under your brand — freeing your core team to focus on strategy and client relationships."
    features={features} faqs={faqs} />;
}
