"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Brain, Code2, Box, Server, PiIcon as Python, Database, Globe } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const skills = [
  {
    title: "JavaScript & Node.js",
    description:
      "Proficient in JavaScript (ES6+) for both frontend and backend development. Experienced in building interactive web applications with Vanilla JavaScript and developing scalable backend services and RESTful APIs using Node.js.",
    icon: Code2,
    color: "text-yellow-500",
  },
  {
    title: "Python & Django",
    description:
      "Utilized Python for large language model (LLM) applications, machine learning model training, and backend development using Django. Skilled in data preprocessing, model optimization, and building robust web applications integrating AI solutions.",
    icon: Python,
    color: "text-indigo-500",
  },
  {
    title: "React",
    description:
      "Hands-on experience with React for building scalable SPAs and responsive web applications, focusing on clean architecture and user-centric design.",
    icon: Box,
    color: "text-blue-500",
  },
  {
    title: "Databases",
    description:
      "Experienced in working with MySQL, InfluxDB, MongoDB, and PostgreSQL for efficient data management, real-time analytics, and scalable storage solutions.",
    icon: Database,
    color: "text-rose-500",
  },
  {
    title: "Web Technologies",
    description:
      "Proficient in HTML5, CSS3, and modern web APIs. Experienced in creating responsive, accessible web experiences and deploying scalable applications using cloud platforms and CI/CD pipelines.",
    icon: Globe,
    color: "text-cyan-500",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Hands-on experience with large language models (LLMs), machine learning model training, and AI-driven applications. Skilled in data preprocessing, model optimization, and integrating AI solutions using frameworks like TensorFlow, PyTorch, and scikit-learn.",
    icon: Brain,
    color: "text-purple-500",
  },
]

export function Skills() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {skills.map((skill, index) => (
        <motion.div key={index} variants={item}>
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-background border ${skill.color}`}>
                  <skill.icon className="size-6" />
                </div>
                <h3 className="font-semibold tracking-tight">{skill.title}</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{skill.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

