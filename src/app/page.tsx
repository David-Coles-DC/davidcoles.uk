"use client";

import { useRef } from "react";

import Header from "@/components/Header"

export default function Home() {
    const homeSection = useRef<HTMLElement | null>(null);
    const aboutSection = useRef<HTMLElement | null>(null);
    const projectsSection = useRef<HTMLElement | null>(null);
    const contactSection = useRef<HTMLElement | null>(null);
    return (
        <main className={'scroll-pt-[90px] size-full'}>
            <Header homeSection={homeSection} aboutSection={aboutSection} projectsSection={projectsSection} contactSection={contactSection} />
            <section ref={homeSection}>HOME</section>
            <section ref={aboutSection}>ABOUT</section>
            <section ref={projectsSection}>PROJECTS</section>
            <section ref={contactSection}>CONTACT</section>
        </main>
    );
}
