import { profile } from "../data.js";
import { useReveal, GithubIcon } from "./hooks.jsx";

export default function Footer() {
  const ref = useReveal();
  const year = new Date().getFullYear();
  return (
    <footer className="footer wrap reveal" ref={ref} id="contact">
      <span className="eyebrow footer-eyebrow">Let&apos;s talk</span>
      <h2>
        <a href={"mailto:" + profile.email}>Start a conversation.</a>
      </h2>

      <div className="footer-links">
        <a href={"mailto:" + profile.email} className="btn btn-primary">
          {profile.email}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
          <GithubIcon /> GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
          LinkedIn
        </a>
      </div>

      <div className="footer-meta">
        <span>{profile.name}</span>
        <span>{profile.location}</span>
        <span>© {year} · Built with React</span>
      </div>
    </footer>
  );
}
