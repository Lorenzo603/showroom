import { Grid } from "@mui/material";
import styles from "../styles.module.css"
import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export default function ProjectPage({ params }) {

    function getTechnologies() {
        return [
            'Unity', 'C#'
        ]
    }

    return (

        <Grid item xs={12}>
            <section className={styles.project_content}>
                <Grid container justifyContent="center">
                    <Grid item xs={8}>
                        <Grid container direction="column">

                            <h1 className={styles.project_h1}>Unity Thumbnail Generator</h1>
                            <Grid container justifyContent="center" className={styles.project_section}>
                                <Grid item xs={8}>
                                    <p>
                                        Unity Thumbnail Generator is a powerful custom tool designed specifically for the Unity game engine.
                                        It allows developers to generate custom thumbnails for their prefabs.
                                        You can control lighting, camera positioning, and virtually everything else in the scene used for thumbnail generation.
                                        For instance, you have the flexibility to adjust the thumbnail background color by simply tweaking the &quot;Environment-&gt;Background Type&quot; setting on the scene&#39;s Main Camera.
                                    </p>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" className={styles.project_section}>
                                    <ProjectImage
                                        imageSrc="/img/projects/unity-thumbnail-generator/unity-thumbnail-generator-editor.png"
                                        imageAlt="unity Thumbanil Generator Before and After"
                                        imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  100vw"
                                    />
                                </Grid>
                            </Grid>

                            <h2 className={styles.project_h2}>How it works</h2>
                            <p>
                                The script traverses through a project folder recursively, searching for prefabs.
                                Once located, it instantiates each prefab in a designated scene, capturing a snapshot of the scene&#39;s camera output on a texture.
                                This texture is then saved to the Thumbnails folder and used as a thumbnail for the corresponding prefab in the Project Window.
                                An editor extension ensures that thumbnails and prefabs are seamlessly matched by looking for thumbnails in the Thumbnails folder,
                                following the same tree structure as the Asset folder.
                            </p>

                            <h2 className={styles.project_h2}>How to Use</h2>
                            <ul>
                                <li>
                                    Integration: Import the provided scripts into your Unity project.
                                    Make sure to keep CustomThumbnailRenderer.cs in the Editor folder, while the other scripts can reside anywhere, but not in the Editor folder.
                                </li>
                                <li>
                                    Prefab Setup: Import the prefabs you wish to generate thumbnails for.
                                    Customize the scene according to your preferences, adjusting lighting, camera angles, and other settings as needed.
                                </li>
                                <li>
                                    Thumbnail Generation: Play the scene to trigger thumbnail generation.
                                    The script will handle the rest, generating custom thumbnails for each prefab.
                                </li>
                            </ul>

                            <p>Head over to the <Link target="_blank" href="https://github.com/Lorenzo603/unity-thumbnail-generator">GitHub Readme</Link> for more details on settings and important classes.</p>

                            <h2 className={styles.project_h2}>Results</h2>
                            <p>See below an example of before (Unity default, left) and after (Custom thumbnail, right)</p>

                            <Grid item xs={12}>
                                <Grid container justifyContent="center" className={styles.project_section}>
                                    <ProjectImage
                                        imageSrc="/img/projects/unity-thumbnail-generator/unity-thumbnail-generator-before-after.png"
                                        imageAlt="unity Thumbanil Generator Before and After"
                                        imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  100vw"
                                    />
                                </Grid>
                            </Grid>

                            <h2 className={styles.project_h2}>Thanks</h2>
                            <p>Thanks to this blog post for the large majority of the generation code: <Link target="_blank" href="https://undertheweathersoftware.com/automatic-thumbnail-image-generator-for-3d-objects-in-unity/">https://undertheweathersoftware.com/automatic-thumbnail-image-generator-for-3d-objects-in-unity/</Link></p>
                            <p>Thanks to this other blog post for explaining the general idea of how to draw customizations on the project window: <Link target="_blank" href="https://sahildhanju.com/posts/unity-asset-thumbnail-icons/">https://sahildhanju.com/posts/unity-asset-thumbnail-icons/</Link></p>


                            <h2 className={styles.project_h2}>Technologies</h2>
                            <Grid item xs={12}>
                                <Grid container justifyContent="flex-start">
                                    {getTechnologies().map(tech => {
                                        return (
                                            <span key={tech} className='skill'>{tech}</span>
                                        );
                                    })}
                                </Grid>
                            </Grid>

                            <h2 className={styles.project_h2}>Links</h2>
                            <Grid container alignItems="center" style={{ marginBottom: "2em" }}>
                                <Link target="_blank" href="https://github.com/Lorenzo603/unity-thumbnail-generator">
                                    <Image
                                        src="/img/social/github-logo-black.png"
                                        width={40}
                                        height={40}
                                        alt="Unity Thumbnail Generator GitHub link"
                                    />
                                </Link>
                                <Link target="_blank" href="https://github.com/Lorenzo603/unity-thumbnail-generator">
                                    https://github.com/Lorenzo603/unity-thumbnail-generator
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </Grid>

    )

}