import { Grid } from "@mui/material";
import styles from "../styles.module.css"
import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export default function ProjectPage({ params }) {

    function getTechnologies() {
        return [
            'Godot', 'Blender',
        ]
    }

    return (

        <Grid item xs={12}>
            <section className={styles.project_content}>
                <Grid container justifyContent="center">
                    <Grid item xs={8}>
                        <Grid container direction="column">

                            <h1 className={styles.project_h1}>Feverail</h1>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" className={styles.project_section}>
                                    <ProjectImage
                                        imageSrc="/img/projects/feverail/feverail-title.webp"
                                        imageAlt=""
                                        imageSizes="100vw"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center" className={styles.project_section}>
                                <Grid item xs={8}>
                                    <p>
                                        Shmup inspired by the classic game Tempest. Battle through waves of many different enemy types.
                                    </p>
                                    <p>Implemented with the <Link target="_blank" href="https://godotengine.org/">Godot Game Engine</Link>.</p>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={12} lg={4}>
                                <Grid container justifyContent="center">
                                    <ProjectImage
                                        imageSrc="/img/projects/feverail/feverail-gameplay-2.webp"
                                        imageAlt=""
                                        imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} lg={4}>
                                <Grid container justifyContent="center">
                                    <ProjectImage
                                        imageSrc="/img/projects/feverail/feverail-intro.webp"
                                        imageAlt=""
                                        imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                                    />
                                </Grid>
                            </Grid>


                            <h2 className={styles.project_h2}>How to play</h2>
                            <Grid item xs={12} md={12} lg={4}>
                                <Grid container justifyContent="center">
                                    <ProjectImage
                                        imageSrc="/img/projects/feverail/feverail-gameplay-3.webp"
                                        imageAlt=""
                                        imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} lg={4}>
                                <Grid container justifyContent="center">
                                    <ProjectImage
                                        imageSrc="/img/projects/feverail/feverail-gameplay-4.webp"
                                        imageAlt=""
                                        imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                                    />
                                </Grid>
                            </Grid>

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
                            <Grid container alignItems="center" style={{ marginBottom: "2em" }}>
                                <Link target="_blank" href="https://alsoknownaslox.itch.io/feverail">
                                    <Image
                                        src="/img/social/itchio-badge-color.svg"
                                        width={120}
                                        height={50}
                                        alt="Feverail Itch.io link"
                                    />
                                </Link>
                                <Link target="_blank" href="https://alsoknownaslox.itch.io/feverail">
                                    https://alsoknownaslox.itch.io/feverail
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </Grid>

    )

}