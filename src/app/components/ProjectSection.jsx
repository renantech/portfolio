"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        gitUrl: '/',
        previewUrl: '/',
        tag: ["Todos", "Web"]
    },
    {
        id: 2,
        title: "Project 2",
        description: "Project 2 description",
        image: "/images/projects/2.png",
        gitUrl: '/',
        previewUrl: '/',
        tag: ["Todos", "Web"]
    },
    {
        id: 3,
        title: "Project 3",
        description: "Project 3 description",
        image: "/images/projects/3.png",
        gitUrl: '/',
        previewUrl: '/',
        tag: ["Todos", "Web"]
    },
    {
        id: 4,
        title: "Project 4",
        description: "Project 4 description",
        image: "/images/projects/4.png",
        gitUrl: '/',
        previewUrl: '/',
        tag: ["Todos", "Mobile"]
    },
    {
        id: 5,
        title: "Project 5",
        description: "Project 5 description",
        image: "/images/projects/5.png",
        gitUrl: '/',
        previewUrl: '/',
        tag: ["Todos", "Web"]
    },
    {
        id: 6,
        title: "Project 6",
        description: "Project 6 description",
        image: "/images/projects/6.png",
        gitUrl: '/',
        previewUrl: '/',
        tag: ["Todos", "Web"]
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("Todos");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

    return (
        <section id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>Meus projetos</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name="Todos" isSelected={tag === "Todos"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />)}
            </div>
        </section>
    );
}

export default ProjectSection;