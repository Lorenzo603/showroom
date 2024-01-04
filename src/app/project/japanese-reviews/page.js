import { Grid } from "@mui/material";
import styles from "./styles.module.css"

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
                    <Grid item xs={10}>
                        <Grid container direction="column">

                            <h1 className={styles.project_h1}>Japanese Reviews</h1>

                            <p>Short description asdjaoicjhdowifmwivmw. ...</p>

                            <h2 className={styles.project_h2}>Features</h2>
                            <p>Multiple review modes</p>

                            <p>Visually similar kanjis</p>

                            <p>Focus mode</p>

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
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </Grid>

    )

}