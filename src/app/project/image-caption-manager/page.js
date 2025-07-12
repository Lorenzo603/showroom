import Link from "next/link";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";

export const metadata = {
  metadataBase: new URL('https://www.lorenzofurrer.com'),
  title: 'Image Caption Manager VSCode Extension',
  description: 'A Visual Studio Code extension for managing image-caption pairs for AI datasets. Efficiently view and edit captions for images, ideal for machine learning dataset preparation.',
  alternates: {
    canonical: '/project/image-caption-manager',
  },
}

export default function ProjectPage({ params }) {

  function getTechnologies() {
    return [
      'Visual Studio Code', 'TypeScript'
    ]
  }

  function getFeatures() {
    return [
      'Automatic Discovery: Automatically scans your workspace for image-caption pairs',
      'Side-by-Side View: Display images and their captions side-by-side for easy editing',
      'Advanced Image Viewer: Professional image viewing with zoom, pan, and fit-to-window capabilities',
      'Navigation Controls: Navigate between image-caption pairs with next/previous buttons',
      'Live Editing: Edit captions directly in the interface with auto-save functionality',
      'Manual Refresh: Use the refresh button or keyboard shortcut to rescan for new pairs',
      'Keyboard Shortcuts: Use keyboard shortcuts for quick navigation and saving',
      'Status Bar Integration: Shows the number of pairs found in the status bar',
      'Token Counter: Displays the number of tokens in the caption using GPT tokenization',
    ]
  }

  function getSupportedFormats() {
    return ['.jpg / .jpeg', '.png', '.gif', '.bmp', '.webp']
  }

  function getKeyboardShortcuts() {
    return [
      { shortcut: 'Ctrl+Alt+I (Cmd+Alt+I on Mac)', description: 'Open Image Caption Manager' },
      { shortcut: 'Ctrl+Alt+Right (Cmd+Alt+Right on Mac)', description: 'Next image-caption pair' },
      { shortcut: 'Ctrl+Alt+Left (Cmd+Alt+Left on Mac)', description: 'Previous image-caption pair' },
      { shortcut: 'Ctrl+R (Cmd+R on Mac)', description: 'Refresh image-caption pairs' },
      { shortcut: 'Ctrl+S (Cmd+S on Mac)', description: 'Save current caption' },
      { shortcut: '+ or =', description: 'Zoom in' },
      { shortcut: '-', description: 'Zoom out' },
      { shortcut: '0', description: 'Fit to window' },
      { shortcut: '1', description: 'Actual size (100%)' }
    ]
  }

  return (
    <main>
      <div className='bg-slate-100 text-slate-900'>
        <div className="flex flex-col items-center">
          <h1 className='text-4xl font-bold text-center p-8'>Image Caption Manager</h1>
          <p className="text-xl px-12 sm:px-24">
            A Visual Studio Code extension for managing image-caption pairs for AI datasets. Efficiently view and edit captions for images, ideal for machine learning dataset preparation.
          </p>
          <div className="max-w-7xl px-24">
            <ProjectImage
              imageSrc="/img/projects/image-caption-manager/image-caption-manager-full.webp"
              imageAlt="Screenshot of the Image Caption Manager VSCode extension"
              imageSizes="(max-width: 800px) 100vw, (max-width: 1023px) 75vw,  100vw"
            />
          </div>
        </div>

        <div className="px-12 sm:px-24">
          <section>
            <h2 className="text-2xl font-bold py-4">Features</h2>
            <ul className="text-xl list-disc list-inside space-y-2">
              {getFeatures().map((feature, index) => {
                const [title, description] = feature.split(': ');
                return (
                  <li key={index}>
                    <strong>{title}</strong>: {description}
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold py-4 mt-4">Image Viewer Features</h2>
            <p className="text-xl mb-4">The enhanced image viewer includes:</p>
            <ul className="text-xl list-disc list-inside space-y-2">
              <li><strong>Zoom Controls</strong>: Zoom in/out with buttons, mouse wheel, or keyboard shortcuts</li>
              <li><strong>Pan Support</strong>: Click and drag to pan around zoomed images</li>
              <li><strong>Fit to Window</strong>: Automatically fit image to the available space</li>
              <li><strong>Actual Size</strong>: View image at 100% scale</li>
              <li><strong>Smart Zoom</strong>: Zoom to cursor position when using mouse wheel</li>
              <li><strong>Toolbar</strong>: Professional toolbar with all image controls</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold py-4 mt-4">Supported Image Formats</h2>
            <div className="flex flex-wrap gap-2">
              {getSupportedFormats().map((format, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-lg">
                  {format}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold py-4 mt-4">Usage</h2>
            <ol className="text-xl list-decimal list-inside space-y-2">
              <li>Open a folder containing image-caption pairs in VS Code</li>
              <li>Use the Command Palette (<code className="bg-gray-200 px-2 py-1 rounded">Ctrl+Shift+P</code>) and search for "Open Image Caption Manager"</li>
              <li>Or use the keyboard shortcut <code className="bg-gray-200 px-2 py-1 rounded">Ctrl+Alt+I</code> (or <code className="bg-gray-200 px-2 py-1 rounded">Cmd+Alt+I</code> on Mac)</li>
              <li>Or click the "Caption Manager" button in the status bar</li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-3">File Structure</h3>
            <p className="text-lg mb-3">Your workspace should contain image-caption pairs where each image has a corresponding text file with the same name:</p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono">
              <pre>{`workspace/
├── image1.jpg
├── image1.txt
├── image2.png
├── image2.txt
├── subfolder/
│   ├── image3.jpg
│   └── image3.txt
└── ...`}</pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold py-4 mt-4">Keyboard Shortcuts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getKeyboardShortcuts().map((item, index) => (
                <div key={index} className="border border-gray-300 p-3 rounded-lg">
                  <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono block mb-2">
                    {item.shortcut}
                  </code>
                  <p className="text-lg">{item.description}</p>
                </div>
              ))}
            </div>
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
              <Link target="_blank" href="https://github.com/Lorenzo603/image-caption-manager">
                <Image
                  src="/img/social/github-logo-black.png"
                  width={40}
                  height={40}
                  style={{ width: "40px", height: "40px" }}
                  alt="Image Caption Manager GitHub link"
                />
              </Link>
              <Link target="_blank" className="underline text-blue-800" href="https://github.com/Lorenzo603/image-caption-manager">
                https://github.com/Lorenzo603/image-caption-manager
              </Link>
            </div>
          </section>
        </div>

      </div>

    </main >
  )

}