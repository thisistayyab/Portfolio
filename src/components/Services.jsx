import React from 'react';
import { motion } from 'framer-motion';
import { RiWindowLine, RiStoreLine, RiStackLine, RiShareLine, RiSeoLine, RiShareCircleLine } from 'react-icons/ri';

const iconMap = {
  'ri-window-line': <RiWindowLine size={28} />,
  'ri-store-line': <RiStoreLine size={28} />,
  'ri-stack-line': <RiStackLine size={28} />,
  'ri-share-line': <RiShareLine size={28} />,
  'ri-seo-line': <RiSeoLine size={28} />,
  'ri-share-circle-line': <RiShareCircleLine size={28} />,
};

function Services() {
  return (
    <section className="section__container service__container" id="service" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Blurred Circle Background */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: 160,
        height: 160,
        background: '#00c2ff',
        borderRadius: '50%',
        filter: 'blur(80px)',
        opacity: 0.15,
        zIndex: 0,
      }} />
      <motion.p
        className="section__subheader"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >My Services</motion.p>
      <motion.h2
        className="section__header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
      >What I Do?</motion.h2>
      <motion.p
        className="section__description"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        viewport={{ once: true }}
      >
        I specialize in a wide range of web development services designed to
        transform your vision into reality.
      </motion.p>
      <div className="service__grid">
        {[
          { icon: 'ri-window-line', title: 'Website Design', desc: 'I craft user-friendly interfaces that engage visitors and help you achieve your online goals with minimum efforts.' },
          { icon: 'ri-store-line', title: 'E-commerce Solutions', desc: 'I build secure, scalable, and user-centric online stores that enhance the shopping experience and drive conversions.' },
          { icon: 'ri-stack-line', title: 'DSA Mastery', desc: 'From arrays to advanced algorithms, we build efficient and optimized solutions that form the backbone of high-performance applications.' },
          { icon: 'ri-window-line', title: 'Web Development', desc: 'I build responsive, high-performance web applications using the MERN stack, tailored to meet your business needs.' },
          { icon: 'ri-seo-line', title: 'SEO', desc: 'My SEO strategies are tailored to your specific goals, helping you reach your target audience and grow your online presence.' },
          { icon: 'ri-share-circle-line', title: 'Digital Marketing', desc: 'From pay-per-click (PPC) advertising to social media marketing, I ensure your brand stands out in the crowded digital landscape.' },
        ].map((item, i) => (
          <motion.div
            className="service__card"
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span>{iconMap[item.icon]}</span>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services; 