import { profile, projects, gmailComposeUrl } from "../data.js";
import { useRotator, GithubIcon, ArrowIcon } from "./hooks.jsx";

export default function Hero() {
  const role = useRotator(profile.roles);
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <header className="hero wrap" id="top">
      <div className="hero-eyebrow">
        <span className="eyebrow">ML &amp; Software Engineer · {profile.location}</span>
      </div>
      <h1>
        {first} <br />
        <span className="grad">{last}</span>
      </h1>

      <div className="hero-role">
        <span className="label">building&nbsp;</span>
        <span className="role-rotator">{role}</span>
      </div>

      <p className="hero-blurb">{profile.blurb}</p>

      <div className="hero-cta">
        <a href="#work" className="btn btn-primary">
          View the work <ArrowIcon />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
          <GithubIcon /> GitHub
        </a>
        <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
          Email
        </a>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="num">{projects.length}</div>
          <div className="cap">ML projects shipped</div>
        </div>
        <div className="hero-stat">
          <div className="num">5</div>
          <div className="cap">domains · RL → LLMs → CNNs</div>
        </div>
        <div className="hero-stat">
          <div className="num">2</div>
          <div className="cap">models live in production</div>
        </div>
      </div>
    </header>
  );
}
