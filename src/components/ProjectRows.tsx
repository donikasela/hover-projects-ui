"use client";

interface ProjectRows {
  isHovered: boolean;
  index: number;
}
export default function ProjectRows({ isHovered, index }: ProjectRows) {
  return (
    <div className="flex items-center justify-between py-4 sm:py-6 md:py-8 transition-all duration-300">
      {/* Index Number */}
      <div className="w-10 sm:w-16 md:w-24 shrink-0">
        <span
          className={`text-base sm:text-xl md:text-2xl font-bold transition-colors duration-300 ${
            isHovered ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
