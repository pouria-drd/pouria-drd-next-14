import { cn } from "@/lib/utils";
import { Typewriter } from "..";

interface SkillsWriterProps {
    className?: string;
}

const SkillsWriter = (props: SkillsWriterProps) => {
    const skills = ["Vue", "React", "Next-js", "Django", "Unity"];

    return (
        <div
            className={cn(
                "flex items-center gap-1 text-xl sm:text-2xl w-fit",
                props.className
            )}>
            <p className="text-drd-primary truncate">
                <Typewriter texts={skills} />
            </p>
            <h5 className="text-drd-light-neutral-12">Developer</h5>
        </div>
    );
};

export default SkillsWriter;
