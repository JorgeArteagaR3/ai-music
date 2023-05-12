import clsx from "clsx";
import { ReactNode } from "react";
export default function Box({
    className,
    title,
    children,
}: {
    className?: string;
    children: ReactNode | JSX.Element;
    title: string;
}) {
    return (
        <div
            className={clsx(
                "w-[480px] h-[400px] border-[5px] border-myblack rounded-[40px] px-[68px] flex flex-col items-center pt-6 gap-8",
                className
            )}
        >
            <h2>{title}</h2>
            {children}
        </div>
    );
}
