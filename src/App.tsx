import { useEffect, useState } from 'react'
import {
  about,
  caseStudies,
  friendsSay,
  offClock,
  introVideo,
  nowNote,
  profile,
  projects,
  proofs,
  videos,
  type Project,
  type Video,
} from './content.ts'

// Hash routing keeps GitHub Pages happy with no 404 fallback: #/work/<slug>
function useRoute() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash)
      if (window.location.hash.startsWith('#/')) window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

export default function App() {
  const hash = useRoute()
  const slug = hash.startsWith('#/work/') ? hash.slice('#/work/'.length) : null
  const project = slug ? projects.find((p) => p.slug === slug) : undefined

  return (
    <div className="page">
      <header className="tabs">
        <a href="#" className="brand hand">{profile.name}</a>
        <nav>
          <a href="#work">built</a>
          <a href="#thinking">thinking</a>
          <a href="#videos">videos</a>
          <a href="#off-clock">off the clock</a>
          <a href="#about">about</a>
        </nav>
      </header>
      <main>{project ? <ProjectPage project={project} /> : <Home />}</main>
      <footer className="footer">
        <span className="hand">thanks for reading my notebook ✎</span>
        <Contacts />
      </footer>
    </div>
  )
}

function Contacts() {
  const items = [
    { label: 'GitHub', url: profile.github },
    { label: 'LinkedIn', url: profile.linkedin },
    { label: 'Email', url: profile.email && `mailto:${profile.email}` },
    { label: 'Resume', url: profile.resumeUrl },
  ].filter((i) => i.url)
  return (
    <span className="contacts">
      {items.map((i) => (
        <a key={i.label} href={i.url} target="_blank" rel="noreferrer">{i.label}</a>
      ))}
    </span>
  )
}

function Home() {
  return (
    <>
      <section className="hero">
        <span className="margin-note hand" style={{ top: 70 }}>← me</span>
        <p className="date hand">{today} · page 1</p>
        <h1>
          Hi, I'm Laya. I <mark>notice the problem nobody assigned</mark>, and then I can't stop thinking about it.
        </h1>
        <p className="prose lede">
          This is my notebook: things I built, how I think through product questions, and the messy working that
          got me there. {profile.role}, moving into product.
        </p>
        <figure className="me">
          <span className="tape" aria-hidden />
          <img src="./laya.jpg" alt="Laya, smiling on a city street while travelling" width="280" height="350" />
          <figcaption className="hand">me, mid-trip ✈</figcaption>
        </figure>
        <div className="sticky hand">{nowNote}</div>
        <p className="friends hand">
          friends say → {friendsSay.map((w, i) => <span key={w} className={`word w${i}`}>{w}</span>)}
        </p>
        <span className="doodle star" aria-hidden>✦</span>
        <span className="doodle star small" aria-hidden>✦</span>
      </section>

      <section className="split">
        <Receipt />
        <div>
          <p className="arrow hand">↓ hear it from me</p>
          <VideoCard video={introVideo} large />
        </div>
      </section>

      <section id="work">
        <h2 className="hand">things I built <small>(scribbles included)</small></h2>
        <div className="cards">
          {projects.map((p, i) => (
            <a key={p.slug} className="card" href={`#/work/${p.slug}`} style={{ rotate: `${[-0.6, 0.4, -0.3][i % 3]}deg` }}>
              <h3 className="hand">{p.title}</h3>
              <p className="scribble hand">{p.scribble}</p>
              <p>{p.oneLine}</p>
              <span className="more hand">read the story →</span>
            </a>
          ))}
        </div>
      </section>

      <section id="thinking">
        <h2 className="hand">product thinking</h2>
        <p className="prose">Case studies on Google products, and teardowns of products I use every day.</p>
        <div className="index-cards">
          {caseStudies.map((c, i) => (
            <div key={i} className={`index-card ${c.url ? '' : 'blank'}`}>
              <p className="label">{c.product}</p>
              <h3 className="hand">{c.url ? <a href={c.url}>{c.title}</a> : c.title}</h3>
              <p>{c.summary}</p>
              {!c.url && <span className="todo hand">{c.status}</span>}
            </div>
          ))}
        </div>
        <p className="think-sheet hand">
          how I think → scope it first ✓ · pick a road · segment with numbers · sanity check: do the division!
        </p>
      </section>

      <section id="videos">
        <h2 className="hand">watch me think</h2>
        <p className="prose">Unscripted answers to common product questions. One take each.</p>
        <div className="polaroids">
          {videos.map((v) => <VideoCard key={v.title} video={v} />)}
        </div>
      </section>

      <section id="off-clock">
        <span className="margin-note hand">the real me ♪</span>
        <h2 className="hand">off the clock</h2>
        <div className="off">
          <div className="setlist">
            <p className="label">now playing · on repeat</p>
            <p className="prose">{offClock.singing.line}</p>
            <ol className="hand">
              {(offClock.singing.setlist.length ? offClock.singing.setlist : ['your favourite song here', 'and another one', 'the one you always end up singing'])
                .map((song) => <li key={song}>♪ {song}</li>)}
            </ol>
          </div>
          <div className="boarding">
            <div className="pass-main">
              <p className="label">boarding pass · passenger LAYA H</p>
              <p className="prose">{offClock.travel.line}</p>
              <div className="stamps">
                {(offClock.travel.places.length ? offClock.travel.places : ['place 1', 'place 2', 'place 3']).map((pl, i) => (
                  <span key={pl} className="stamp hand" style={{ rotate: `${[-8, 5, -3, 7][i % 4]}deg` }}>{pl}</span>
                ))}
              </div>
            </div>
            <div className="pass-stub">
              <p className="label">next</p>
              <p className="hand dest">{offClock.travel.next || 'somewhere new'} ✈</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <h2 className="hand">about me</h2>
        {about.map((p, i) => <p key={i} className="prose">{p}</p>)}
      </section>
    </>
  )
}

function Receipt() {
  return (
    <div className="receipt">
      <p className="center strong">LAYA H · PROOF OF WORK</p>
      <p className="center faint">Bengaluru, IN · APPROVED</p>
      <hr />
      {proofs.map((p) => (
        <div key={p.number} className="line">
          <span>{p.label}</span>
          <b>{p.number}</b>
        </div>
      ))}
      <hr />
      <div className="line total"><span>TOTAL</span><b>1 future PM</b></div>
      <p className="center faint">paid with curiosity · ownership</p>
    </div>
  )
}

function VideoCard({ video, large }: { video: Video; large?: boolean }) {
  return (
    <figure className={`polaroid ${large ? 'large' : ''}`}>
      <span className="tape" aria-hidden />
      {video.youtubeId ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="screen">
          <span className="play" aria-hidden>▶</span>
          <span className="hand">{video.status}</span>
        </div>
      )}
      <figcaption className="hand">{video.title}</figcaption>
    </figure>
  )
}

function ProjectPage({ project }: { project: Project }) {
  return (
    <article className="project">
      <a href="#work" className="back hand">← back to all work</a>
      <h1>{project.title}</h1>
      <p className="prose lede">{project.oneLine}</p>
      <div className="tags">{project.tags.map((t) => <span key={t} className="hand">#{t}</span>)}</div>
      {project.links.length > 0 && (
        <div className="buttons">
          {project.links.map((l) => (
            <a key={l.url} className="button" href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a>
          ))}
        </div>
      )}
      {project.sections.map((s) => (
        <section key={s.heading} className="entry">
          {s.margin && <span className="margin-note hand">{s.margin}</span>}
          <h2 className="hand">{s.heading}</h2>
          {s.body.map((b, i) => <p key={i} className="prose">{b}</p>)}
        </section>
      ))}
    </article>
  )
}
