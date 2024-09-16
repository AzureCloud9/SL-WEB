import faq from "../../../assets/faq.svg";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../shadcn/ui/accordion";

export default function Faq() {
    return (
        <div className="container mx-auto px-4 py-12 lg:w-[1150px]">
            <h2 className="text-3xl font-bold text-center mb-8">
                Veelgestelde Vragen
            </h2>
            <div className="lg:flex lg:mt-24 items-center justify-center ">
                <div className="lg:flex lg:justify-between lg:gap-28 lg:w-full">
                    <Accordion
                        type="single"
                        collapsible
                        className="lg:w-[500px]"
                    >
                        <AccordionItem value="item-1" className="lg:text-xl">
                            <AccordionTrigger>
                                Hoe snel wordt mijn brief verzonden?
                            </AccordionTrigger>
                            <AccordionContent>
                                Uw brief wordt binnen 24 uur na ontvangst van de
                                bestelling verwerkt en verzonden.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="lg:text-xl">
                            <AccordionTrigger>
                                Wat zijn de verzendkosten?
                            </AccordionTrigger>
                            <AccordionContent>
                                De verzendkosten variëren afhankelijk van de
                                verzendmethode:
                                <ul className="mt-2 ml-4 list-disc">
                                    <li>Reguliere post: €2,00</li>
                                    <li>Spoed: €3,20</li>
                                    <li>Aangetekend: €10,50</li>
                                </ul>
                                De prijzen kunnen hoger worden afhankelijk van
                                het aantal pagina's. Voor elke extra 2 pagina's
                                wordt een toeslag toegevoegd.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="lg:text-xl">
                            <AccordionTrigger>
                                Kan ik mijn brief volgen?
                            </AccordionTrigger>
                            <AccordionContent>
                                Tracking is alleen beschikbaar voor aangetekende
                                verzendingen van €10,50. De reguliere post en
                                spoedpost bieden geen track en trace.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="lg:text-xl">
                            <AccordionTrigger>
                                Welke betaalmethoden accepteren jullie?
                            </AccordionTrigger>
                            <AccordionContent>
                                Wij accepteren betalingen via creditcard, iDEAL,
                                PayPal en bankoverschrijving.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="lg:text-xl">
                            <AccordionTrigger>
                                Wat gebeurt er als mijn brief niet aankomt?
                            </AccordionTrigger>
                            <AccordionContent>
                                Als uw brief niet aankomt, neem dan contact op
                                met onze klantenservice. Wij zullen ons best
                                doen om het probleem zo snel mogelijk op te
                                lossen.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6" className="lg:text-xl">
                            <AccordionTrigger>
                                Zijn mijn brieven privé en veilig?
                            </AccordionTrigger>
                            <AccordionContent>
                                Ja, uw brieven zijn volledig privé en veilig.
                                Wij hechten veel waarde aan de privacy van onze
                                klanten en zorgen ervoor dat alle brieven
                                vertrouwelijk worden behandeld. Uw gegevens
                                worden nooit gedeeld met derden.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="hidden lg:flex items-end lg:w-[500px]">
                        <img src={faq} alt="faq" className="h-96 lg:w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
