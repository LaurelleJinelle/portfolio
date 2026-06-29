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
              I care about models that leave the notebook — most of my projects
              ship with a real interface and a retraining path, not just a metric. I would rather hand someone a tool
              they can open in a browser, so I tend to follow a project all the way to the part where a real person uses it.
            </p>
            <p className="about-body">
              What pulls my attention is the seam where technology meets access &mdash;
              finance, energy, health systems, you name it, where careful
              engineering produces real impact. I am drawn more to the unglamorous work of making models dependable,
              and I enjoy jumping into an unfamiliar domain until I understand it well
              enough to build for it.
            </p>
            <p className="about-body">
              I am finishing a {education.degree} at {education.school}. Outside the ML
              work I build product frontends as part of a small open-source team &mdash;
              a reminder that the hardest part of engineering is rarely the algorithm.
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
