import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Terminal } from "@/components/ui/terminal";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        Looks like this route doesn&apos;t exist.
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The path you requested is not in the app router. Head back to a known page.
      </p>
      <div className="mt-8 w-full max-w-lg text-left">
        <Terminal />
      </div>
      <Link href="/" className={`${buttonVariants()} mt-8`}>
        Back to Home
      </Link>
    </Container>
  );
}
