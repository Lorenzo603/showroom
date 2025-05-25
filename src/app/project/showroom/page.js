import Link from "next/link";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL('https://www.lorenzofurrer.com'),
  title: 'Showroom Project',
  description: 'Quick portfolio site built using Next.js and Tailwind CSS',
  alternates: {
    canonical: '/project/showroom',
  },
}

export default function ProjectPage({ params }) {

  function getTechnologies() {
    return [
      'Next.js', 'React', 'Tailwind CSS',
    ]
  }

  return (
    <main>
      <div className='bg-slate-100 text-slate-900'>
        <div className="flex flex-col items-center">
          <h1 className='text-4xl font-bold text-center p-8'>Showroom</h1>
          <p className="text-xl px-12 sm:px-24">
            Quick portfolio site built using Next.js and Tailwind CSS.
          </p>
        </div>

        <div className="px-12 sm:px-24">
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
              <Link target="_blank" href="https://github.com/Lorenzo603/showroom">
                <Image
                  src="/img/social/github-logo-black.png"
                  width={40}
                  height={40}
                  style={{ width: "40px", height: "40px" }}
                  alt="Showroom GitHub link"
                />
              </Link>
              <Link target="_blank" className="underline text-blue-800" href="https://github.com/Lorenzo603/showroom">
                https://github.com/Lorenzo603/showroom
              </Link>
            </div>
          </section>
        </div>

      </div>

    </main >

  )

}