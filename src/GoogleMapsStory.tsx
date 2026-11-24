import { useState } from 'react'
import './google-maps-story.css'

const docId = '1kivsVebnEcZMKXIPOO2cRqDDVUBaU1RkwE7g_Ldx-9s'
const docs = [
  { title: 'User discovery', detail: 'Who struggles, where, and how I would find out.', tab: 't.0', type: 'Research' },
  { title: 'Product requirements', detail: 'What I would build, and what I would leave out.', tab: 't.tkts0jqhdet0', type: 'PRD' },
  { title: 'Feature prioritization', detail: 'Why two ideas made the cut and one did not.', tab: 't.qj3jh0r9cz3p', type: 'Decisions' },
  { title: 'Roadmap & release', detail: 'A six-week thought experiment, with safety checks.', tab: 't.z0gut5jeazwb', type: 'Execution' },
  { title: 'Metrics & experiments', detail: 'How I would know if the change actually helped.', tab: 't.q7frx0m998tl', type: 'Measurement' },
  { title: 'AR Ride Assist proposal', detail: 'The idea, its possible future, and the risks.', tab: 't.wk6g02brpcbf', type: 'Innovation' },
]

export default function GoogleMapsStory() {
  const [showResearch, setShowResearch] = useState(false)
  return (
    <article className="teardown gm-story">
      <a className="back" href="#thinking">← Back to portfolio</a>
      <p className="eyebrow">Through my product lens / 001</p>
      <h1>Google Maps<span className="gm-title-tail">, beyond navigation.</span></h1>
      <p className="gm-intro">I started wondering why we keep returning to Maps. Somewhere along the way, I ended up thinking about how it could work for people it might be leaving behind — and how navigation could look completely different one day.</p>
      <div className="gm-meta"><span>Independent exploration</span><span>Product thinking · Accessibility · AR</span></div>
      
      <nav className="gm-anchors" aria-label="Explore the case study">
        <button type="button" onClick={() => document.getElementById('gm-curiosity')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>The curiosity</button>
        <button type="button" onClick={() => document.getElementById('gm-competitors')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>The alternatives</button>
        <button type="button" onClick={() => document.getElementById('gm-access')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>An everyday problem</button>
        <button type="button" onClick={() => document.getElementById('gm-ar')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>A bigger idea</button>
        <button type="button" onClick={() => document.getElementById('gm-documents')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>The actual documents</button>
      </nav>

      <section id="gm-curiosity" className="gm-section">
        <span className="gm-count">01 / Why I picked this</span>
        <h2>More than getting from A to B.</h2>
        <p>I feel like Google Maps has become one of those products we don't think twice about opening. Maybe it's habit. Maybe it's because we've come to trust it. I wanted to understand what keeps people coming back.</p>
        <p>What amazes me is how much of a journey happens before we even start moving. Where should I go? Is it worth visiting? When should I leave? Where can I stop? And sometimes, just as importantly, which road should I avoid?</p>
        <p>Maps is also interesting from a product perspective. People, local businesses and developers use it for completely different reasons. I started thinking about how that ecosystem makes the product harder to replace, and whether a more focused navigation experience could still do something better.</p>
        <div className="gm-note"><strong>The question I kept coming back to</strong><span>If the product already does so much, where would I even begin improving it?</span></div>
      </section>

      <section id="gm-competitors" className="gm-section">
        <span className="gm-count">02 / Looking beyond Google</span>
        <h2>What would make me open another map?</h2>
        <p>Before deciding what I would improve, I looked at what other navigation apps emphasize. I wasn't trying to declare a winner. I wanted to understand the different jobs people choose them for.</p>
        <div className="gm-competitors">
          <div className="gm-competitor">
            <span className="gm-competitor-label">Apple Maps</span>
            <h3>Navigation that fits the Apple experience.</h3>
            <p>Turn-by-turn directions and offline maps make it a practical alternative for iPhone users. The device experience itself can be part of the reason to choose it.</p>
            <a href="https://support.apple.com/en-in/105084" target="_blank" rel="noopener noreferrer">Explore Apple Maps ↗</a>
          </div>
          <div className="gm-competitor">
            <span className="gm-competitor-label">Waze <span className="gm-ownership">Google-owned</span></span>
            <h3>Built around the drive happening right now.</h3>
            <p>Live reports about traffic, hazards and incidents are central to the experience. It's a reminder that some people open a map to avoid surprises, not to discover places.</p>
            <a href="https://www.waze.com/about" target="_blank" rel="noopener noreferrer">Explore Waze ↗</a>
          </div>
          <div className="gm-competitor">
            <span className="gm-competitor-label">Mappls · MapmyIndia</span>
            <h3>Local context matters.</h3>
            <p>India-focused mapping, local-language guidance and detailed junction views stand out to me. Familiar language and recognizable road details can be just as useful as a fast route.</p>
            <a href="https://about.mappls.com/app/" target="_blank" rel="noopener noreferrer">Explore Mappls ↗</a>
          </div>
        </div>
        <div className="gm-note"><strong>What this changed in my thinking</strong><span>I wouldn't try to beat every competitor on every feature. I'd focus on the moment a user stops feeling confident: understanding the next turn or figuring out what to do after a mistake.</span></div>
        <p className="gm-competitor-caveat">This is a brief feature-positioning comparison based on public product information, not a hands-on benchmark or measured user-preference study.</p>
      </section>

      <section id="gm-access" className="gm-section">
        <span className="gm-count">03 / Improving what we have</span>
        <h2>Getting lost shouldn't mean depending on someone else.</h2>
        <p>I thought about an older person trying to reach a hospital or visit a relative. Starting navigation is one thing. But what happens if they miss a turn, don't recognize the road name, or aren't sure whether to trust the new directions?</p>
        <p>I don't want to assume every older adult struggles with Maps. That's why I started with a user research plan instead of jumping straight into building.</p>
        <div className="gm-idea">
          <span className="gm-idea-label">My proposal · Accessible Navigation</span>
          <h3>Make directions simpler. Make mistakes easier to recover from.</h3>
          <p>An optional navigation mode with fewer distractions, clearer next steps and reassuring wrong-turn instructions in a supported language the user understands.</p>
        </div>
        <p>I also thought about directions based on visible landmarks — like turning after a temple instead of guessing what 100 metres feels like. I left that idea for later because keeping landmark data accurate is a bigger problem.</p>
        <p>For a first version, I picked simplified navigation and wrong-turn recovery. It's not about inventing rerouting; it's about making recovery easier to understand. Whether that actually helps is something I'd need to test.</p>
      </section>

      <section id="gm-ar" className="gm-section">
        <span className="gm-count">04 / Reimagining the experience</span>
        <h2>What if the arrow was on the road itself?</h2>
        <p>I've had this thought about motorcycle riders for a while. If Maps knows I need to take the second street, what if my glasses could show a small arrow pointing to that exact road?</p>
        <p>My first thought was Ray-Ban-style smart glasses. Then I wondered about an AR helmet visor. I know the hardware would be expensive and getting the arrow to line up with the real street is much harder than simply displaying directions.</p>
        <p>And there's one trade-off I can't ignore: what if it distracts the rider or blocks something important? Looking forward isn't necessarily the same as paying attention.</p>
        <div className="gm-idea">
          <span className="gm-idea-label">My proposal · AR Ride Assist</span>
          <h3>Less looking down. But only if it's genuinely safer.</h3>
          <p>I'd test a simple heads-up direction first, in a simulator. The real-world AR overlay and any helmet partnership would come much later, after usability and safety research.</p>
        </div>
        <figure className="gm-film">
          <video autoPlay muted loop playsInline controls preload="metadata" aria-label="Illustrated road view with an AR navigation arrow pointing toward the second right turn">
            <source src="/ar-ride-assist.mp4" type="video/mp4" />
            Your browser does not support inline video.
          </video>
          <figcaption>A short illustrated concept: the road moves ahead while a heads-up arrow points toward the next turn. Not a functioning AR system or real-world riding footage.</figcaption>
        </figure>
      </section>

      <section id="gm-documents" className="gm-section">
        <span className="gm-count">05 / Behind the decisions</span>
        <h2>The work behind these ideas.</h2>
        <p>The page above is the short version. I wrote out the thinking behind it too: what I would research, what I'd build, how I'd prioritize, and how I'd judge whether any of it worked.</p>
        <div className="gm-doc-grid">
          {docs.map((d, i) => (
            <a key={d.tab} className="gm-doc" href={`https://docs.google.com/document/d/${docId}/edit?tab=${d.tab}`} target="_blank" rel="noopener noreferrer" aria-label={d.title + ', opens Google Docs in a new tab'}>
              <span className="gm-doc-top"><span>{String(i + 1).padStart(2,'0')} / {d.type}</span><span aria-hidden="true">↗</span></span>
              <strong>{d.title}</strong>
              <span>{d.detail}</span>
            </a>
          ))}
        </div>
        <p className="gm-disclaimer">These are concept documents for an independent portfolio project. The research, estimates, experiments and product proposals are not completed Google studies or shipped Google features.</p>
      </section>

      <section className="gm-section gm-last">
        <span className="gm-count">06 / What changed for me</span>
        <h2>I ended up thinking less about adding features.</h2>
        <p>The accessibility idea made me ask what we could remove or explain better. The AR idea made me ask whether changing the interface itself could be worthwhile — and what new risks that might introduce.</p>
        <p>Neither idea is validated yet. But that's what I liked about this exercise: I started with curiosity and ended up with better questions.</p>
        <button className="gm-research-toggle" type="button" aria-expanded={showResearch} onClick={() => setShowResearch(!showResearch)}>{showResearch ? 'Hide' : 'Show'} further reading <span aria-hidden="true">{showResearch ? '−' : '+'}</span></button>
        {showResearch && <div className="gm-further"><a href="https://www.google.com/maps/about/" target="_blank" rel="noreferrer">Google Maps overview ↗</a><a href="https://mapsplatform.google.com/" target="_blank" rel="noreferrer">Google Maps Platform ↗</a><a href="https://support.google.com/maps/" target="_blank" rel="noreferrer">Google Maps Help ↗</a><a href="https://www.android.com/xr/" target="_blank" rel="noreferrer">Android XR ↗</a></div>}
      </section>

      <p className="disclaimer">Independent product exploration. Not affiliated with or endorsed by Google.</p>
    </article>
  )
}
