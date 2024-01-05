import { Grid } from "@mui/material";
import styles from "../styles.module.css"
import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export default function ProjectPage({ params }) {

    function getTechnologies() {
        return [
            'Next.js', 'React', 'Material UI',
        ]
    }

    return (

        <Grid item xs={12}>
            <section className={styles.project_content}>
                <Grid container justifyContent="center">
                    <Grid item xs={8}>
                        <Grid container direction="column">

                            <h1 className={styles.project_h1}>Japanese Reviews</h1>
                            <Grid container justifyContent="center" className={styles.project_section}>
                                <Grid item xs={8}>
                                    <p>
                                        Quick portfolio template using Next.js and Material UI.
                                    </p>
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
                                <Link target="_blank" href="https://github.com/Lorenzo603/showroom">
                                    <Image
                                        src="/img/social/github-logo-black.png"
                                        width={40}
                                        height={40}
                                        alt="Showroom GitHub link"
                                    />
                                </Link>
                                <Link target="_blank" href="https://github.com/Lorenzo603/showroom">
                                    https://github.com/Lorenzo603/showroom
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </Grid>

    )

}