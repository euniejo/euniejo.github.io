"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "../../theme-toggle"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function ResumePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-background text-black'} flex flex-col`}>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:p-8">

          {/* Header */}
          <header className="w-full md:col-span-4 flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4 md:mb-0`}>Online Resume</h1>
            <div className="flex items-center gap-4">
              <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              <a href="./Resume.pdf" download="Resume.pdf">
                <Button
                  variant="outline"
                  className={`gap-2 ${isDarkMode ? 'border-white text-white hover:bg-gray-700' : 'border-black text-black hover:bg-gray-200'}`}
                >
                  <Download className="size-4" />
                  Download PDF
                </Button>
              </a>
            </div>
          </header>

          {/* Sidebar */}
          <aside className={`md:col-span-1 p-4 rounded-lg shadow ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div className="text-center">
              <img src="./photo.jpeg" alt="Eunie Jo" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Eunie (Eunheui) Jo</h2>
              <p className="text-muted-foreground"> Software Engineer</p>
              <p className="text-sm">Waterloo, Ontario</p>
              <p className="text-sm">(519) 781-7638</p>
              <p className="text-sm">iameuniejo@gmail.com</p>
              <div className="flex justify-center items-center gap-2">
                <FaLinkedin className="w-4 h-4" />
                <a href="https://linkedin.com/in/euniejo" className="text-blue-500">LinkedIn</a>
              </div>
            </div>

            {/* Skills */}
            <section className="mt-6">
              <h3 className="text-xl font-semibold">| Skills</h3>
              <SkillCard category="Languages" skills={["HTML/CSS/JavaScript", "Python", "C++","C#"]} />
              <SkillCard category="Frameworks & Libraries" skills={["ASP.NET/MVC", "React"]} />
              <SkillCard category="Databases" skills={["SQL/NoSQL/InfluxDB"]} />
              <SkillCard category="Cloud & Tools" 
                  skills={[
                    "AWS (EC2, S3, Route53)", 
                    "Azure (Virtual Machines)", 
                    "CI/CD (GitHub Actions)", 
                    "Perforce/Git", 
                    "REST APIs", 
                  ]} 
                />
            </section>
              {/* Education */}
              <section className="mt-6">
              <h3 className="text-xl font-semibold">| Education</h3>
              <SkillCard category="" 
              skills={[
                "Computer Programming & Analysis, Conestoga College, Waterloo, Ontario",
                "MEng in Electrical Engineering, Korea University, Seoul, South Korea"
              ]}
              />
       
            </section>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-3 space-y-8">

            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-bold border-b pb-2">Professional Summary</h2>
              <p className="text-muted-foreground">
              Dynamic Software Engineer with a strong foundation in backend development, cloud computing, and full-stack solutions. Proficient in Python, JavaScript, and C++, with hands-on experience designing scalable architectures for multi-tenant web services. Skilled in front-end development using React and deploying real-time, data-driven dashboards with InfluxDB and Grafana. Experienced in cloud platforms (Azure, AWS) and automating CI/CD pipelines using GitHub Actions. Dedicated to delivering high-quality software, mastering new technologies, and maintaining clean, efficient code.
               </p>
            </section>

            {/* Professional Experience */}
            <section>
              <h2 className="text-2xl font-bold border-b pb-2">Professional Experience</h2>
              <ExperienceCard
                title="Software Engineer"
                company="VARLab – Virtual and Augmented Reality Lab"
                period="Sep 2024 – Current"
                description={[
                  "Developed a chatbot server using educational material embeddings and RAG technology",
                  "Built and managed a Python-based backend server for system reliability and performance",
                  "Designed and implemented a React-based frontend for seamless user experience",
                  "Deployed InfluxDB on Azure and implemented Grafana dashboard for real-time sensor data monitoring",
                  "Built an interactive XR dashboard on the Tilt Five platform for immersive data visualization"
                ]}
              />
              <ExperienceCard
                title="AI Software Engineer"
                company="Smart Center"
                period="May 2024 – Aug 2024"
                description={[
                  "Processed and analyzed sensor data from manufacturing environments",
                  "Developed and optimized machine learning models to detect anomalies and improve manufacturing efficiency"
                ]}
              />
              <ExperienceCard
                title="Software Engineer"
                company="Samsung Electronics, South Korea"
                period="Feb 2012 – Jul 2022"
                description={[
                  "Developed middleware for speech recognition, focusing on voice data acquisition and signal preprocessing",
                  "Integrated speech recognition solutions into embedded systems with real-time processing",
                  "Conducted comprehensive testing and validation to improve recognition accuracy, response time, and noise robustness"
                ]}
              />
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold border-b pb-2">Projects</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Encounter Notes App</CardTitle>
                  <p className="text-sm text-muted-foreground">Tech Stack: C#, Win Forms, Regex, SQL</p>
                </CardHeader>
                <CardContent>
                  <p>Created an application to streamline clinical encounter note management with CRUD operations stored in Azure SQL Database.</p>
                  <Link href="https://github.com/euniej/encounter-note" className="text-blue-500">GitHub Repository</Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Order Management and Invoicing System</CardTitle>
                  <p className="text-sm text-muted-foreground">Tech Stack: HTML, CSS, JavaScript, Node.js, Express, MongoDB, AWS EC2</p>
                </CardHeader>
                <CardContent>
                  <p>Designed and implemented a user-friendly web application for efficient customer ordering and invoicing.</p>
                  <Link href="https://github.com/euniej/order-management" className="text-blue-500">GitHub Repository</Link>
                </CardContent>
              </Card>
           
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
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
  );
}

function ExperienceCard({ title, company, period, description }: { title: string; company: string; period: string; description: string[] }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle>{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
          <div className="text-sm text-muted-foreground">{period}</div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function SkillCard({ category, skills }: { category: string; skills: string[] }) {
  return (
    <div className="mt-4">
      <h5 className="font-semibold">{category}</h5>
      <ul className="list-disc list-inside space-y-1 text-sm">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
