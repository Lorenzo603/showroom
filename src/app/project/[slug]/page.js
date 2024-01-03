import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Grid } from "@mui/material";

export default function ProjectPage({ params }) {


    return (
        <Grid container>
            <Header />
            
            <div>My Post: {params.slug}</div>

            <Footer />
        </Grid>
    )

}