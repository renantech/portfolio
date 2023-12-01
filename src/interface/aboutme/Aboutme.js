import { useState, useEffect } from 'react';

import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { PiListThin } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";

import styles from './Aboutme.module.css';

function Aboutme() {
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
                <div className={styles.aboutme}>
                    <header>
                        <nav className={styles.nav}>
                            <ul className={styles.pages}>
                                <li><a href="https://portfolio-steel-ten-78.vercel.app/">Home</a></li>
                                <li><a href="https://portfolio-steel-ten-78.vercel.app/projetos">Projetos</a></li>
                                <li><a href="https://portfolio-steel-ten-78.vercel.app/sobremim">Sobre mim</a></li>
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
                        <h1>Experiência</h1>
                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineItemContent}>
                                    <h2>Curso de Python 3 - Luiz Otávio Miranda</h2>
                                    <p>Atualmente, estou aprimorando minhas habilidades em programação por meio de um curso abrangente de Python 3, com um foco especial em Inteligência Artificial e Sistemas de Gestão. Durante este curso, tenho explorado os fundamentos da linguagem Python, praticado habilidades de codificação e aplicado o Python em projetos práticos. Além disso, estou entusiasmado em mergulhar nos conceitos de Inteligência Artificial e aprender a implementar soluções tecnológicas eficazes para Sistemas de Gestão. Estou animado para aplicar essas habilidades em projetos futuros e continuar a minha jornada de aprendizado na interseção da programação e tecnologias emergentes.</p>
                                    <span className={styles.timelineItemDate}>Nov 2023 - Presente</span>
                                </div>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineItemContent}>
                                    <h2>Curso de JavaScript e TypeScript do básico ao avançado - Luiz Otávio Miranda (Certificado <IoCheckmark />)</h2>
                                    <p>Este é o curso o qual construí a minha base na programação. Aprendi JavaScript do zero absoluto até TypeScript. Além de aprender vários outras skills na programação como HTML5, CSS3, Design Patterns, S.O.L.I.D, Banco de dados, JSON, LocalStorage, Git e GitHub. <br />
                                        <a href="https://www.udemy.com/certificate/UC-c26c75e0-5240-43b4-8586-2b4234039051/" rel='noreferrer' target='_blank'>Certificado</a>
                                    </p>
                                    <span className={styles.timelineItemDate}>Jun 2023 - Ago 2023</span>
                                </div>
                            </div>
                        </div>
                        <h1>Educação</h1>
                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineItemContent}>
                                    <h2>Estudante em Engenharia de Software - PUC Minas</h2>
                                    <p>Atualmente estou fazendo o curso bacharelado de engenharia de software na PUC Minas (Pontifícia Universidade Católica).</p>
                                    <span className={styles.timelineItemDate}>Fev 2023 - Presente</span>
                                </div>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineItemContent}>
                                    <h2>Ensino Médio Completo</h2>
                                    <p>Concluí o Ensino Médio no SESI ACR no ano de 2022. Durante esse período, participei ativamente de atividades extracurriculares, projetos, etc.</p>
                                    <span className={styles.timelineItemDate}>Fev 2020 - Dez 2022</span>
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
                                <li><a href="https://portfolio-steel-ten-78.vercel.app/">Aboutme</a></li>
                                <li><a href="https://portfolio-steel-ten-78.vercel.app/projetos">Projetos</a></li>
                                <li><a href="https://portfolio-steel-ten-78.vercel.app/">Sobre mim</a></li>
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
                        <h1>Experiência</h1>
                        <div className={styles.timelineMobile}>
                            <div className={styles.timelineItemMobile}>
                                <div className={styles.timelineItemContentMobile}>
                                    <h2>Curso de Python 3 - Luiz Otávio Miranda</h2>
                                    <p>Atualmente, estou aprimorando minhas habilidades em programação por meio de um curso abrangente de Python 3, com um foco especial em Inteligência Artificial e Sistemas de Gestão. Durante este curso, tenho explorado os fundamentos da linguagem Python, praticado habilidades de codificação e aplicado o Python em projetos práticos. <br/> Além disso, estou entusiasmado em mergulhar nos conceitos de Inteligência Artificial e aprender a implementar soluções tecnológicas eficazes para Sistemas de Gestão. Estou animado para aplicar essas habilidades em projetos futuros e continuar a minha jornada de aprendizado na interseção da programação e tecnologias emergentes.</p>
                                    <span className={styles.timelineItemDateMobile}>Nov 2023 - Presente</span>
                                </div>
                            </div>
                            <div className={styles.timelineItemMobile}>
                                <div className={styles.timelineItemContentMobile}>
                                    <h2>Curso de JavaScript e TypeScript do básico ao avançado - Luiz Otávio Miranda</h2>
                                    <p>Este é o curso o qual construí a minha base na programação. Aprendi JavaScript do zero absoluto até TypeScript. Além de aprender vários outras skills na programação como HTML5, CSS3, Design Patterns, S.O.L.I.D, Banco de dados, JSON, LocalStorage, Git e GitHub. <br />
                                        <a href="https://www.udemy.com/certificate/UC-c26c75e0-5240-43b4-8586-2b4234039051/" rel='noreferrer' target='_blank'>Certificado</a>
                                    </p>
                                    <span className={styles.timelineItemDateMobile}>Jun 2023 - Ago 2023</span>
                                </div>
                            </div>
                        </div>
                        <h1>Educação</h1>
                        <div className={styles.timelineMobile}>
                            <div className={styles.timelineItemMobile}>
                                <div className={styles.timelineItemContentMobile}>
                                    <h2>Estudante em Engenharia de Software - PUC Minas</h2>
                                    <p>Atualmente estou fazendo o curso bacharelado de engenharia de software na PUC Minas (Pontifícia Universidade Católica).</p>
                                    <span className={styles.timelineItemDateMobile}>Fev 2023 - Presente</span>
                                </div>
                            </div>
                            <div className={styles.timelineItemMobile}>
                                <div className={styles.timelineItemContentMobile}>
                                    <h2>Ensino Médio Completo</h2>
                                    <p>Concluí o Ensino Médio no SESI ACR no ano de 2022. Durante esse período, participei ativamente de atividades extracurriculares, projetos, etc.</p>
                                    <span className={styles.timelineItemDateMobile}>Fev 2020 - Dez 2022</span>
                                </div>
                            </div>
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

export default Aboutme;