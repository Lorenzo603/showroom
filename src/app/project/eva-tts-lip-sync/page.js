import { Grid } from "@mui/material";
import styles from "../styles.module.css"
import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export default function ProjectPage({ params }) {

    function getTechnologies() {
        return [
            'Python', 'raylib', 'TTS'
        ]
    }

    return (

        <Grid item xs={12}>
            <section className={styles.project_content}>
                <Grid container justifyContent="center">
                    <Grid item xs={8}>
                        <Grid container direction="column">

                            <h1 className={styles.project_h1}>EVA - Text-to-speech with Lip Sync</h1>
                            <Grid container justifyContent="center" className={styles.project_section}>
                                <Grid item xs={8}>
                                    <p>
                                        This application allows to perform <Link target="_blank" href="https://www.wanikani.com/">Wanikani</Link> reviews at any time.
                                        Select the level and the kind of quiz you want, you can review readings and meanings of single kanjis or words.
                                        It has a built-in <strong>SRS system</strong> for the words you get wrong.
                                    </p>
                                </Grid>
                            </Grid>

                            <Grid container spacing={4} justifyContent="center" className={styles.project_section}>
                                <Grid item xs={12} md={12} lg={4}>
                                    <h3>Multiple review modes</h3>
                                    <p>Start from kanji prompt and input reading or meaning, or start from English prompt and input the Kanji reading.</p>

                                    <h3>Visually similar kanjis</h3>
                                    <p>Practice only the Kanjis that are visually similar to each other.</p>

                                </Grid>
                                <Grid item xs={12} md={12} lg={8}>
                                    <Grid container justifyContent="center">
                                        <ProjectImage
                                            imageSrc="/img/projects/japanese-reviews/project-japanese-reviews-next.png"
                                            imageAlt="Japanese Reviews Main Screen"
                                            imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  100vw"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid container justifyContent="center" className={styles.project_section}>
                                <Grid item xs={12} md={12} lg={5}>
                                    <Grid container justifyContent="center">
                                        <ProjectImage
                                            imageSrc="/img/projects/japanese-reviews/correct-answer.png"
                                            imageAlt="Japanese Reviews Correct Answer"
                                            imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  100vw"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={12} lg={7}>

                                    <h3>Focus mode</h3>
                                    <p>Hide statistics about the current session for total immersion and focus.</p>

                                    <h3>Practice Mode</h3>
                                    <p>Disable adding wrong answers to the SRS system for a stress free practice</p>

                                    <h3>Preconfigured Sets</h3>
                                    <p>Find precompiled review sets with kanji lists from JLPT N5 through N2</p>
                                </Grid>
                            </Grid>


                            <h2 className={styles.project_h2}>Future improvements</h2>
                            <ul>
                                <li>Use your Wanikani API key to fetch latest dictionary updates automatically</li>
                                <li>Automatic dictionary download and caching</li>
                                <li>Dashboards and statistics</li>
                            </ul>

                            <h2 className={styles.project_h2}>Technologies</h2>
                            <Grid item xs={12}>
                                <Grid container justifyContent="flex-start">
                                    {getTechnologies().map(tech => {
                                        return (
                                            <span key={tech} className='skill'>{tech}</span>
                                        );
                                    })}
                                </Grid>
                            </Grid>

                            <h2 className={styles.project_h2}>Links</h2>
                            {/* <Grid container alignItems="center" style={{ marginBottom: "2em" }}>
                                <Link target="_blank" href="https://github.com/Lorenzo603/japanese-reviews-next">
                                    <Image
                                        src="/img/social/github-logo-black.png"
                                        width={40}
                                        height={40}
                                        alt="Japanese Reviews GitHub link"
                                    />
                                </Link>
                                <Link target="_blank" href="https://github.com/Lorenzo603/japanese-reviews-next">
                                    https://github.com/Lorenzo603/japanese-reviews-next
                                </Link>
                            </Grid> */}
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </Grid>

    )

}