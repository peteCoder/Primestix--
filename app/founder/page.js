import React from "react";
import Image from "next/image";

const Founder = () => {
  return (
  <div>
     <div className='bg-black mt-20'>
    <div className='flex flex-col font-raleway max-w-[1100px] w-full mx-auto py-20'>
        <div className='text-white'>
          <h1 className='text-4xl font-semibold'>About PRIMESTIX</h1>
          <p className='capitalize text-2xl italic'>Founder's message</p>
        </div>
      </div>

    </div>
     <div className="flex flex-col font-raleway max-w-[1100px] mt-20 w-full mx-auto py-20 relative">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-6">
          <Image
            className="w-[550px] absolute -top-[20%] left-0 h-auto"
            src="/founder.jpg"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-6 text-black">
          <div>

            <p className="mt-10 mb-5 text-xl relative">
              DAMAC has become synonymous with iconic projects setting new
              standards for design, craftsmanship and inspired lifestyles
            </p>
          </div>
        </div>
      </div>
    </div>
    <div  className='flex flex-col font-raleway max-w-[1100px] w-full mx-auto py-5 font-[400] text-xl leading-8'><p>
    The DAMAC Properties story runs in tandem with the UAE’s journey to becoming the world’s foremost trade, hospitality and lifestyle destination.

In 2002, Dubai’s leadership opened up the real estate market to international investors by allowing freehold ownership. DAMAC Properties was incorporated the same year, and purchased land for its very first project in the Dubai Marina area.

Since then, DAMAC has become synonymous with iconic projects setting new standards for design, craftsmanship and inspired lifestyles.

Today, DAMAC Properties enjoys a position of trust, established over years of uncompromising quality. We have consistently stuck to a mantra of sound design and attention to the small details that make a home special. I am proud that the DAMAC brand – home-grown in the UAE – is now recognised in international markets stretching from Saudi Arabia to London.

We genuinely appreciate what our country and our communities have done for us. In turn, our corporate social responsibility ethos and culture of philanthropy demand that we give back. Through initiatives such as the Hussain Sajwani – DAMAC Foundation, we engage with our communities in ways that alleviate hardship, respond to urgent need, and deliver the skills and learning required for a sustainable future.

On behalf of DAMAC, I would like to express my deepest gratitude to the visionary rulers of the UAE. It is their progressive vision and efforts that have made the UAE the nation it is today.

I am also incredibly grateful to our community of employees, partners and shareholders. Thank you for supporting us in creating exceptional lifestyle experiences, and for believing in our ability to create flourishing communities. Our successes would not be possible without your commitment.

Finally, and most importantly, I’d like to express my appreciation to our customers, without whom we could never have achieved so much. Quite simply, you inspire us to do even better.<br/>
<span className="text-slate-600 italic font-bold">Founder's Name</span>
    </p></div>
    
  </div>
   
  );
};

export default Founder;
