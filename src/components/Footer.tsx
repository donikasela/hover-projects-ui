import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <div className="mt-16 pt-8 border-t  flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <button className="group flex items-center gap-3 text-sm uppercase tracking-widest font-black  transition-all duration-300 hover:gap-5">
        <span>LOAD MORE PROJECTS</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 cursor-pointer" />
      </button>
      <div className="text-sm font-black uppercase tracking-wider">
        © 2024 UI/UX PORTFOLIO
      </div>
    </div>
  );
}

export default Footer;
