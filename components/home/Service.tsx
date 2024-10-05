import { CubeIcon, DesktopIcon, ServerIcon } from "@/components/icons";
import {
    Container,
    MotionSlide,
    Paragraph,
    ServiceCard,
    Title,
} from "@/components/ui";

const Service = () => {
    return (
        <MotionSlide
            once
            id="services"
            amount={0.6}
            duration={0.6}
            initialDirection="up"
            className="border-t border-drd-neutral-11">
            <Container className="gap-12 py-8">
                <div className="text-center w-full">
                    <h5 className="w-full">
                        <span className="text-drd-primary">خدمات</span> من
                    </h5>
                    <Title>در چه زمینه‌هایی فعالم؟</Title>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-fit">
                    <ServiceCard>
                        <DesktopIcon />
                        <Title className="font-normal">Fronted Developer</Title>
                        <Paragraph className="max-w-60 sm:max-w-full mx-auto">
                            ایجاد رابط کاربری های پویا و مدرن با استفاده از
                            React, Next js, Vue و ...
                        </Paragraph>
                    </ServiceCard>
                    <ServiceCard>
                        <CubeIcon />
                        <Title className="font-normal">Game Developer </Title>
                        <Paragraph className="max-w-60 sm:max-w-full mx-auto">
                            ساخت بازی های هیحان انگیز و سرگرم کننده با استفاده
                            از موتور بازی سازی Unity.
                        </Paragraph>
                    </ServiceCard>

                    <ServiceCard>
                        <ServerIcon />
                        <Title className="font-normal">Backend Developer</Title>
                        <Paragraph className="max-w-60 sm:max-w-full mx-auto">
                            با استفاده از فریم ورک Django ساخت API های قدرتمند
                            انجام می‌شود.
                        </Paragraph>
                    </ServiceCard>
                </div>
            </Container>
        </MotionSlide>
    );
};

export default Service;
