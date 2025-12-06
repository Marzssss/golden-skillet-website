import { Phone } from "lucide-react";

export default function Footer() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Golden Skillet",
        "servesCuisine": "American",
        "image": "https://goldenskilletphilly.com/images/generated/hero-smashburger.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "8600 Torresdale Ave",
            "addressLocality": "Philadelphia",
            "addressRegion": "PA",
            "postalCode": "19136",
            "addressCountry": "US"
        },
        "telephone": "267-668-8190",
        "priceRange": "$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "07:00",
                "closes": "15:00"
            }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.0400589,
            "longitude": -75.0215707
        },
        "url": "https://goldenskilletphilly.com"
    };

    return (
        <footer className="bg-brand-black py-12 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="text-center md:text-left">
                        <h3 className="mb-2 text-2xl font-bold uppercase tracking-tight">
                            Golden Skillet
                        </h3>
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} Golden Skillet. All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 text-center sm:flex-row sm:gap-8 md:text-right">
                        <a href="https://instagram.com" className="text-gray-400 transition-colors hover:text-white">
                            Instagram
                        </a>
                        <a href="tel:2676688190" className="flex items-center justify-center gap-2 font-bold hover:text-brand-yellow">
                            <Phone className="h-4 w-4" /> 267-668-8190
                        </a>
                    </div>
                </div>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </footer>
    );
}
