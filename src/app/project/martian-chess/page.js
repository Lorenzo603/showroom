import { Grid } from "@mui/material";
import styles from "../styles.module.css"
import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export default function ProjectPage({ params }) {

    function getTechnologies() {
        return [
            'Godot',
        ]
    }

    return (

        <Grid item xs={12}>
            <section className={styles.project_content}>
                <Grid container justifyContent="center">
                    <Grid item xs={8}>
                        <Grid container direction="column">

                            <h1 className={styles.project_h1}>Martian Chess</h1>
                            <Grid container justifyContent="center" className={styles.project_section}>
                                <Grid item xs={8}>
                                    <p>
                                        Implementation of the fantastic Martian CHess game from <Link target="_blank" href="https://store.looneylabs.com/">Looney Labs</Link>!
                                        Play against another human or against 3 AI variations.
                                    </p>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container justifyContent="center" className={styles.project_section}>
                                    <ProjectImage
                                        imageSrc="/img/projects/martian-chess/martian-chess-3d.png"
                                        imageAlt="Martian Chess 3D Version"
                                        imageSizes="100vw"
                                    />
                                </Grid>
                            </Grid>

                            <Grid container justifyContent="center" className={styles.project_section}>
                                <Grid item xs={8}>
                                    <h2 className={styles.project_h2}>Chess engine adaptation</h2>
                                    <p>
                                        Concepts of standard Chess Engines implementations were adapted to this new game to find the best move taking into account not only the current state of the board but also loking ahead to a number of moves, exploring all the move-tree.
                                    </p>

                                </Grid>
                            </Grid>

                            <Grid container spacing={4} justifyContent="center" className={styles.project_section}>
                                <Grid item xs={12} md={12} lg={4}>
                                    <h3>Godot Game Engine</h3>
                                    <p>Implemented with the <Link target="_blank" href="https://godotengine.org/">Godot Game Engine</Link>, you can choose between 2D or 3D perspectives.</p>

                                </Grid>
                                <Grid item xs={12} md={12} lg={4}>
                                    <Grid container justifyContent="center">
                                        <ProjectImage
                                            imageSrc="/img/projects/martian-chess/martian-chess-2d.png"
                                            imageAlt="Martian Chess 2D Version"
                                            imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>



                            <h2 className={styles.project_h2}>Future improvements</h2>
                            <ul>
                                <li>Implement the 4-Player variation</li>
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
                            <Grid container alignItems="center" style={{ marginBottom: "2em" }}>
                                <Link target="_blank" href="https://github.com/Lorenzo603/martian-chess">
                                    <Image
                                        src="/img/social/github-logo-black.png"
                                        width={40}
                                        height={40}
                                        alt="Martian Chess GitHub link"
                                    />
                                </Link>
                                <Link target="_blank" href="https://github.com/Lorenzo603/martian-chess">
                                    https://github.com/Lorenzo603/martian-chess
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </Grid>

    )

}