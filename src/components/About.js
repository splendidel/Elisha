import React from 'react';
import imageElisha from '../assets/elisha.png'
//countup 
import CountUp from 'react-countup';
//interception observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import {fadeIn} from '../variants';
//Link
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
  <section className='section' id='about' ref={ref}> 
     <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
          { /*img*/}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'> 
          <img src={imageElisha} alt='' className='flex mix-blend-lighten'/>
          </motion.div>
          {/*text*/}
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
            I'm a Front-end Developer.
            </h3>
            <p className='mb-6 tracking-wide'>I started off my career as a freelance graphics designer. Fell <br/> in love with design
              and transitioned to frontend engineering
            </p>
            {/** stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              {/* <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3} /> : 
                  null} 
                  
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/> 
                  Experience
                </div>
              </div> */}

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={100} duration={3} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/> 
                  Completed
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={99} duration={3} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied  <br/> 
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
            <Link to='contact'>
            <button className='btn btn-lg'>Contact me</button>
            </Link>
              
              <Link to='work' className='text-gradient btn-link cursor-pointer'>
                My Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
     </div>
  </section>
  );
};

export default About;
