import { projects } from "../data.js";
import { useReveal, ArrowIcon } from "./hooks.jsx";

function Card({ p }) {
  const ref = useReveal();
  return (
    <article className="card reveal" ref={ref}>
      <div className="card-top">
        <span className="card-index">{p.id}</span>
        <div>
          <div className="card-domain">{p.domain}</div>
          <div className="metric-badge">
            <span className="val">{p.metric}</span>
            <span className="lab">{p.metricLabel}</span>
          </div>
        </div>
      </div>

      <h3>{p.title}</h3>
      <p className="card-summary">{p.summary}</p>
      <p className="card-detail">{p.detail}</p>

      <div className="card-stack">
        {p.stack.map((s) => (
          <span className="tag" key={s}>
            {s}
          </span>
        ))}
      </div>

      <div className="card-links">
        {p.links.map((l) => (
          <a className="card-link" key={l.url} href={l.url} target="_blank" rel="noreferrer">
            {l.label} <ArrowIcon />
          </a>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const head = useReveal();
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head reveal" ref={head}>
          <span className="eyebrow">Selected work</span>
          <h2>Six models, six problems.</h2>
        </div>
        <div className="proj-grid">
          {projects.map((p) => (
            <Card p={p} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
