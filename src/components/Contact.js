import React from 'react';
//motion
import {motion} from 'framer-motion'
//variants 
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row lg:mr-28 lg:ml-28'>
        {/* text */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }} 
          className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='h3 uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[60px] leading-none mb-12'>
              Let's work <br/> together! 
            </h2>
          </div>
        </motion.div>
        
        {/* form */}
        <motion.form 
          name='contact' 
          method='POST' 
          data-netlify="true"
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start lg:max-w-lg'
          >
          
          <input 
            type='text' 
            name='fname'
            placeholder='Your name'
            required
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
            />

          <input 
            type='email' 
            name='email'
            placeholder='Your email'
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
            required
            />

            <textarea 
            name='Message' 
            placeholder='Your message' 
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
            required
            ></textarea>
            <input type="hidden" name="form-name" value="contact" />
            <button type="submit" className='btn btn-sm'>Send message</button>
        </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
