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
    title: "Task Management App",
    description: "A mobile-first task management application with real-time updates",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "ai",
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js and Stripe integration",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "web",
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using stable diffusion",
    tags: ["Python", "PyTorch", "FastAPI", "React"],
    github: "https://github.com",
    demo: "https://example.com",
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

