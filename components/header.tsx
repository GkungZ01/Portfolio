import Link from "next/link";

export default function HeaderPage() {
  return (
    <div className="absolute w-full z-10">
      <nav>
        <div className="title">
          <span>Ratchanon Sila</span>
        </div>
        <menu>
          <Link className="nav-item" href="/">
            <p>Home</p>
          </Link>
          <Link className="nav-item" href="/">
            <p>Skill</p>
          </Link>
          <Link className="nav-item" href="/">
            <p>Skill</p>
          </Link>
        </menu>
      </nav>
    </div>
  );
}
