import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-300 font-mono">
      <h1 className="text-4xl font-bold">About me</h1>
      <img
        className="border-double border-4 border-indigo-600 rounded-b-lg m-5"
        src="https://avatars.githubusercontent.com/u/31713698?s=400&u=d9c4ab5f8ad668e418862533a4c8300fd3ad1b98&v=4"
      />
      <h2 className="text-2xl font-bold">Babatunde Alfred O.</h2>
      <h2 className="text-2xl underline p-10">Summary</h2>
      <p className="text-justify">
        I am a reliable team player, I bring exceptional resourcefulness and a
        knack for creative problem-solving to the table. My expertise extends to
        effective communication with customers, fellow employees, and
        management. I excel in seamlessly orchestrating Information Technology
        and administrative support functions to ensure the smooth operation of
        systems and processes, ultimately enhancing team productivity.
      </p>
      <div className="flex">
        <div className="rounded overflow-hidden shadow-lg m-10 p-5">
          <h2 className="text-2xl underline p-10">Hard Skills</h2>
          <ul className="text-center">
            <li>Software Developer</li>
            <li>Data Analyst</li>
            <li>Project Manager</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        <div className="rounded overflow-hidden shadow-lg m-10 p-5">
          <h2 className="text-2xl underline p-10">Soft Skills</h2>
          <ul className="text-center">
            <li>Leader</li>
            <li>Team Player</li>
            <li>Problem Solving</li>
            <li>Organization</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
