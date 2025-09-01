import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Image src="/logo.png" alt="magical server" width={500} height={500} className="m-auto" />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About</Link></p>
      <p><Link href="/blog">Blog</Link></p>
    </main>
  );
}
