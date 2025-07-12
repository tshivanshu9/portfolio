import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        {(() => {
          const text = 'Get in touch';
          const specialIndices = [2, 5, 10, 11];
          return text.split('').map((char, index) => (
            <span
              key={index}
              className={
                specialIndices.includes(index)
                  ? 'text-neutral-500'
                  : 'text-white'
              }
            >
              {char}
            </span>
          ));
        })()}
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a className="border-b" href="#">
          {CONTACT.email}
        </a>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Shivanshu Tripathi. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
