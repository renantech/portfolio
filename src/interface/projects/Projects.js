import { useState, useEffect } from 'react';

import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";
import { PiListThin } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

import styles from './Projects.module.css';

function Projects() {
    const [openNavMobile, setOpenNavMobile] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function toggleNavList() {
        setOpenNavMobile(!openNavMobile);
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Limpa o evento de redimensionamento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function socialLinks(url) {
        window.open(url, '_blank')
    }

    return (
        <div>
            {windowWidth > 768 ? (
                <div className={styles.projects}>
                    <header>
                        <nav className={styles.nav}>
                            <ul className={styles.pages}>
                                <li><a href="http://localhost:3000/">Home</a></li>
                                <li><a href="http://localhost:3000/projetos">Projetos</a></li>
                                <li><a href="https://react-icons.github.io/react-icons/search/#q=linkedin">Sobre mim</a></li>
                            </ul>
                            <div className={styles.person}>
                                <p>RM</p>
                            </div>
                            <ul className={styles.social}>
                                <li><AiFillInstagram onClick={() => socialLinks('https://www.instagram.com/renan.mvc/')} /></li>
                                <li><FaGithub onClick={() => socialLinks('https://github.com/renantech')} /></li>
                                <li><FaLinkedin onClick={() => socialLinks('https://www.linkedin.com/in/renan-tech/')} /></li>
                                <li><BsFillMoonStarsFill /></li>
                            </ul>
                        </nav>
                    </header>
                    <main className={styles.main}>
                        <div className={styles.projectsTitle}>
                            <h1>Meus projetos</h1>
                        </div>
                        <div className={styles.containerProjects}>
                            <div className={styles.featuredProject}>
                                <div className={styles.backgroundProject}>

                                </div>
                                <div className={styles.aboutProject}>
                                    <p>Projeto em destaque</p>
                                    <h2>Nome do projeto</h2>
                                    <span>
                                        Breve descrição projeto.
                                    </span>
                                    <div className={styles.project}>
                                        <button>Repositório <FaGithub onClick={() => socialLinks('https://github.com/renantech')} /></button>
                                        <button>Visitar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className={styles.footer}>
                        <h3>2023 &copy; Todos os direitos reservados</h3>
                    </footer>
                </div>
            ) : (
                <div>
                    <header className={styles.headerMobile}>
                        <PiListThin onClick={toggleNavList} />
                        <div className={styles.personMobile}>
                            <p>RM</p>
                        </div>
                    </header>
                    {openNavMobile && (
                        <nav className={styles.overlayNav}>
                            <IoMdClose onClick={toggleNavList} />
                            <ul className={styles.pagesMobile}>
                                <li><a href="https://react-icons.github.io/react-icons/search/#q=linkedin">Home</a></li>
                                <li><a href="https://react-icons.github.io/react-icons/search/#q=linkedin">Projetos</a></li>
                                <li><a href="https://react-icons.github.io/react-icons/search/#q=linkedin">Sobre mim</a></li>
                            </ul>
                            <ul className={styles.socialMobile}>
                                <li><AiFillInstagram onClick={() => socialLinks('https://www.instagram.com/renan.mvc/')} /></li>
                                <li><FaGithub onClick={() => socialLinks('https://github.com/renantech')} /></li>
                                <li><FaLinkedin onClick={() => socialLinks('https://www.linkedin.com/in/renan-tech/')} /></li>
                                <li><BsFillMoonStarsFill /></li>
                            </ul>
                        </nav>
                    )}
                    <main className={styles.mainMobile}>
                        <div className={styles.mainTextMobile}>
                            <h1>React &lt;/&gt; Developer</h1>
                            <p>Estudante de engenharia de software pela PUC. Experiência com JavaScript, TypeScript e gerenciamento com notação BPM.</p>
                            <div className={styles.mainButtonsMobile}>
                                <button>Currículo<CiShare1 /> </button>
                                <a href="https://www.instagram.com/renan.mvc/">Contato</a>
                            </div>
                        </div>
                        <div className={styles.mainImageMobile}>
                            <h1>Renan Mendes</h1>
                            <h2>Engenharia de Software</h2>
                        </div>
                    </main>
                    <footer className={styles.footer}>
                        <h3>2023 &copy; Todos os direitos reservados</h3>
                    </footer>
                </div>
            )}
        </div>
    );
}

export default Projects;