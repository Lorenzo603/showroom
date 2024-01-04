import { Grid } from "@mui/material";
import styles from "./styles.module.css"
import Link from "next/link";
import Image from "next/image";

export default function ProjectPage({ params }) {

    function getTechnologies() {
        return [
            'Next.js', 'React', 'MongoDB', 'Bootstrap'
        ]
    }

    return (

        <Grid item xs={12}>
            <section className={styles.project_content}>
                <Grid container justifyContent="center">
                    <Grid item xs={6}>
                        <Grid container direction="column">

                            <h1 className={styles.project_h1}>Japanese Reviews</h1>

                            <p>
                                This application allows to perform <Link target="_blank" href="https://www.wanikani.com/">Wanikani</Link> reviews at any time.
                                Select the level and the kind of quiz you want, you can review readings and meanings of kanjis or vocabularies.
                                It has a built-in SRS system for the words you get wrong.
                            </p>

                            <h2 className={styles.project_h2}>Features</h2>
                            <h3>Multiple review modes</h3>
                            <p>Start from kanji prompt and input reading or meaning, or start from English prompt and input the Kanji reading.</p>

                            <h3>Visually similar kanjis</h3>
                            <p>Practice only the Kanjis that are visually similar to each other.</p>

                            <h3>Focus mode</h3>
                            <p>Hide statistics about the current session for total immersion and focus.</p>

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
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </Grid>

    )

}