import { Button, MotionSlide, Paragraph, Title } from "../ui";
import styles from "./pages.module.css";

const Skills = () => {
    return (
        <MotionSlide
            once
            amount={0.6}
            duration={0.6}
            className="flex flex-col md:flex-row items-center justify-between r2l
            gap-12 md:gap-0 py-10 sm:py-16 border-t-2 border-drd-light-neutral-3"
            id="skills">
            <div
                className={`flex flex-col items-center md:items-start justify-center gap-4
                    w-full`}>
                <div className="text-center md:text-right w-full">
                    <h5 className="w-full">
                        <span className="text-drd-primary">توانایی های</span> من
                    </h5>
                    <Title className="text-center md:text-right">
                        چه مهارت‌هایی دارم؟
                    </Title>
                </div>
                <Paragraph className="text-center md:text-right max-w-64">
                    به طور کامل ببینید چه مهارت‌هایی دارم و چه چیزهایی را توسعه
                    داده‌ام
                </Paragraph>

                <Button as="link" href="/projects" className="w-fit">
                    مشاهده پروژه‌ها
                </Button>
            </div>
            <div className={`${styles.skills__content} w-full l2r`}>
                <ol className={`${styles.skills__group}`}>
                    <li className={`${styles.skills__item}`}>C# & Unity5 3D</li>
                    <li className={`${styles.skills__item}`}>
                        React, Next js & Vue js
                    </li>
                    <li className={`${styles.skills__item}`}>
                        JavaScript & TypeScript
                    </li>
                    <li className={`${styles.skills__item}`}>
                        HTML, CSS & Tailwind CSS
                    </li>
                </ol>
                <ol className={`${styles.skills__group}`} start={5}>
                    <li className={`${styles.skills__item}`}>Python</li>
                    <li className={`${styles.skills__item}`}>Django</li>
                    <li className={`${styles.skills__item}`}>
                        Django REST framework
                    </li>
                </ol>
            </div>
        </MotionSlide>
    );
};

export default Skills;
