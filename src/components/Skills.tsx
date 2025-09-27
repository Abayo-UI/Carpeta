import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FaReact, FaJs, FaBootstrap, FaNodeJs, FaHtml5, FaCss3, FaSass } from "react-icons/fa"
import { SiReactrouter, SiFramer, SiTailwindcss, SiGit, SiExpress, SiNpm, SiPostgresql, SiMongodb, SiPostman, SiJsonwebtokens, SiReactquery, SiEjs, SiDaisyui, SiShadcnui} from 'react-icons/si';
import React from 'react';

const Skills = () => {
  const frontendTechnologies = [
    {
      name: 'React',
      category: 'Frontend Framework',
      icon: FaReact,
      color: 'from-blue-500 to-cyan-500'
    },

    {
      name: 'JavaScript',
      category: 'Programming Language',
      icon: FaJs,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Bootstrap CSS',
      category: 'CSS Framework',
      icon: FaBootstrap,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'DaisyUI',
      category: 'Tailwind CSS component library',
      icon: SiDaisyui,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Shadcn UI',
      category: 'React component library',
      icon: SiShadcnui,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Version Control',
      category: 'Version Control',
      icon: SiGit,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'HTML',
      category: 'Programming language',
      icon: FaHtml5,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'CSS',
      category: 'Programming Language',
      icon: FaCss3,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Preprocessor',
      category: 'Preprocessor',
      icon: FaSass,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'React router',
      category: 'react library framework',
      icon: SiReactrouter,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Tailwind css',
      category: 'CSS Framework',
      icon: SiTailwindcss,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Npm',
      category: 'Package manager',
      icon: SiNpm,
      color: 'from-purple-500 to-pink-500'
    }, 
    {
      name: 'Framer-Motion',
      category: 'React animation library',
      icon: SiFramer,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'React-Query',
      category: 'React server state library',
      icon: SiReactquery,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const backendTechnologies = [
    {
      name: 'Node.js',
      category: 'Backend Runtime',
      icon: FaNodeJs,
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Express.js',
      category: 'Backend Runtime',
      icon: SiExpress,
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Ejs',
      category: 'templating engine',
      icon: SiEjs,
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Postman',
      category: 'API testing tool',
      icon: SiPostman,
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'JWT',
      category: 'Authentication package',
      icon: SiJsonwebtokens,
      color: 'from-green-500 to-green-700'
    }
  ];

  const databasesTechnologies = [
     {
      name: 'PostgreSql',
      category: 'Database',
      icon: SiPostgresql,
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'MongoDb',
      category: 'Database',
      icon: SiMongodb,
      color: 'from-green-500 to-green-700'
    }
  ]

  return (
    <section id="skills" className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Frontend <span className="text-primary">Development</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frontendTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="perspective-1000"
            >
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-cyan/20 hover:shadow-lg h-full">
                <div className="text-center space-y-4">
                  
                  <div className="flex md:justify-center" style={{ color: "#02E4E8"}}>
                    {React.createElement(tech.icon, { size: 28 })}
                    <p className="ms-2" >{tech.name}</p>
                  </div>
                  <div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
         
         {/* backend technologies */}
         <h2 className="mt-3 text-2xl md:text-3xl text-center font-bold mb-6">
            Backend <span className="text-primary">Development</span>
          </h2>
         <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          { backendTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="perspective-1000"
            >
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-cyan/20 hover:shadow-lg h-full">
                <div className="text-center space-y-4">
                  
                  <div className="flex md:justify-center" style={{ color: "#02E4E8"}}>
                    {React.createElement(tech.icon, { size: 28 })}
                    <p className="ms-2" >{tech.name}</p>
                  </div>
                  <div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Databases */}
        <h2 className="mt-3 text-2xl md:text-3xl text-center font-bold mb-6">
             Data<span className="text-primary">base</span>
          </h2>
         <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          { databasesTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="perspective-1000"
            >
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-cyan/20 hover:shadow-lg h-full">
                <div className="text-center space-y-4">
                  
                  <div className="flex md:justify-center" style={{ color: "#02E4E8"}}>
                    {React.createElement(tech.icon, { size: 28 })}
                    <p className="ms-2" >{tech.name}</p>
                  </div>
                  <div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-3">You can have a look at my <a target="_blank" href="https://github.com/Abayo-UI?tab=repositories" style={{color: "cyan"}}>Github</a> profile where I showcase all these technologies in use</p>
      </div>
    </section>
  );
};

export default Skills;