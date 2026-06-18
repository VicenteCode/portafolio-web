import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { ExperienceCard } from "@/features/experience/components/card";

export function ContentExperience() {
  return (
    <section id="experience" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text="My Experience" />
      <div className="mt-16 flex flex-col gap-6">
        <ExperienceCard
          company="Helius Consulting"
          role="Full Stack Developer (Web / Mobile)"
          period="Sep 2025 – Jun 2026 · 9 months"
          modality="Hybrid"
          description="Full Stack Developer with experience in custom web and mobile projects: requirements gathering, development, and production deployment. Built management, reporting, coworking, and billing systems using React and TypeScript on the frontend, Node.js and .NET on the backend, and mobile. Integration and consumption of REST APIs for service-to-service communication. Applied Clean Architecture, SOLID principles, and MVC and Hexagonal patterns. Worked under agile methodologies with ticket-based management, version control, and CI/CD pipeline setup in Azure DevOps for test automation and continuous deployment. Also integrated AI automation and have experience in direct client-facing communication."
        />
        <ExperienceCard
          company="Centro de Idiomas Lifelong"
          role="Frontend Web Developer"
          period="Aug 2024 – Apr 2025 · 9 months"
          modality="Hybrid"
          description="Collaborated in the development of a website using ReactJS with a focus on the frontend. Implemented the contact form to ensure user interaction and designed an image slideshow with timed transitions to enhance visual dynamism. Applied UX/UI design principles to deliver an attractive and intuitive interface."
        />
      </div>
    </section>
  );
}
