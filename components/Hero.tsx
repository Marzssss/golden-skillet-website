import Image from "next/image";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Image - Priority LCP */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Image
                    src="/images/generated/hero-smashburger.png"
                    alt="Juicy Smashburger from Golden Skillet"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="mb-2 font-sans text-5xl font-bold uppercase tracking-tight text-white sm:text-7xl md:text-8xl">
                    Golden Skillet
                </h1>
                <p className="mb-8 text-xl font-medium tracking-wide text-brand-yellow sm:text-2xl">
                    Smashburgers • Cheesesteaks • Wings
                </p>

                <div className="mb-8 space-y-2 text-lg font-medium text-gray-200 sm:text-xl">
                    <p className="flex items-center justify-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        Open 7 AM – 3 PM
                    </p>
                    <a
                        href="https://maps.app.goo.gl/XJncaQTLNyo6MfKb9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-yellow transition-colors block"
                    >
                        8600 Torresdale Ave, Phila, PA 19136
                    </a>
                    <a
                        href="tel:2676688190"
                        className="hover:text-brand-yellow transition-colors block"
                    >
                        267-668-8190
                    </a>
                </div>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a
                        href="#menu"
                        className="group flex min-h-[56px] w-full items-center justify-center rounded-full bg-brand-red px-8 text-lg font-bold text-white transition-all hover:bg-red-700 hover:scale-105 sm:w-auto"
                    >
                        View Menu
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                        href="tel:2676688190"
                        className="flex min-h-[56px] w-full items-center justify-center rounded-full bg-white px-8 text-lg font-bold text-brand-black transition-all hover:bg-gray-100 hover:scale-105 sm:w-auto"
                        aria-label="Call Golden Skillet"
                    >
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                    </a>

                    <a
                        href="https://maps.app.goo.gl/XJncaQTLNyo6MfKb9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[56px] w-full items-center justify-center rounded-full border-2 border-white/30 bg-black/40 px-8 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto"
                    >
                        <MapPin className="mr-2 h-5 w-5" />
                        Directions
                    </a>
                </div>
            </div>
        </section>
    );
}
