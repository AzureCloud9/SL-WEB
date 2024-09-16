import Heading from "@/Components/heading/Heading";
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

const Home = () => {
    return (
        <DefaultLayout>
            <Hero />
            <div id="howitworks">
                <HowItWorks />
            </div>
            <Faq/>
        </DefaultLayout>
    );
};

export default Home;
