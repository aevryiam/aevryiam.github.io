import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/iam.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";


function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="built with Nextjs and Tailwind CSS"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Innovating with Code, Connecting with Tech 🔗🚀"
            className="mb-16 !text-6xl !leading-tight lg:!text-6xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium ">
                I'm Ilham Yusuf Wi'am, I'm a first-year undergraduate student in Electrical Engineering at Universitas Gadjah Mada, 
                passionate about Web Development and IoT. As a member of KOMATIK UGM’s IoT division, 
                I explore the intersection of hardware and software. In the web development field, 
                I contribute to Find IT UGM 2025 and Technocorner UGM 2025, 
                bringing digital experiences to life. 
                Check out my portfolio to see my latest projects!
              </p>
              <p className="my-4 font-medium">
              Through my involvement in Find IT UGM 2025 and Technocorner UGM 2025, I’ve had the opportunity to deepen my understanding of backend development, particularly in working with Express.js. These experiences have sharpened my skills in building robust APIs, managing databases, and optimizing server-side applications.
              </p>
              <p className="my-4 font-medium">
              On the other hand, my journey with KOMATIK UGM has provided me with valuable insights and hands-on training in IoT. I’ve been able to develop integrated systems that bridge hardware and software to solve real-world problems, turning simple ideas into functional prototypes.
              </p>
              <p className="my-4 font-medium">
                P.s my hobby is audiophile beside of coding things ✌️.
              </p>
            </div>
            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl border-2 border-solid border-dark"
                priority={true}
                src={profile}
                alt="I'am"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={200}/>+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Days of Learning
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={3} />
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Websites built for Event
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={3} />
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  IoT Projects
                </h3>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
}
