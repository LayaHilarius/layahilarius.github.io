import { useEffect, useState } from 'react'
import {
  about,
  caseStudies,
  introVideo,
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
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useRoute()
  const slug = hash.startsWith('#/work/') ? hash.slice('#/work/'.length) : null
  const project = slug ? projects.find((p) => p.slug === slug) : undefined

  return (
    <>
      <header className="nav">
        <a href="#" className="brand">{profile.name}</a>
        <nav>
          <a href="#work">Built</a>
          <a href="#thinking">Thinking</a>
          <a href="#videos">Videos</a>
          <a href="#about">About</a>
        </nav>
      </header>
      <main>{project ? <ProjectPage project={project} /> : <Home />}</main>
      <footer className="footer">
        <span>{profile.name}</span>
        <Contacts />
      </footer>
    </>
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
        <p className="eyebrow">{profile.role}</p>
        <h1>{profile.pitch}</h1>
        <div className="proofs">
          {proofs.map((p) => (
            <div key={p.number} className="proof">
              <strong>{p.number}</strong>
              <span>{p.label}</span>
            </div>
          ))}
        </div>
        <VideoCard video={introVideo} large />
      </section>

      <section id="work">
        <h2>Things I built</h2>
        <div className="grid">
          {projects.map((p) => (
            <a key={p.slug} className="card link" href={`#/work/${p.slug}`}>
              <h3>{p.title}</h3>
              <p>{p.oneLine}</p>
              <Tags tags={p.tags} />
            </a>
          ))}
        </div>
      </section>

      <section id="thinking">
        <h2>Product thinking</h2>
        <p className="lede">Case studies on Google products, and teardowns of products I use.</p>
        <div className="grid">
          {caseStudies.map((c, i) => (
            <div key={i} className={`card ${c.url ? '' : 'pending'}`}>
              <p className="eyebrow">{c.product}</p>
              <h3>{c.url ? <a href={c.url}>{c.title}</a> : c.title}</h3>
              <p>{c.summary}</p>
              {!c.url && <span className="status">{c.status}</span>}
            </div>
          ))}
        </div>
      </section>

      <section id="videos">
        <h2>Watch me think</h2>
        <p className="lede">Unscripted answers to common product questions.</p>
        <div className="grid">
          {videos.map((v) => <VideoCard key={v.title} video={v} />)}
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        {about.map((p, i) => <p key={i} className="prose">{p}</p>)}
      </section>
    </>
  )
}

function VideoCard({ video, large }: { video: Video; large?: boolean }) {
  return (
    <div className={`card video ${large ? 'large' : ''}`}>
      {video.youtubeId ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="placeholder">
          <span className="play" aria-hidden>▶</span>
          <span className="status">{video.status}</span>
        </div>
      )}
      <p className="eyebrow">{video.kind}</p>
      <h3>{video.title}</h3>
    </div>
  )
}

function Tags({ tags }: { tags: string[] }) {
  return <div className="tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
}

function ProjectPage({ project }: { project: Project }) {
  return (
    <article className="project">
      <a href="#work" className="back">← All work</a>
      <h1>{project.title}</h1>
      <p className="lede">{project.oneLine}</p>
      <Tags tags={project.tags} />
      {project.links.length > 0 && (
        <div className="buttons">
          {project.links.map((l) => (
            <a key={l.url} className="button" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
      )}
      {project.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.body.map((b, i) => <p key={i} className="prose">{b}</p>)}
        </section>
      ))}
    </article>
  )
}
