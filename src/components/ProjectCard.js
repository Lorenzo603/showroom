import * as React from 'react';

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Image from 'next/image';
import { Grid } from '@mui/material';



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

    return (
        <Card className='project_card'>
            {/* <CardHeader
                title="Project short desc"
            /> */}
            <CardMedia
                component="img"
                height="194"
                image={project.image}
                alt="Project image Alt"
            />
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
    );
}