export type Project = {
  slug: string;
  title: string;
  category: "AI Agent" | "Automation" | "Web";
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  links?: { label: string; href: string }[];
  team?: boolean; // collaborative / team build, not solo authorship
  image?: string; // path under /public/projects
};

export const projects: Project[] = [
  {
    slug: "flowmind",
    title: "FlowMind — Multi-Agent Lead Platform",
    category: "AI Agent",
    problem:
      "Small teams describe their work in plain language but have no fast way to turn that into an assistant that actually runs it.",
    approach:
      "Built a Next.js platform where a user describes a workflow and gets a configured AI agent (powered by Claude) that manages leads end-to-end — agent configuration, lead capture, and persistent storage via Prisma.",
    result:
      "A working agent-creation platform: describe the job, get an assistant that tracks leads and executes the workflow, with a mock mode for demoing without live API keys.",
    stack: ["Next.js", "TypeScript", "Claude API", "Prisma", "Tailwind CSS"],
    links: [{ label: "Local build", href: "#" }],
  },
  {
    slug: "myagent",
    title: "Personal AI Assistant",
    category: "AI Agent",
    problem:
      "Switching between calendar, notes, and chat apps to get simple things done wastes time and breaks focus.",
    approach:
      "Built a custom-coded assistant with four modes (Writing, Creative, Conversation, Personal). In Personal mode it uses LLM function calling to take real actions — not just generate text.",
    result:
      "Creates and checks Google Calendar events, creates and lists Notion tasks, supports per-user accounts via Clerk, and keeps a searchable conversation history with light/dark modes.",
    stack: ["Next.js", "TypeScript", "React", "Clerk", "Google Calendar API", "Notion API", "GLM-4.5-Flash"],
    links: [{ label: "GitHub", href: "https://github.com/Alishwa-18/Agent-Chatbot" }],
  },
  {
    slug: "switchboard",
    title: "Switchboard — Multi-Agent Support Router",
    category: "AI Agent",
    problem:
      "A single support agent trying to do everything (scheduling, documents, general support) gets slow, expensive, and hard to reason about.",
    approach:
      "Built an orchestrator that reads the incoming request and routes it to a specialized agent — scheduling, document handling, or general support — keeping the router itself deliberately 'dumb' so it stays fast. Added a voice channel via Twilio and a retrieval layer (RAG) for grounded answers.",
    result:
      "A FastAPI backend where each specialist agent owns one job, the router owns none of the business logic, and voice calls are handled through the same orchestration path as chat.",
    stack: ["FastAPI", "Python", "Claude API", "Twilio", "RAG"],
  },
  {
    slug: "riskpilot",
    title: "RiskPilot — Insurance Claims Triage Agent",
    category: "AI Agent",
    problem:
      "Claims triage decisions need to be explainable and consistent, not left entirely to an LLM's judgment call.",
    approach:
      "Split the system so the LLM decides *when* to call a tool, but the scoring and routing logic itself is deterministic Python — rule-based scoring and DB lookups — not model output.",
    result:
      "A claims agent whose risk decisions are auditable: every score can be traced to explicit rules instead of an opaque model response.",
    stack: ["FastAPI", "Python", "Claude API", "Pydantic"],
  },
  {
    slug: "evoke-london",
    title: "Evoke London — Voice-Enabled Contact Form",
    category: "Web",
    problem:
      "Long enquiry forms have high drop-off — especially on mobile — for a construction/design company's leads.",
    approach:
      "Built a responsive multi-page site where a visitor can speak their enquiry instead of typing it. The Web Speech API transcribes the audio, extracts name, company, email, phone, and project type, and auto-fills the matching fields for review before submit.",
    result:
      "A voice-to-form flow (Chrome/Edge) alongside project filtering, testimonials, scroll animations, and an embedded location map — cutting the friction of a long enquiry form.",
    stack: ["HTML", "CSS", "JavaScript", "Web Speech API"],
    links: [{ label: "GitHub", href: "https://github.com/Alishwa-18/Agent-Chatbot" }],
  },
  {
    slug: "sous-experiences",
    title: "SOUS Experiences — Booking & Payment Automation",
    category: "Automation",
    problem:
      "A hospitality client needed bookings, deposits, and staged payments to flow automatically from intake to confirmation without manual follow-up.",
    approach:
      "Built a Make.com scenario chain: form intake writes to Notion, a router splits by payment stage, and Stripe creates/updates invoices and finalizes drafts across first/full-payment paths, with WhatsApp Business Cloud sending templated confirmations at each step.",
    result:
      "Leads move from form submission to a confirmed, paid booking with WhatsApp confirmations at every stage — no manual invoice creation.",
    stack: ["Make.com", "Notion API", "Stripe API", "WhatsApp Business Cloud"],
  },
  {
    slug: "ai-telegram-task-bot",
    title: "AI Telegram Task Bot",
    category: "Automation",
    problem:
      "Remote teams switch apps constantly just to log a task — creating friction that means tasks don't get logged at all.",
    approach:
      "Built an AI-powered Telegram bot in n8n that accepts text or voice messages, asks smart follow-up questions for any missing detail (due date, priority, assignee), and creates the task directly in a connected project management system with instant confirmation.",
    result:
      "80% reduction in manual task-entry time and near-zero missed follow-ups for the client's remote team.",
    stack: ["n8n", "Telegram API", "OpenAI", "Notion API"],
  },
  {
    slug: "automation-projects-suite",
    title: "Master Agent & Business Automation Suite",
    category: "Automation",
    problem:
      "Meetings, reminders, invoices, and CRM updates were each being handled by separate, manual, one-off processes.",
    approach:
      "Built a library of connected n8n/Make workflows anchored by a Master Agent that routes each incoming request to the right specialized workflow — meeting management (create, reschedule, cancel, remind), invoice processing (Gmail → extract → Sheets/Airtable → notify), and a CRM/WooCommerce automation that classifies requests and updates Zoho CRM, Zoho Books, and WooCommerce.",
    result:
      "A reusable automation suite covering meetings, reminders, invoicing, and CRM sync — each workflow independently testable and triggerable through the Master Agent.",
    stack: ["n8n", "Make.com", "OpenAI", "HubSpot", "Zoho CRM", "WooCommerce", "Google Workspace", "Airtable"],
    links: [{ label: "GitHub", href: "https://github.com/Alishwa-18/Automation-Projects" }],
  },
];

export const teamProjects: Project[] = [
  {
    slug: "ghl-real-estate",
    title: "Real Estate Lead-to-Appointment Automation",
    category: "Automation",
    problem:
      "Manual lead handling after a booked consultation created slow response times and inconsistent CRM records.",
    approach:
      "Contributed to a GoHighLevel workflow that turns a booked property consultation into a structured sales opportunity: create/update the opportunity, assign the lead owner, notify internally, and tag the contact for follow-up.",
    result:
      "Every step — opportunity creation, lead assignment, notification, and tagging — verified end-to-end against a test CRM contact.",
    stack: ["GoHighLevel", "CRM Automation"],
    team: true,
  },
  {
    slug: "zapier-lead-management",
    title: "Lead Management Automation (Zapier)",
    category: "Automation",
    problem:
      "Lead follow-up, onboarding, and retention emails were being sent manually as leads moved through Asana.",
    approach:
      "Contributed to five connected Zapier workflows spanning Asana, Google Drive, and Gmail — folder/subtask creation, unresponsive-lead follow-up, quote reminders, welcome emails, and post-close service recommendations.",
    result:
      "Faster response times and consistent lead nurturing across the full lifecycle, from 'Ready to Start' through 'Paid & Closed.'",
    stack: ["Zapier", "Asana", "Google Drive", "Gmail"],
    team: true,
  },
  {
    slug: "zapier-crm-suite",
    title: "Zapier CRM Automation (Zoom, Zendesk, Asana)",
    category: "Automation",
    problem:
      "Meeting notes, support tickets, and tasks lived in three disconnected tools.",
    approach:
      "Contributed to Zapier automations connecting Zoom transcripts to Asana tasks, Zendesk tickets to Slack updates, and deal notes to drafted emails.",
    result:
      "Meeting and support activity automatically became tracked tasks and notifications instead of manual copy-paste.",
    stack: ["Zapier", "Zoom", "Zendesk", "Asana", "Slack"],
    team: true,
  },
  {
    slug: "workflows-suite",
    title: "n8n / Make / Zapier Workflow Collection",
    category: "Automation",
    problem:
      "A range of small business processes (form intake, task creation, service mapping) needed no-code automation across three different platforms.",
    approach:
      "Contributed workflows across n8n, Make, and Zapier — including a Fillout Forms → Notion → WhatsApp/Gmail intake flow and Make.com service-mapping uploads.",
    result:
      "Cross-platform automation experience — comparing how the same intake-to-notification pattern is built in n8n, Make, and Zapier.",
    stack: ["n8n", "Make.com", "Zapier", "Notion API", "WhatsApp Business Cloud"],
    team: true,
  },
];
