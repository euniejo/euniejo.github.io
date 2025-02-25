"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ProjectGrid } from "../components/project-grid"
import { Skills } from "../components/skills"
import { ThemeToggle } from "../theme-toggle"
import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-background text-black' }`}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="text-lg font-bold">
            JD
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="#about" className="text-lg font-medium hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="text-lg font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#contact" className="text-lg font-medium hover:text-primary">
              Contact
            </Link>
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 space-y-24 px-4 md:px-6">
        {/* Hero Section */}
        <section className="py-12 bg-blue-500/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-4 text-center lg:text-left"
              >
                <div className="space-y-2">
                  <Badge className="inline-flex text-lg font-medium bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors">
                    Available for hire
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Eunie Jo
                  </h1>
                  <br />
                  <span className="block text-lg md:text-3xl font-normal text-muted-foreground mt-4">
                    Software Engineer
                  </span>
                  <p className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 mx-auto lg:mx-0">
                  I’m a software engineer specializing in frontend and backend development for scalable, data-driven applications. With expertise in AI/ML, cloud computing, and real-time dashboards, I build end-to-end solutions. Curious how I can help your project? Check out my project portfolio and online resume.  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row items-center justify-center lg:justify-start">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white text-md py-4 px-6" asChild>
                    <Link href="#contact">
                      Get in touch
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-blue-500/20 hover:border-blue-500/40 text-md py-4 px-6" asChild>
                    <Link href="#projects">View Projects</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-500/20 hover:border-blue-500/40 text-md py-4 px-6" asChild>
                    <Link href="/resume">View Resume</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="relative size-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl opacity-30" />
                  <img
                    alt="engineer"
                    className="relative mx-auto aspect-square rounded-full object-cover border-2 border-primary/10"
                    src="/photo_2.jpeg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tight">What I Do</h2>
            <p className="md:text-lg text-muted-foreground max-w-[800px] mx-auto">
              Experienced Software Engineer with a strong background in backend development, cloud computing, AI/ML,
              and real-time data processing. Dedicated to building scalable and efficient software solutions.
            </p>
          </motion.div>
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="md:text-lg text-muted-foreground max-w-[1000px] mx-auto">
              A selection of my work including AI models, web applications, cloud systems, and data visualization.
            </p>
          </motion.div>
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="justify-center">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ai">AI/ML</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <ProjectGrid />
            </TabsContent>
            <TabsContent value="ai">
              <ProjectGrid category="ai" />
            </TabsContent>
            <TabsContent value="web">
              <ProjectGrid category="web" />
            </TabsContent>
            <TabsContent value="other">
              <ProjectGrid category="other" />
            </TabsContent>
          </Tabs>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Let's Connect</CardTitle>
                <p className="md:text-lg text-muted-foreground max-w-[1000px] mx-auto">
                Feel free to reach out for collaborations or just a friendly hello</p>
              </CardHeader>
              <CardContent className="max-w-[600px] mx-auto space-y-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-md font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full p-2 border rounded-md bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-md font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full p-2 border rounded-md bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-md font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      rows={4}
                      className="w-full p-2 border rounded-md bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-md py-4 px-6">
                    Send Message
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="text-md bg-background px-2 text-muted-foreground">Or reach out via</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 items-center">
                  <Link href="mailto:iameuniejo@gmail.com" className="text-md flex items-center gap-2 hover:text-primary">
                    <Mail className="size-4" />
                    iameuniejo@gmail.com
                  </Link>
                  <div className="flex gap-4">
                    <Link href="https://github.com/euniejo" className="group">
                      <FaGithub className="w-8 h-8 group-hover:text-blue-500 transition-colors duration-300" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com/in/euniejo" className="group">
                      <FaLinkedin className="w-8 h-8 group-hover:text-blue-500 transition-colors duration-300" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>

      <footer className="w-full border-t mt-8">
        <div className="container mx-auto flex flex-col md:flex-row h-14 items-center justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Eunie Jo. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2 md:mt-0">
            <Link href="https://github.com/euniejo" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/euniejo" className="text-sm text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}