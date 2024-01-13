import { Grid } from "@mui/material";
import styles from "../styles.module.css"
import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export default function ProjectPage({ params }) {

    function getTechnologies() {
        return [
            "Python", "raylib", "pyttsx3", "Sqlite",
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
                                        You can input text in the box and Eva will speak it back!
                                        Pronounciation data is fetched either from the phonemes of the Dictionary API or Google pronounciation.
                                    </p>
                                </Grid>
                            </Grid>

                            <h2 className="visually-hidden">Features</h2>

                            <Grid container spacing={4} justifyContent="center" className={styles.project_section}>
                                <Grid item xs={12} md={12} lg={4}>
                                    <h3>Text-to-speech</h3>
                                    <p>Uses either the <Link target="_blank" href="https://pypi.org/project/pyttsx3/">pyttsx3</Link> library or the OSX native &quot;say&quot; command.</p>

                                    <h3>Graphics</h3>
                                    <p>Uses the python binding for raylib to draw everything on the screen and manage animations and input box with word-wrapping.</p>

                                </Grid>
                                <Grid item xs={12} md={12} lg={8}>
                                    <Grid container justifyContent="center">
                                        <ProjectImage
                                            imageSrc="/img/projects/eva-tts-lip-sync/eva-main-screen.png"
                                            imageAlt="Eva Main Screen"
                                            imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid container justifyContent="center" className={styles.project_section}>
                                <Grid item xs={12} md={12} lg={5}>
                                    <Grid container justifyContent="center">
                                        <ProjectImage
                                            imageSrc="/img/projects/eva-tts-lip-sync/eva-tongue.png"
                                            imageAlt="Eva Tongue"
                                            imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={12} lg={7}>

                                    <h3>Local caching</h3>
                                    <p>Phoneme information is cached locally with SQLite using the peewee library.</p>

                                    <h3>Pixel Art</h3>
                                    <p>Avatar and all poses have been drawn by me using Aseprite. She&#39;s supposed to be a Python-girl because the program is written in python, but she looks more like an Orc &#128517;</p>

                                </Grid>
                            </Grid>


                            <h2 className={styles.project_h2}>Future improvements</h2>
                            <ul>
                                <li>Send the prompt to ChatGPT API and speak back the answer</li>
                            </ul>

                            <h2 className={styles.project_h2}>Technologies</h2>
                            <Grid item xs={12}>
                                <Grid container justifyContent="flex-start">
                                    {getTechnologies().map(tech => {
                                        return (
                                            <span key={tech} className="skill">{tech}</span>
                                        );
                                    })}
                                </Grid>
                            </Grid>

                            <h2 className={styles.project_h2}>Links</h2>
                            <Grid container alignItems="center" style={{ marginBottom: "2em" }}>
                                <Link target="_blank" href="https://bitbucket.org/lorenzo_furrer/eva/src/master/">
                                    <Image
                                        src="/img/social/bitbucket-logo.svg"
                                        width={40}
                                        height={40}
                                        alt="Eva Bitbucket link"
                                    />
                                </Link>
                                <Link target="_blank" href="https://bitbucket.org/lorenzo_furrer/eva/src/master/">
                                    https://bitbucket.org/lorenzo_furrer/eva/src/master/
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </Grid>

    )

}