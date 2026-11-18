// All site text lives here, so content edits never touch layout code.
// Rule: only public facts that are already on the resume. No Juspay screens,
// internal numbers or merchant data beyond what the resume states.

export const profile = {
  name: 'Laya H',
  role: 'Product engineer at Juspay, building checkout products for Latin America',
  pitch:
    'I find the user problem nobody assigned, get people behind a fix, and ship it. Now moving into product management.',
  github: 'https://github.com/LayaHilarius',
  linkedin: '', // TODO(Laya): add LinkedIn URL
  email: '', // TODO(Laya): add the email you want public, or leave empty
  resumeUrl: '', // TODO(Laya): add resume PDF to public/ and set './resume.pdf'
}

export const proofs = [
  { number: '400/day', label: 'payments on the LATAM Airlines checkout I built, on 10% of traffic' },
  { number: '~20', label: 'merchants pitched with the Open Finance Playground I pitched and built' },
  { number: '300', label: 'students taught as a UiPath Student Champion' },
]

export type Video = { title: string; kind: string; youtubeId: string; status: string }

export const introVideo: Video = {
  title: 'Who I am, in 75 seconds',
  kind: 'Intro',
  youtubeId: '', // TODO(Laya): unlisted YouTube id, due 13 Dec
  status: 'Recording by 13 Dec',
}

export const videos: Video[] = [
  { title: 'Guesstimate, solved out loud', kind: 'Estimation', youtubeId: '', status: 'Recording by 27 Dec' },
  { title: 'Design a product, start to finish', kind: 'Product sense', youtubeId: '', status: 'Recording by 27 Dec' },
  { title: 'A failure and what I changed', kind: 'Behavioral', youtubeId: '', status: 'Recording by 27 Dec' },
]

export type Project = {
  slug: string
  title: string
  oneLine: string
  tags: string[]
  links: { label: string; url: string }[]
  sections: { heading: string; body: string[] }[]
}

export const projects: Project[] = [
  {
    slug: 'open-finance-playground',
    title: 'Open Finance Playground',
    oneLine: 'An interactive walkthrough of what happens behind a Pix payment, now used to pitch about 20 merchants.',
    tags: ['Payments', 'Sales enablement', 'Initiative'],
    links: [{ label: 'See it live', url: 'https://juspay.io/open-finance' }],
    sections: [
      {
        heading: 'The problem',
        body: [
          'In Brazil, Pix payments through Open Finance involve many API calls between the merchant, Juspay and the bank. Merchants only understood the flow from what we explained on calls, and most had no idea what was happening underneath.',
        ],
      },
      {
        heading: 'What I did',
        body: [
          'Juspay had a 10-minute stage slot at its first conference in Brazil. Instead of a one-off talk, I proposed something merchants could keep using afterwards: an open-source playground that walks through a PISP and biometric payment step by step, showing every API call with its request, headers and body.',
          'I built and deployed it myself, including the infrastructure setup, which I had never done before. I walked our 12-person team, including BD, through it, and our BD team launched it on stage to 200+ attendees.',
        ],
      },
      {
        heading: 'Result',
        body: ['Juspay now uses the playground to pitch the PISP and biometric flow to merchants, about 20 so far.'],
      },
      {
        heading: 'What I would do differently',
        body: ['Set up protected sandbox and production branches from day one instead of shipping straight to production.'],
      },
    ],
  },
  {
    slug: 'latam-airlines-checkout',
    title: 'LATAM Airlines checkout',
    oneLine: 'The frontend checkout for one of South America’s largest airlines, built under moving requirements.',
    tags: ['Payments', 'Ownership', 'Shipping under pressure'],
    links: [],
    sections: [
      {
        heading: 'The situation',
        body: [
          'LATAM Airlines was our team’s first high-revenue merchant in the region. They started us on a single module, and doing it well was the way to earn more work.',
        ],
      },
      {
        heading: 'What I did',
        body: [
          'I owned the entire frontend checkout, developed from the merchant’s designs: the card flow with installments plus three custom changes LATAM asked for.',
          'Requirements kept changing while the deadline stayed fixed, so I broke the checkout into small units and tested each one as soon as it was built. A changed requirement became a small rework, not a restart.',
        ],
      },
      {
        heading: 'Result',
        body: [
          'Live on 10% of LATAM’s traffic, about 400 payments a day, with a staggered rollout to 100%. LATAM has since given us a second module.',
        ],
      },
      {
        heading: 'What I learned',
        body: ['You can’t stop requirements from changing, but you can build so that change is cheap.'],
      },
    ],
  },
  {
    slug: 'pm-playground',
    title: 'PM Playground',
    oneLine: 'A tool I built for my own problem: structuring PM interview answers live, with visuals.',
    tags: ['Side project', 'React', 'Built for my own need'],
    links: [
      { label: 'Try it', url: 'https://layahilarius.github.io/pm-playground/' },
      { label: 'Code', url: 'https://github.com/LayaHilarius/pm-playground' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'While practising guesstimates and product questions, my notes were a wall of text. In a mock on a shared screen, the interviewer could not follow my structure.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'A web app where I type into a step-by-step roadmap, and segments turn into charts as I write. It has a drawing canvas for sketches. Built with React and TypeScript, hosted free on GitHub Pages.',
        ],
      },
      {
        heading: 'Result',
        body: ['TODO(Laya): one line on how it changed your practice, after a few more mocks.'],
      },
    ],
  },
]

export type CaseStudy = { title: string; product: string; summary: string; url: string; status: string }

// Best 3 Google product-of-the-day case studies + 2 teardowns. Picked by 24 Dec.
export const caseStudies: CaseStudy[] = [
  { title: 'Coming soon', product: 'Google product case study', summary: 'Pick 1 of 3', url: '', status: 'Picked by 24 Dec' },
  { title: 'Coming soon', product: 'Google product case study', summary: 'Pick 2 of 3', url: '', status: 'Picked by 24 Dec' },
  { title: 'Coming soon', product: 'Google product case study', summary: 'Pick 3 of 3', url: '', status: 'Picked by 24 Dec' },
  { title: 'Coming soon', product: 'Product teardown', summary: 'Teardown 1 of 2', url: '', status: 'Due 24 Dec' },
  { title: 'Coming soon', product: 'Product teardown', summary: 'Teardown 2 of 2', url: '', status: 'Due 24 Dec' },
]

export const about = [
  'I’m a product engineer at Juspay, where I build payment experiences for merchants in Latin America. The part of the job I love most is finding the user’s problem and getting people behind a fix, even more than writing the code.',
  'Before Juspay, I shipped a colour-correction feature for colour-blind users at Zoho and wrote a voice-navigation proposal nobody had asked for. In college I taught about 300 students as a UiPath Student Champion and led hackathon teams to wins.',
]
