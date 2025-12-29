"use client";

import Image from "next/image";

export default function Welcome() {
  return (
    <section className="w-full bg-transparent py-20 flex flex-col items-center text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-3xl">
        Welcome to Your Safe Space, LightKeepers!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">

        <div className="flex justify-center">
          <Image
            src="/welcome.jpg" 
            alt="Safe Space"
            width={500}
            height={500}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>


        <div className="text-left text-lg leading-relaxed space-y-4">
          <p>
            Sometimes, the world around us gets so loud that we tend to lose
            ourselves in that noise. The noise that tells us that "You are not
            good enough", "You should do more", "You don't deserve the best",
            "You will never measure up to others".
          </p>
          <p>It gets exhausting, doesn't it?</p>
          <p>
            My aim is to help you rise above that noise— to find your calm in
            the chaos. I strive to make a space for you where your voice will
            always have a place, where the quiet whispers of YOU will be heard,
            where you can gently find a way back to yourself.
          </p>
        </div>
      </div>
    </section>
  );
}