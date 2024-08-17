import { Typewriter } from "..";

const SkillsWriter = () => {
    const skills = [
        "Vue",
        "React",
        "Next-js",
        "Django",
        "Unity",
        "Django REST",
    ];

    return (
        <div
            className="flex items-center justify-between gap-1 
                text-xl sm:text-2xl w-fit">
            <p className="text-drd-primary">
                <Typewriter texts={skills} />
            </p>
            <h5 className="text-drd-neutral-40">Developer</h5>
        </div>
    );
};

export default SkillsWriter;
