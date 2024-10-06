"use client";

import { useState } from "react";
import Paragraph from "./Paragraph";
import { motion } from "framer-motion";

interface MoreInfoDropdownProps {
    limit?: number;
    content: string;
}

const ExtendableContent = (props: MoreInfoDropdownProps) => {
    const limit = props.limit || 100;
    const [isExpanded, setIsExpanded] = useState(false);

    /**
     * Toggles the expanded state of the content.
     *
     * This function switches between showing a truncated version of the content
     * and showing the full content.
     */
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // Determine the content to display based on the expanded state.
    const displayedContent = isExpanded
        ? props.content
        : props.content.slice(0, limit) +
          (props.content.length > limit ? "..." : "");

    return (
        <motion.div
            className="sm:hidden"
            animate={{
                height: isExpanded ? "280px" : "70px",
            }}>
            <Paragraph className="text-justify text-sm sm:text-base max-w-80 r2l">
                {displayedContent}
            </Paragraph>

            <button className="text-sm text-drd-primary" onClick={toggleExpand}>
                {isExpanded ? "مخفی کن" : "بیشتر"}
            </button>
        </motion.div>
    );
};

export default ExtendableContent;
