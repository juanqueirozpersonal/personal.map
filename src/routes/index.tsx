import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, MessageCircle, Plus } from "lucide-react";
import { useState } from "react";

import juan from "@/assets/juan-queiroz.png.asset.json";
import logo from "@/assets/pemap-logo.jpg.asset.json";
import { Footer } from "@/components/pemap/Footer";
import { Header } from "@/components/pemap/Header";
import { Reveal } from "@/components/pemap/Reveal";
import { WhatsAppFab } from "@/components/pemap/WhatsAppFab";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AUDIENCE,
  AUTHORITY,
  CREF,
  EMAIL,
  FAQ,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PILLARS,
  SERVICES,
  SPECIALIZATIONS,
  STEPS,
  TESTIMONIALS,

  WHATSAPP_URL,
} from "@/lib/pemap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juan Queiroz | Personal Trainer para Grupos Especiais — PEMAP" },
      {
        name: "description",
        content:
          "Personal Trainer em São Paulo especializado em prescrição do treinamento para pessoas com problemas de saúde e condições atípicas. Presencial, semipresencial e online.",
      },
      {
        property: "og:title",
        content: "Juan Queiroz | Personal Trainer para Grupos Especiais — PEMAP",
      },
      {
        property: "og:description",
        content:
          "Exercício físico hoje, para viver melhor o amanhã. Treinamento individualizado com base científica, adaptado à sua condição de saúde.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "PEMAP — Juan Queiroz Personal Trainer",
          description:
            "Personal Trainer especializado em prescrição do treinamento para pessoas com problemas de saúde e condições atípicas.",
          telephone: "+5511961612770",
          email: EMAIL,
          areaServed: "São Paulo, Brasil",
          sameAs: [INSTAGRAM_URL],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AuthorityBar />
        <Impact />
        <About />
        <Education />
        <Audience />
        <Services />
        <HowItWorks />
        <Methodology />
        <Testimonials />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24 lg:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -right-40 h-[38rem] w-[38rem] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 lg:min-h-screen lg:grid-cols-[45fr_55fr] lg:gap-6 lg:px-10 lg:pb-0">
        <Reveal className="order-2 lg:order-1">
          <div className="flex items-center gap-4">
            <img
              src={logo.url}
              alt="Logo oficial PEMAP"
              className="h-14 w-14 object-contain"
              width={56}
              height={56}
            />
            <div className="text-[0.68rem] leading-relaxed tracking-[0.3em] text-muted-foreground">
              PEMAP
              <span className="block text-foreground">JUAN QUEIROZ</span>
              <span className="block text-silver">PERSONAL TRAINER</span>
            </div>
          </div>

          <h1 className="mt-8 text-[2.15rem] leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem]">
            EXERCÍCIO FÍSICO HOJE,
            <br />
            PARA VIVER MELHOR
            <br />
            <span className="text-silver-gradient">O AMANHÃ.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/90">
            Especialista em prescrição do treinamento para pessoas com problemas de saúde
            ou condições atípicas.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Treinamento individualizado, baseado em conhecimento científico e adaptado às
            necessidades, limitações e objetivos de cada pessoa. Comece hoje e, em apenas
            3 meses, sinta a transformação no seu bem-estar.
          </p>


          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-silver"
            >
              Quero mudar de vida!
            </a>
            <a href="#sobre" className="btn-outline-silver">
              Conheça meu trabalho
            </a>
          </div>

          <p className="mt-8 text-xs tracking-[0.24em] text-muted-foreground uppercase">
            Presencial <span className="text-silver">•</span> Semipresencial{" "}
            <span className="text-silver">•</span> Online
          </p>
        </Reveal>

        <div className="relative order-1 lg:order-2 lg:h-screen">
          <div className="relative h-full">
            <img
              src={juan.url}
              alt="Juan Queiroz, personal trainer, de braços cruzados em fundo preto"
              className="mx-auto h-[16.5rem] w-auto object-contain object-bottom contrast-[1.08] brightness-[0.98] sm:h-[30rem] lg:h-full lg:max-h-screen lg:w-full"
              width={1078}
              height={1437}
              fetchPriority="high"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorityBar() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-7xl divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
        {AUTHORITY.map((item, i) => (
          <Reveal key={item.value} delay={i * 90} className="px-2 py-8 sm:px-8">
            <p className="text-lg font-bold tracking-wide text-silver">{item.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <div className="hairline" />
        <p className="mt-8 text-2xl leading-snug font-bold sm:text-4xl">
          O EXERCÍCIO FÍSICO COMO FERRAMENTA PARA TRANSFORMAR SEU FUNCIONAMENTO DE{" "}
          <span className="text-silver">DENTRO PARA FORA</span>, PROMOVENDO SAÚDE,
          FUNCIONALIDADE E QUALIDADE DE VIDA.
        </p>
        <div className="hairline mt-10" />
      </Reveal>
    </section>
  );
}


function About() {
  return (
    <section id="sobre" className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-18 lg:grid-cols-2 lg:px-10 lg:py-26">
        <Reveal>
          <span className="section-label">Sobre mim</span>
          <h2 className="mt-6 text-3xl leading-tight font-extrabold sm:text-4xl">
            MAIS DO QUE TREINAR.
            <br />
            <span className="text-silver-gradient">CUIDAR DE COMO VOCÊ FUNCIONA.</span>
          </h2>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Meu trabalho vai além da busca por estética. Utilizo o exercício físico como
              ferramenta para promover saúde, funcionalidade e qualidade de vida,
              respeitando as características, limitações e necessidades de cada pessoa.
            </p>
            <p>
              Tenho formação em Educação Física e especializações voltadas à fisiologia do
              exercício, biomecânica, cinesiologia, prescrição do treinamento para grupos
              especiais, reabilitação, musculação, estética corporal e treinamento para
              atletas e praticantes de musculação.
            </p>
            <p>
              Minha proposta é desenvolver um treinamento individualizado, planejado de
              acordo com o seu caso, sua condição, seus objetivos e sua realidade.
            </p>
          </div>
          <a href="#metodologia" className="btn-outline-silver mt-9">
            Conheça minha metodologia
          </a>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-lg border border-border bg-background">
            <img
              src={juan.url}
              alt="Retrato profissional de Juan Queiroz, personal trainer"
              className="h-full w-full object-cover contrast-[1.06]"
              width={1078}
              height={1437}
              loading="lazy"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-18 lg:px-10 lg:py-24">
        <Reveal>
          <span className="section-label">Formação e especializações</span>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            FORMAÇÃO E ESPECIALIZAÇÕES
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h3 className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
              Formação
            </h3>
            <p className="mt-5 text-lg font-semibold">
              Educação Física — Licenciatura e Bacharelado
            </p>
            <p className="mt-3 text-sm tracking-[0.2em] text-silver">{CREF}</p>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
              Especializações
            </h3>
            <ul className="mt-5 divide-y divide-border">
              {SPECIALIZATIONS.map((item, i) => (
                <li key={item} className="flex gap-5 py-4">
                  <span className="text-xs text-silver tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? AUDIENCE : AUDIENCE.slice(0, 3);

  return (
    <section id="para-quem" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-18 lg:px-10 lg:py-26">
        <Reveal className="max-w-3xl">
          <span className="section-label">Para quem é</span>
          <h2 className="mt-6 text-2xl leading-tight font-extrabold sm:text-4xl">
            O EXERCÍCIO PODE FAZER PARTE DA SUA VIDA, MESMO QUANDO EXISTEM{" "}
            <span className="text-silver-gradient">LIMITAÇÕES.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Meu trabalho é direcionado principalmente a pessoas com problemas de saúde e
            grupos atípicos que desejam utilizar o exercício físico para melhorar sua
            saúde, funcionalidade e qualidade de vida.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <article className="card-surface h-full p-7">
                <h3 className="text-xs tracking-[0.22em] text-silver uppercase">
                  {cat.title}
                </h3>
                <div className="hairline my-5" />
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {!showAll && (
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="btn-outline-silver"
            >
              Ver todas as condições <Plus className="h-4 w-4" />
            </button>
          </div>
        )}

        <Reveal className="mt-10 border-l border-silver/50 pl-6">
          <p className="text-sm text-muted-foreground italic">
            Cada pessoa possui necessidades diferentes. A possibilidade e a forma de
            treinamento devem ser avaliadas individualmente.
          </p>
        </Reveal>

        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-silver"
          >
            Quero saber se você atende meu caso
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  let counter = 0;
  return (
    <section id="servicos" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-18 lg:px-10 lg:py-26">
        <Reveal className="max-w-3xl">
          <span className="section-label">Serviços</span>
          <h2 className="mt-5 text-3xl leading-tight font-extrabold sm:text-4xl">
            ENCONTRE O ACOMPANHAMENTO IDEAL PARA VOCÊ.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-12">
          {SERVICES.map((group) => (
            <div key={group.group}>
              <h3 className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
                {group.group}
              </h3>
              <div className="hairline mt-5" />
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((service, i) => {
                  counter += 1;
                  const n = String(counter).padStart(2, "0");
                  return (
                    <Reveal key={service.title} delay={i * 80}>
                      <article className="card-surface flex h-full flex-col p-7">
                        <span className="text-sm text-silver tabular-nums">{n}</span>
                        <h4 className="mt-4 text-lg font-bold">{service.title}</h4>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.2em] text-silver uppercase transition-all hover:gap-3 hover:brightness-125"
                        >
                          Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-3xl">
          <span className="section-label">Como funciona</span>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            DO PRIMEIRO CONTATO À EVOLUÇÃO.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:mt-14">
          {[STEPS.slice(0, 3), STEPS.slice(3)].map((group, gi) => (
            <ol key={gi} className="divide-y divide-border border-y border-border">
              {group.map((step, i) => (
                <Reveal
                  key={step.n}
                  delay={(gi * 3 + i) * 60}
                  as="li"
                  className="flex gap-4 py-5"
                >
                  <span className="shrink-0 text-sm text-silver tabular-nums">
                    {step.n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold tracking-wide uppercase sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          ))}
        </div>

      </div>
    </section>
  );
}

function Methodology() {
  return (
    <section id="metodologia" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-3xl">
          <span className="section-label">Metodologia</span>
          <h2 className="mt-6 text-3xl leading-tight font-extrabold sm:text-4xl">
            SEU TREINAMENTO NÃO DEVE SER <span className="text-silver-gradient">GENÉRICO.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Cada pessoa possui uma história, uma condição, uma rotina e necessidades
            diferentes. Por isso, o treinamento precisa ser pensado para a pessoa, e não a
            pessoa adaptada a um treino pronto.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            A prescrição do exercício deve considerar as características individuais, as
            necessidades, limitações, objetivos e realidade de cada pessoa.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            O exercício físico pode ser utilizado como uma ferramenta de saúde para
            promover mudanças de dentro para fora, contribuindo para a melhora da saúde,
            funcionalidade e qualidade de vida.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <article className="card-surface h-full p-7">
                <span className="text-sm text-silver tabular-nums">{p.n}</span>
                <h3 className="mt-4 text-base font-bold tracking-wide uppercase">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}


function Testimonials() {
  return (
    <section id="depoimentos" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-28">
        <Reveal className="max-w-3xl">
          <span className="section-label">Depoimentos</span>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            RESULTADOS QUE VÃO ALÉM DO ESPELHO.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-lg border border-border bg-surface p-3">
                <div className="overflow-hidden rounded-md border border-border bg-background">
                  <img
                    src={t.image.url}
                    alt={`Depoimento de ${t.author}`}
                    className="w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-4 text-center text-xs tracking-[0.24em] text-silver uppercase">
                  {t.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-4xl px-5 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <span className="section-label">FAQ</span>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">PERGUNTAS FREQUENTES</h2>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline data-[state=open]:text-silver">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background: "radial-gradient(circle at 50% 100%, #ffffff 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center lg:py-36">
        <Reveal>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            QUERO MUDAR DE VIDA!
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            O primeiro passo começa com uma conversa.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-silver mt-10 !px-12 !py-5 !text-base"
          >
            Falar com Juan
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const info = [
    { label: "WhatsApp", value: PHONE_DISPLAY },
    { label: "Instagram", value: INSTAGRAM_HANDLE },
    { label: "E-mail", value: EMAIL },
    { label: "Atendimento presencial", value: "Cidade de São Paulo" },
    { label: "Atendimento domiciliar", value: "Sim" },
    { label: "Atendimento online", value: "Sim" },
  ];

  return (
    <section id="contato" className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <Reveal>
          <span className="section-label">Contato</span>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">VAMOS CONVERSAR?</h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Conte um pouco sobre você, seus objetivos e o que está buscando. Vamos
            entender qual acompanhamento pode fazer sentido para o seu caso.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-silver"
            >
              <MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-silver"
            >
              <Instagram className="h-4 w-4" /> Conhecer o Instagram
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <dl className="divide-y divide-border border-y border-border">
            {info.map((row) => (
              <div key={row.label} className="flex flex-wrap justify-between gap-3 py-5">
                <dt className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                  {row.label}
                </dt>
                <dd className="text-sm break-all text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
