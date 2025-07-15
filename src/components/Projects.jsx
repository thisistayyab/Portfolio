import React, { useState } from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.webp';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';
import project6 from '../assets/project-6.jpg';

const projects = [
  {
    id: 1,
    category: 'web',
    img: project1,
    link: 'https://thisistayyab.github.io/NoteHub/',
  },
  {
    id: 2,
    category: 'game',
    img: project2,
  },
  {
    id: 3,
    category: 'design',
    img: project3,
    link: 'https://leetcode.com/u/thisistayyab/',
  },
  {
    id: 4,
    category: 'web',
    img: project4,
  },
  {
    id: 5,
    category: 'game',
    img: project5,
  },
  {
    id: 6,
    category: 'design',
    img: project6,
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Web Apps', value: 'web' },
  { label: 'Desktop Apps', value: 'game' },
  { label: 'Practice DSA', value: 'design' },
];

function Projects() {
  const [active, setActive] = useState('all');

  const filteredProjects =
    active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="section__container project__container" id="project" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Blurred Circle Background */}
      <div style={{
        position: 'absolute',
        top: '60%',
        left: '70%',
        width: 180,
        height: 180,
        background: '#7952B3',
        borderRadius: '50%',
        filter: 'blur(90px)',
        opacity: 0.13,
        zIndex: 0,
      }} />
      <motion.div
        className="project__header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section__header">My Projects</h2>
        <div className="project__nav">
          {filters.map((filter, i) => (
            <motion.button
              key={filter.value}
              className={`btn project__btn${active === filter.value ? ' mixitup-control-active' : ''}`}
              onClick={() => setActive(filter.value)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
      <div className="project__grid">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            className={`project__card mix ${project.category} anim`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt="project" loading="lazy" />
              </a>
            ) : (
              <img src={project.img} alt="project" loading="lazy" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 