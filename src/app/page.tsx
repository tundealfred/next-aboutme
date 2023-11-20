import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-300 font-mono">
      <h1 className="text-3xl font-bold underline">About me</h1>
      <img src="https://avatars.githubusercontent.com/u/31713698?s=400&u=d9c4ab5f8ad668e418862533a4c8300fd3ad1b98&v=4" />
      <p>
        I am a reliable team player, I bring exceptional resourcefulness and a
        knack for creative problem-solving to the table. My expertise extends to
        effective communication with customers, fellow employees, and
        management. I excel in seamlessly orchestrating Information Technology
        and administrative support functions to ensure the smooth operation of
        systems and processes, ultimately enhancing team productivity.
      </p>
    </main>
  );
}
