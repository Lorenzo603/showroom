import Image from 'next/image';
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
	TECH_LOGOS_MAP.set('blender', {
		'logo': '/img/techs/blender-logo.png',
		'tooltip': 'Blender',
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
	TECH_LOGOS_MAP.set('unity', {
		'logo': '/img/techs/unity-logo.svg',
		'tooltip': 'Unity',
	});
	TECH_LOGOS_MAP.set('c-sharp', {
		'logo': '/img/techs/c-sharp-logo.svg',
		'tooltip': 'C#',
	});



	return (
		<div className='max-w-96'>
			<article>
				<Link href={`/project/${project.slug}`}>
					<div className="bg-white text-slate-900 border border-slate-200 rounded-lg shadow-lg 
                    transition-shadow duration-500 hover:shadow-project-card
                    overflow-visible z-auto" // Needed to avoid tooltip being cutoff by the Card
					>
						<Image
							src={project.image}
							alt=""
							width={382}
							height={192}
							className="w-full h-48 object-cover rounded-t-lg"
						/>
						<div className="p-4">
							<h3 className="text-left text-2xl font-bold mb-2">{project.title}</h3>
							<p className="text-left text-gray-700 min-h-[5em]">
								{project.description}
							</p>
						</div>
						<div className="flex justify-between items-center p-4">
							<div className="flex space-x-2">
								{project.technologies.map((tech) => {
									const technologyEntry = TECH_LOGOS_MAP.get(tech);
									return (
										<div key={tech} className="tooltip">
											<span className="tooltiptext">{technologyEntry.tooltip}</span>
											<Image
												src={technologyEntry.logo}
												width={40}
												height={40}
												alt=""
											/>
										</div>
									);
								})}
							</div>
							<Image
								src="/img/chevron-right.svg"
								width={40}
								height={40}
								alt="Go to project page"
								className="transition-transform transform hover:scale-125"
							/>
						</div>
					</div>
				</Link>
			</article>
		</div>

	);
}