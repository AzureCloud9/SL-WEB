import Footer from "@/Components/footer/Footer";
import Navbar from "@/Components/navbar/Navbar";
import { PropsWithChildren } from "react";

interface PropsWithChildrenWithLoading extends PropsWithChildren {
    maxWidth?: boolean;
}

const DefaultLayout = ({ children, maxWidth }: PropsWithChildrenWithLoading) => (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main
            className={`${maxWidth ? "max-w-[1440px] mx-auto px-6" : "w-full"}`}
        >
            {children}
        </main>
        <Footer />
    </div>
);

export default DefaultLayout;
