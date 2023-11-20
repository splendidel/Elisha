import React from 'react';
//motion 
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//img
import Img1 from '../assets/portfolio-img1.JPG';
import Img2 from '../assets/portfolio-img2.JPG';
import Img3 from '../assets/portfolio-img3.JPG';

const Work = () => {
  return(
  <section  className='section' id='work'>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row gap-x-20 lg:ml-28 lg:mr-28'>
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
      className=' flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
        {/* text */}
        <div>
          <h2 className='h2 leading-tight text-accent'>
            My Latest <br/> Work. 
          </h2>
          <p className='max-w-sm mb-8 tracking-wider lg:max-w-lg'>Web design project - for 
          E.ultimate Tech, Pronium Solution, <br/> Ecoist Africa & more... 

          <br/> Technoly Used: Tailwind | React | HTML/CSS | JS | WordPress
          </p>
          <a href='https://wa.me/qr/AEQXLGDKEPADA1' target="_blank" rel="noreferrer"><button className='btn btn-sm'>Let's Chat</button></a>
        </div>

        {/* image */}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
        {/* overlay */}
        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
        {/* img */}
        <img 
        className='group-hover:scale-125 transition-all duration-500' 
        src={Img1} 
        alt='' 
        />
        {/* pretitle */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
         <span className='text-gradient'>Web Design</span>
        </div>
        {/* title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
        <span className='text-3xl text-white'>Pronium</span>
        </div>
        </div>
      </motion.div>

      <motion.div
      variants={fadeIn('left', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
      className='flex-1 flex flex-col gap-y-12'>

        {/* image */}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
        {/* overlay */}
        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
        {/* img */}
        <img 
        className='group-hover:scale-125 transition-all duration-500' 
        src={Img2} 
        alt='' 
        />
        {/* pretitle */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
         <span className='text-gradient'>Web Design</span>
        </div>
        {/* title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
        <span className='text-3xl text-white'>Eultimate Technology</span>
        </div>
        </div>
        {/* image */}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:mt-3'>
        {/* overlay */}
        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
        {/* img */}
        <img 
        className='group-hover:scale-125 transition-all duration-500' 
        src={Img3} 
        alt='' 
        />
        {/* pretitle */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
         <span className='text-gradient'>Web Design</span>
        </div>
        {/* title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
        <span className='text-3xl text-white'>Ecoist Africa</span>
        </div>
        </div>

      </motion.div>
    </div>
  </div>
  </section>
  );
};

export default Work;
