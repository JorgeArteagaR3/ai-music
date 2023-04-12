import clsx from "clsx";
import { ReactNode } from "react";
export default function Box({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return (
        <div
            className={clsx(
                "w-[480px] h-[400px] border-[5px] border-myblack rounded-[40px]",
                className
            )}
        >
            {children}
        </div>
    );
}
