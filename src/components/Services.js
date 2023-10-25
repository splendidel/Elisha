import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants' 
// Link 
import { Link } from 'react-scroll';

//services data
const services = [
  {
    name: 'Development',
    description: 'design, manage and maintain website',
    link: 'learn more',
  },

  // {
  //   name: 'UI/UX Design',
  //   description: 'Lorem Ipsum dolor sit, amet consectetur adipisicing elit olo psum dolr sot, amet consectetur adipisicin',
  //   link: 'learn more',
  // },

  {
    name: 'Web Design',
    description: 'create beautiful business, office and personal website',
    link: 'learn more',
  },
  
  {
    name: 'Graphics',
    description: 'professionally create visual content to communicate messages.',
    link: 'learn more',
  },
];


const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/**text & image */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 mb-12 lg:mb-0'> 
        {/* lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten */}
          <h2 className='h2 text-accent mb-6'>What I Do</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
              Front-end Development.
          </h3>
          <Link to='work'>
          <button className='btn btn-sm'>See my work</button>
          </Link>
        </motion.div>
        {/**services */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}>
        {/**service list*/}
          <div>
            {services.map((service, index) => {
              //destructure service
              const {name, description, link} = service;
              return(
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                     <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                     <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight />
                    </a>

                    <Link to='work' className='text-gradient text-sm cursor-pointer'>
                    {link}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
