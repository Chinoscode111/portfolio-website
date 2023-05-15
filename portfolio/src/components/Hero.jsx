import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
   <section className="relative w-full h-screen margin-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
           mx-auto flex flex-row gap-5 items-start `}>
            <div className="flex felx-col justify-center  mt-5">
              {/* <div className="w-5 h-5 rounded-full bg-[#915eff]"/> */}
              <div className="w-1 sm:h-80 h-40 violet-gradient"/>

              <div>
                <h2 className={`${styles.heroHeadText} 
                text-white ml-2`}>Hi, I'm <span
                className="text-[#915eff]">Chinmay</span></h2>
                <p className={`${styles.heroSubText} mt-2 ml-2 text-white`}>
                  Introduction here......................
                </p>
              </div>
            </div>
         </div>
         <ComputersCanvas />
         
          <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
            <a href="#about">
              <div 
                className="w-[35px] h-[64px] rounded-3xl border-4
                border-secondary flex justify-center items-start p-2 ">
                  <motion.dev 
                    animate ={{ y: [0,24,0] }}
                    transition = {{
                      duration : 1.5,
                      repeat : Infinity,
                      repeatType : 'loop',
                    }}
                    className ="w-3 h-3 rounded-full bg-secondary mb-1"
                  />
                  
                </div>
            </a>

         </div>
   </section>
  )
}

export default Hero