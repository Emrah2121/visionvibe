import type {Metadata} from "next";

export const metadata: Metadata = {
  title : "About",
}

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">Haqqımızda</h1>
    </div>
  );
}