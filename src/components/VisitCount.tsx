"use client";

import { useEffect, useState } from "react";

export function VisitCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/visitas`)
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  return <span>{count ?? "..."}</span>;
}
