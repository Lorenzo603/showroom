import Image from 'next/image'
import styles from './page.module.css'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Grid } from '@mui/material';
import HomeIntro from '@/components/HomeIntro';
import CertificationBadge from '@/components/CertificationBadge';

export default function Home() {

  function getCertificationBadges() {
    return [
      {
        'name': 'AWS Security Specialty Certification',
        'badge': "/img/certifications/aws-security-specialty-badge.png",
      },
      {
        'name': 'AWS Solution Architect Associate Certification',
        'badge': "/img/certifications/aws-solution-architect-associate-badge.png",
      },
      {
        'name': 'AWS Developer Associate Certification',
        'badge': "/img/certifications/aws-developer-associate-badge.png",
      },
      {
        'name': 'AWS Cloud Practitioner Certification',
        'badge': "/img/certifications/aws-cloud-practitioner-badge.png",
      },
    ]
  }

  function getProjects() {
    return [
      {
        'title': 'Japanese Reviews',
        'image': '/img/project-japanese-reviews-next.png'
      },
      {
        'title': 'EVA',
        'image': '/img/project-japanese-reviews-next.png'
      },
      {
        'title': 'Martian Chess',
        'image': '/img/project-japanese-reviews-next.png'
      },
      {
        'title': 'Trader Bot',
        'image': '/img/project-japanese-reviews-next.png'
      },
      {
        'title': 'Showroom',
        'image': '/img/project-japanese-reviews-next.png'
      },
    ]
  }

  return (

    <Grid container>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <Grid container justifyContent="space-between">

              <Grid item xs={2} className='header_logo'>Lorenzo</Grid>

              <Grid item xs={10}>
                <Grid container justifyContent="flex-end" alignItems="center">
                  <span className='header_link'>Home</span>
                  <span className='header_link'>Projects</span>
                  <span className='header_link'>About</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>



      <Grid item xs={12}>
        <Grid container direction="column" justifyContent="center" className='hero_content'>
          <Grid item xs={1}>
            <span className='hero_primary'>Hi, I'm Lorenzo</span>
          </Grid>
          <Grid item xs={1}>
            <span className='hero_secondary'>I develop all kind of applications, some professionally, some for fun!</span>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center" className='about_content'>
          <Grid item xs={12}>
            <span className="project_title">About Me - Short Bio / Skills / Technologies</span>
          </Grid>
          <Grid item xs={8}>
            <Grid container justifyContent="space-between">
              <Grid item xs={4}>
                <Grid container direction="column">
                  <Grid item xs={12}><h3>Me</h3></Grid>
                  <Grid item xs={12}><p>This is a story of how I was turn  upside down</p></Grid>
                </Grid>

              </Grid>
              <Grid item xs={4}>
                <Grid container direction="column">
                  <Grid item xs={12}><h3>My Skills</h3></Grid>
                  <Grid item xs={12}>
                    {Array.from({ length: 6 }, (_, i) => i + 1).map(index => {
                      return (
                        <span key={index} className='skill'>Java</span>
                      );
                    })}

                  </Grid>
                  <Grid item xs={12}><h3>My Certs</h3></Grid>
                  <Grid item xs={12}>
                    {
                      getCertificationBadges().map(
                        (certification) => (
                          <CertificationBadge key={certification.name} certification={certification} />
                        )
                      )
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center" className='project_content'>
          <Grid item xs={12}>
            <span className="project_title">My personal projects</span>
          </Grid>
          <Grid item xs={10} style={{ marginBottom: "5em" }}>
            <Grid container spacing={4}>
              {getProjects().map(
                (project) => (
                  <Grid key={project.title} item xs={12} md={6} lg={4}>
                    <ProjectCard project={project} />
                  </Grid>
                )
              )}

            </Grid>
          </Grid>
        </Grid>
      </Grid>


      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <Grid container justifyContent="space-between" alignItems="center">

              <Grid item xs={3} className="footer_copyright">&#169; Copyright {new Date().getFullYear()} Lorenzo</Grid>

              <Grid item xs={9}>
                <Grid container justifyContent="flex-end" alignItems="center">
                  <Grid item xs={1} className="footer_social">
                    <a target="_blank" href='https://mylinkedin'>
                      <Image
                        src="/img/social/linkedin-logo.png"
                        width={60}
                        height={60}
                        alt="Lorenzo LinkedIn Profile"
                      />
                    </a>
                  </Grid>
                  <Grid item xs={1} className="footer_social">
                    <a target="_blank" href='https://mygithub'>
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

      </Grid>

    </Grid>

  )
}
