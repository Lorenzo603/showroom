import Image from 'next/image';


export default function CertificationBadge({ certification }) {

    return (
        <Image
            src={certification.badge}
            width={160}
            height={160}
            alt={certification.name}
            className="certification-zoom"
        />
    );
}