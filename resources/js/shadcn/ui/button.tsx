import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shadcn";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                main: "bg-swift_black text-primary-foreground hover:bg-swift_black_hover font-sen font-bold",
                second: "border-swift_black border-2 text-swift_secondary hover:bg-swift_secondary_hover hover:text-white font-sen font-bold",
                third: "border-white border-2 text-white hover:bg-white hover:text-black font-sen font-bold",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                shippingBack:
                    "bg-gray-500 text-white hover:bg-gray-600 font-sen font-bold",
                next: "bg-swift_black text-white hover:bg-swift_black_hover w-[100%] rounded-3xl ml-4 font-sen font-bold mb-12 ",
                back: "border-swift_black border-2 text-swift_secondary hover:bg-swift_secondary_hover  w-[100%] rounded-3xl ml-4 font-sen font-bold mb-12 hover:text-white",
            },
            size: {
                default:
                    "px-6 py-4 text-[16px] sm:px-8 sm:py-4 sm:text-[14px] xs:px-6 xs:py-3 xs:text-[12px] lg:w-[220px] lg:h-[60px] lg:text-[18px]",
                second: "px-12 py-5 text-[16px] sm:px-8 sm:py-4 sm:text-[14px] xs:px-6 xs:py-3 xs:text-[12px]",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "main",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
                disabled={props.disabled} // Ensure the disabled state is passed to the button
            >
                {props.children}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
