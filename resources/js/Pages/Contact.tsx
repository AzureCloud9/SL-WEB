import DefaultLayout from "@/Layouts/DefaultLayout";
import React from "react";
import ContactUs from "./Sections/Contact/ContactUs";
import ContactForm from "@/Components/forms/ContactForm";
import Faq from "@/Components/faq/Faq";
import { Head } from "@inertiajs/react";

export default function Contact() {
    return (
        <DefaultLayout>
            <Head title="Over ons" />
            <ContactUs />
            <ContactForm />
            <Faq />
        </DefaultLayout>
    );
}
