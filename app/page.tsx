"use client";

import { useEffect, useState } from "react";

type HelloResponse = {
  message: string;
  from: string;
};

export default function Home() {
  const [data, setData] = useState<HelloResponse | null>(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ color: "red" }}>🔥 Version 3 – Frontend + Backend</h1>
      <p>This page is served by Next.js behind Nginx.</p>

      <hr style={{ margin: "24px 0" }} />

      <h2>Backend API response:</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading from /api/hello ...</p>
      )}
    </main>
  );
}
