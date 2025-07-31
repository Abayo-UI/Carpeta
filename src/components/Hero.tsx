import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin } from 'lucide-react';
import { toast} from "sonner"

const Hero = () => {

  
  return (
    <section
      id="home"
      className="pt-24 md:pt-28 min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <div className="space-y-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-foreground">FullStack</span>
              <br />
              <motion.span
                className="p-2  text-primary bg-gradient-dark bg-clip-text text-primary"
                initial={{ boxShadow : "none" }} // so that our motion works even when page first loads 
                animate={{
                  boxShadow: [
                    "-2px 2px  5px 1px #21DFE2",
                    "-2px 2px  5px 3px #21DFE2",
                    "-2px 2px  5px 1px #21DFE2",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                Developer
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-start text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Leslie is a MERN and PERN stack developer with a strong focus on
              frontend development. I specialize in building responsive,
              user-friendly, and high-performance web applications using modern
              technologies and industry best practices
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="/Cover_Letter.docx">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyan hover:shadow-cyan/70 transition-all duration-300 hover:scale-105"
                onClick={ () => toast.success("Cv downloading...")}
               >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>

            <a href="https://github.com/Abayo-UI" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/leslie-abayo-bba046265/"
              target="_blank"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;