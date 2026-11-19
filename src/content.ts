// All site text lives here, so content edits never touch layout code.
// Rule: only public facts that are already on the resume. No Juspay screens,
// internal numbers or merchant data beyond what the resume states.

export const profile = {
  name: 'Laya H',
  eyebrow: 'Product engineer · Payments · Moving into product',
  headline: 'Wherever life takes me, I hope to leave something worth remembering.',
  sub: 'A little corner of the internet that holds pieces of who I am, what I build, and who I\u2019m becoming.',
  workHeadline: 'Payments are confusing. I build products that make them make sense.',
  workSub: 'Two years building checkouts for merchants in Latin America at Juspay. I find the problem nobody assigned, get people behind a fix, and ship it.',
  github: 'https://github.com/LayaHilarius',
  linkedin: '', // TODO(Laya): add LinkedIn URL
  email: '', // TODO(Laya): add the email you want public, or leave empty
  resumeUrl: '', // TODO(Laya): add resume PDF to public/ and set './resume.pdf'
}

// Hero diagram: the Open Finance Playground story as a flow.
export const heroFlow = [
  { icon: 'question', label: 'Problem', note: 'Merchants can’t see behind a Pix payment' },
  { icon: 'build', label: 'Playground', note: 'Every API call, step by step' },
  { icon: 'stage', label: 'Launch', note: 'BD demo to 200+ in Brazil' },
  { icon: 'check', label: 'Outcome', note: '~20 merchants pitched' },
] as const

export type Preview = 'api' | 'checkout' | 'roadmap'

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
    outcome: ['TODO(Laya): one line on how it changed your practice, after a few more mocks.'],
    learned: 'Building for my own problem made me the toughest user I’ve had.',
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
  { title: 'Product teardown', product: '1 of 2', summary: '', url: '', status: 'Due 24 Dec' },
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
    { icon: 'card', value: '2 yrs', label: 'in payments' },
    { icon: 'people', value: '300', label: 'students taught' },
    { icon: 'trophy', value: '2', label: 'hackathon wins' },
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
  { icon: 'music', text: 'I sing, loudly and often.' },
  { icon: 'plane', text: 'I travel whenever I can. New places are how I recharge.' },
]

export const cta = 'Let’s build payments and products people actually understand.'
