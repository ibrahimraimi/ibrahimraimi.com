import { CSSProperties } from "react";

import "./page.css";
import { cn } from "./util";
import ThemeSwitcher from "./ThemeSwitcher";
import CrossBackground from "./components/CrossBackground";
import { HeroProvider, HeroSwitcher, HeroVisual } from "./Hero";
import Link from "next/link";

function Header({ className }: { className?: string }) {
  return (
    <div className={cn("text-sm", className)}>
      <span className="text-muted-foreground">IR</span>
      <h1 className="text-brand font-semibold ">Ibrahim Raimi</h1>
      <p className="text-muted-foreground">Design and Development</p>
    </div>
  );
}

function About({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 text-muted-foreground text-sm",
        className
      )}
    >
      <p className="text-foreground font-medium text-base">
        I help founders & businesses turn ideas into products.
      </p>
      <p className="text-foreground font-medium text-base">
        I&apos;m a creative frontend & design engineer, dedicated to crafting
        impactful digital experiences for global brands & individuals.
      </p>
      <p>
        I like projects where design and code move together, so nothing gets{" "}
        <span className="italic">lost in translation.</span>
      </p>

      <p>
        I&apos;m drawn to new ideas. I dive in fast and explore broadly. Whether
        I&apos;m shaping early concepts, refining products in production, or
        crafting bold visuals for one-off moments, I make sure everything feels
        cohesive and on-brand.
      </p>
    </div>
  );
}

function Work({ className }: { className?: string }) {
  const projects = [
    {
      title: "Noirstalga Avenue",
      description: "Noirstalgia Avenue –  Curated Digital & Retro Camera Store",
      href: "https://noirstalgiaavenue.com",
      year: "2025",
    },
    {
      title: "Bruno Arizio",
      description:
        "Globally recognized Independent Designer and Creative Director based in the Netherlands.",
      href: "https://brunoarizio.com",
      year: "2024",
    },
    {
      title: "Eniola Korty Olanrewaju",
      description:
        "A clean and expressive website for filmmaker and YouTuber Eniola Korty — also known as Korty EO. The site reflects her creative range as a graphic designer, model, artist, and storyteller, with a focus on bold visuals and smooth storytelling.",
      href: "https://korty.ibrahimraimi.com",
      year: "2023",
    },
    {
      title: "Fountain of Elixir",
      description:
        "An elegant eCommerce experience built for a Lagos-based jewelry brand founded in 2023. The website showcases timeless pieces designed to empower wearers with confidence and individuality.",
      href: "https://thefountainofelixir.com",
      year: "2023",
    },
    {
      title: "Musngr",
      description:
        "A sleek and modern website for a music streaming platform. The site features a clean design with a focus on user experience and a seamless streaming experience.",
      href: "https://musngr.studio21.studio",
      year: "2024",
    },
    {
      title: "Studio 21",
      description:
        "A  small team of talented people driven to create meaningful, impactful digital work, and have fun doing it.",
      href: "https://studio21.studio",
      year: "2024",
    },
    {
      title: "Digital Playground",
      description: "A creative web application for building interactive digital letters and layouts with multimedia elements.",
      href: "https://digitalplayground.site",
      year: "2025"
    }
  ];

  return (
    <div
      className={cn(
        "flex flex-col gap-6 text-muted-foreground text-sm",
        className
      )}
    >
      <h2 className="text-foreground font-medium text-base">Selected Work</h2>

      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-foreground font-medium group-hover:text-brand transition-colors">
                <Link href={project.href} target="_blank">
                  {project.title}
                </Link>
              </h3>
              <span className="text-xs opacity-60">{project.year}</span>
            </div>

            <p className="mb-3 leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>

      {/* <p className="mt-2">
        View more work on{" "}
        <a
          href="https://github.com/ibrahimraimi"
          className="underline font-medium hover:text-brand decoration-1 focus-brand"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        or{" "}
        <a
          href="https://dribbble.com/ibrahimraimi"
          className="underline font-medium hover:text-brand decoration-1 focus-brand"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribbble
        </a>
      </p> */}
    </div>
  );
}

function Contact({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "gap-5 flex flex-col text-muted-foreground text-sm",
        className
      )}
    >
      <p>
        If you share this vision, and are looking for a partner to push your
        product forward, say hello{" "}
        <a
          href="mailto:ibrahimraimi.tech@gmail.com"
          className="underline font-medium hover:text-brand decoration-1 focus-brand"
        >
          ibrahimraimi.tech@gmail.com
        </a>
      </p>

      <p>Available remotely.</p>
    </div>
  );
}

function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "flex justify-between  gap-5 text-muted-foreground2",
        className
      )}
    >
      <span className="flex items-center gap-2 text-sm">
        <HeroSwitcher className="h-[0.85rem] w-[0.85rem] opacity-60" />
        {new Date().getFullYear()}{" "}
        <span className="hidden md:inline">Ibrahim Raimi</span>
      </span>

      <span className="flex gap-4 items-center text-sm">
        <a
          href="mailto:ibrahimraimi.tech@gmail.com"
          className="hover:text-brand focus-brand"
        >
          Contact
        </a>
        <ThemeSwitcher className="text-muted-foreground2 opacity-60" />
      </span>
    </footer>
  );
}

export default function Home() {
  return (
    <div
      className="page px-3 overflow-x-clip selection:text-brand selection:bg-brand/10"
      style={
        {
          "--fluid-col":
            "clamp(20px, calc(20px + (80 * ((100vw - 450px) / (1024 - 450)))), 100px)",
        } as CSSProperties
      }
    >
      <div className="content grid grid-cols-[var(--fluid-col),1fr,var(--fluid-col)] max-w-3xl w-full min-h-screen mx-auto grid-rows-[repeat(7,auto),1fr,repeat(5,auto)] border-l border-r border-dashed">
        <HeroProvider>
          <div className="grid grid-rows-subgrid col-[2] row-[1/13] border-l border-r">
            <div className="h-10 col-[2] row-[1] outlined-bottom dashed" />
            <Header className="col-[2] row-[2] py-3 md:py-8 md:px-8 px-3" />
            <div className="h-4 col-[2] row-[3] outlined-top outlined-bottom" />
            <div className="w-full aspect-square min-w-0 relative col-[2] row-[5]">
              <CrossBackground className="text-neutral-700" />
              <HeroVisual className="aspect-square" />
            </div>
            <About className="col-[2] row-[6] outlined-top outlined-bottom py-8 md:px-8 px-3 " />
            <Work className="col-[2] row-[7] outlined-top outlined-bottom py-8 md:px-8 px-3" />
            <Contact className="col-[2] row-[8] py-8 md:px-8 px-3 pb-12" />
            <div className="h-4 col-[2] row-[9] outlined-top outlined-bottom" />
            <Footer className="col-[2] row-[10] py-3 md:px-8 px-3" />
            <div className="h-10 col-[2] row-[11] outlined-top dashed" />
          </div>
        </HeroProvider>
      </div>
    </div>
  );
}
