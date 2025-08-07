import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const IndividualCert = ({ value, showCertificate, setShowCertificate }) => {
  return (
    <>
      {showCertificate && (
        <motion.div
          className="mt-2 rounded-lg z-[10] absolute shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: -230 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div
            onClick={() => setShowCertificate(false)}
            style={{ cursor: "pointer" }}
          >
            <p className="text-4xl text-red-500 text-end mb-1">&times;</p>
          </div>

          <div className="relative rounded-md overflow-hidden">
            {/* Certificate image */}
            <img
              src={value}
              alt="Certificate"
              className="select-none pointer-events-none w-full h-auto"
              onContextMenu={(e) => e.preventDefault()}
            />

            {/* Watermark (visible, non-obstructive) */}
            <div className="absolute bottom-2 right-2 text-[10px] text-white/80 bg-black/30 px-2 py-0.5 rounded-md">
              © Leslie Abayo's watermark · Viewing only
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

const Certificates = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [certId, setCertId] = useState(null);

  const certificates = [
    {
      title: "Javascript Algorithms and Data Structures Certification",
      issuer: "FreeCodeCamp",
      year: "2023",
      description:
        "These are the Key concepts I learned and applied through hands-on practice during this certification program.",
      skills: [
        "Basic Js",
        "ES6",
        "Regex",
        "Debugging",
        "Data Structures",
        "Algorithm Scripting",
        "OOP",
        "Functional Programming",
        "Solved 30+ algorithm challenges",
        "logic building",
      ],
      icon: "⚛️",
      imageUrl: "/fccjsdsaa.PNG",
    },
    {
      title: "Backend Development and APIs",
      issuer: "FreeCodeCamp",
      year: "2025",
      description:
        "These are the Key concepts I learned and applied through hands-on practice during this certification program.",
      skills: [
        "Managing Packages with NPM",
        "Nodejs",
        "ExpressJs",
        "MongoDb and Mongoose",
        "MicroServices",
        "API Development",
        "Built RESTful APIs",
        "handled auth",
        "deployed backend services",
      ],
      icon: "🌐",
      imageUrl: "/fccbackendCert.PNG",
    },
    {
      title: "Relational Database",
      issuer: "FreeCodeCamp",
      year: "2024",
      description:
        "These are the Key concepts I learned and applied through hands-on practice during this certification program.",
      skills: [
        "PostgreSQL",
        "Bash Scripting",
        "Linux CLI",
        "SQL",
        "Git",
        "Nano",
        "Managing sql queries on the Linux CLI",
      ],
      icon: "📘",
      imageUrl: "/fccRelationalDTb.PNG",
    },
    {
      title: "FrontEnd Development Libraries",
      issuer: "FreeCodeCamp",
      year: "2024",
      description:
        "These are the Key concepts I learned and applied through hands-on practice during this certification program.",
      skills: [
        "Bootstrap",
        "jQuery",
        "SaSS",
        "React",
        "Redux",
        "modular apps",
        "Component based Design",
      ],
      icon: "🎨",
      imageUrl: "/fccFEDevCert.PNG",
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      year: "2023",
      description:
        "This certificate marked my entry into Programming and helped me build web dev foundation.",
      skills: [
        "HTML",
        "CSS",
        "CSS Transforms",
        "Typography",
        "CSS Variables",
        "Pseudo Selectors",
        "Accessiblity",
        "CSS Animations",
        "Flex Box",
        "Box Model",
        "Grid",
      ],
      icon: "🎨",
      imageUrl: "/fccResponsiveCert.PNG",
    },
  ];

  function handleShowCertificate(id) {
    if (certId === id && showCertificate) {
      // If clicking the same certificate that's already shown, hide it
      setShowCertificate(false);
      setCertId(null);
    } else {
      // Show the clicked certificate
      setCertId(id);
      setShowCertificate(true);
    }
  }

  return (
    <section id="certificates" className="py-24 bg-dark-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Certificates{" "}
            <span className="text-primary">&amp; Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development certifications
          </p>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <a href="MergedCertificates.pdf" target="_blank">
              <Button
                size="lg"
                className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyan hover:shadow-cyan/70 transition-all duration-300 hover:scale-105"
                onClick={() => toast.success("Opening Certificates...")}
              >
                Click to view all Certificates
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div key={cert.title}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-cyan/20 hover:shadow-lg h-full">
                  <div className="flex items-start space-x-4">
                    {/* Certificate Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-2xl border border-primary/20">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Certificate Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {cert.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {cert.issuer}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {cert.year}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* View Certificate Button */}
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                        onClick={() => handleShowCertificate(index)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {showCertificate && certId === index && (
                <div className="flex items-start justify-center relative z-[20]">
                  <IndividualCert
                    value={cert.imageUrl}
                    showCertificate={showCertificate}
                    setShowCertificate={setShowCertificate}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
