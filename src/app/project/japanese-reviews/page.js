import { Grid } from "@mui/material";
import styles from "./styles.module.css"
export default function ProjectPage({ params }) {


    return (

        <Grid item xs={12}>
            <section className={styles.project_content}>
                <Grid container justifyContent="center">
                    <Grid item xs={10}>

                        This project


                    </Grid>
                </Grid>
            </section>
        </Grid>

    )

}