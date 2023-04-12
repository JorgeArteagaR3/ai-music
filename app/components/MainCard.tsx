import clsx from "clsx";
export default function MainCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <main
            className={clsx(
                "w-full min-h-full bg-mywhite border-[5px] border-myblack rounded-[60px]",
                className
            )}
        >
            {children}
        </main>
    );
}
