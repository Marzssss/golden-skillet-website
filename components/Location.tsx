import { MapPin, Phone, Clock } from "lucide-react";

export default function Location() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Info Side */}
                    <div className="flex flex-col justify-center">
                        <h2 className="mb-8 text-4xl font-bold uppercase tracking-tight text-brand-black">
                            Find Us
                        </h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-black">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Address</h3>
                                    <p className="mt-1 text-lg text-gray-600">
                                        8600 Torresdale Ave<br />
                                        Philadelphia, PA 19136
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/XJncaQTLNyo6MfKb9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-block font-bold text-brand-red hover:underline"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-black">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Hours</h3>
                                    <p className="mt-1 text-lg text-gray-600">
                                        Open Daily<br />
                                        7:00 AM – 3:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-black">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Phone</h3>
                                    <p className="mt-1 text-lg text-gray-600">
                                        Call for pickup or questions
                                    </p>
                                    <a
                                        href="tel:2676688190"
                                        className="mt-1 block text-2xl font-bold text-brand-black hover:text-brand-red"
                                    >
                                        267-668-8190
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="relative aspect-square h-full min-h-[400px] w-full overflow-hidden rounded-2xl shadow-lg lg:aspect-auto">
                        <iframe
                            title="Golden Skillet Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.4687893796853!2d-75.0215707!3d40.0400589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b300fe4569af%3A0x6b1cc425514add50!2s8600%20Torresdale%20Ave%2C%20Philadelphia%2C%20PA%2019136!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 h-full w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
