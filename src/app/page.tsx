"use client";

import { useRef } from "react";

import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

export default function Home() {
    const homeSection = useRef<HTMLElement | null>(null);
    const aboutSection = useRef<HTMLElement | null>(null);
    const projectsSection = useRef<HTMLElement | null>(null);
    const contactSection = useRef<HTMLElement | null>(null);
    return (
        <main className={'scroll-pt-[90px] size-full'}>
            <Header homeSection={homeSection} aboutSection={aboutSection} projectsSection={projectsSection} contactSection={contactSection} />
            <section className={'flex items-center justify-center text-center'} ref={homeSection}>
                <div>
                    <h1>David Coles</h1>
                    <h2>Developer</h2>
                    <h2>Artist</h2>
                    <h2>Maker</h2>
                </div>
            </section>
            <section className={'flex items-center justify-center'} ref={aboutSection}>ABOUT</section>
            <section className={'flex items-center justify-center'} ref={projectsSection}>PROJECTS</section>
            <section className={'flex items-center justify-center'} ref={contactSection}>
                <div>
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}
