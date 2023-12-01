import { useState, useEffect } from 'react';

import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";
import { PiListThin } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

import styles from './Home.module.css';

import Modal from '../../components/modal/Modal';

function Home() {
    const [openNavMobile, setOpenNavMobile] = useState(false);
    const [openContact, setOpenContact] = useState(false);
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

    function toggleContact() {
        setOpenContact(!openContact);
    }

    return (
        <div>
            {windowWidth > 768 ? (
                <div className={openContact ? `${styles.overlay}` : `${styles.home}`}>
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
                        <div className={styles.mainImage}>
                            <h1>Renan Mendes</h1>
                            <h2>Engenharia de Software</h2>
                        </div>
                        {openContact && (
                            <Modal closeModal={toggleContact} />
                        )}
                        <div className={styles.mainText}>
                            <h1>React &lt;/&gt; Developer</h1>
                            <p>Estudante de engenharia de software pela PUC. Experiência com JavaScript, TypeScript e gerenciamento com notação BPM.</p>
                            <div className={styles.mainButtons}>
                                <button>Currículo<CiShare1 /> </button>
                                <span onClick={toggleContact}>Contato</span>
                            </div>
                        </div>
                    </main>
                    <footer className={styles.footer}>
                        <h3>2023 &copy; Todos os direitos reservados</h3>
                    </footer>
                </div>
            ) : (
                <div className={openContact ? `${styles.overlay}` : ''}>
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
                                <li><a href="https://portfolio-steel-ten-78.vercel.app/">Home</a></li>
                                <li><a href="https://portfolio-steel-ten-78.vercel.app/projetos">Projetos</a></li>
                                <li><a href="https://portfolio-steel-ten-78.vercel.app/sobremim">Sobre mim</a></li>
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
                        {openContact && (
                            <Modal closeModal={toggleContact} />
                        )}
                        <div className={styles.mainTextMobile}>
                            <h1>React &lt;/&gt; Developer</h1>
                            <p>Estudante de engenharia de software pela PUC. Experiência com JavaScript, TypeScript e gerenciamento com notação BPM.</p>
                            <div className={styles.mainButtonsMobile}>
                                <button>Currículo<CiShare1 /> </button>
                                <span onClick={toggleContact}>Contato</span>
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

export default Home;