import { BorderBeam } from "@/components/ui/border-beam";
import { MiniProject } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function MiniProjectCard({
  title,
  subtitle,
  demoLink,
  githubLink,
  desc,
  tech,
}: MiniProject) {
  return (
    <div
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-2xl border-2
        p-6 transition-all duration-300
        ds-border-color ds-bg-alt
        hover:-translate-y-2
        hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]
      "
    >
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex justify-between items-start">
          <h2 className="truncate text-xl font-bold ds-text-3xl">{title}</h2>

          <div className="flex items-center gap-3">
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub repository`}
                className="
                relative z-20
                inline-flex size-9 items-center justify-center
                rounded-lg border
                ds-border-color
                transition-all duration-200
                hover:-translate-y-1
                hover:bg-muted
              "
              >
                <Github className="size-5" />
              </Link>
            )}

            {demoLink && (
              <Link
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="
                relative z-20
                inline-flex size-9 items-center justify-center
                rounded-lg border
                ds-border-color
                transition-all duration-200
                hover:-translate-y-1
                hover:bg-muted
              "
              >
                <ExternalLink className="size-5" />
              </Link>
            )}
          </div>
        </div>

        <p
          className="
            mt-4 
            text-sm leading-6
            text-muted-foreground
          "
        >
          {desc}
        </p>

        <div className="mt-5">
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="
                  rounded-md border px-2.5 py-1
                  text-xs font-medium
                  ds-border-color
                  bg-muted/50
                  transition-colors
                  group-hover:bg-muted
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <BorderBeam
        duration={10}
        delay={3}
        size={400}
        borderWidth={3}
        className="from-transparent via-blue-500 to-transparent"
      />
    </div>
  );
}
