import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import WaGlyph from "@/components/WaGlyph";
import { waLink } from "@/lib/whatsapp";

const MONTHLY = [
    { id: "1bhk", label: "1 BHK", old: "₹2,400", price: "₹1,999" },
    { id: "2bhk", label: "2 BHK", old: "₹3,000", price: "₹2,499" },
    { id: "3bhk", label: "3 BHK", old: "₹3,600", price: "₹2,999" },
];

const planMsg = (label, price) =>
    `Hi Homzy! I want to book the Monthly Plan — ${label} (${price}/month). Please share the details and available slots.`;

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
                <div className="grid gap-10 rounded-[2.5rem] bg-pine p-7 text-cream shadow-2xl shadow-pine/25 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16">
                    {/* left copy */}
                    <Reveal>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime">
                            Pricing
                        </p>
                        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                            Clear prices.{" "}
                            <span className="font-serifit font-semibold text-lime">
                                No surprises.
                            </span>
                        </h2>
                        <p className="mt-6 font-display text-6xl font-extrabold tracking-tight sm:text-7xl">
                            ₹79
                            <span className="ml-2 align-middle font-body text-lg font-semibold text-cream/60">
                                per service
                            </span>
                        </p>
                        <ul className="mt-8 space-y-3.5">
                            {[
                                "Kitchen, bathroom, dusting & mopping, balcony — ₹79 each",
                                "Home decor plan at ₹999 (was ₹1,499)",
                                "Monthly plans from ₹1,999",
                                "Pay after the job — UPI or cash",
                            ].map((point) => (
                                <li
                                    key={point}
                                    className="flex items-center gap-3 text-base font-medium text-cream/85"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime/20">
                                        <Check className="h-3.5 w-3.5 text-lime" />
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    {/* plans */}
                    <Reveal delay={0.15}>
                        <div className="rounded-3xl bg-white p-6 text-pine shadow-xl sm:p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-bark">
                                Monthly plans
                            </p>

                            <div className="mt-4 space-y-3">
                                {MONTHLY.map((m) => (
                                    <motion.a
                                        key={m.id}
                                        whileHover={{ y: -2 }}
                                        href={waLink(planMsg(m.label, m.price))}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-testid={`pricing-monthly-${m.id}`}
                                        className="flex items-center justify-between gap-4 rounded-2xl border-2 border-pine/10 bg-cream p-4 transition-colors duration-200 hover:border-leaf"
                                    >
                                        <div>
                                            <p className="font-display text-lg font-bold">
                                                {m.label}
                                            </p>
                                            <p className="mt-0.5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-leaf">
                                                <WaGlyph className="h-3.5 w-3.5" />
                                                Book on WhatsApp
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-bark line-through">
                                                {m.old}
                                            </p>
                                            <p className="font-display text-3xl font-extrabold text-pine">
                                                {m.price}
                                                <span className="ml-1 text-xs font-semibold text-bark">
                                                    /month
                                                </span>
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center gap-3">
                                <span className="h-px flex-1 bg-line" />
                                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-bark">
                                    home decor
                                </span>
                                <span className="h-px flex-1 bg-line" />
                            </div>

                            <a
                                href={waLink(
                                    "Hi Homzy! I want to book the Home Decor Plan (₹999). Please share the details and available slots.",
                                )}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="pricing-decor-plan"
                                className="mt-4 flex items-center justify-between gap-4 rounded-2xl border-2 border-pine/10 bg-cream p-4 transition-colors duration-200 hover:border-leaf"
                            >
                                <p className="font-display text-lg font-bold">
                                    Home decor plan
                                </p>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-bark line-through">
                                        ₹1,499
                                    </p>
                                    <p className="font-display text-3xl font-extrabold text-pine">
                                        ₹999
                                    </p>
                                </div>
                            </a>

                            <p className="mt-4 text-center text-xs font-medium text-bark">
                                We confirm your slot on WhatsApp shortly after.
                            </p>

                            <div className="mt-5 flex items-center gap-3">
                                <span className="h-px flex-1 bg-line" />
                                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-bark">
                                    or book a full home package
                                </span>
                                <span className="h-px flex-1 bg-line" />
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-3">
                                {[
                                    { id: "1bhk", label: "1 BHK deep clean", price: "₹3,999" },
                                    { id: "2bhk", label: "2 BHK deep clean", price: "₹4,499" },
                                ].map((pkg) => (
                                    <a
                                        key={pkg.id}
                                        href={waLink(
                                            `Hi Homzy! I want to book a Full Home Deep Clean — ${pkg.id.toUpperCase()} (${pkg.price}). Please share your available slots.`,
                                        )}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-testid={`pricing-package-${pkg.id}`}
                                        className="rounded-2xl border-2 border-pine/10 bg-cream p-4 text-center transition-colors duration-200 hover:border-leaf"
                                    >
                                        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-bark">
                                            {pkg.label}
                                        </p>
                                        <p className="mt-1 font-display text-2xl font-extrabold text-pine">
                                            {pkg.price}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
