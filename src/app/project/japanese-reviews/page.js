import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export const metadata = {
    title: 'Japanese Reviews Project',
    description: 'Japanese Reviews Space Repetition System SRS Application',
}

export default function ProjectPage({ params }) {

    function getTechnologies() {
        return [
            'Next.js', 'React', 'MongoDB', 'Bootstrap'
        ]
    }

    return (
        <main>
            <div className='bg-slate-100 text-slate-900'>

                <h1 className='text-4xl font-bold text-center p-8'>Japanese Reviews</h1>
                <p className="text-xl px-12">
                    This application allows to perform <Link target="_blank" className="underline text-blue-800" href="https://www.wanikani.com/">Wanikani</Link> reviews at any time.
                    Select the level and the kind of quiz you want, you can review readings and meanings of single kanjis or words.
                    It has a built-in <strong>SRS system</strong> for the words you get wrong.
                </p>


                <div className="px-12">
                    <section>
                        <h2 className="sr-only">Features</h2>


                        <div className="flex flex-row flex-wrap gap-10 justify-center py-4">
                            <div className="max-w-md">
                                <h3 className="text-xl font-bold py-4">Multiple review modes</h3>
                                <p className="text-xl">Start from kanji prompt and input reading or meaning, or start from English prompt and input the Kanji reading.</p>

                                <h3 className="text-xl font-bold py-4">Visually similar kanjis</h3>
                                <p className="text-xl">Practice only the Kanjis that are visually similar to each other.</p>
                            </div>

                            <div className="max-w-lg">
                                <ProjectImage
                                    imageSrc="/img/projects/japanese-reviews/project-japanese-reviews-next.webp"
                                    imageAlt="Main Screen of the Japanese Reviews app"
                                    imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  100vw"
                                />
                            </div>
                        </div>

                        <div className="flex flex-row flex-wrap gap-10 justify-center py-4">

                            <div className="max-w-sm">
                                <ProjectImage
                                    imageSrc="/img/projects/japanese-reviews/correct-answer.webp"
                                    imageAlt="Image of a correct answer example"
                                    imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  100vw"
                                />
                            </div>

                            <div className="max-w-md">
                                <h3 className="text-xl font-bold py-4">Focus mode</h3>
                                <p className="text-xl">Hide statistics about the current session for total immersion and focus.</p>

                                <h3 className="text-xl font-bold py-4">Practice Mode</h3>
                                <p className="text-xl">Disable adding wrong answers to the SRS system for a stress free practice.</p>

                                <h3 className="text-xl font-bold py-4">Preconfigured Sets</h3>
                                <p className="text-xl">Find precompiled review sets with kanji lists from JLPT N5 through N2.</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="px-12">
                    <section>
                        <h2 className="text-2xl font-bold py-4">Future improvements</h2>
                        <ul className="text-xl list-disc list-inside">
                            <li>Use your Wanikani API key to fetch latest dictionary updates automatically</li>
                            <li>Automatic dictionary download and caching</li>
                            <li>Dashboards and statistics</li>
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
                            <Link target="_blank" href="https://github.com/Lorenzo603/japanese-reviews-next">
                                <Image
                                    src="/img/social/github-logo-black.png"
                                    width={40}
                                    height={40}
                                    style={{ width: "40px", height: "40px" }}
                                    alt="Japanese Reviews GitHub link"
                                />
                            </Link>
                            <Link target="_blank" className="underline text-blue-800" href="https://github.com/Lorenzo603/japanese-reviews-next">
                                https://github.com/Lorenzo603/japanese-reviews-next
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>

    )

}