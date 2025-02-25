"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ProjectGrid } from "./project-grid"
import { Skills } from "./skills"
import { ThemeToggle } from "./theme-toggle"
import { useState } from "react"
export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-28 items-center justify-between">
          <Link href="/" className=" text-lg font-bold">
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

      <main className="container py-8 space-y-24">
        {/*  Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-[800px] mx-auto text-center space-y-4 px-4"
          >
            <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors">
              Available for hire
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Software Engineer
              <span className="block text-xl md:text-2xl font-normal text-muted-foreground mt-4">
                Building Intelligent Systems
              </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[600px] mx-auto">
              Experienced Software Engineer with a strong background in backend development, cloud computing, AI/ML,
              and real-time data processing. Dedicated to building scalable and efficient software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="#contact">
                  Get in touch
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500/20 hover:border-blue-500/40" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>
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
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              A selection of my work including AI Chatbot, web applications, cloud systems, and data visualization.
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

        {/* Skills Section */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">Technologies and tools I work with.</p>
          </motion.div>
          <Skills />
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
                <CardTitle className="text-2xl">Let's Connect</CardTitle>
                <CardDescription>Feel free to reach out for collaborations or just a friendly hello</CardDescription>
              </CardHeader>
              <CardContent className="max-w-[600px] mx-auto space-y-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
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
                    <label htmlFor="email" className="text-sm font-medium">
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
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      rows={4}
                      className="w-full p-2 border rounded-md bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                    Send Message
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or reach out via</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 items-center">
                  <Link href="mailto:iameuniejo@gmail.com" className="flex items-center gap-2 hover:text-primary">
                    <Mail className="size-4" />
                    john@example.com
                  </Link>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://github.com">
                        <Github className="size-4" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://linkedin.com">
                        <Linkedin className="size-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://twitter.com">
                        <Twitter className="size-4" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex h-14 items-center justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Eunie Jo. All rights reserved.</p>
          <div className="flex items-center gap-4">
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

