"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        Error
      </p>
      <h1 className="mt-3 text-3xl font-semibold">Something went wrong.</h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        Reload this page. If it keeps failing, open an issue or email me directly.
      </p>
      <Button type="button" className="mt-6" onClick={reset}>
        Try again
      </Button>
    </Container>
  );
}
