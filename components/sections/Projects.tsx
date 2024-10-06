import {
    Container,
    MotionSlide,
    Paragraph,
    ServiceCard,
    Title,
} from "@/components/ui";

const Projects = () => {
    return (
        <MotionSlide
            once
            id="projects"
            amount={0.6}
            duration={0.6}
            initialDirection="up">
            <Container className="gap-12 py-8">
                <div className="text-center w-full">
                    <h5 className="w-full">
                        <span className="text-drd-primary">open source</span>{" "}
                        پروژه‌های
                    </h5>
                    <Title>چه پروژه‌هایی را انجام داده‌ام؟</Title>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-fit">
                    <ServiceCard
                        websiteLink="https://cafevand.ir/"
                        githubLink="https://github.com/pouria-drd/cafe-vand">
                        <Title className="font-normal">Cafe Vand</Title>
                        <Paragraph className="max-w-60 sm:max-w-full mx-auto">
                            منو آنلاین و پنل مدیریتی برای کافه وند، دسترسی آسان
                            برای مدیریت محصولات، دسته بندی ها و ... ساخته شده با
                            Next js
                        </Paragraph>
                    </ServiceCard>

                    <ServiceCard githubLink="https://github.com/pouria-drd/VandAPI">
                        <Title className="font-normal">Vand API</Title>
                        <Paragraph className="max-w-60 sm:max-w-full mx-auto">
                            API قدرتمند و ساده برای مدیریت محصولات و دسته بندی
                            های کافه وند با بهره گیری از Django REST Framework
                        </Paragraph>
                    </ServiceCard>

                    <ServiceCard githubLink="https://github.com/pouria-drd/CubeRunner">
                        <Title className="font-normal">CubeRunner</Title>
                        <Paragraph className="max-w-60 sm:max-w-full mx-auto">
                            CubeRunner با استفاده از Unity ساخته شده است که در
                            سبک endless runner. وانیی های خود را به چالش بکشید
                        </Paragraph>
                    </ServiceCard>

                    <ServiceCard githubLink="https://github.com/pouria-drd/drd-ui">
                        <Title className="font-normal">DRD-UI</Title>
                        <Paragraph className="max-w-60 sm:max-w-full mx-auto">
                            رابط کاربری های آماده برای React شامل دکمه‌ها، تست
                            سیستم‌، مدال و ... به صورت Reusable Component ساخته
                            شده است.
                        </Paragraph>
                    </ServiceCard>

                    <ServiceCard githubLink="https://github.com/pouria-drd/OnlineMenuApi">
                        <Title className="font-normal">OnlineMenuApi</Title>
                        <Paragraph className="max-w-60 sm:max-w-full mx-auto">
                            مناسب برای رستوران ها و کافی شاپ ها، به راحتی برای
                            محصولات خود را در منو ایجاد کنید و آن را مدیریت
                            کنید...
                        </Paragraph>
                    </ServiceCard>
                </div>
            </Container>
        </MotionSlide>
    );
};

export default Projects;
