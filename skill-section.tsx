import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = {
  프론트엔드: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  백엔드: ["Node.js", "Python", "Java", "Express", "Django", "Spring Boot"],
  데이터베이스: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  "도구 & 기타": ["Git", "Docker", "AWS", "Linux", "Jest", "Cypress", "GitHub Actions"],
}

export function SkillSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {Object.entries(skills).map(([category, items]) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle>{category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

