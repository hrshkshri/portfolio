import React from "react";

export const renderTextWithBold = (text: string): React.ReactNode[] => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <span key={index} className="font-bold text-neutral-400">
                    {part.slice(2, -2)}
                </span>
            );
        }
        return part;
    });
};
