import Link from "next/link";

export default function HeroComponent() {
    return (
        <div className="relative bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 h-96 sm:h-[30rem] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/img/geometric-mosaic-bg.webp')] bg-cover bg-center animate-fade-opacity"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl sm:text-7xl font-extrabold p-8 drop-shadow-lg">
                    Hi, I&#39;m Lorenzo
                </h1>
                <p className="text-2xl sm:text-4xl px-8 pb-8 drop-shadow-md">
                    I develop all kinds of applications, some professionally, some for fun!
                </p>
                <Link
                    href="#about"
                    className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg transition-all hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 hover:text-white"
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
}