"use client";

import Image from "next/image";
import WelcomeCard from "@/components/WelcomeCard";
import { useTheme } from "next-themes";
import NavBar from "@/components/Nav/NavBar";

function Page() {
  const { theme } = useTheme();

  return (
    <>
      <NavBar />
      <main className='min-h-screen w-full relative flex justify-center'>
        <Image
          src={"/welcome/wave-lefttop.svg"}
          alt='Wave Top Left'
          height={280}
          width={280}
          className='absolute top-0 left-0 z-[-1] max-w-24 md:max-w-28 lg:min-w-60'
        />

        <Image
          src={"/welcome/wave-rightbottom.svg"}
          alt='Wave Top Left'
          height={280}
          width={280}
          className='absolute bottom-0 right-0 z-[-1] max-w-24 md:max-w-28 lg:min-w-48'
        />

        <div className='flex flex-col w-[1200px]'>
          <div className=' md:grid md:grid-cols-2 gap-11 py-5 md:py-11 px-11'>
            <div className='flex justify-center items-center '>
              <div className='flex justify-center items-center'>
                <Image
                  src={
                    theme === "light"
                      ? "/welcome/title-light.svg"
                      : "/welcome/title-dark.svg"
                  }
                  alt='Welcome logo'
                  height={600}
                  width={600}
                />
              </div>
            </div>
            <div className='flex justify-center items-center mb-11 md:mb-0'>
              <Image
                src={"/welcome/welcome.svg"}
                alt='Welcome logo'
                height={600}
                width={600}
              />
            </div>
          </div>
          <div className='lg:flex gap-24 px-5 md:px-11 justify-between'>
            <WelcomeCard
              imageSrc={"/welcome/community.svg"}
              title={"Stronger Community"}
              description={
                "Freed fosters a sense of community by connecting people who have items to give with those who need them. It's a great way to meet new people, build relationships, and create a supportive network within your neighborhood."
              }
            />
            <WelcomeCard
              imageSrc={"/welcome/eco.svg"}
              title={"Eco-Friendly Living"}
              description={
                "By giving away items you no longer need, you are helping to reduce waste and minimize the environmental impact. Every item reused is one less item in the landfill, contributing to a greener planet."
              }
            />
            <WelcomeCard
              imageSrc={"/welcome/save-money.svg"}
              title={"Save Money"}
              description={
                "Why buy new when you can receive for free? Freed helps you save money by providing access to free items. Whether you're giving or receiving, you benefit from the cost savings while helping others do the same."
              }
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;

// <SignedOut>
//   <Link href={"/sign-in"}>Sign In</Link>
//   <Link href={"/sign-up"}>Sign Up</Link>
// </SignedOut>;
