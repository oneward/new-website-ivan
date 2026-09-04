// Employee-lifecycle stages shown in the hero card. The client script
// (main.js) advances one task every 1.6s, one stage every 5 tasks.
export interface Stage {
  label: string;
  phrase: string;
  tasks: string[];
}

export const stages: Stage[] = [
  { label: 'ATTRACT', phrase: 'Filling the role', tasks: ['Post the role', 'Screen applicants', 'Schedule interviews', 'Draft the offer'] },
  { label: 'ONBOARD', phrase: 'Preparing day one', tasks: ['Collect documents', 'Enroll payroll', 'Send day-one plan', 'Book manager check-in'] },
  { label: 'GROW', phrase: 'Growing the team', tasks: ['Launch review', 'Collect feedback', 'Assign training', 'Draft growth plan'] },
  { label: 'MOVE', phrase: 'Processing the move', tasks: ['Route transfer approval', 'Update org chart', 'Adjust compensation', 'Notify new team'] },
  { label: 'OFFBOARD', phrase: 'Wrapping up', tasks: ['Schedule exit', 'Transfer knowledge', 'Close out payroll', 'Send exit survey'] },
];

export const tenants = ['your HR systems', 'any HCM', 'Workday', 'SuccessFactors', 'Oracle HCM'];
