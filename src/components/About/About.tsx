"use client";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./About.module.css";
import { MIN_WIDTH } from "breakpoints";
import { useTheme } from "@/context/ThemeContext";

interface Props {
    delegated?: any;
}

const About = ({ ...delegated }: Props) => {
    const downloadResume = () => {
        window.open("/Dr_SSR.pdf", "_blank");
    };
    

    const { aboutUrl, aboutUrlSmall } = useTheme();

    return (
        <div className={styles.about} {...delegated} id="about">
            <div className={styles.aboutme}>
                <SectionTitle side={"left"}>About Me</SectionTitle>
                <p className={styles.description}>
                    With over 34 years of experience in teaching, research, and administration across engineering institutions, and six years in the construction industry, I have contributed to numerous academic initiatives and professional projects. My expertise spans structural engineering, concrete technology, and curriculum development, alongside active involvement in professional organizations like the Institution of Engineers and the American Concrete Institute. 
                </p>
                <p className={styles.description}>
                    As a researcher, I have specialized in areas such as shrinkage studies in concrete, high-performance concrete, and fiber-reinforced concrete. My work has involved designing experimental setups, developing predictive models, and contributing as an editor and advisory board member for leading engineering journals.
                </p>
                <div className={styles.description}>
                    What I Bring to the Table:<br/>
                    <ul className="mt-2 space-y-2 list-inside">
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Over 34 years of professional experience in academia and research.
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Expertise in structural engineering, concrete technology, and curriculum development.
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Extensive research on shrinkage studies, high-performance concrete, and fiber-reinforced concrete.
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 mt-1 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Editorial roles in leading engineering journals and contributions to curriculum development.
                        </li>
                    </ul>
                </div>
                <Button className={styles.download} onClick={downloadResume}>
                    View Resume
                </Button>
            </div>
            <picture className={styles.picture}>
                <source media={MIN_WIDTH.desktop} srcSet={aboutUrl} />
                <source media={MIN_WIDTH.tablet} srcSet={aboutUrlSmall} />
                <img style={{borderRadius:'10px'}} src={aboutUrl} alt="About Me" />
            </picture>
        </div>
    );
};

export default About;
