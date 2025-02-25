"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, LinkIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

type Project = {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  category: "ai" | "web" | "other"
}

const projects: Project[] = [

  {
    title: "Educational Chatbot Service",
    description: "A chatbot service leveraging RAG (Retrieval-Augmented Generation) for enhanced knowledge retrieval, with a Python backend and a React frontend.",
    tags: ["Python", "RAG", "React", "LLM", "AI"],
    github: "",
    demo: "https://ai.cvri.ca",
    category: "ai",
  },
  {
    title: "Order Management & Invoicing System",
    description: "A full-stack web application for efficient order management and invoicing, featuring customer data capture and invoice generation.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "AWS EC2"],
    github: "https://github.com/euniej/order-management",
    demo: "",
    category: "web",
  },
  {
    title: "Clinical Encounter Notes App",
    description: "A comprehensive application for managing clinical encounter notes with features for creating, editing, and storing patient records in Azure SQL.",
    tags: ["C#", "WinForms", "Azure SQL", "Regex"],
    github: "https://github.com/euniej/encounter-note",
    demo: "",
    category: "other",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function ProjectGrid({ category }: { category?: "ai" | "web" | "other" }) {
  const filteredProjects = category ? projects.filter((project) => project.category === category) : projects

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {filteredProjects.map((project, index) => (
        <motion.div key={index} variants={item}>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github}>
                      <Github className="mr-2 size-4" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.demo && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.demo}>
                      <LinkIcon className="mr-2 size-4" />
                      Demo
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

