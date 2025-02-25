import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Timeline() {
  return (
    <div className="relative space-y-4">
      <TimelineItem
        date="2020 - 현재"
        title="ABC 기업"
        role="시니어 소프트웨어 엔지니어"
        description="대규모 웹 애플리케이션 개발 및 유지보수"
      />
      <TimelineItem
        date="2018 - 2020"
        title="XYZ 스타트업"
        role="풀스택 개발자"
        description="신규 서비스 개발 및 런칭"
      />
      <TimelineItem date="2016 - 2018" title="DEF 기업" role="주니어 개발자" description="웹 서비스 프론트엔드 개발" />
    </div>
  )
}

function TimelineItem({
  date,
  title,
  role,
  description,
}: {
  date: string
  title: string
  role: string
  description: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="grid gap-1">
          <span className="text-sm font-normal text-muted-foreground">{date}</span>
          <span className="text-xl">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className="font-medium">{role}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </CardContent>
    </Card>
  )
}

