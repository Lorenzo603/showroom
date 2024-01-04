import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  return (

    <footer>
      <div style={{ width: "66%" }}>
        <div className="footer">

          <div className="footer-copyright">
            &#169; Copyright {new Date().getFullYear()} {process.env.NEXT_PUBLIC_PERSONAL_NAME}
          </div>
          <div className="footer-right">
            <Link target="_blank" href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
              <Image
                src="/img/social/linkedin-logo.png"
                width={60}
                height={60}
                alt="Lorenzo LinkedIn Profile"
              />
            </Link>
            <Link target="_blank" href={process.env.NEXT_PUBLIC_GITHUB_URL}>
              <Image
                src="/img/social/github-logo.png"
                width={60}
                height={60}
                alt="Lorenzo GitHub Profile"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>


  );
};

export default Footer;