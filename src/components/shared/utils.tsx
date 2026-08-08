import React from "react";

export const renderTextWithBold = (text: string): React.ReactNode[] => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                // neutral-100, not neutral-400: emphasis has to be *brighter*
                // than the surrounding copy. Against a neutral-300 paragraph the
                // old value made bold text read as de-emphasised.
                <span key={index} className="font-semibold text-neutral-100">
                    {part.slice(2, -2)}
                </span>
            );
        }
        return part;
    });
};
