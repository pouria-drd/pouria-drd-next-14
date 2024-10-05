import Image from "next/image";
import pouria from "@/components/images/trs-pouria.png";
import {
    Button,
    MotionSlide,
    Paragraph,
    SkillsWriter,
    SocialCard,
} from "@/components/ui";

const Intro = () => {
    return (
        <div className="space-y-8 r2l" id="intro">
            <MotionSlide once className="space-y-8">
                <div className="space-y-2">
                    <h3 className="transition-all text-xl sm:text-2xl font-light">
                        درود
                    </h3>
                    <div>
                        <h1 className="transition-all text-2xl sm:text-3xl font-bold bounce-left">
                            پوریا دارندی
                            <span className="font-normal"> هستم</span>
                        </h1>
                        <SkillsWriter />
                    </div>

                    <Paragraph
                        className="transition-all text-justify text-sm sm:text-base 
                        w-fit max-w-56 sm:max-w-[350px]">
                        با داشتن دانش در زمینه توسعه وب و بازی، بهترین ها را
                        ارائه می دهم، پروژه هایی که منجر به کار با کیفیت می شود.
                    </Paragraph>
                </div>

                <div className="space-y-4">
                    <Button
                        as="link"
                        href="/#services"
                        variant="outlined"
                        className="w-fit">
                        تماس با من
                    </Button>
                    <SocialCard className="justify-end l2r" />
                </div>
            </MotionSlide>

            <MotionSlide
                once
                initialDirection="left"
                className="relative flex items-center justify-end">
                <div
                    className="bg-drd-light-neutral-2 shadow-inner overflow-clip transition-all  
                    rounded-full w-60 sm:w-80 md:w-[350px] lg:w-96 h-60 sm:h-80 md:h-[350px] lg:h-96">
                    <Image
                        src={pouria}
                        alt="Portrait of Pouria Darandi"
                        priority
                        width={350} // Specify the image dimensions
                        height={350}
                        layout="responsive" // Responsive behavior
                        style={{ filter: "grayscale(100%)" }} // Apply the grayscale class
                    />
                </div>
            </MotionSlide>
        </div>
    );
};

export default Intro;
