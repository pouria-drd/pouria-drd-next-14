import { Projects, Services, Skills } from "@/components/sections";

function ServicesPage() {
    return (
        <div className="flex flex-col gap-12 h-full flex-1">
            <Services />
            <Skills />
            <Projects />
        </div>
    );
}

export default ServicesPage;
