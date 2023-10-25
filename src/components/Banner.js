import React from 'react';
//images 
import Image from '../assets/el-tpr.png';
//icons 
import { FaGithub, FaYoutube, FaDribbble, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
//type animation 
import { TypeAnimation } from 'react-type-animation';
// motion 
import { motion } from 'framer-motion';
//variants 
import { fadeIn } from '../variants'; 
//Link
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
          <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
            {/** text */}
            <div className='flex-1 text-center font-secondary lg:text-left'>
              <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7 }} 
              className='text-[45px] mt-10 font-bold leading-[0.8] lg:text-[80px]'>
                ELISHA <span>MOMOH</span>
              </motion.h1>

              <motion.div 
              variants={fadeIn('up', 0.4)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7 }} 
              className='mb-6 text-[26px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]'>
                <span className='mr-4'>I am a</span>
                <TypeAnimation sequence={[
                  'Front-end Developer',
                  2000,
                  'Designer',
                  2000,
                  'IT Expert',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
                />
              </motion.div>

                <motion.p 
                  variants={fadeIn('up', 0.5)} 
                  initial='hidden' 
                  whileInView={'show'} 
                  viewport={{once: false, amount: 0.7 }} 
                  className='mb-8 max-w-lg mx-auto lg:mx-0 text-xl tracking-wide'
                  >
                    I started off my career as a freelance graphics designer.

                    {/* I transitioned to UI/UX design */} <br/>

                    I fell in love with design 

                    {/* We broke up It was mutual */} <br/>

                    I transitioned to frontend engineering
                </motion.p>
                <motion.div
                  variants={fadeIn('up', 0.6)} 
                  initial='hidden' 
                  whileInView={'show'} 
                  viewport={{once: false, amount: 0.7 }}  
                  className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                  <Link to='contact'>
                  <button className='btn btn-lg'>Contact me</button>
                  </Link>
                  
                  <Link to='work' className='text-gradient btn-link cursor-pointer'> My Portfolio</Link>
                </motion.div>

                {/** socials */}
                <motion.div 
                  variants={fadeIn('up', 0.7)} 
                  initial='hidden' 
                  whileInView={'show'} 
                  viewport={{once: false, amount: 0.7 }} 
                  className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                  <a href='https://www.linkedin.com/in/elisha-momoh-b23686211/' target="_blank"><FaLinkedin /></a>
                  <a href='https://github.com/splendidel' target="_blank"><FaGithub /></a>
                  <a href='https://www.instagram.com/elisha_splendid/' target="_blank"><FaInstagram /></a>
                  <a href='https://twitter.com/elish_mh' target="_blank"><FaTwitter /></a> 
                </motion.div>
            </div>

            {/** image */}
          <motion.div 
              variants={fadeIn('down', 0.5)} 
              initial='hidden' 
              whileInView={'show'}  
              className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
              <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
 