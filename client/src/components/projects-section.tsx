import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Node.js", "MongoDB"],
    featured: true,
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team collaboration",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Vue.js", "Firebase", "Tailwind"],
    featured: false,
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Advanced data visualization platform with interactive charts and real-time insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Next.js", "D3.js", "PostgreSQL"],
    featured: false,
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Full-featured social platform with real-time messaging and content sharing",
    image: "https://pixabay.com/get/g6e4cf6ba8f3b86fdc29b91afbc9a6228ad3c70588db18db21ca67a444a63890e8a4565e56169e4bb1abb80fa7dd6c64f289385890506ddc5b7bb00e39bc792f8_1280.jpg",
    technologies: ["React Native", "Express", "Socket.io"],
    featured: false,
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 5,
    title: "AI Fitness Tracker",
    description: "Smart fitness application with AI-powered workout recommendations and progress tracking",
    image: "https://pixabay.com/get/g6c0f9cfdbed69ddc2bee9302161dd8db26ec06767c8c55e15eb7fe7c7f61f6fec905c72c65dd7a144c0cbe711117e1896a1ea2869eb46d3960028e3d673177c9_1280.jpg",
    technologies: ["Flutter", "Python", "TensorFlow"],
    featured: false,
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    title: "Crypto Portfolio Tracker",
    description: "Comprehensive cryptocurrency portfolio management with real-time price tracking",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Web3.js", "Node.js"],
    featured: false,
    demoUrl: "#",
    codeUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 backdrop-blur-md text-white">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary/80 p-0"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-muted-foreground hover:text-foreground p-0"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
