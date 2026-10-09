import { SparkPath } from "@/components/Logo";

const ITEMS = [
    "Kitchen clean",
    "Bathroom sanitation",
    "Dusting & mopping",
    "Utensils & laundry",
    "Balcony cleaning",
    "Home decor plan ₹999",
    "Monthly plans from ₹1,999",
    "Services from ₹79",
];

export default function Marquee() {
    return (
        <section aria-label="Services ticker" className="overflow-hidden">
            <div className="w-[110%] -translate-x-[5%] -rotate-1 border-y border-pine/20 bg-pine py-5 shadow-lg">
                <div className="flex w-max animate-marquee">
                    {[0, 1].map((dup) => (
                        <div
                            key={dup}
                            aria-hidden={dup === 1}
                            className="flex items-center pr-12"
                        >
                            {ITEMS.map((item, i) => (
                                <span
                                    key={i}
                                    className="flex items-center whitespace-nowrap"
                                >
                                    <span
                                        className={
                                            i % 2 === 0
                                                ? "font-display text-lg font-bold uppercase tracking-[0.14em] text-cream"
                                                : "font-serifit text-xl text-lime"
                                        }
                                    >
                                        {item}
                                    </span>
                                    <SparkPath className="mx-6 h-4 w-4 shrink-0 text-lime" />
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
