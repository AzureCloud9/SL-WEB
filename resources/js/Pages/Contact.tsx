import DefaultLayout from "@/Layouts/DefaultLayout";
import React from "react";
import ContactUs from "./Sections/Contact/ContactUs";
import ContactForm from "@/Components/forms/ContactForm";
import Faq from "@/Components/faq/Faq";

export default function Contact() {
    return (
        <DefaultLayout>
           <ContactUs />
           <ContactForm />
           <Faq />
        </DefaultLayout>
    );
}
