import Image from "next/image";

const ProjectImage = ({ imageSrc, imageAlt, imageSizes }) => {

    return (
        <div className="relative py-4">
            <Image
                fill
                src={imageSrc}
                alt={imageAlt}
                sizes={imageSizes}
                style={{position: ""}}
                className="rounded-lg shadow-xl"
            />
            
        </div>
    );
};

export default ProjectImage;