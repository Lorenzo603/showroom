import styles from './page.module.css'
import ProjectCard from '../components/ProjectCard'
import CertificationBadge from '@/components/CertificationBadge';
import * as ReactDOM from 'react-dom';
import Link from "next/link";
import Image from 'next/image';

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
        "name": "Tailwind CSS",
      },
      {
        "name": "Git",
      },
    ]
  }

  function getCertificationBadges() {
    return [
      {
        "name": "AWS Security Specialty Certification",
        "badge": "/img/certifications/aws-security-specialty-badge.webp",
      },
      {
        "name": "AWS Solution Architect Associate Certification",
        "badge": "/img/certifications/aws-solution-architect-associate-badge.webp",
      },
      {
        "name": "AWS Developer Associate Certification",
        "badge": "/img/certifications/aws-developer-associate-badge.webp",
      },
      {
        "name": "AWS Cloud Practitioner Certification",
        "badge": "/img/certifications/aws-cloud-practitioner-badge.webp",
      },
    ]
  }

  function getProjects() {
    return [
      {
        'title': 'Feverail',
        'slug': 'feverail',
        'image': '/img/projects/feverail/feverail-intro.webp',
        'description': 'Shoot your way through waves of enemies in this Tempest-inspired shmup. Uses the Godot game engine. All 3D models built with Blender.',
        'technologies': ['godot', 'blender'],
      },
      {
        'title': 'Japanese Reviews',
        'slug': 'japanese-reviews',
        'image': '/img/projects/japanese-reviews/japanese-reviews-intro.webp',
        'description': 'Learn the Japanese language by guessing meanings and readings of Kanjis. It leverages the Wanikani APIs and dataset. Built-in Space Repetition System.',
        'technologies': ['nextjs', 'mongodb', 'react'],
      },
      {
        'title': 'Unity Thumbnail Generator',
        'slug': 'unity-thumbnail-generator',
        'image': '/img/projects/unity-thumbnail-generator/unity-thumbnail-generator-intro.webp',
        'description': 'Generate custom thumbnails for your Unity prefabs with possibility of controlling the lighting and camera position of the scene used for generating the thumbnail.',
        'technologies': ['unity', 'c-sharp'],
      },
      {
        'title': 'Text-to-speech with visemes',
        'slug': 'eva-tts-lip-sync',
        'image': '/img/projects/eva-tts-lip-sync/python-eva.png',
        'description': 'Concept avatar with text-to-speech capabilities and rudimental lip syncing. Recognizes a collection of phonemes and visemes to draw the mouth.',
        'technologies': ['python', 'raylib'],
      },
      {
        'title': 'Martian Chess',
        'slug': 'martian-chess',
        'image': '/img/projects/martian-chess/martian-chess-3d-title.webp',
        'description': 'Implementation of the amazing Martian Chess board game from Looney Labs built with the Godot game engine. Play solo against the AI or against another player.',
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
        'title': 'Portfolio template',
        'slug': 'showroom',
        'image': '/img/projects/showroom/showroom-title.webp',
        'description': 'This website. Created with the Next.js framework. Feel free to use this as template.',
        'technologies': ['nextjs', 'react'],
      },
    ]
  }

  ReactDOM.preload("/img/geometric_mosaic_tile_shape_background.webp",
    { as: "image", type: "image/webp", fetchpriority: "high" })

  return (
    <main>

      <section id="home">
        <div className="bg-center bg-slate-50 bg-[url('/img/geometric_mosaic_tile_shape_background.webp')] 
          h-96 sm:h-[30rem] flex items-center justify-center">
          <div className='flex flex-col text-center text-slate-900'>
            <h1 className="text-5xl sm:text-7xl font-bold p-8">Hi, I&#39;m Lorenzo</h1>
            <p className="text-2xl sm:text-4xl px-8 pb-8">I develop all kinds of applications, some professionally, some for fun!</p>
          </div>
        </div>
      </section>


      <section id="about">
        <div className="flex flex-col
          bg-[#eee] text-slate-900 
          items-center justify-center 
          p-8 ">
          <h2 className='text-3xl font-bold pb-4'>About Me</h2>
          <div className='flex flex-col lg:flex-row lg:px-12 lg:gap-x-12'>
            <div className='flex flex-col'>
              <h3 className='text-xl font-bold py-2'>Short Bio</h3>
              <div className='flex flex-col'>
                <p className="text-lg leading-relaxed text-slate-700 pb-4">
                  I&#39;m a Software Developer with interests in all technologies spanning from scalable <strong>Cloud Architectures</strong> to Videogames.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 pb-4">
                  In my professional life I work mostly in the Ecommerce field where I&#39;ve built and designed many <strong>Enterprise Solutions</strong> over the years.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 pb-4">
                  This a website where I collect and share some of the <strong>projects</strong> that I pursue outside of my professional life.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 pb-4">
                  I&#39;m always open to new opportunities where I can learn and grow. Feel free to <Link className='underline text-blue-800' target="_blank" href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>contact</Link> me!
                </p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div>
                <h3 className='text-xl font-bold py-2'>Main Skills</h3>
                <div className='flex flex-row flex-wrap'>
                  {getSkills().map(skill => {
                    return (
                      <span key={skill.name} className="skill">{skill.name}</span>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className='text-xl font-bold py-2 mt-2'>Certifications</h3>
                <div className='flex flex-row flex-wrap'>
                  {
                    getCertificationBadges().map(
                      (certification) => (
                        <CertificationBadge key={certification.name} certification={certification} />
                      )
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="gamedev">
        <div className='bg-zinc-200 flex flex-col items-center justify-center py-8'>
          <h2 className='text-3xl text-slate-900 font-bold'>Gamedev</h2>

          <div className='px-8'>
            <p className="text-lg leading-relaxed text-slate-700 py-4">
              You can also find some games I developed on my <Link target="_blank" className='underline text-blue-800' href={process.env.NEXT_PUBLIC_ITCHIO_URL}>itch.io</Link> page!
            </p>
          </div>
          <Link target="_blank" href={process.env.NEXT_PUBLIC_ITCHIO_URL}>
            <Image
              src="/img/social/itchio-badge-color.svg"
              width={200}
              height={140}
              alt="Available on itch.io"
            />
          </Link>
        </div>
      </section >

      <section id="projects">
        <div className='flex flex-col items-center justify-center bg-slate-50 p-6'>
          <h2 className='text-3xl text-slate-900 font-bold pt-2 pb-4'>My personal projects</h2>
          <div className='flex flex-row flex-wrap gap-6 p-2 justify-center'>
            {getProjects().map(
              (project) => (
                <ProjectCard key={project.title} project={project} />
              )
            )}
          </div>
        </div>
      </section>

    </main >
  )
}
