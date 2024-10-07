import { Grid } from "@mui/material";
import styles from "../styles.module.css"
import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export const metadata = {
    title: 'Feverail Game',
    description: 'Shmup inspired by the classic game Tempest. Battle through waves of many different enemy types',
}

export default function ProjectPage({ params }) {

    function getTechnologies() {
        return [
            'Godot', 'Blender',
        ]
    }

    return (

        <main>
            <div className='bg-slate-100 text-slate-900'>
                <div className="flex flex-col items-center">
                    <h1 className='text-4xl font-bold text-center p-8'>Feverail</h1>
                    <p className="text-xl px-12 sm:px-24 mb-2">
                        Shmup inspired by the classic game Tempest. Battle through waves of many different enemy types.
                    </p>
                    <p className="text-xl px-12 sm:px-24">
                        Implemented with the <Link target="_blank" className="underline text-blue-800" href="https://godotengine.org/">Godot Game Engine</Link>.
                    </p>
                    <div className="max-w-7xl px-24">
                        <ProjectImage
                            imageSrc="/img/projects/feverail/feverail-title.webp"
                            imageAlt=""
                            imageSizes="100vw"
                        />
                    </div>

                    <div className="max-w-7xl px-24">
                        <ProjectImage
                            imageSrc="/img/projects/feverail/feverail-gameplay-2.webp"
                            imageAlt="Feverail Gameplay Screenshot"
                            imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                        />
                    </div>
                    <div className="max-w-7xl px-24">
                        <ProjectImage
                            imageSrc="/img/projects/feverail/feverail-intro.webp"
                            imageAlt="Feverail Gameplay Screenshot 2"
                            imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                        />
                    </div>

                </div>

                <div className="px-12 sm:px-24">
                    <section>
                        <h2 className="text-2xl font-bold py-4">How to play</h2>
                        <ProjectImage
                            imageSrc="/img/projects/feverail/feverail-gameplay-3.webp"
                            imageAlt="How to play part 1"
                            imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                        />
                        <ProjectImage
                            imageSrc="/img/projects/feverail/feverail-gameplay-4.webp"
                            imageAlt="How to play part 2"
                            imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                        />
                    </section>


                    <section>
                        <h2 className="text-2xl font-bold py-4 mt-4">Technologies</h2>
                        <div className="flex flex-wrap">
                            {getTechnologies().map(tech => {
                                return (
                                    <span key={tech} className='skill'>{tech}</span>
                                );
                            })}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold py-4">Links</h2>
                        <div className="flex flex-wrap items-center gap-4 pb-6">
                            <Link target="_blank" href="https://alsoknownaslox.itch.io/feverail">
                                <Image
                                    src="/img/social/itchio-badge-color.svg"
                                    width={120}
                                    height={50}
                                    style={{ width: "120px", height: "50px" }}
                                    alt="Feverail Itch.io link"
                                />
                            </Link>
                            <Link target="_blank" className="underline text-blue-800" href="https://alsoknownaslox.itch.io/feverail">
                                https://alsoknownaslox.itch.io/feverail
                            </Link>
                        </div>
                    </section>
                </div>

            </div>


        </main >


    )

}