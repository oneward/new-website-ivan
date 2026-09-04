// Conversations for the channel demo (Slack, Teams, WhatsApp, portal widget).
// `at` is the animation step (0–10, one step every 1.4s) at which a message
// appears; `approvedAt` is when an approval card flips to its done state.
export interface ChatMessage {
  kind: 'user' | 'agent' | 'card';
  text?: string;
  cite?: string;
  at: number;
  time?: string;
  approvedAt?: number;
  cardLabel?: string;
  cardTitle?: string;
  cardSub?: string;
  primary?: string;
  secondary?: string;
  pendingLabel?: string;
  doneLabel?: string;
}

export const convos: ChatMessage[][] = [
  [
    { kind: 'user', text: 'How many vacation days do I have left this year?', at: 1, time: '9:41' },
    { kind: 'agent', text: 'You have 12 days left. Your team has a blackout week Dec 15 to 19.', cite: 'Leave policy · section 3.2', at: 2, time: '9:41' },
    { kind: 'user', text: 'Great, book Oct 6 to 10 please.', at: 3, time: '9:42' },
    { kind: 'card', at: 4, approvedAt: 7, cardLabel: 'TO MARIA · MANAGER', cardTitle: 'Leave request · Jonas K.', cardSub: 'Oct 6 to Oct 10 · 5 days', primary: 'Approve', secondary: 'Decline', pendingLabel: 'Awaiting approval', doneLabel: 'Approved' },
    { kind: 'agent', text: 'Maria approved it. Your HRIS and the team calendar are updated.', at: 8, time: '11:05' },
  ],
  [
    { kind: 'agent', text: 'Morning Maria. One transfer on your team needs a decision.', at: 1, time: '8:30' },
    { kind: 'card', at: 2, approvedAt: 4, cardLabel: 'TRANSFER · YOUR DECISION', cardTitle: 'Priya S. → Product Ops, Berlin', cardSub: 'Start Nov 1 · same grade', primary: 'Approve', secondary: 'Ask a question', pendingLabel: 'Awaiting you', doneLabel: 'Approved' },
    { kind: 'user', text: 'Approved. Headcount for my team by location?', at: 5, time: '8:34' },
    { kind: 'agent', text: 'Routed to HR and IT. Berlin 14, Munich 9, remote 6.', cite: 'Workday · live', at: 6, time: '8:34' },
    { kind: 'user', text: 'Perfect, thanks.', at: 8, time: '8:35' },
  ],
  [
    { kind: 'user', text: 'Hi, I moved and need to change my bank account.', at: 1, time: '18:02' },
    { kind: 'agent', text: 'Happy to help. I just sent a code to your work email to verify it is you.', at: 2, time: '18:02' },
    { kind: 'user', text: '482913', at: 3, time: '18:04' },
    { kind: 'card', at: 4, approvedAt: 6, cardLabel: 'PERSONAL DATA · SECURE FORM', cardTitle: 'Update bank account', cardSub: 'Encrypted · payroll from next run', primary: 'Open secure form', secondary: 'Later', pendingLabel: 'Waiting for you', doneLabel: 'Submitted' },
    { kind: 'agent', text: 'Got it. IBAN updated, payroll uses the new account from November.', cite: 'Change log · #48213', at: 7, time: '18:09' },
  ],
  [
    { kind: 'user', text: 'I start Monday. What do I need to do before then?', at: 1, time: '14:12' },
    { kind: 'agent', text: 'Welcome, Tom. Two things left: sign your tax form and pick a laptop. Everything else is done.', cite: 'Onboarding plan · day 0', at: 2, time: '14:12' },
    { kind: 'user', text: 'MacBook please. Where is the tax form?', at: 3, time: '14:13' },
    { kind: 'card', at: 4, approvedAt: 6, cardLabel: 'ONBOARDING · 2 OF 9 OPEN', cardTitle: 'Sign tax form', cardSub: 'Pre-filled from your HRIS record', primary: 'Review and sign', secondary: 'Later', pendingLabel: 'Waiting for you', doneLabel: 'Signed' },
    { kind: 'agent', text: 'Signed and filed. MacBook ordered, IT will have it at your desk on Monday.', at: 7, time: '14:16' },
  ],
];
