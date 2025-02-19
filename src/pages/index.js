import AnimatedText from "@/components/AnimatedText";

import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/iam.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>I'am Portofolio</title>
        <meta
          name="description"
          content="built with Nextjs and Tailwind CSS"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-24 md:!pt-16 sm:!pt-28">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
            <div className="w-1/2 lg:hidden md:flex flex self-center max-h-fit">
              {
                <Image
                  priority={true}
                  src={profilePic}
                  alt="image"
                  className="h-auto w-200"
                  height={400}
                  width={450}
                  sizes="33vw"
                />
              }
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hey, I’m I'am"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <div className="flex w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-4xl xl:!text-4xl lg:!text-4xl md:!text-4xl sm:!text-3xl">
                  Web Developer | IoT Enthusiast | Tech Explorer
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
              I'm a first-year undergraduate student in Electrical Engineering at Universitas Gadjah Mada, passionate about Web Development and IoT. As a member of KOMATIK UGM’s IoT division, I explore the intersection of hardware and software. In the web development field, I contribute to Find IT UGM 2025 and Technocorner UGM 2025, bringing digital experiences to life. Check out my portfolio to see my latest projects! 🚀              </p>
              <div className="mt-2 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
                <Link
                  href="/about/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Get To Know Me
                </Link>
                <Link
                  href="/projects/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
                >
                  projects
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
