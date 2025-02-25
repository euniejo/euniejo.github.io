"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code2, Box, Server, PiIcon as Python, Database, Globe } from "lucide-react"

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
    title: "Vanilla JavaScript",
    description:
      "Expert in JavaScript fundamentals and modern ES6+ features. Building interactive and dynamic web applications with pure JavaScript.",
    icon: Code2,
    color: "text-yellow-500",
  },
  {
    title: "Angular, React & Vue",
    description:
      "Extensive experience with modern frontend frameworks, building scalable SPAs and responsive web applications.",
    icon: Box,
    color: "text-blue-500",
  },
  {
    title: "Node.js",
    description: "Building fast and scalable server-side applications and APIs using Node.js and Express.",
    icon: Server,
    color: "text-green-500",
  },
  {
    title: "Python & Django",
    description: "Developing robust backend systems and web applications using Python and Django framework.",
    icon: Python,
    color: "text-indigo-500",
  },
  {
    title: "Databases",
    description:
      "Working with various databases including PostgreSQL, MongoDB, and Redis for efficient data management.",
    icon: Database,
    color: "text-rose-500",
  },
  {
    title: "Web Technologies",
    description: "Proficient in HTML5, CSS3, and modern web APIs. Creating responsive and accessible web experiences.",
    icon: Globe,
    color: "text-cyan-500",
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

