import React, { useState } from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';
import project5 from '../assets/project-5.webp';
import project6 from '../assets/project-6.png';
import project7 from '../assets/project-7.png';

const projects = [
  {
    id: 1,
    category: 'web',
    img: project2,
    link: 'https://taylancecrm.vercel.app/',
    name: 'Taylance CRM',
    description: 'Taylance CRM helps manage clients, leads, and projects in one streamlined platform with interactive modern design.',
    technologies: [
      { label: 'React', color: '#61dafb', width: '80%' },
      { label: 'Express.js', color: '#ab4908ff', width: '80%' },
      { label: 'MUI', color: '#1076adff', width: '60%' },
    ],
    button:'Live View'
  },
  {
    id: 2,
    category: 'web',
    img: project1,
    link: 'https://thisistayyab.github.io/NoteHub/',
    name: 'NoteHub',
    description: 'A modern note-taking web app built with React and Express.js. Organize, edit, and sync your notes seamlessly.',
    technologies: [
      { label: 'React', color: '#61dafb', width: '80%' },
      { label: 'Express.js', color: '#ab4908ff', width: '70%' },
      { label: 'MongoDB', color: '#00782eff', width: '60%' },
    ],
    button:'Live View'
  },
  {
    id: 3,
    category: 'design',
    img: project3,
    link: 'https://leetcode.com/u/thisistayyab/',
    name: 'LeetCode Profile',
    description: 'I solved 1000+ LeetCode problems, showcasing strong problem-solving skills and deep expertise in DSA.',
    technologies: [
      { label: 'C++', color: '#004488ff', width: '90%' },
      { label: 'JavaScript', color: '#ffe96bff', width: '5%' },
      { label: 'Python', color: '#252cffff', width: '5%' },
    ],
    button:'Live View'
  },
  {
    id: 4,
    category: 'web',
    img: project7,
    link:'https://github.com/thisistayyab/Taynio-chat',
    name: 'Taynio Chat',
    description: 'Taynio Chat is a modern real-time chat app created using socket.io for fast, secure, and reliable messaging.',
    technologies: [
      { label: 'React', color: '#61dafb', width: '80%' },
      { label: 'Node.js', color: '#0d5619ff', width: '70%' },
      { label: 'Socket.io', color: '#005595ff', width: '60%' },
    ],
    button:'Repo Link'
  },
  {
    id: 5,
    category: 'web',
    img: project5,
    link:"https://newswave-thisistayyab.netlify.app/",
    name: 'NewsWave',
    description: 'Newswave is a dynamic and engaging news aggregator app, designed to keep you informed and up-to-date with the latest headlines.',
    technologies: [
      { label: 'React', color: '#61dafb', width: '90%' },
      { label: 'Bootstrap', color: '#0fb0f0ff', width: '50%' },
      { label: 'Integration', color: '#ff0000ff', width: '40%' },
    ],
    button:'Live View'
  },
  {
    id: 6,
    category: 'web',
    img: project6,
    link:'https://thisistayyab.github.io/EditWave/',
    name: 'EditWave',
    description: 'A modern online text editor web app with a clean UI, real-time editing, and seamless user experience.',
    technologies: [
      { label: 'React', color: '#61dafb', width: '90%' },
      { label: 'Bootstrap', color: '#7000e1ff', width: '90%' },
      { label: 'JavaScript', color: '#ffe96bff', width: '60%' },
    ],
    button:'Live View'
  },
  {
    id: 7,
    category: 'web',
    img: project4,
    link: 'https://thisistayyab.github.io/kashif-project/',
    name: "Shahid's Portfolio",
    description: 'A modern and beautifully designed portfolio website built to showcase personal brand, skills, and projects with elegance.',
    technologies: [
      { label: 'React', color: '#61dafb', width: '90%' },
      { label: 'CSS', color: '#0fb0f0ff', width: '90%' },
      { label: 'JavaScript', color: '#ffe96bff', width: '60%' },
    ],
    button:'Live View'
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
            <div className="project__info">
              {project.technologies && project.technologies.map((tech, idx) => (
                <div className="project__techrow" key={tech.label + idx}>
                  <span className="project__techlabel">{tech.label}</span>
                  <div className="project__techloadingbar-outer">
                    <div
                      className="project__techloadingbar-inner"
                      style={{ width: tech.width, background: tech.color }}
                    />
                  </div>
                </div>
              ))}
              <h3 className="project__name">{project.name}</h3>
              <p className="project__desc">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project__liveview">{project.button}</a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 