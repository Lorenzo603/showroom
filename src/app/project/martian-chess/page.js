import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export const metadata = {
    title: 'Martian Chess Project',
    description: 'Implementation of the fantastic Martian Chess game from Looney Labs',
}

export default function ProjectPage({ params }) {

    function getTechnologies() {
        return [
            'Godot',
        ]
    }

    return (
        <main>
            <div className='bg-slate-100 text-slate-900'>
                <div className="flex flex-col items-center">
                    <h1 className='text-4xl font-bold text-center p-8'>Martian Chess</h1>
                    <p className="text-xl px-12 sm:px-24">
                        Implementation of the fantastic Martian Chess game from <Link target="_blank" className="underline text-blue-800" href="https://store.looneylabs.com/">Looney Labs</Link>!
                        Play against another human or against 3 AI variations.
                    </p>
                    <div className="max-w-7xl px-24">
                        <ProjectImage
                            imageSrc="/img/projects/martian-chess/martian-chess-3d-big.webp"
                            imageAlt="Martian Chess 3D Perspective"
                            imageSizes="100vw"
                        />
                    </div>
                </div>
                <div className="px-12 sm:px-24">
                    <section>

                        <h2 className="text-2xl font-bold py-4">Chess engine adaptation</h2>
                        <p className="text-xl">
                            Concepts of standard Chess Engines implementations were adapted to this new game to find the best move taking into account not only the current state of the board but also loking ahead to a number of moves, exploring all the move-tree.
                        </p>

                        <div className="flex flex-row flex-wrap gap-10 justify-center py-4">
                            <div className="max-w-md">
                                <h3 className="text-xl font-bold py-4">Godot Game Engine</h3>
                                <p className="text-xl">Implemented with the <Link target="_blank" className="underline text-blue-800" href="https://godotengine.org/">Godot Game Engine</Link>, you can choose between 2D or 3D perspectives.</p>
                            </div>

                            <div className="max-w-lg">
                                <ProjectImage
                                    imageSrc="/img/projects/martian-chess/martian-chess-2d.png"
                                    imageAlt="Martian Chess 2D Perspective"
                                    imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                                />
                            </div>
                        </div>

                    </section>
                </div>

                <div className="px-12">
                    <section>
                        <h2 className="text-2xl font-bold py-4">Future improvements</h2>
                        <ul className="text-xl list-disc list-inside">
                            <li>Implement the 4-Player variation</li>
                        </ul>
                    </section>
                </div>

                <div className="px-12">
                    <section>
                        <h2 className="text-2xl font-bold py-4">Technologies</h2>
                        <div className="flex flex-wrap">
                            {getTechnologies().map(tech => {
                                return (
                                    <span key={tech} className='skill'>{tech}</span>
                                );
                            })}
                        </div>
                    </section>
                </div>

                <div className="px-12">
                    <section>
                        <h2 className="text-2xl font-bold py-4">Links</h2>
                        <div className="flex flex-wrap items-center gap-4 pb-6">
                            <Link target="_blank" href="https://github.com/Lorenzo603/martian-chess">
                                <Image
                                    src="/img/social/github-logo-black.png"
                                    width={40}
                                    height={40}
                                    style={{ width: "40px", height: "40px" }}
                                    alt="Martian Chess Bitbucket link"
                                />
                            </Link>
                            <Link target="_blank" className="underline text-blue-800" href="https://github.com/Lorenzo603/martian-chess">
                                https://github.com/Lorenzo603/martian-chess
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

        </main>



    )

}