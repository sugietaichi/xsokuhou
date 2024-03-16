import { ReactNode } from "react";

export const Headline = ({
    icon,
    text
}: {
    icon: ReactNode,
    text: string
}) => {
    return (
        <div className="flex items-center">
            {icon}
            <h1 className="text-3xl font-bold ml-2">{text}</h1>
        </div>
    );
};