import DefaultLayout from "@/Layouts/DefaultLayout";
import { Button } from "@/shadcn/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card";
import Hero from "./Sections/Home/Hero";
import HowItWorks from "./Sections/Home/HowItWorks";
import Faq from "@/Components/faq/Faq";
import { Head } from "@inertiajs/react";

const Home = () => {
    return (
        <DefaultLayout>
            <Head title="Home" />
            <Hero />
            <div id="howitworks">
                <HowItWorks />
            </div>
            <Faq />
        </DefaultLayout>
    );
};

export default Home;
