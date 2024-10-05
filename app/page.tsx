import { Intro, Service } from "@/components/home";

function HomePage() {
    return (
        <div className="flex flex-col gap-12">
            <Intro />
            <Service />
        </div>
    );
}

export default HomePage;
