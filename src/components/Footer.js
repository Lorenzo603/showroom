import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  return (

    <footer>
        <div className="flex flex-col justify-center items-center">

          <div className="text-gray-400 p-6">
            &#169; Copyright {new Date().getFullYear()} {process.env.NEXT_PUBLIC_PERSONAL_NAME}
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center gap-10 pb-10">
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
            <Link target="_blank" href={process.env.NEXT_PUBLIC_ITCHIO_URL}>
              <Image
                src="/img/social/itchio-logo.svg"
                width={60}
                height={60}
                alt="Lorenzo itch.io Profile"
              />
            </Link>
          </div>
      </div>
    </footer>


  );
};

export default Footer;