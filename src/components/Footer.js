import { Grid } from "@mui/material";

const Footer = () => {

  return (

    <Grid container justifyContent="flex-start">
      <Grid item xs={1}><div>GitHub</div></Grid>
      <Grid item xs={1}><div>LinkedIn</div></Grid>
    </Grid>
  );
};

export default Footer;