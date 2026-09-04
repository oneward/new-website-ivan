// Use-case catalog: the "Agents for every HR workflow" grid on the homepage
// (three featured cards) and the full library at /use-cases. The `users`,
// `legacy`, and `solution` text comes from the Oneward Agent Catalogue and
// is shown in the detail modal on the library page.
export interface UseCase {
  slug: string;
  icon: string;
  cat: string;
  title: string;
  body: string;
  roles: string[];
  users: string;
  legacy: string;
  solution: string;
  f?: boolean; // part of the always-on integrity foundation
}

export const useCases: UseCase[] = [
  {
    slug: 'requisition-to-scorecard-copilot',
    icon: 'clipboard-text', cat: 'TALENT ACQUISITION',
    title: 'Requisition-to-scorecard copilot',
    body: 'Runs the hiring workflow in conversation: drafts the job description, takes intake, answers pipeline questions, and collects scorecards on time.',
    roles: ['Managers', 'Talent acquisition'],
    users: 'Hiring managers, recruiters, TA operations.',
    legacy: 'Opening and running a role is a click-heavy trail across the applicant tracking system and the HRIS. Managers complete rigid intake forms, hunt for pipeline status in dashboards, and recruiters spend hours chasing interviewers by email for scorecards that are already overdue. The process is slow and the information is scattered across tools.',
    solution: 'A copilot that runs the hiring workflow through conversation, where managers already work. It drafts the job description from real organizational context, takes intake as a discussion instead of a form, answers pipeline questions on demand, and prompts interviewers to submit scorecards right after each interview. It gathers the structured data and carries out the underlying requisition steps in the system of record, so hiring moves forward without the manual chasing.',
  },
  {
    slug: 'offer-modelling-and-pay-equity-check',
    icon: 'scales', cat: 'TALENT ACQUISITION',
    title: 'Offer modelling and pay-equity check',
    body: 'Models each offer against live pay bands and real peer data, and flags internal-equity problems before the offer goes out.',
    roles: ['Talent acquisition', 'HR', 'Payroll & finance'],
    users: 'Compensation and benefits, recruiters, HR business partners.',
    legacy: 'Offers are put together in shared spreadsheets that get copied, forked, and drift out of date, with no live view of the internal pay bands or what comparable employees already earn. Equity problems, such as paying a new hire more than a stronger internal peer, are found later, if ever.',
    solution: 'The agent models an offer against current pay bands and real peer data, flags internal-equity problems before the offer is sent, and assembles the package. Recruiters and compensation teams get a consistent, defensible recommendation instead of a spreadsheet built by hand each time.',
  },
  {
    slug: 'employment-contract-assembly',
    icon: 'file-text', cat: 'TALENT ACQUISITION',
    title: 'Employment contract assembly',
    body: 'Builds each contract from verified offer data with the correct local law, pay structure, and negotiated terms, then routes it for signature.',
    roles: ['HR', 'Compliance & legal'],
    users: 'HR operations, legal.',
    legacy: 'Contracts are generated from rigid templates, often in an expensive third-party tool that cannot cover every local-law variation or negotiated clause. Anything non-standard pushes drafting offline into manual editing and repeated back-and-forth.',
    solution: 'The agent assembles each contract from verified candidate and offer data, applying the correct local employment law, variable pay structure, and negotiated terms, then routes it for signature. It replaces static templates with a document built correctly for the specific hire and jurisdiction.',
  },
  {
    slug: 'pre-boarding-and-day-one-orchestration',
    icon: 'user-plus', cat: 'ONBOARDING',
    title: 'Pre-boarding and day-one orchestration',
    body: 'Engages the new hire from signature, collects what is needed, and triggers IT provisioning, equipment, a buddy, and the first week.',
    roles: ['Employees', 'HR', 'IT', 'Managers'],
    users: 'New hires, HR operations, IT, managers.',
    legacy: 'The stretch between a signed offer and the first day is coordinated by hand over email: equipment, system access, a buddy, a first-week schedule. Steps fall through, and new hires arrive to missing access or an empty calendar.',
    solution: 'The agent engages the new hire as soon as the contract is signed, collects what is needed, and triggers the downstream work: IT provisioning, equipment, a buddy, and a scheduled first week. A scattered manual handover becomes a coordinated and tracked start.',
  },
  {
    slug: 'relocation-and-mobility-guidance',
    icon: 'airplane-tilt', cat: 'ONBOARDING',
    title: 'Relocation and mobility guidance',
    body: 'Gives each relocating person guidance specific to their move, tracks the checklist, and hands complex cases to mobility specialists.',
    roles: ['Employees', 'HR'],
    users: 'Relocating hires and employees, global mobility teams.',
    legacy: 'Relocation support is a generic PDF and a chain of emails, the same for everyone regardless of where they are moving from, where they are going, or their family situation.',
    solution: 'The agent gives each person guidance specific to their move, covering visa steps, housing, schooling, and tax, with checklists it tracks, and hands the complex cases to mobility specialists or vendors. A static document becomes a guided, personal process.',
  },
  {
    slug: 'performance-review-synthesis',
    icon: 'notepad', cat: 'DEVELOPMENT AND PERFORMANCE',
    title: 'Performance-review synthesis',
    body: 'Captures short manager notes through the year, then drafts a balanced, evidence-based review and flags non-inclusive language.',
    roles: ['Managers', 'Employees', 'HR'],
    users: 'Managers, employees, HR business partners.',
    legacy: 'Managers write reviews from memory at the last minute, which produces incomplete or biased assessments, and HR spends weeks chasing completion and screening drafts for problematic language.',
    solution: 'Through the year the agent captures short notes from managers about what their people achieved. At review time it pulls those notes, peer feedback, and goal data into a structured, balanced draft, and flags non-inclusive language before submission. Reviews become based on evidence gathered over time rather than on end-of-cycle recall.',
  },
  {
    slug: 'manager-coaching-assistant',
    icon: 'chats-circle', cat: 'DEVELOPMENT AND PERFORMANCE',
    title: 'Manager coaching assistant',
    body: 'Answers routine manager questions from your own policies and leadership guidance, and routes sensitive matters to a person.',
    roles: ['Managers', 'HR'],
    users: 'People managers, HR business partners.',
    legacy: 'HR business partners field the same repeated questions from managers over chat and answer them one at a time, which pulls them off higher-value work and gives managers slow, inconsistent answers.',
    solution: "A coaching assistant inside the tools managers already use, grounded in the company's own policies and leadership guidance. It answers routine questions and gives practical situational advice, and routes genuinely sensitive employee-relations matters to a human. It removes the repetitive load while keeping the hard cases with people.",
  },
  {
    slug: 'development-and-learning-recommendations',
    icon: 'graduation-cap', cat: 'DEVELOPMENT AND PERFORMANCE',
    title: 'Development and learning recommendations',
    body: "Recommends the specific courses that close each person's real skill gaps for their role, so training spend lands where it matters.",
    roles: ['Employees', 'Managers', 'HR'],
    users: 'Employees, managers, learning and development teams.',
    legacy: 'Learning systems leave employees to find their own training, so most take nothing, or take generic courses with no connection to their role or their gaps. Training budget is spent without knowing whether it closes anything.',
    solution: 'The agent recommends learning for each person based on their role, their current skills, and the skills the role actually requires, pointing to the specific courses that close real gaps. Development becomes relevant to the individual, and training spend is aimed at the skills the business needs.',
  },
  {
    slug: 'leave-and-absence-coordination',
    icon: 'calendar-check', cat: 'DEVELOPMENT AND PERFORMANCE',
    title: 'Leave and absence coordination',
    body: 'Guides employees through complex leave against policy and local law, writes the right dates to the record, and opens HR tasks.',
    roles: ['Employees', 'HR'],
    users: 'Employees, HR operations.',
    legacy: 'Complex local leave rules, such as parental leave splits, shared parental leave, and staggered returns, are mapped out by hand for each case, which is slow and easy to get wrong, and the downstream compliance and payroll steps are tracked manually.',
    solution: 'The agent guides an employee through planning complex leave against both company policy and local law, then writes the correct dates and categories into the system of record and opens the downstream tasks for HR. A manual, error-prone planning exercise becomes a guided one that lands correctly in the system.',
  },
  {
    slug: 'internal-mobility-recommendation',
    icon: 'arrows-left-right', cat: 'INTERNAL MOBILITY AND CHANGE',
    title: 'Internal mobility recommendation',
    body: 'Matches open roles to current employees by skills, history, and interests, and surfaces internal candidates before a search goes external.',
    roles: ['Employees', 'Managers', 'Talent acquisition'],
    users: 'Employees, managers, talent management, recruiters.',
    legacy: 'Open roles default to external hiring because internal candidates are hard to find. Qualified people are overlooked, and the company pays agency fees and runs long external searches for skills it already employs.',
    solution: 'The agent matches open internal roles to current employees using their skills, history, and stated interests, and surfaces qualified internal candidates before a search goes external. A person still decides; the agent makes the internal option visible. It lowers external-hire cost and improves retention by making real internal movement possible.',
  },
  {
    slug: 'quality-of-hire-intelligence',
    icon: 'chart-line-up', cat: 'TALENT ACQUISITION',
    title: 'Quality-of-hire intelligence',
    body: 'Connects ATS, HRIS, and performance data to show which recruiters, sources, and interview stages produce hires who perform and stay.',
    roles: ['Talent acquisition', 'HR'],
    users: 'Heads of talent acquisition, recruiting managers, TA operations.',
    legacy: 'Recruiters are judged on the metrics the applicant tracking system reports: time to fill and the number of roles closed. Whether the people they hired went on to perform well, get promoted, or leave within a year is never connected back to who hired them or how. Quality of hire, when it is measured at all, is a short survey sent to the hiring manager a few months in, with no link to real performance data. So the recruiters, sources, and interview approaches that produce the best long-term hires stay invisible, and the same hiring habits repeat on instinct.',
    solution: 'The agent connects three systems that today do not talk to each other: the applicant tracking system, the HRIS, and the performance management system. It follows each hire forward and finds what actually correlates with a strong, retained performer: which recruiters, which sources, which interview stages, which job descriptions. It then gives talent acquisition leaders specific recommendations their teams can act on: coach a recruiter whose hires consistently underperform, put more into a channel that produces top performers, drop an interview stage that predicts nothing. It turns recruiting from a speed and volume function into an outcomes function.',
  },
  {
    slug: 'change-execution',
    icon: 'shuffle', cat: 'INTERNAL MOBILITY AND CHANGE',
    title: 'Change execution: job, position, reorganization',
    body: 'Collects and validates change data in conversation, generates paperwork, and pushes clean changes through the system of record.',
    roles: ['HR'],
    users: 'HR business partners, HR operations.',
    legacy: 'Promotions, transfers, position changes, and reorganizations are click-heavy and error-prone: collecting scattered data, generating addendums, and pushing multi-step changes through the system of record. During reorganizations, mass-upload files fail on broken reporting lines and invalid cost centers.',
    solution: 'The agent collects and validates the data for a change through conversation, generates the paperwork, and executes the underlying process in the system of record. For a reorganization it checks the proposed structure against current data, flags broken reporting lines and invalid cost centers, and produces clean upload files. It removes the manual rework and the errors that come from getting these changes wrong the first time.',
  },
  {
    slug: 'offboarding-orchestration',
    icon: 'sign-out', cat: 'OFFBOARDING',
    title: 'Offboarding orchestration',
    body: 'Runs the whole exit from the termination event, with a personalized checklist routed to IT, payroll, and HR, so no access or pay is left behind.',
    roles: ['HR', 'Managers', 'IT', 'Payroll & finance'],
    users: 'HR operations, managers, IT, payroll.',
    legacy: "Offboarding is spread across manual handovers with no complete checklist, and the system's exit form misses company-specific steps. Access and assets get left behind, which is both a security and a cost problem.",
    solution: 'The agent runs the whole exit from the termination event. It captures the specifics the standard form misses, generates and tracks a personalized checklist across knowledge transfer, equipment, and access, and routes the sub-tasks to IT, payroll, and HR. It closes the gaps where a leaver keeps system access or continues to be paid.',
  },
  {
    slug: 'reference-and-verification-letters',
    icon: 'seal-check', cat: 'OFFBOARDING',
    title: 'Reference and verification letters',
    body: 'Drafts reference letters in the correct legal format and generates verification letters on demand from verified employment data.',
    roles: ['HR', 'Employees'],
    users: 'HR operations, departing and current employees.',
    legacy: "Reference letters, including formal legal formats such as the German Zeugnis, are drafted by hand from managers' informal feedback, which then has to be reworked into a compliant form. Employment-verification letters for visas, loans, and rentals arrive as repeated ad-hoc requests, each needing the right local phrasing.",
    solution: 'The agent draws the needed input from managers through targeted questions, drafts reference letters in the correct legal format, and generates verification letters on demand from verified employment data with the correct local wording. A slow, manual document bottleneck becomes a quick, reviewed one.',
  },
  {
    slug: 'tier-0-knowledge-and-service-assistant',
    icon: 'chat-circle', cat: 'EMPLOYEE SERVICES',
    title: 'Tier-0 knowledge and service assistant',
    body: 'Answers common questions from your own knowledge and policies, and opens a structured ticket with context when it cannot resolve one.',
    roles: ['Employees', 'HR'],
    users: 'All employees, HR operations.',
    legacy: "Intranet search is often poor, as companies limit what's available in the HR knowledge base. Because of that, employees skip self-service and open tickets for routine, already-documented questions, and the operations team spends hours triaging and answering the same things instead of handling the genuinely complex cases.",
    solution: "A first-line assistant that answers common questions from the company's own knowledge and policies, and when it cannot resolve something, collects the context and opens a structured ticket. It deflects the routine load and frees the operations team for the work that needs a person.",
  },
  {
    slug: 'master-data-and-lifecycle-integrity',
    icon: 'database', cat: 'INTEGRITY FOUNDATION',
    title: 'Master-data and lifecycle integrity',
    body: 'Continuously checks worker records, org structure, system feeds, and whether every lifecycle event finished everywhere it should.',
    roles: ['HR', 'IT'], f: true,
    users: 'HR systems and operations teams, and every agent above.',
    legacy: 'Core worker data drifts over time, the feeds between systems break quietly, and lifecycle events (hire, transfer, leave, exit) half-complete, so pay, access, and reporting break downstream. Teams usually find out after the damage is done, by running manual reports.',
    solution: 'An always-on layer that continuously checks the worker record, the organizational structure, the feeds between systems, and whether each lifecycle event finished everywhere it should. It flags problems such as a leaver who is still being paid or still holds access. This is the layer that keeps the data every other agent depends on correct, which is what lets those agents act safely.',
  },
  {
    slug: 'payroll-integrity',
    icon: 'currency-circle-dollar', cat: 'INTEGRITY FOUNDATION',
    title: 'Payroll integrity',
    body: 'Recomputes and checks each pay run before release: unreconciled net pay, outliers, missing contributions, duplicates, silent config changes.',
    roles: ['Payroll & finance'], f: true,
    users: 'Payroll teams, finance.',
    legacy: 'Payroll errors, a wrong configuration, a change that was missed, a duplicate or misdirected payment, are caught after the money has already moved, if they are caught at all, and then corrected by hand at real cost and effort.',
    solution: "Before each pay run is released, the agent recomputes and checks it: net pay that does not reconcile, amounts far outside a person's own history, missing taxes and contributions, duplicate or misdirected payments, and configuration that quietly changed between cycles. It surfaces the problems while they are still cheap to fix, and never touches pay itself.",
  },
  {
    slug: 'payroll-to-ledger-reconciliation',
    icon: 'calculator', cat: 'INTEGRITY FOUNDATION',
    title: 'Payroll-to-ledger reconciliation',
    body: 'Reconciles payroll to the ledger every close, validates cost-center coding and accruals, and checks headcount and spend against plan.',
    roles: ['Payroll & finance'], f: true,
    users: 'Finance, FP&A.',
    legacy: 'Tying labour cost back to the general ledger, by entity and account, is a manual month-end exercise, and the reported labour-cost figure is hard to stand behind.',
    solution: 'The agent reconciles payroll to the ledger every close, flags the breaks, validates cost-center coding and accruals, and reconciles headcount and compensation spend against plan. The close gets faster and the labour-cost number becomes defensible.',
  },
  {
    slug: 'pay-and-tax-compliance',
    icon: 'receipt', cat: 'INTEGRITY FOUNDATION',
    title: 'Pay and tax compliance',
    body: "Checks each person's tax setup against where they work and live, validates statutory contributions, and flags exposure early.",
    roles: ['Payroll & finance', 'Compliance & legal'], f: true,
    users: 'Payroll, compliance.',
    legacy: 'Multi-jurisdiction tax setup, statutory contributions, and pay rules are maintained by hand against rules that keep changing, and mistakes surface as penalties and back-payments.',
    solution: "The agent checks each person's tax setup against where they work and live, validates statutory contributions against current rates, and flags exposure before it turns into a penalty.",
  },
  {
    slug: 'wage-hour-and-pay-transparency-compliance',
    icon: 'gavel', cat: 'INTEGRITY FOUNDATION',
    title: 'Wage-hour and pay-transparency compliance',
    body: 'Checks time and pay against wage-and-hour rules, and postings and offers against pay-transparency law by location.',
    roles: ['Compliance & legal', 'HR'], f: true,
    users: 'Compliance, HR, legal.',
    legacy: 'Wage-and-hour rules and the fast-expanding pay-transparency laws are tracked by hand across jurisdictions, and violations, which drive expensive class actions and per-posting fines, are found late.',
    solution: 'The agent checks time and pay against the applicable wage-and-hour rules, and checks job postings and offers against pay-transparency rules by location, flagging violations before they become claims. A manual, high-stakes compliance burden becomes a continuous check.',
  },
  {
    slug: 'controls-and-fraud-detection',
    icon: 'detective', cat: 'INTEGRITY FOUNDATION',
    title: 'Controls and fraud detection',
    body: 'Finds self-approvals, segregation-of-duties conflicts, and ghost employees that only a cross-system view can see, with evidence attached.',
    roles: ['Compliance & legal', 'Payroll & finance'], f: true,
    users: 'Compliance, internal audit, payroll.',
    legacy: 'Basic controls, no self-approval and separation of duties, are often quietly broken, and payroll fraud such as ghost employees hides in the gaps between disconnected systems where no single tool can see it.',
    solution: 'The agent finds approvers who signed off their own changes, segregation-of-duties conflicts in HR data, and records being paid with no badge, login, or real manager behind them. It surfaces the control gaps and fraud that only a cross-system view catches, and presents them as review items with the supporting evidence.',
  },
  {
    slug: 'audit-readiness-and-recordkeeping',
    icon: 'archive', cat: 'INTEGRITY FOUNDATION',
    title: 'Audit readiness and recordkeeping',
    body: 'Assembles the control trail as it happens, checks records against retention rules in both directions, and preserves legal holds.',
    roles: ['Compliance & legal', 'HR'], f: true,
    users: 'Compliance, legal, HR operations.',
    legacy: 'Audits are a weeks-long scramble to pull together evidence, and record retention, keeping records long enough and deleting them when privacy law requires, is handled manually.',
    solution: 'The agent assembles the control trail as it happens, so an audit becomes a query rather than a fire drill, checks records against retention rules in both directions, and preserves records under legal hold. Audit and retention move from periodic panic to a standing state.',
  },
  {
    slug: 'm-and-a-workforce-integration',
    icon: 'git-merge', cat: 'INTEGRITY FOUNDATION',
    title: 'M&A workforce integration',
    body: 'Reconciles service across entities, surfaces pay-equity exposure, and gives a live day-one readiness view ahead of go-live.',
    roles: ['HR', 'Payroll & finance'], f: true,
    users: 'CHRO, M&A integration teams, finance.',
    legacy: 'In a merger or acquisition, matching people, structures, and service across two systems that were never aligned is slow and manual, and pay-equity exposure and hidden liabilities surface after the deal has closed.',
    solution: 'The agent reconciles service across entities, surfaces pay-equity exposure for review, and gives a live day-one readiness view of what is and is not reconciled ahead of go-live. It reduces the risk in the moment integration problems would otherwise become public.',
  },
];

// The three cards shown on the homepage teaser.
export const featuredSlugs = [
  'pre-boarding-and-day-one-orchestration',
  'leave-and-absence-coordination',
  'payroll-integrity',
];

export const roleOrder = ['All', 'Employees', 'Managers', 'HR', 'Talent acquisition', 'IT', 'Payroll & finance', 'Compliance & legal'];

export const catShort: Record<string, string> = {
  'TALENT ACQUISITION': 'TALENT ACQUISITION',
  'ONBOARDING': 'ONBOARDING',
  'DEVELOPMENT AND PERFORMANCE': 'DEVELOPMENT',
  'INTERNAL MOBILITY AND CHANGE': 'MOBILITY & CHANGE',
  'OFFBOARDING': 'OFFBOARDING',
  'EMPLOYEE SERVICES': 'EMPLOYEE SERVICES',
  'INTEGRITY FOUNDATION': 'INTEGRITY FOUNDATION',
};

export const categories = [
  'Talent acquisition', 'Onboarding', 'Development', 'Mobility & change', 'Offboarding', 'Employee services', 'Integrity foundation',
];

export const rolesText = (roles: string[]) =>
  'For ' +
  roles
    .join(', ')
    .toLowerCase()
    .replace(/^hr\b/, 'HR')
    .replace(/, hr\b/g, ', HR')
    .replace(/\bit\b/g, 'IT');
