import { Grid } from "@mui/material";
import Image from "next/image";

const Footer = () => {

  return (

    <Grid item xs={12} className="page-footer">
      <footer>
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <Grid container justifyContent="space-between" alignItems="center">

              <Grid item xs={4} className="footer_copyright">
                &#169; Copyright {new Date().getFullYear()} {process.env.NEXT_PUBLIC_PERSONAL_NAME}
              </Grid>

              <Grid item xs={8}>
                <Grid container justifyContent="flex-end" alignItems="center">
                  <Grid item xs={3} md={2} lg={1} className='footer-social'>
                    <a target="_blank" href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
                      <Image
                        src="/img/social/linkedin-logo.png"
                        width={60}
                        height={60}
                        alt="Lorenzo LinkedIn Profile"
                      />
                    </a>
                  </Grid>
                  <Grid item xs={3} md={2} lg={1} className='footer-social'>
                    <a target="_blank" href={process.env.NEXT_PUBLIC_GITHUB_URL}>
                      <Image
                        src="/img/social/github-logo.png"
                        width={60}
                        height={60}
                        alt="Lorenzo GitHub Profile"
                      />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </footer>

    </Grid>
  );
};

export default Footer;