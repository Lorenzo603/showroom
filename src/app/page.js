import Image from 'next/image'
import styles from './page.module.css'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Grid, Item } from '@mui/material';

export default function Home() {

  function getProjects() {

    return [
      {
        title: 'project 1',
        description: 'project description 1',
      },
      {
        title: 'project 2',
        description: 'project description 2',
      }
    ];
  }


  return (
    <main>

      <Grid container spacing={2} justifyContent="center" alignItems="center">

        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item xs={8}>
          <h1>Welcome to My Portfolio!</h1>
        </Grid>

        <Grid item xs={8}>
          <h2>Projects</h2>
        </Grid>
        <Grid item xs={8}>
          {getProjects().map(project => {
            return (
              <ProjectCard key={project.title} project={project} />
            )
          })}
        </Grid>

        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </main>
  )
}
