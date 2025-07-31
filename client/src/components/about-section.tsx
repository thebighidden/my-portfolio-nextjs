import { motion } from "framer-motion";
import { Download, Coffee, GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const stats = [
    { label: "Experience", value: "3+ Years" },
    { label: "Projects Completed", value: "25+" },
    { label: "Companies Worked", value: "4+" },
    { label: "Languages", value: "3" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'soufiane-bighidene-cv.pdf';
    link.click();
  };

  const handleChatClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const educationTimeline = [
    {
      period: "2018 - 2022",
      degree: "Engineering Degree in Information and Communication Technology and Embedded Systems (TICSE INFO)",
      institution: "Private University of Marrakech (UPM)",
      description: "Specialized in modern technology solutions and embedded systems"
    },
    {
      period: "2016 - 2018", 
      degree: "Specialized Diploma in Software Development",
      institution: "ISTA TADDART, AGADIR",
      description: "Foundation in software development principles and programming"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! I'm Soufiane, a passionate Software Engineer with 3+ years of experience in 
                Front-end Development. I specialize in React.js, JavaScript, Vue.js, and Tailwind CSS, 
                creating seamless user experiences and high-performance solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began with a specialized diploma in Software Development, followed by an 
                Engineering Degree in Information and Communication Technology. I've worked with companies 
                like SCIENTIAE, Dieze Center, and Major Media, delivering scalable web applications.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm fluent in Arabic, French, and English, and I'm open to relocation across EU and Canada. 
                Available for visa sponsorship and always excited about new opportunities in tech.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-primary mb-2">{stat.label}</h4>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 pt-6"
              >
                <Button
                  onClick={handleDownloadCV}
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  onClick={handleChatClick}
                  className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl font-semibold transition-all duration-300"
                >
                  <Coffee className="mr-2 h-4 w-4" />
                  Let's Chat
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
                alt="Soufiane Bighidene - Software Engineer" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
              />
              
              <motion.div
                initial={{ opacity: 0, rotate: -3 }}
                whileInView={{ opacity: 1, rotate: 3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl transform rotate-3 shadow-lg"
              >
                <i className="fas fa-code mr-2"></i>Coding
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, rotate: 3 }}
                whileInView={{ opacity: 1, rotate: -3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl transform -rotate-3 shadow-lg"
              >
                <i className="fas fa-palette mr-2"></i>Frontend
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10 transform translate-x-6 translate-y-6"></div>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="text-primary" />
              Education Timeline
            </h3>
            <p className="text-lg text-muted-foreground">
              My academic journey in technology and software development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary md:left-1/2 md:transform md:-translate-x-1/2"></div>
              
              <div className="space-y-12">
                {educationTimeline.map((education, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative ${index === 0 ? 'md:ml-auto md:w-1/2 md:pl-12' : 'md:w-1/2 md:pr-12'}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute w-4 h-4 bg-primary rounded-full left-6 top-6 md:left-auto md:right-auto md:top-6" 
                         style={{ 
                           left: index === 0 ? 'auto' : '1.5rem',
                           right: index === 0 ? 'auto' : 'auto',
                           [index === 0 ? 'right' : 'left']: index === 0 ? 'calc(50% - 0.5rem)' : 'calc(50% - 0.5rem)'
                         }}>
                    </div>

                    <Card className="bg-muted/50 hover:bg-muted/80 transition-all duration-300 ml-12 md:ml-0">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="text-primary w-4 h-4" />
                          <span className="text-sm font-semibold text-primary">
                            {education.period}
                          </span>
                        </div>
                        <h4 className="font-bold text-lg mb-2 leading-tight">
                          {education.degree}
                        </h4>
                        <p className="text-muted-foreground font-medium mb-2">
                          {education.institution}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {education.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
