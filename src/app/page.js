import styles from './page.module.css'
import ProjectCard from '../components/ProjectCard'
import { Grid } from '@mui/material';
import HomeIntro from '@/components/HomeIntro';
import CertificationBadge from '@/components/CertificationBadge';

export default function Home() {


  function getSkills() {
    return [
      {
        "name": "Java",
      },
      {
        "name": "Spring",
      },
      {
        "name": "SAP Commerce",
      },
      {
        "name": "Python",
      },
      {
        "name": "AWS",
      },
      {
        "name": "SQL",
      },
      {
        "name": "MongoDB",
      },
      {
        "name": "Next.js",
      },
      {
        "name": "React",
      },
      {
        "name": "Git",
      },
    ]
  }

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
        'slug': 'japanese-reviews',
        'image': '/img/projects/japanese-reviews/japan-flag.svg',
        'description': 'Learn the Japanese language by guessing meanings and readings of Kanjis. Vocabulary powered by the Wanikani dictionary.',
        'technologies': ['nextjs', 'mongodb', 'react'],
      },
      {
        'title': 'EVA TTS Lip Sync',
        'slug': 'eva-tts-lip-sync',
        'image': '/img/projects/eva-tts-lip-sync/python-eva.png',
        'description': 'Concept avatar with text-to-speech capabilities and lip syncing. Uses the Raylib library to draw the UI and handle animations',
        'technologies': ['python', 'raylib'],
      },
      {
        'title': 'Martian Chess',
        'slug': 'martian-chess',
        'image': '/img/projects/martian-chess/martian-chess-3d.png',
        'description': 'Implementation of the Martian Chess board game from Looney Labs built with the Godot game engine',
        'technologies': ['godot'],
      },
      {
        'title': 'Trader Bot',
        'slug': 'trader-bot',
        'image': '/img/projects/trader-bot/candle-signal.png',
        'description': 'Trading and Backtesting engine. Implement your own trading strategy in python and automatically place trades on various exchanges.',
        'technologies': ['python', 'hashicorp-vault', 'metamask'],
      },
      {
        'title': 'Showroom',
        'slug': 'showroom',
        'image': '/img/projects/japanese-reviews/project-japanese-reviews-next.png',
        'description': 'This website. Created with the Next.js framework. Feel free to use this template.',
        'technologies': ['nextjs', 'react'],
      },
    ]
  }

  return (
    <>

      <Grid item xs={12}>
        <section id="home">
          <Grid container direction="column" justifyContent="center" className='hero_content'>
            <Grid item xs={1}>
              <h1 className='hero_primary'>Hi, I'm Lorenzo</h1>
            </Grid>
            <Grid item xs={1}>
              <span className='hero_secondary'>I develop all kind of applications, some professionally, some for fun!</span>
            </Grid>
          </Grid>
        </section>
      </Grid>



      <Grid item xs={12}>
        <section id="about">
          <Grid container justifyContent="center" className='about_content'>
            <Grid item xs={12}>
              <h2>About Me</h2>
            </Grid>
            <Grid item xs={10} md={8}>
              <Grid container justifyContent="space-between" style={{ marginBottom: "2em" }}>
                <Grid item xs={12} md={5}>
                  <Grid container direction="column">
                    <Grid item xs={12}>
                      <Grid container justifyContent="flex-start">
                        <h3>Short Bio</h3>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container justifyContent="flex-start">
                        <p className='bio'>
                          I'm a Software Developer with interests in all technologies spanning from scalable <strong>Cloud Architectures</strong> to Videogames.
                        </p>
                        <p className='bio'>
                          In my professional life I work mostly in the Ecommerce field where I've built and designed many <strong>Enterprise Solutions</strong> over the years.
                        </p>
                        <p className='bio'>
                          This a website where I collect and share some of the <strong>projects</strong> that I pursue outside of my professional life.
                        </p>
                        <p className='bio'>
                          I'm always open to new opportunities where I can learn and grow. Feel free to <strong>contact</strong> me!
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Grid container direction="column">
                    <Grid item xs={12}>
                      <Grid container justifyContent="flex-start">
                        <h3>Main Skills</h3>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container justifyContent="flex-start">
                        {getSkills().map(skill => {
                          return (
                            <span key={skill.name} className='skill'>{skill.name}</span>
                          );
                        })}
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container justifyContent="flex-start">
                        <h3>Certifications</h3>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container justifyContent="flex-start">
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
        </section>
      </Grid >



      <Grid item xs={12}>
        <section id="projects">
          <Grid container justifyContent="center" className='project_content'>
            <Grid item xs={12}>
              <h2>My personal projects</h2>
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
        </section>
      </Grid>

    </>
  )
}
