import Image from 'next/image';
import Link from 'next/link';


export default function CertificationBadge({ certification }) {

    return (
        <Link href="https://www.credly.com/users/lorenzo-furrer" target="_blank">
            <Image
                src={certification.badge}
                width={140}
                height={140}
                alt={certification.name}
                className="certification-zoom"
            />
        </Link>
    );
}