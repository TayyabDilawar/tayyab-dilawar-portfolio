import type { ArchitectureLayer } from "@/types";

export function ArchitectureDiagram({
  layers,
}: {
  layers: ArchitectureLayer[];
}) {
  return (
    <ol className="flex flex-col items-stretch gap-2">
      {layers.map((layer, index) => (
        <li key={`${layer.label}-${index}`} className="flex flex-col items-center">
          <div className="w-full max-w-md rounded-xl border border-border bg-card px-4 py-3 text-center">
            <p className="font-medium">{layer.label}</p>
            <p className="text-sm text-muted">{layer.detail}</p>
          </div>
          {index < layers.length - 1 ? (
            <span className="my-1 h-6 w-px bg-accent/50" aria-hidden />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
