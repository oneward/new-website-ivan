// Use-case catalog for the "Agents for every HR workflow" grid.
export interface UseCase {
  icon: string;
  cat: string;
  title: string;
  body: string;
  roles: string[];
  f?: boolean; // part of the always-on integrity foundation
}

export const useCases: UseCase[] = [
  { icon: 'clipboard-text', cat: 'TALENT ACQUISITION', title: 'Requisition-to-scorecard copilot', body: 'Runs the hiring workflow in conversation: drafts the job description, takes intake, answers pipeline questions, and collects scorecards on time.', roles: ['Managers', 'Talent acquisition'] },
  { icon: 'scales', cat: 'TALENT ACQUISITION', title: 'Offer modelling and pay-equity check', body: 'Models each offer against live pay bands and real peer data, and flags internal-equity problems before the offer goes out.', roles: ['Talent acquisition', 'HR', 'Payroll & finance'] },
  { icon: 'file-text', cat: 'TALENT ACQUISITION', title: 'Employment contract assembly', body: 'Builds each contract from verified offer data with the correct local law, pay structure, and negotiated terms, then routes it for signature.', roles: ['HR', 'Compliance & legal'] },
  { icon: 'user-plus', cat: 'ONBOARDING', title: 'Pre-boarding and day-one orchestration', body: 'Engages the new hire from signature, collects what is needed, and triggers IT provisioning, equipment, a buddy, and the first week.', roles: ['Employees', 'HR', 'IT', 'Managers'] },
  { icon: 'airplane-tilt', cat: 'ONBOARDING', title: 'Relocation and mobility guidance', body: 'Gives each relocating person guidance specific to their move, tracks the checklist, and hands complex cases to mobility specialists.', roles: ['Employees', 'HR'] },
  { icon: 'notepad', cat: 'DEVELOPMENT AND PERFORMANCE', title: 'Performance-review synthesis', body: 'Captures short manager notes through the year, then drafts a balanced, evidence-based review and flags non-inclusive language.', roles: ['Managers', 'Employees', 'HR'] },
  { icon: 'chats-circle', cat: 'DEVELOPMENT AND PERFORMANCE', title: 'Manager coaching assistant', body: 'Answers routine manager questions from your own policies and leadership guidance, and routes sensitive matters to a person.', roles: ['Managers', 'HR'] },
  { icon: 'graduation-cap', cat: 'DEVELOPMENT AND PERFORMANCE', title: 'Development and learning recommendations', body: "Recommends the specific courses that close each person's real skill gaps for their role, so training spend lands where it matters.", roles: ['Employees', 'Managers', 'HR'] },
  { icon: 'calendar-check', cat: 'DEVELOPMENT AND PERFORMANCE', title: 'Leave and absence coordination', body: 'Guides employees through complex leave against policy and local law, writes the right dates to the record, and opens HR tasks.', roles: ['Employees', 'HR'] },
  { icon: 'arrows-left-right', cat: 'INTERNAL MOBILITY AND CHANGE', title: 'Internal mobility recommendation', body: 'Matches open roles to current employees by skills, history, and interests, and surfaces internal candidates before a search goes external.', roles: ['Employees', 'Managers', 'Talent acquisition'] },
  { icon: 'chart-line-up', cat: 'TALENT ACQUISITION', title: 'Quality-of-hire intelligence', body: 'Connects ATS, HRIS, and performance data to show which recruiters, sources, and interview stages produce hires who perform and stay.', roles: ['Talent acquisition', 'HR'] },
  { icon: 'shuffle', cat: 'INTERNAL MOBILITY AND CHANGE', title: 'Change execution: job, position, reorganization', body: 'Collects and validates change data in conversation, generates paperwork, and pushes clean changes through the system of record.', roles: ['HR'] },
  { icon: 'sign-out', cat: 'OFFBOARDING', title: 'Offboarding orchestration', body: 'Runs the whole exit from the termination event, with a personalized checklist routed to IT, payroll, and HR, so no access or pay is left behind.', roles: ['HR', 'Managers', 'IT', 'Payroll & finance'] },
  { icon: 'seal-check', cat: 'OFFBOARDING', title: 'Reference and verification letters', body: 'Drafts reference letters in the correct legal format and generates verification letters on demand from verified employment data.', roles: ['HR', 'Employees'] },
  { icon: 'chat-circle', cat: 'EMPLOYEE SERVICES', title: 'Tier-0 knowledge and service assistant', body: 'Answers common questions from your own knowledge and policies, and opens a structured ticket with context when it cannot resolve one.', roles: ['Employees', 'HR'] },
  { icon: 'database', cat: 'INTEGRITY FOUNDATION', title: 'Master-data and lifecycle integrity', body: 'Continuously checks worker records, org structure, system feeds, and whether every lifecycle event finished everywhere it should.', roles: ['HR', 'IT'], f: true },
  { icon: 'currency-circle-dollar', cat: 'INTEGRITY FOUNDATION', title: 'Payroll integrity', body: 'Recomputes and checks each pay run before release: unreconciled net pay, outliers, missing contributions, duplicates, silent config changes.', roles: ['Payroll & finance'], f: true },
  { icon: 'calculator', cat: 'INTEGRITY FOUNDATION', title: 'Payroll-to-ledger reconciliation', body: 'Reconciles payroll to the ledger every close, validates cost-center coding and accruals, and checks headcount and spend against plan.', roles: ['Payroll & finance'], f: true },
  { icon: 'receipt', cat: 'INTEGRITY FOUNDATION', title: 'Pay and tax compliance', body: "Checks each person's tax setup against where they work and live, validates statutory contributions, and flags exposure early.", roles: ['Payroll & finance', 'Compliance & legal'], f: true },
  { icon: 'gavel', cat: 'INTEGRITY FOUNDATION', title: 'Wage-hour and pay-transparency compliance', body: 'Checks time and pay against wage-and-hour rules, and postings and offers against pay-transparency law by location.', roles: ['Compliance & legal', 'HR'], f: true },
  { icon: 'detective', cat: 'INTEGRITY FOUNDATION', title: 'Controls and fraud detection', body: 'Finds self-approvals, segregation-of-duties conflicts, and ghost employees that only a cross-system view can see, with evidence attached.', roles: ['Compliance & legal', 'Payroll & finance'], f: true },
  { icon: 'archive', cat: 'INTEGRITY FOUNDATION', title: 'Audit readiness and recordkeeping', body: 'Assembles the control trail as it happens, checks records against retention rules in both directions, and preserves legal holds.', roles: ['Compliance & legal', 'HR'], f: true },
  { icon: 'git-merge', cat: 'INTEGRITY FOUNDATION', title: 'M&A workforce integration', body: 'Reconciles service across entities, surfaces pay-equity exposure, and gives a live day-one readiness view ahead of go-live.', roles: ['HR', 'Payroll & finance'], f: true },
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

export const rolesText = (roles: string[]) =>
  'For ' +
  roles
    .join(', ')
    .toLowerCase()
    .replace(/^hr\b/, 'HR')
    .replace(/, hr\b/g, ', HR')
    .replace(/\bit\b/g, 'IT');
