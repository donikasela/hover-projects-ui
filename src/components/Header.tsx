import { ThemeToggle } from "./ThemeToggle";

function Header() {
  return (
    <div className="py-32">
      <div className="container flex items-start justify-between">
        <div>
          <h1 className="text-sm font-black uppercase tracking-widest">
            Selected Work
          </h1>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Projects
          </h2>
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
