"use client";

import React from "react";
import { cn } from "@/utils/base";
import styles from "./input.module.css";

interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
    label?: string;
    className?: string;
}

// Use React.forwardRef to pass the ref to the textarea element
const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ error, label, className, ...restProps }, ref) => {
        return (
            <div className="flex flex-col gap-1 w-full p-0.5">
                {label && (
                    <label className={`${styles.drdInputLabel} r2l`}>
                        {label}
                    </label>
                )}
                <textarea
                    className={cn(
                        `${styles.drdTextArea} ${
                            error ? "outline-red-500" : "outline-gray-300"
                        } r2l`,
                        className
                    )}
                    ref={ref} // Attach the ref here
                    {...restProps}
                />
                {error && (
                    <span className={`${styles.drdInputError} r2l`}>
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

TextArea.displayName = "TextArea";

export default TextArea;
