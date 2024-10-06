import { CubeIcon, DesktopIcon, ServerIcon } from "@/components/icons";
import {
    Container,
    MotionSlide,
    Paragraph,
    ServiceCard,
    Title,
} from "@/components/ui";

const Services = () => {
    return (
        <MotionSlide
            once
            id="services"
            amount={0.6}
            duration={0.6}
            initialDirection="up">
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
                        <Title className="font-normal">
                            Frontend Developer
                        </Title>
                        <Paragraph className="max-w-60 sm:max-w-full mx-auto">
                            ایجاد رابط کاربری های مدرن با استفاده از فریم وورک
                            های محبوب مانند React, Next js و Vue js.
                        </Paragraph>
                    </ServiceCard>
                    <ServiceCard>
                        <CubeIcon />
                        <Title className="font-normal">Unity Developer</Title>
                        <Paragraph className="max-w-60 sm:max-w-full mx-auto">
                            ساخت بازی های هیحان انگیز و سرگرم کننده با استفاده
                            از موتور بازی سازی یونیتی (Unity).
                        </Paragraph>
                    </ServiceCard>

                    <ServiceCard>
                        <ServerIcon />
                        <Title className="font-normal">Backend Developer</Title>
                        <Paragraph className="max-w-60 sm:max-w-full mx-auto">
                            با بهره گیری از قدرت Django و Django REST ساخت API
                            های قدرتمند انجام می‌شود.
                        </Paragraph>
                    </ServiceCard>
                </div>
            </Container>
        </MotionSlide>
    );
};

export default Services;
