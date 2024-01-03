import Image from 'next/image';


export default function CertificationBadge({ certification }) {

    return (
        <Image
            src={certification.badge}
            width={140}
            height={140}
            alt={certification.name}
            className="certification-zoom"
        />
    );
}