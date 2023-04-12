import clsx from "clsx";

export default function Button({
    children,
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={clsx(
                "w-[170px] h-[80px] rounded-full font-normal text-2xl",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
