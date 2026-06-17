import { Card } from "@/components/ui/card";

const about = `I'm a Systems Engineer passionate about Full Stack development with a growing interest in software architecture. I'm motivated by designing well-structured, scalable, and maintainable systems, applying patterns like MVC and hexagonal architecture alongside SOLID principles and clean architecture. I enjoy understanding the underlying problem before writing code, and I strive for every technical decision to make sense for both the team and the business. I've worked on web and mobile projects from start to finish, collaborating directly with clients and agile teams, and integrating AI automation when it adds real value.`;

export function AboutCard() {
  return (
    <Card variant="ghost" padding="none">
      <p className="text-zinc-300 text-base leading-relaxed">{about}</p>
    </Card>
  );
}
