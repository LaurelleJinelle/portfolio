import { skills, education } from "../data.js";
import { useReveal } from "./hooks.jsx";

export default function About() {
  const ref = useReveal();
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <span className="eyebrow">About</span>
          <h2>Engineer first, researcher when it counts.</h2>
        </div>

        <div className="about-grid">
          <div>
            <p className="about-lead">
              I work across the <em>full machine-learning lifecycle</em> — from designing a custom
              training environment to deploying a monitored, load-tested API.
            </p>
            <p className="about-body">
              My through-line is applying ML to infrastructure problems in African contexts:
              rationing electricity across distribution feeders, triaging medical emergencies, and
              reading chest X-rays. I care about models that leave the notebook — most of my projects
              ship with a real interface and a retraining path, not just a metric.
            </p>
            <p className="about-body">
              Currently a Software Engineering student at {education.school} ({education.period}),
              {" "}
              {education.detail}.
            </p>
          </div>

          <div>
            {skills.map((block) => (
              <div className="skill-block" key={block.group}>
                <h4>{block.group}</h4>
                <div className="chips">
                  {block.items.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
