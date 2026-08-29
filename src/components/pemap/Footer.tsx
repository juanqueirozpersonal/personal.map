import logo from "@/assets/pemap-logo.jpg.asset.json";
import {
  CREF,
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/pemap";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-3 lg:px-10">
        <div>
          <img
            src={logo.url}
            alt="Logo oficial PEMAP"
            className="h-20 w-20 object-contain"
            width={80}
            height={80}
            loading="lazy"
          />
          <p className="mt-5 text-sm tracking-[0.18em] text-foreground">
            JUAN QUEIROZ | PERSONAL TRAINER
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Exercício físico hoje, para viver melhor o amanhã.
          </p>
          <p className="mt-4 text-xs tracking-[0.2em] text-silver">{CREF}</p>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
            Navegação
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-silver"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
            Contato
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-silver"
              >
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-silver"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="break-all text-muted-foreground transition-colors hover:text-silver"
              >
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground lg:px-10">
          © {new Date().getFullYear()} PEMAP — Juan Queiroz Personal Trainer. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
