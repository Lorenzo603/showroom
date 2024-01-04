import Image from "next/image";

const ProjectImage = ({ imageSrc, imageAlt, imageSizes }) => {

    return (
        <div style={{position: "relative"}}>
            <Image
                fill
                src={imageSrc}
                alt={imageAlt}
                sizes={imageSizes}
                style={{position: ""}}
            />
            
        </div>
    );
};

export default ProjectImage;