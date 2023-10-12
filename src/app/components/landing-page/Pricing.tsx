"use client"

import { Switch } from "@/components/ui/switch";
import PricingCard from "./PricingCard";
import { useState } from "react";

const Pricing = () => {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="w-full h-auto px-5 pb-7 bg-[#EEEEEE]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pb-3 text-center font-bold text-2xl text-black pt-10 bg-gradient-to-r from-[#F22E76] to-[#5D14A6] text-transparent bg-clip-text">
          Start Making You Captions
        </h1>
        <p className="text-[#6B7280] text-center pb-3">No hidden fees. Cancel anytime.</p>
        <div className=" flex justify-center items-center gap-3">
          <span className="font-bold text-black text-xl">Monthly</span>
          <Switch
            checked={isChecked}
            onCheckedChange={() => setIsChecked(!isChecked)}
          />
          <span className="font-bold text-black text-xl">Yearly</span>
          <span className="text-[#5D14A6] text-xl">Save 20%</span>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center items-center gap-3 md:flex-row">
        <PricingCard
          type="Basic"
          desc="Ideal if your are just starting in content creation"
          price={16}
          credits="20 videos/month"
          upload="200MB/video"
          download_speed="Normal"
          video_length="90s max"
          ai_powered={false}
          year={isChecked}
        />
        <PricingCard
          type="Standard"
          desc="Skyrocket your audience and increase retention"
          price={25}
          credits="40"
          upload="300MB/video"
          download_speed="Fast"
          video_length="180s max"
          ai_powered={true}
          year={isChecked}
        />
        <PricingCard
          type="Premium"
          desc="Skyrocket your audience and increase retention"
          price={40}
          credits="Unlimited videos"
          upload="400MB/video"
          download_speed="Fast"
          video_length="180s max"
          ai_powered={true}
          year={isChecked}
        />
      </div>
    </section>
  )
}

export default Pricing
