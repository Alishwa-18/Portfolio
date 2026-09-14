export type Project = {
  slug: string;
  title: string;
  category: "Agents & Chatbots" | "Automation" | "Web";
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
    slug: "switchboard",
    title: "Switchboard — Multi-Agent Support Router",
    category: "Agents & Chatbots",
    problem:
      "One agent trying to handle billing, scheduling, and general support at once gets bloated, slow, and impossible to debug when it gives a wrong answer.",
    approach:
      "Built a FastAPI backend where an orchestrator classifies the incoming message's intent and hands off to a specialist — no business logic lives in the router itself. The Support agent can look up a customer, open a ticket, or call escalate_to_human for anything urgent (account down, angry customer, billing dispute over $500). The Scheduling agent checks availability, books, and lists appointments, and hands back to the router with a handoff tool call if the topic shifts to billing. Added a voice channel through Twilio and a RAG layer so answers stay grounded, plus a deterministic mock mode so every agent path is testable without live API calls.",
    result:
      "A support system where each specialist owns exactly one job and the routing decision is auditable — you can trace which agent handled a request and why, instead of debugging one giant prompt.",
    stack: ["FastAPI", "Python", "Claude API", "Twilio", "RAG"],
  },
  {
    slug: "riskpilot",
    title: "RiskPilot — Insurance Claims Triage Agent",
    category: "Agents & Chatbots",
    problem:
      "Claims triage needs a decision that's explainable to an auditor — 'the model said so' isn't good enough when the outcome is which queue a $30k claim lands in.",
    approach:
      "Built a claims agent where the LLM decides when to call a tool, but the actual risk decision is deterministic Python, not a model guess: assess_risk_score runs a weighted rule engine (claim amount vs. a $25k high-value threshold, claim velocity — 2+ claims in 30 days, inactive policy status, and a fraud-keyword scan for phrases like 'cash only' or 'no police report'), producing a 0–1 score and a low/elevated/severe band. route_claim then assigns the claim to auto-approval, adjuster, or senior-adjuster queues with an SLA (72h / 24h / 4h) based on that band.",
    result:
      "Every triage decision traces back to an explicit, listed reason — 'claim amount exceeds high-value threshold', 'one prior claim in the last 30 days' — instead of an opaque model judgment call.",
    stack: ["FastAPI", "Python", "Claude API", "Pydantic"],
  },
  {
    slug: "flowmind",
    title: "FlowMind — Multi-Agent Lead Platform",
    category: "Agents & Chatbots",
    problem:
      "Small teams can describe the assistant they want in plain language, but turning that description into a working, tool-using agent normally means writing an app from scratch.",
    approach:
      "Built a Next.js/Prisma platform where a user's role/goal/instructions become an agent's system prompt at runtime. The agent loop asks the model what to do, and if it calls a tool, runs it and feeds the result back — capped at 6 steps so a confused agent can't loop forever. Every step (assistant reply or tool call + result) is persisted as its own message row, so a conversation view can replay the full trace, including which tools ran and what they returned. Ships with a mock mode that gives canned tool-call responses when no Anthropic key is set, so the whole loop is demoable without live credentials.",
    result:
      "Describe the job in a sentence, get a running agent that tracks leads end-to-end — and every decision the agent made is inspectable after the fact, not just the final answer.",
    stack: ["Next.js", "TypeScript", "Claude API", "Prisma", "Tailwind CSS"],
    links: [{ label: "Local build", href: "#" }],
  },
  {
    slug: "myagent",
    title: "Personal AI Assistant",
    category: "Agents & Chatbots",
    problem:
      "Switching between calendar, notes, and chat apps to get simple things done wastes time and breaks focus.",
    approach:
      "Built a custom-coded Next.js assistant with four selectable modes — Writing, Creative, Conversation, and Personal — running on GLM-4.5-Flash. In Personal mode, function calling lets it take real actions instead of only generating text: creating and checking Google Calendar events, creating and listing Notion tasks. Auth and per-user accounts run through Clerk, and conversations persist client-side with a searchable history and light/dark theming.",
    result:
      "An assistant that actually does the thing instead of describing how you'd do it — checks your calendar, files a Notion task, and remembers the conversation next time you open it.",
    stack: ["Next.js", "TypeScript", "React", "Clerk", "Google Calendar API", "Notion API", "GLM-4.5-Flash"],
    links: [{ label: "GitHub", href: "https://github.com/Alishwa-18/Agent-Chatbot" }],
  },
  {
    slug: "ai-telegram-task-bot",
    title: "AI Telegram Task Bot",
    category: "Agents & Chatbots",
    problem:
      "Remote teams switch apps constantly just to log a task — enough friction that the task often doesn't get logged at all.",
    approach:
      "Built an AI-powered Telegram bot in n8n that accepts text or voice messages, transcribes voice input, and asks smart follow-up questions for whatever detail is missing (due date, priority, assignee) before creating the task directly in the connected project management system, with an instant confirmation sent back.",
    result:
      "80% reduction in manual task-entry time and near-zero missed follow-ups for the client's remote team.",
    stack: ["n8n", "Telegram API", "OpenAI", "Notion API"],
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
      "Built a Make.com scenario chain: form intake writes to Notion, a router splits by payment stage, and Stripe creates/updates invoices and finalizes drafts across first-payment and full-payment paths, with WhatsApp Business Cloud sending templated confirmations at each step.",
    result:
      "Leads move from form submission to a confirmed, paid booking with WhatsApp confirmations at every stage — no manual invoice creation.",
    stack: ["Make.com", "Notion API", "Stripe API", "WhatsApp Business Cloud"],
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

export const categories = ["All", "Agents & Chatbots", "Automation", "Web"] as const;
