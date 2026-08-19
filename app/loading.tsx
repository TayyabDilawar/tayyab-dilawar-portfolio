import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="py-20">
      <div className="h-8 w-40 animate-pulse rounded bg-border" />
      <div className="mt-6 h-12 w-2/3 max-w-xl animate-pulse rounded bg-border" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="h-40 animate-pulse rounded-2xl bg-border" />
        <div className="h-40 animate-pulse rounded-2xl bg-border" />
        <div className="h-40 animate-pulse rounded-2xl bg-border" />
      </div>
    </Container>
  );
}
