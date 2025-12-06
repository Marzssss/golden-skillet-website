import { menuData, MenuItem } from "@/lib/menuData";

export default function Menu() {
    return (
        <section id="menu" className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold uppercase tracking-tight text-brand-black sm:text-5xl">
                        Our Menu
                    </h2>
                    <div className="mx-auto h-2 w-24 rounded-full bg-brand-yellow" />
                </div>

                <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:gap-16">
                    {menuData.map((category) => (
                        <div key={category.id} className="break-inside-avoid">
                            <h3 className="mb-6 border-b-4 border-brand-red/10 pb-2 text-2xl font-bold uppercase tracking-wide text-brand-red">
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.items.map((item) => (
                                    <MenuItemRow key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function MenuItemRow({ item }: { item: MenuItem }) {
    return (
        <div className="group flex flex-col sm:flex-row sm:justify-between sm:gap-4">
            <div className="sm:max-w-[70%]">
                <h4 className="flex items-baseline text-lg font-bold text-brand-black">
                    {item.name}
                </h4>
                {item.description && (
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {item.description}
                    </p>
                )}
            </div>

            <div className="mt-1 flex items-baseline gap-2 sm:mt-0 sm:text-right">
                {typeof item.price === 'number' ? (
                    <span className="font-bold text-brand-black">${item.price.toFixed(2)}</span>
                ) : (
                    <div className="flex flex-col items-end gap-1 text-sm">
                        {Object.entries(item.price as Record<string, number>).map(([size, price]) => (
                            <div key={size} className="flex gap-2">
                                <span className="font-medium text-gray-500 capitalize">{size}</span>
                                <span className="font-bold text-brand-black">${price.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
