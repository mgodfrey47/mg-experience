import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute top-[28rem] dotted w-full h-[35rem]"></div>
      <div className="bg-white grid grid-cols-[5rem_1fr_5rem] justify-items-center min-h-screen gap-16">
      <div className="border-r-9 border-mg-navy h-full w-full"></div>
      <main className="flex flex-col gap-[32px] items-center text-center">
        <h1 className="text-[4rem] mt-32">Hi, I'm Megan Godfrey.</h1>
        <p className="max-w-[40rem]">
          I'm a front-end web developer with a background in neuroimaging research.
          I have a passion for translating complex requirements into user-friendly applications.
        </p>
        <p>
          Here are some examples of projects I’ve worked on...
        </p>

      </main>
      <div className="border-l-9 border-mg-navy h-full w-full"></div>
      </div>
    </>

  );
}
