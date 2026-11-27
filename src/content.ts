// All site text lives here, so content edits never touch layout code.
// Rule: only public facts that are already on the resume. No Juspay screens,
// internal numbers or merchant data beyond what the resume states.

export const profile = {
  name: 'Laya H',
  eyebrow: 'Product engineer · Payments · Moving into product',
  headline: 'Wherever life takes me, I hope to leave something worth remembering.',
  sub: 'A little corner of the internet that holds pieces of who I am, what I build, and who I\u2019m becoming.',
  workHeadline: 'Products I\u2019ve shipped, and what they changed.',
  workSub: 'Building checkouts for merchants in Latin America at Juspay since 2024. I find the problem nobody assigned, get people behind a fix, and ship it.',
  github: 'https://github.com/LayaHilarius',
  linkedin: 'https://www.linkedin.com/in/laya17',
  email: '', // TODO(Laya): add the email you want public, or leave empty
  resumeUrl: './Laya_H_Resume.pdf',
}

// Hero diagram: how any idea goes from problem to product.
export const heroFlow = [
  { icon: 'question', label: 'Notice', note: 'A problem nobody has assigned yet' },
  { icon: 'people', label: 'Understand', note: 'Talk to the people who feel it' },
  { icon: 'build', label: 'Build', note: 'Small, tested pieces, shipped fast' },
  { icon: 'check', label: 'Outcome', note: 'Something people keep using' },
] as const

export const heroFlowCaption = 'How I take an idea from problem to product'

export type Role = { title: string; company: string; place: string; dates: string; current?: boolean; points: string[] }

export const experience: Role[] = [
  {
    title: 'Product Engineer',
    company: 'Juspay Technologies',
    place: 'Bengaluru',
    dates: 'Sep 2025 \u2013 Present',
    current: true,
    points: [
      'Pitched and built the Open Finance Playground, now Juspay\u2019s Brazil sales demo, used to pitch ~20 merchants.',
      'Built LATAM Airlines\u2019 checkout as the only frontend engineer: 400 payments a day on 10% of traffic.',
      'Showed a reported 6% checkout drop-off wasn\u2019t real: the merchant was counting orders, not sessions.',
      'Added fingerprint and face approval for Pix payments, and shipped Google Pay and Apple Pay.',
    ],
  },
  {
    title: 'Intern',
    company: 'Juspay Technologies',
    place: 'Bengaluru',
    dates: 'Dec 2024 \u2013 Aug 2025',
    points: [
      'Integrated the Payamigo payment gateway, which now handles 90+ payments a month.',
      'Joined in my final year of college and moved to a full-time role after graduating.',
    ],
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'SuperOps',
    place: 'Chennai',
    dates: 'Aug \u2013 Nov 2024',
    points: ['Shipped production features across UI and backend for a B2B SaaS product used by IT service providers.'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Zoho',
    place: 'Chennai',
    dates: 'Jun \u2013 Jul 2024',
    points: [
      'Made Zoho Desk usable for colour-blind users with a real-time colour-correction feature, live in the product today.',
      'Wrote an unassigned proposal for voice-command navigation, to support blind users.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Hebesec Technologies',
    place: 'Chennai',
    dates: 'Jan \u2013 May 2024',
    points: ['Built every user-facing screen of a vulnerability-scanning product.'],
  },
]

export type Activity = { icon: string; title: string; when: string; highlight: string; text: string; photos: string[] }

// Leadership and community. photos: file names in public/photos/, e.g. 'hackathon-raccam.jpg'.
export const activities: Activity[] = [
  {
    icon: 'trophy',
    title: 'Hackathons',
    when: 'College',
    highlight: '4 wins · 3 finals',
    text: 'Won the Rajasthan Police RACCAM Hackathon (\u20b950,000) with a fraud-flagging dashboard, led a 6-person team to win IA Hackathon Hyderabad, and won Viz-a-thon 2023 and Hack-a-bot. Finalist at Smart India Hackathon, Hackfest and PEC-Hacks.',
    photos: ['raccam-stage.jpg', 'ia-hackathon-prize.jpg', 'ia-hackathon-mic.jpg'],
  },
  {
    icon: 'people',
    title: 'UiPath Student Developer Champion',
    when: '2024 \u2013 25',
    highlight: '120 taught · 82 certified',
    text: 'Taught RPA to 120 juniors, three sessions a week. 82 earned the UiPath RPA Developer Foundation certification and 4 went on to RPA jobs. Organised the college\u2019s automation hackathons.',
    photos: ['uipath-champion.jpg'],
  },
  {
    icon: 'target',
    title: 'Placement Empowerment Program',
    when: 'Co-lead',
    highlight: 'Interview prep for juniors',
    text: 'Co-led sessions on technical interview questions, mock interviews and group discussions, guiding juniors into their first jobs.',
    photos: ['pep-team.jpg'],
  },
]

export type Preview = 'api' | 'checkout' | 'roadmap' | 'tracker' | 'fraud'

export type Project = {
  slug: string
  number: string
  title: string
  tags: string[]
  metric: string
  metricLabel: string
  preview: Preview
  links: { label: string; url: string }[]
  problem: string[]
  decisions: string[]
  outcome: string[]
  learned: string
}

export const projects: Project[] = [
  {
    slug: 'open-finance-playground',
    number: '01',
    title: 'Open Finance Playground',
    tags: ['Payments', 'Sales enablement', 'Initiative'],
    metric: '~20',
    metricLabel: 'merchants pitched with it',
    preview: 'api',
    links: [{ label: 'See it live', url: 'https://juspay.io/open-finance' }],
    problem: [
      'In Brazil, Pix payments through Open Finance involve many API calls between the merchant, Juspay and the bank. Merchants only understood the flow from what we explained on calls, and most had no idea what was happening underneath.',
    ],
    decisions: [
      'Juspay had a 10-minute stage slot at its first conference in Brazil. Instead of a one-off talk, I proposed something merchants could keep using afterwards.',
      'An open-source playground that walks through a PISP and biometric payment step by step, showing every API call with its request, headers and body.',
      'I built and deployed it myself, including the infrastructure setup, which I had never done before, and walked our 12-person team, including BD, through it.',
    ],
    outcome: [
      'Our BD team launched it on stage to 200+ attendees. Juspay now uses it to pitch the PISP and biometric flow to merchants, about 20 so far.',
    ],
    learned: 'Set up protected sandbox and production branches from day one instead of shipping straight to production.',
  },
  {
    slug: 'latam-airlines-checkout',
    number: '02',
    title: 'LATAM Airlines checkout',
    tags: ['Payments', 'Ownership', 'Moving requirements'],
    metric: '400/day',
    metricLabel: 'payments on 10% of traffic',
    preview: 'checkout',
    links: [],
    problem: [
      'LATAM Airlines was our team’s first high-revenue merchant in the region. They started us on a single module, and doing it well was the way to earn more work. Requirements kept changing while the deadline stayed fixed.',
    ],
    decisions: [
      'I owned the entire frontend checkout, developed from the merchant’s designs: the card flow with installments plus three custom changes LATAM asked for.',
      'I broke the checkout into small units and tested each one as soon as it was built, so a changed requirement became a small rework, not a restart.',
    ],
    outcome: [
      'Live on 10% of LATAM’s traffic, about 400 payments a day, with a staggered rollout to 100%. LATAM has since given us a second module.',
    ],
    learned: 'You can’t stop requirements from changing, but you can build so that change is cheap.',
  },
  {
    slug: 'pm-playground',
    number: '03',
    title: 'PM Playground',
    tags: ['Side project', 'React', 'Built for my own need'],
    metric: 'Live',
    metricLabel: 'used in every mock I practise',
    preview: 'roadmap',
    links: [
      { label: 'Try it', url: 'https://layahilarius.github.io/pm-playground/' },
      { label: 'Code', url: 'https://github.com/LayaHilarius/pm-playground' },
    ],
    problem: [
      'While practising guesstimates and product questions, my notes were a wall of text. In a mock on a shared screen, the interviewer could not follow my structure.',
    ],
    decisions: [
      'A step-by-step roadmap I type into, so the structure is visible as I talk.',
      'Segments turn into charts as I write, and a drawing canvas for quick sketches.',
      'React and TypeScript, hosted free on GitHub Pages, so anyone can open it during a mock.',
    ],
    outcome: [], // TODO(Laya): one line on how it changed your practice; the Outcome block appears once filled
    learned: 'Building for my own problem made me the toughest user I’ve had.',
  },
  {
    slug: 'revolut-account-review-tracker',
    number: '04',
    title: 'Revolut: locked out of my money',
    tags: ['Case study', 'Python + SQL', 'PRD + prototype'],
    metric: '53.3%',
    metricLabel: 'of angry reviews are customers locked out',
    preview: 'tracker',
    links: [
      { label: 'Case study', url: 'https://layahilarius.github.io/revolut-po-case-study/' },
      { label: 'Try the prototype', url: 'https://layahilarius.github.io/revolut-po-case-study/#/tracker' },
      { label: 'Code and data', url: 'https://github.com/LayaHilarius/revolut-po-case-study' },
    ],
    problem: [
      'I wanted to know what makes Revolut customers angriest. I pulled the 2,500 newest English Play Store reviews (7 Oct to 23 Nov 2026) with Python in Colab and tagged each one with 9 complaint themes.',
      'Counting the themes in SQL showed that 53.3% of the 685 one- and two-star reviews come from people who can’t reach their money: frozen accounts, stuck verification, or can’t log in. 27.4% of them also say support didn’t help.',
    ],
    decisions: [
      'The checks are a legal requirement, and often the reason can’t be shared. So I didn’t try to remove reviews; I went after the silence around them.',
      'Monzo tells customers most reviews finish within 2 days and Wise shows an estimated time. Revolut shows neither, so I wrote a PRD for an in-app Account Review Tracker: the stage, what’s needed with upload, a time range, and what still works.',
      'I built a clickable React prototype of it, labelled as a concept, not affiliated with Revolut.',
    ],
    outcome: [], // concept project: no shipped outcome to claim
    learned: 'Keyword tagging is quick but rough. Next time I’d hand-label 100 reviews first to measure how accurate it is.',
  },
  {
    slug: 'revolut-fraud-rules',
    number: '05',
    title: 'Fraud rules vs. good customers',
    tags: ['Case study', 'SQL', 'Dashboard'],
    metric: '0.6% → 99.8%',
    metricLabel: 'fraud money stopped: existing rule vs. mine',
    preview: 'fraud',
    links: [
      { label: 'See the dashboard', url: 'https://layahilarius.github.io/revolut-po-case-study/#/fraud' },
      { label: 'SQL', url: 'https://github.com/LayaHilarius/revolut-po-case-study/tree/main/fraud-rules' },
    ],
    problem: [
      'Accounts get frozen because fraud rules flag them. A good rule has to do two jobs at once: stop fraud, and block as few genuine customers as possible.',
      'I used PaySim, a public dataset of 6.3 million simulated mobile-money transactions over 30 days, where the existing rule (transfers over 200k) stopped only 0.6% of the fraud money.',
    ],
    decisions: [
      'I wrote one SQL query that scores any rule on four numbers: frauds caught, fraud money saved, good customers blocked, and blocked per 10,000 genuine transactions. Then I compared 9 rules.',
      '“The account ends at zero” looked like a great signal, but 42.7% of genuine transfers end at zero too. “Moves exactly the whole balance” catches the same 97.6% of frauds and blocks no genuine customers.',
      'Most of what that rule missed were transfers of exactly 10M, the per-transaction cap. Adding them as a step-up check, not a hard block, raised money stopped to 99.8% while flagging 4.6 genuine transactions per 10,000.',
      'I built a dashboard that tells this in six steps, so someone who doesn’t read SQL gets the point.',
    ],
    outcome: [],
    learned: 'Simulated data is cleaner than real life. In a real bank I’d run the rule in shadow mode first and watch false positives every week.',
  },
]

export const howIWork = [
  { icon: 'search', label: 'Discover', text: 'Watch real users before deciding anything. Voice navigation started with 30 blind users.' },
  { icon: 'target', label: 'Define', text: 'Ask what the doc is missing. Edge cases hide in what nobody wrote down.' },
  { icon: 'pencil', label: 'Build', text: 'Small, tested pieces, so a changed requirement is a small rework.' },
  { icon: 'chart', label: 'Check', text: 'A sanity check after every feature, even under deadline.' },
  { icon: 'loop', label: 'Learn', text: 'Turn each mistake into a habit the team keeps.' },
] as const

export type CaseStudy = { title: string; product: string; summary: string; url: string; status: string }

// Best 3 Google product-of-the-day case studies + 2 teardowns. Picked by 24 Dec.
export const caseStudies: CaseStudy[] = [
  { title: 'Google product case study', product: 'Pick 1 of 3', summary: '', url: '', status: 'Picked by 24 Dec' },
  { title: 'Google product case study', product: 'Pick 2 of 3', summary: '', url: '', status: 'Picked by 24 Dec' },
  { title: 'Google product case study', product: 'Pick 3 of 3', summary: '', url: '', status: 'Picked by 24 Dec' },
  { title: 'Google Maps', product: 'Product teardown', summary: 'Strategy, technology, accessibility and the future of navigation, in three chapters.', url: '#/teardown/google-maps', status: '' },
  { title: 'Product teardown', product: '2 of 2', summary: '', url: '', status: 'Due 24 Dec' },
]

export type Video = { title: string; kind: string; youtubeId: string; status: string }

export const videos: Video[] = [
  { title: 'Who I am, in 75 seconds', kind: 'Intro', youtubeId: '', status: 'Recording by 13 Dec' },
  { title: 'Guesstimate, solved out loud', kind: 'Estimation', youtubeId: '', status: 'Recording by 27 Dec' },
  { title: 'Design a product, start to finish', kind: 'Product sense', youtubeId: '', status: 'Recording by 27 Dec' },
  { title: 'A failure and what I changed', kind: 'Behavioral', youtubeId: '', status: 'Recording by 27 Dec' },
]

export const about = {
  headline: 'I’m a product engineer with a payments background and a builder’s mindset.',
  body: [
    'At Juspay I build payment experiences for merchants in Latin America. The part I love most is finding the user’s problem and getting people behind a fix, even more than writing the code.',
    'Before Juspay, I shipped a colour-correction feature for colour-blind users at Zoho. In college I taught about 300 students as a UiPath Student Champion and led hackathon teams to wins.',
  ],
  stats: [
    { icon: 'card', value: 'Since 2024', label: 'in payments' },
    { icon: 'people', value: '300', label: 'students taught' },
    { icon: 'trophy', value: '4', label: 'hackathon wins' },
  ],
  bring: [
    'I spot the problem nobody assigned and pitch the fix',
    'I can prototype it myself, end to end',
    'I own mistakes and turn them into team habits',
    'Friends say I’m vibrant and bring energy to every team',
  ],
}

// Human side. Laya loves singing and travelling.
export const offClock = [
  { icon: 'music', text: 'I love singing and dancing, and I\u2019m always up for an extracurricular.' },
  { icon: 'plane', text: 'Happiest with a bag packed and somewhere new to explore.' },
]

export const cta = 'Let’s build payments and products people actually understand.'
