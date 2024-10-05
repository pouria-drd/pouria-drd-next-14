import { Typewriter } from "..";
import { cn } from "@/utils/base";

interface SkillsWriterProps {
    className?: string;
}

const SkillsWriter = (props: SkillsWriterProps) => {
    const skills = ["Vue js", "React", "Next-js", "Django", "Unity"];

    return (
        <div
            className={cn(
                "transition-all text-drd-primary flex items-center gap-1 text-xl sm:text-2xl w-fit",
                props.className
            )}>
            <h5 className="inline-block ml-2">توسعه دهنده</h5>
            <Typewriter texts={skills} />
        </div>
    );
};

export default SkillsWriter;
