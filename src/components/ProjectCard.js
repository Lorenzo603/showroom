import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Grid } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import Link from 'next/link';


export default function ProjectCard({ project }) {

    const TECH_LOGOS_MAP = new Map();
    TECH_LOGOS_MAP.set('nextjs', {
        'logo': '/img/techs/nextjs-logo.svg',
        'tooltip': 'Next.js',
    });
    TECH_LOGOS_MAP.set('react', {
        'logo': '/img/techs/react-logo.svg',
        'tooltip': 'React',
    });
    TECH_LOGOS_MAP.set('mongodb', {
        'logo': '/img/techs/mongodb-logo-mark.svg',
        'tooltip': 'MongoDB',
    });
    TECH_LOGOS_MAP.set('python', {
        'logo': '/img/techs/python-logo.svg',
        'tooltip': 'Python',
    });
    TECH_LOGOS_MAP.set('godot', {
        'logo': '/img/techs/godot-logo.svg',
        'tooltip': 'Godot',
    });
    TECH_LOGOS_MAP.set('hashicorp-vault', {
        'logo': '/img/techs/hashicorp-vault-logo.svg',
        'tooltip': 'HashiCorp Vault',
    });
    TECH_LOGOS_MAP.set('metamask', {
        'logo': '/img/techs/metamask-logo.svg',
        'tooltip': 'MetaMask',
    });
    TECH_LOGOS_MAP.set('raylib', {
        'logo': '/img/techs/raylib-logo.png',
        'tooltip': 'raylib',
    });



    return (
        <StyledEngineProvider injectFirst>
            <Link href={`/project/${project.slug}`}>
                <Card className='project_card'>
                    <CardMedia
                        component="img"
                        height="194"
                        image={project.image}
                        alt="Project image Alt"
                    />
                    <CardHeader style={{textAlign: "left", paddingBottom: "0px"}} title = {project.title} />
                    <CardContent>
                        <Typography style={{ textAlign: "left", minHeight: "5em" }}>
                            {project.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Grid item xs={12}>
                            <Grid container justifyContent="space-between">
                                <Grid item xs={6}>
                                    <Grid container justifyContent="flex-start">
                                        {
                                            project.technologies.map(
                                                tech => {
                                                    const technologyEntry = TECH_LOGOS_MAP.get(tech)
                                                    return (
                                                        <div key={tech} className="tooltip">
                                                            <span className="tooltiptext">{technologyEntry.tooltip}</span>
                                                            <Image
                                                                src={technologyEntry.logo}
                                                                width={40}
                                                                height={40}
                                                                alt={technologyEntry.tooltip}
                                                                className="technology-logo"
                                                            />
                                                        </div>
                                                    )
                                                }
                                            )
                                        }
                                    </Grid>
                                </Grid>
                                <Grid item xs={1}>
                                    <Image
                                        src="/img/chevron-right.svg"
                                        width={40}
                                        height={40}
                                        alt="Go to project"
                                        className="certification-zoom"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardActions>

                </Card>
            </Link>
        </StyledEngineProvider>
    );
}