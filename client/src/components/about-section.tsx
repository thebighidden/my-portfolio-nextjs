import { motion } from "framer-motion";
import { Download, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const stats = [
    { label: "Experience", value: "5+ Years" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Coffee Consumed", value: "∞" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'alex-johnson-cv.pdf';
    link.click();
  };

  const handleChatClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
                Hi! I'm Alex, a passionate full-stack developer with over 5 years of experience creating 
                innovative web applications. I specialize in modern JavaScript frameworks and have a keen 
                eye for UI/UX design.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech began with a Computer Science degree, but my real education came from 
                building real-world applications and staying curious about emerging technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new hiking trails, experimenting with 
                photography, or contributing to open-source projects that make development more accessible.
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
                alt="Alex Johnson - Full Stack Developer" 
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
                <i className="fas fa-palette mr-2"></i>Designing
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10 transform translate-x-6 translate-y-6"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
