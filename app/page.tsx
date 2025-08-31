import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src="/logo.png" alt="magical server" width={500} height={500} className="m-auto" />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
