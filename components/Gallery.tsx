import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryImages = [
    { src: "/images/generated/gallery-smashburger.png", alt: "Smashburger with melted cheese and onions" },
    { src: "/images/generated/gallery-wings.png", alt: "Buffalo wings in fryer basket" },
    { src: "/images/generated/gallery-fries.png", alt: "Loaded fries with steak and cheese" },
    { src: "/images/generated/gallery-bagel.png", alt: "Breakfast bagel with egg and cheese" },
    { src: "/images/generated/gallery-cheesesteak.png", alt: "Chicken cheesesteak hoagie" },
    { src: "/images/generated/gallery-sandwich.png", alt: "Crispy chicken sandwich" },
];

export default function Gallery() {
    return (
        <section className="bg-neutral-50 py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-brand-black sm:text-4xl">
                        Fresh From The Kitchen
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-red" />
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {galleryImages.map((image, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "relative aspect-square overflow-hidden rounded-xl bg-gray-200 shadow-md transition-all hover:shadow-xl",
                                idx === 0 || idx === 3 ? "md:col-span-2 md:row-span-2" : ""
                            )}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
