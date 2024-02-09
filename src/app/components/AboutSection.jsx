"use client";
import Image from 'next/image';
import React, { useState, useTransition } from 'react';

import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className='flex gap-8'>
                <ul className='list-disc p-2'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Banco de dados (mySQL)</li>
                </ul>
                <ul className='list-disc p-2'>
                    <li>C</li>
                    <li>C#</li>
                    <li>Java</li>
                    <li>SpringBoot</li>
                    <li>Node.js</li>
                    <li>Python</li>
                </ul>
            </div>
        ),
    },
    {
        title: "education",
        id: "education",
        content: (
            <ul className='list-disc p-2'>
                <li>Ensino Médio Completo - SESI ACR</li>
                <li>Gruaduando em Engenharia de Software - PUC Minas</li>
            </ul>
        ),
    },
    {
        title: "certifications",
        id: "certifications",
        content: (
            <ul className='list-disc p-2'>
                <li><a className='text-[#ADB7BE] hover:text-white underline' href="https://www.freecodecamp.org/certification/renandev/responsive-web-design" target='_blank'>Responsive Web Design Certification - freeCodeCamp</a></li>
                <li><a className='text-[#ADB7BE] hover:text-white underline' href="https://www.freecodecamp.org/certification/renandev/javascript-algorithms-and-data-structures-v8" target='_blank'>JavaScript Algorithm and Data Structures Certification - freeCodeCamp</a></li>
            </ul>
        ),
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section id='about' className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-20 xl:px-16'>
                <Image src='/images/about-image.png' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>Sobre mim</h2>
                    <p className='text-base lg:text-lg'>Sou um estudante de Engenharia de Software na PUC Minas, dedicado a expandir meu conhecimento em desenvolvimento e aplicar metodologias ágeis para criar soluções inovadoras e eficientes. Com habilidades em HTML, CSS, JavaScript, Python, C, Java, React, NodeJS, MySQL, Postman, Spring Boot, Tailwind, TypeScript e princípios S.O.L.I.D, estou comprometido em aprender e aplicar minha experiência para criar soluções inovadoras e eficientes.</p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Educação{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "}Certificações{" "}</TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find(t => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;