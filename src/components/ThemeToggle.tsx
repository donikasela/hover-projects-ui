import { useRef } from "react";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "./useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  return (
    <button
      ref={buttonRef}
      aria-label="Toggle theme"
      onClick={() => {
        toggle();
      }}
    >
      <span ref={iconRef} className="cursor-pointer">
        {theme === "light" ? (
          <SunMedium className="text-dark fill-dark" />
        ) : (
          <Moon className="text-light fill-light" />
        )}
      </span>
    </button>
  );
}
