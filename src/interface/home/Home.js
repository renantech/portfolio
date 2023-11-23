import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

import styles from './Home.module.css';

function Home() {
    function socialLinks(url) {
        window.open(url, '_blank')
    }

    return ( 
        <div className={styles.home}>
            <header>
                <nav className={styles.nav}>
                    <ul className={styles.pages}>
                        <li><a href="https://react-icons.github.io/react-icons/search/#q=linkedin">Home</a></li>
                        <li><a href="https://react-icons.github.io/react-icons/search/#q=linkedin">Projetos</a></li>
                        <li><a href="https://react-icons.github.io/react-icons/search/#q=linkedin">Sobre mim</a></li>
                    </ul>
                    <div className={styles.person}>
                        <p>RM</p>
                    </div>
                    <ul className={styles.social}>
                        <li><AiFillInstagram onClick={() => socialLinks('https://www.instagram.com/renan.mvc/')} /></li>
                        <li><FaGithub onClick={() => socialLinks('https://github.com/renantech')} /></li>
                        <li><FaLinkedin onClick={() => socialLinks('https://www.linkedin.com/in/renan-tech/')}  /></li>
                        <li><BsFillMoonStarsFill  /></li>
                    </ul>
                </nav>
            </header>
        </div>
     );
}

export default Home;