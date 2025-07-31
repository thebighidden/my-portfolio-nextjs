import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { 
  SiReact, 
  SiVuedotjs, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiAmazon
} from "react-icons/si";

const skills = [
  { name: "React", Icon: SiReact, color: "text-blue-500" },
  { name: "Vue.js", Icon: SiVuedotjs, color: "text-green-500" },
  { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-500" },
  { name: "HTML5", Icon: SiHtml5, color: "text-red-500" },
  { name: "CSS3", Icon: SiCss3, color: "text-blue-600" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-green-600" },
  { name: "Python", Icon: SiPython, color: "text-blue-600" },
  { name: "Firebase", Icon: SiFirebase, color: "text-orange-500" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-700" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-700" },
  { name: "AWS", Icon: SiAmazon, color: "text-orange-600" },
];

const proficiencyLevels = [
  { skill: "Frontend Development", level: 95 },
  { skill: "Backend Development", level: 88 },
  { skill: "UI/UX Design", level: 92 },
  { skill: "Cloud & DevOps", level: 75 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group text-center p-6 bg-muted rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <motion.div
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <skill.Icon className={`text-5xl ${skill.color} mb-4 mx-auto`} />
              </motion.div>
              <h3 className="font-semibold text-foreground">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="space-y-6">
            {proficiencyLevels.map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{item.skill}</span>
                  <span className="text-primary">{item.level}%</span>
                </div>
                <Progress 
                  value={item.level} 
                  className="h-3 bg-muted"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
