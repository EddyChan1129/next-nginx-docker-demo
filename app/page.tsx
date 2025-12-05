import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main style={{ padding: 40 }}>
        <h1 style={{ color: 'red' }}>🔥 Version 2 – Edited by Eddy</h1>
        <p>This page is updated and deployed via Docker + Nginx.</p>
      </main>
    </div>
  );
}
