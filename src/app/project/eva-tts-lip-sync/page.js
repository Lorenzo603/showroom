import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export const metadata = {
  metadataBase: new URL('https://www.lorenzofurrer.com'),
  title: 'Eva text-to-speech with visemes Project',
  description: 'Concept avatar with text-to-speech capabilities and rudimental lip syncing. Recognizes a collection of phonemes and visemes to draw the mouth',
  alternates: {
    canonical: '/project/eva-tts-lip-sync',
  },
}

export default function ProjectPage({ params }) {

  function getTechnologies() {
    return [
      "Python", "raylib", "pyttsx3", "Sqlite",
    ]
  }

  return (
    <main>
      <div className='bg-slate-100 text-slate-900'>

        <h1 className='text-4xl font-bold text-center p-8'>Text-to-speech with visemes</h1>
        <p className="text-xl px-12">
          You can input text in the box and Eva will speak it back!
          Pronounciation data is fetched either from the phonemes of the Dictionary API or Google pronounciation.
        </p>


        <div className="px-12">
          <section>
            <h2 className="sr-only">Features</h2>
            <div className="flex flex-row flex-wrap gap-10 justify-center py-4">
              <div className="max-w-md">
                <h3 className="text-xl font-bold py-4">Text-to-speech</h3>
                <p className="text-xl">Uses either the <Link target="_blank" className="underline text-blue-800" href="https://pypi.org/project/pyttsx3/">pyttsx3</Link> library or the OSX native &quot;say&quot; command.</p>

                <h3 className="text-xl font-bold py-4">Graphics</h3>
                <p className="text-xl">Uses the python binding for raylib to draw everything on the screen and manage animations and input box with word-wrapping.</p>
              </div>

              <div className="max-w-lg">
                <ProjectImage
                  imageSrc="/img/projects/eva-tts-lip-sync/eva-main-screen.png"
                  imageAlt="Eva Main Screen"
                  imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                />
              </div>
            </div>

            <div className="flex flex-row flex-wrap gap-10 justify-center py-4">

              <div className="max-w-sm">
                <ProjectImage
                  imageSrc="/img/projects/eva-tts-lip-sync/eva-tongue.png"
                  imageAlt="Eva Tongue"
                  imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 100vw,  100vw"
                />
              </div>

              <div className="max-w-md">
                <h3 className="text-xl font-bold py-4">Local caching</h3>
                <p className="text-xl">Phoneme information is cached locally with SQLite using the peewee library.</p>

                <h3 className="text-xl font-bold py-4">Pixel Art</h3>
                <p className="text-xl">Avatar and all poses have been drawn by me using Aseprite. She&#39;s supposed to be a Python-girl because the program is written in python, but she looks more like an Orc &#128517;</p>

              </div>
            </div>
          </section>
        </div>

        <div className="px-12">
          <section>
            <h2 className="text-2xl font-bold py-4">Future improvements</h2>
            <ul className="text-xl list-disc list-inside">
              <li>Send the prompt to ChatGPT API and speak back the answer</li>
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
              <Link target="_blank" href="https://bitbucket.org/lorenzo_furrer/eva/src/master/">
                <Image
                  src="/img/social/bitbucket-logo.svg"
                  width={40}
                  height={40}
                  style={{ width: "40px", height: "40px" }}
                  alt="Eva Bitbucket link"
                />
              </Link>
              <Link target="_blank" className="underline text-blue-800" href="https://bitbucket.org/lorenzo_furrer/eva/src/master/">
                https://bitbucket.org/lorenzo_furrer/eva/src/master/
              </Link>
            </div>
          </section>
        </div>
      </div>

    </main>



  )

}