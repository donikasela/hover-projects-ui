import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <div className="py-32">
      <div className="container flex flex-col md:flex-row justify-between gap-6">
        <button className="group flex items-center gap-3 text-sm uppercase tracking-widest font-black transition-all duration-300 hover:gap-5 cursor-pointer">
          <span>See more projects</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        <div className="text-sm font-black uppercase tracking-wider">
          © 2026 UI/UX PORTFOLIO
        </div>
      </div>
    </div>
  );
}

export default Footer;
