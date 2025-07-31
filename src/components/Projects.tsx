import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'WholeSale-Management-System',
      description: 'This is a software solution that streamlines and automates inventory, order processing, supplier contacts, and sales tracking for wholesale businesses.',
      image: '/responsive StockSmart.PNG',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'react-router', 'react-hot-toast'],
      liveUrl: 'https://stock-smart-57w8.onrender.com/',
      githubUrl: 'https://github.com/Abayo-UI/wholesale-management-system'
    },
    {
      title: 'Recipe App',
      description: 'This React Recipe App is a web application that lets users browse, search, and view detailed recipes by fetching real-time data from a third-party API, offering an interactive and dynamic cooking experience.',
      image: '/responsiveRecipe2.PNG',
      tech: ['React.js', 'Bootstrap', 'react-router', 'API intergration', 'vite'],
      liveUrl: 'https://react-recipe-app-umber.vercel.app/',
      githubUrl: 'https://github.com/Abayo-UI/React-Recipe-App'
    },
    {
      title: 'Weather App',
      description: 'Interactive weather website with location-based forecasts and responsive design.',
      image: '/weatherresponsive.PNG',
      tech: ['React', 'API Intergration', 'Weather API', 'Bootstrap CSS'],
      liveUrl: 'https://weather-app-chi-virid.vercel.app/',
      githubUrl: 'https://github.com/Abayo-UI/Weather-App'
    },
    {
      title: 'LPL Tournament',
      description: 'LPL (Ludo Parchisi League) is a tournament app I developed to help players track their performance, view upcoming matches, and stay updated on tournament rules during the LPL competition.',
      image: '/responsive LPL.PNG',
      tech: ['React', 'Progressive web App', 'Bootstrap CSS', 'CRA', 'D3.js'],
      liveUrl: 'https://ludo-parchisi-league.netlify.app/',
      githubUrl: 'https://github.com/Abayo-UI/Ludo-Parchisi-League'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-cyan/20 hover:shadow-xl">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-dark-surface">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <div className="text-4xl text-primary/50"></div> */}
                    <img src={project.image}/>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <a href={project.liveUrl} target="_blank">
                      <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank">
                      <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <h3 className="mt-2 text-center">
          To view all the projects that I have worked on, follow this <a href="https://github.com/Abayo-UI?tab=repositories" target='_blank' style={{color: "cyan"}}>github link</a>
        </h3>
      </div>
    </section>
  );
};

export default Projects;

