import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/pemap-logo.jpg.asset.json";
import { NAV, WHATSAPP_URL } from "@/lib/pemap";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 lg:px-10">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          aria-label="PEMAP — início"
        >
          <img
            src={logo.url}
            alt="Logo oficial PEMAP"
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11 lg:h-12 lg:w-12"
            width={48}
            height={48}
          />
          <span className="min-w-0 text-[0.62rem] leading-tight tracking-[0.18em] text-muted-foreground sm:text-[0.7rem] sm:tracking-[0.26em]">
            <span className="block truncate">JUAN QUEIROZ</span>
            <span className="block truncate text-[0.55rem] tracking-[0.2em] text-silver sm:text-[0.6rem] sm:tracking-[0.3em]">
              PERSONAL TRAINER
            </span>
          </span>
        </a>


        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.78rem] font-medium tracking-wide text-muted-foreground transition-colors hover:text-silver"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-silver hover:text-silver xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/98 backdrop-blur-xl xl:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-5 py-4"
            aria-label="Navegação mobile"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-sm tracking-wide text-foreground transition-colors last:border-0 hover:text-silver"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-silver mt-5 mb-2 w-full"
            >
              Quero mudar de vida!
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
