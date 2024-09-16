import React from "react";
import clsx from "clsx";

interface SectionLayoutProps {
    fullWidth?: boolean;
    backgroundImage?: string;
    backgroundColor?: string;
    children: React.ReactNode;
}

const SectionLayout = ({
    fullWidth = false,
    backgroundImage,
    backgroundColor,
    children,
}: SectionLayoutProps) => {
    const sectionStyles = {
        backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
    };

    return (
        <section
            className={clsx(
                fullWidth ? "w-screen mx-auto" : "my-9",
                backgroundImage
                    ? "bg-cover bg-center bg-no-repeat py-9 bg-fixed"
                    : "",
                backgroundColor ? `py-9 ${backgroundColor} border-b` : "",
            )}
            style={sectionStyles}
        >
            <div
                className={fullWidth ? "w-full" : "max-w-[1440px] mx-auto px-6"}
            >
                <div>{children}</div>
            </div>
        </section>
    );
};

export default SectionLayout;
