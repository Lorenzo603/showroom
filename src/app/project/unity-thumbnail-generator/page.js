import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export const metadata = {
  metadataBase: new URL('https://www.lorenzofurrer.com'),
  title: 'Unity Thumbnail Generator Project',
  description: 'Generate Thumbnails for your Unity prefabs',
  alternates: {
    canonical: '/project/unity-thumbnail-generator',
  },
}

export default function ProjectPage({ params }) {

  function getTechnologies() {
    return [
      'Unity', 'C#'
    ]
  }

  return (
    <main>
      <div className='bg-slate-100 text-slate-900'>
        <div className="flex flex-col items-center">
          <h1 className='text-4xl font-bold text-center p-8'>Unity Thumbnail Generator</h1>
          <p className="text-xl px-12 sm:px-24">
            Unity Thumbnail Generator is a powerful custom tool designed specifically for the Unity game engine.
            It allows developers to generate custom thumbnails for their prefabs.
            You can control lighting, camera positioning, and virtually everything else in the scene used for thumbnail generation.
            For instance, you have the flexibility to adjust the thumbnail background color by simply tweaking the &quot;Environment-&gt;Background Type&quot; setting on the scene&#39;s Main Camera.
          </p>
          <div className="max-w-7xl px-24">
            <ProjectImage
              imageSrc="/img/projects/unity-thumbnail-generator/unity-thumbnail-generator-editor.webp"
              imageAlt="Unity Thumbanil Generator view in the Unity Editor"
              imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  100vw"
            />
          </div>
        </div>

        <div className="px-12 sm:px-24">
          <section>
            <h2 className="text-2xl font-bold py-4">How it works</h2>
            <p className="text-xl">
              The script traverses through a project folder recursively, searching for prefabs.
              Once located, it instantiates each prefab in a designated scene, capturing a snapshot of the scene&#39;s camera output on a texture.
              This texture is then saved to the Thumbnails folder and used as a thumbnail for the corresponding prefab in the Project Window.
              An editor extension ensures that thumbnails and prefabs are seamlessly matched by looking for thumbnails in the Thumbnails folder,
              following the same tree structure as the Asset folder.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold py-4 mt-4">How to Use</h2>
            <ul className="text-xl list-disc list-inside">
              <li>
                <strong>Integration</strong>: Import the provided scripts into your Unity project.
                Make sure to keep CustomThumbnailRenderer.cs in the Editor folder, while the other scripts can reside anywhere, but not in the Editor folder.
              </li>
              <li>
                <strong>Prefab Setup</strong>: Import the prefabs you wish to generate thumbnails for.
                Customize the scene according to your preferences, adjusting lighting, camera angles, and other settings as needed.
              </li>
              <li>
                <strong>Thumbnail Generation</strong>: Play the scene to trigger thumbnail generation.
                The script will handle the rest, generating custom thumbnails for each prefab.
              </li>
            </ul>

            <p className="text-xl">Head over to the <Link target="_blank" className="underline text-blue-800" href="https://github.com/Lorenzo603/unity-thumbnail-generator">GitHub Readme</Link> for more details on settings and important classes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold py-4 mt-4">Results</h2>
            <p className="text-xl">See below an example of before (Unity default, left) and after (Custom thumbnail, right)</p>
            <div className="max-w-7xl px-24">
              <ProjectImage
                imageSrc="/img/projects/unity-thumbnail-generator/unity-thumbnail-generator-before-after.webp"
                imageAlt="Before and After comparison"
                imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  100vw"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold py-4 mt-4">Thanks</h2>
            <p className="text-xl">Thanks to this blog post for the large majority of the generation code: <Link target="_blank" className="underline text-blue-800" href="https://undertheweathersoftware.com/automatic-thumbnail-image-generator-for-3d-objects-in-unity/">https://undertheweathersoftware.com/automatic-thumbnail-image-generator-for-3d-objects-in-unity/</Link></p>
            <p className="text-xl">Thanks to this other blog post for explaining the general idea of how to draw customizations on the project window: <Link target="_blank" className="underline text-blue-800" href="https://sahildhanju.com/posts/unity-asset-thumbnail-icons/">https://sahildhanju.com/posts/unity-asset-thumbnail-icons/</Link></p>
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
              <Link target="_blank" href="https://github.com/Lorenzo603/unity-thumbnail-generator">
                <Image
                  src="/img/social/github-logo-black.png"
                  width={40}
                  height={40}
                  style={{ width: "40px", height: "40px" }}
                  alt="Unity Thumbnail Generator GitHub link"
                />
              </Link>
              <Link target="_blank" className="underline text-blue-800" href="https://github.com/Lorenzo603/unity-thumbnail-generator">
                https://github.com/Lorenzo603/unity-thumbnail-generator
              </Link>
            </div>
          </section>
        </div>

      </div>

    </main >



  )

}