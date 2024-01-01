import { Grid } from "@mui/material";

const Header = () => {

  return (
    <Grid container justifyContent="flex-end">
      <Grid item xs={1}><div>About</div></Grid>
      <Grid item xs={1}><div>Projects</div></Grid>
      <Grid item xs={1}><div>Contact</div></Grid>
    </Grid>
  );
};

export default Header;