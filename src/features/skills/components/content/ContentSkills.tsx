"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";

export function ContentSkills() {
    return (
        <section id="skills" className="relative flex flex-col py-10 overflow-hidden">
            <StarField />
            <SectionTitle text="My Skills" />
        </section>
    );
}
