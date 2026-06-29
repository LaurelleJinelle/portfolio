import { experience } from "../data.js";
import { useReveal } from "./hooks.jsx";

function Row({ e }) {
  const ref = useReveal();
  return (
    <div className="exp-row reveal" ref={ref}>
      <div className="exp-period">{e.period}</div>
      <div>
        <div className="exp-role">{e.role}</div>
        <div className="exp-org">
          {e.org} <span>· {e.place}</span>
        </div>
        <p className="exp-note">{e.note}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const head = useReveal();
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head reveal" ref={head}>
          <span className="eyebrow">Experience</span>
          <h2>Where I&apos;ve built.</h2>
        </div>
        <div className="exp-list">
          {experience.map((e) => (
            <Row e={e} key={e.role + e.org} />
          ))}
        </div>
      </div>
    </section>
  );
}
