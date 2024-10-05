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
                        تماس با ما
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
                    rounded-full size-60 sm:size-80 md:size-[350px] lg:size-96">
                    <Image src={pouria} alt="pouria image" priority />
                </div>
            </MotionSlide>
        </div>
    );
};

export default Intro;
