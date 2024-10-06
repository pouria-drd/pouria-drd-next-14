"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import pouria from "@/components/images/trs-pouria.png";
import {
    Button,
    Container,
    MotionSlide,
    Paragraph,
    SkillsWriter,
    Title,
} from "@/components/ui";

const Intro = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const aboutMe: string = `
                    متولد 14 بهمن 1380 هستم. فعالیت‌های برنامه‌نویسی خود را از
                    دی‌ماه 1399 با یادگیری زبان Python به‌صورت خودآموز آغاز
                    کردم. سپس، از تیر 1400 تا دی 1400 در مجتمع فنی تهران،
                    دوره‌های الگوریتم در زبان‌های C++ و Python را با نمره 100 از
                    100 و همچنین دوره Advanced Django را از دی ۱۴۰۰ تا دی ۱۴۰۱
                    با نمره 95 از 100 گذراندم. پس از آن، به یادگیری فریم‌ورک‌های
                    فرانت‌اند از جمله Vue.js، React و Next.js پرداختم. از اسفند
                    1401 تا اردیبهشت 1403، به‌عنوان برنامه‌نویس در تیم فراییت در
                    زمینه‌های Django، React و Vue فعالیت داشتم. در ادامه، از 13
                    مرداد 1403 به‌عنوان برنامه‌نویس فول‌استک با تمرکز بر Django
                    REST و Next.js در تیم دیجیتال مارکتینگ شرکت عصر دانش افزار
                    پیوستم.
                    `;

    return (
        <Container
            className="flex sm:flex-row justify-between gap-8 sm:gap-4 pt-4 sm:pt-8 r2l"
            id="intro">
            <MotionSlide
                once
                amount={0.6}
                duration={0.6}
                className="space-y-8 w-full">
                <div>
                    <Title className="text-2xl sm:text-3xl text-right">
                        پوریا دارندی
                    </Title>
                    <SkillsWriter />
                </div>

                <Container className="sm:hidden items-start justify-start gap-0 p-0">
                    <AnimatePresence initial={false}>
                        <motion.div
                            className="overflow-hidden"
                            animate={{
                                transition: {
                                    duration: 0.75,
                                    ease: "backInOut",
                                },
                                height: isExpanded ? "auto" : "63px",
                            }}>
                            <Paragraph className="text-justify text-sm sm:text-base max-w-80 r2l">
                                {aboutMe}
                            </Paragraph>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        className="text-sm text-drd-primary"
                        onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? "بستن" : "بیشتر"}
                    </button>
                </Container>

                <Paragraph className="hidden sm:block text-justify md:text-sm max-w-80 r2l">
                    متولد 14 بهمن 1380 هستم. فعالیت‌های برنامه‌نویسی خود را از
                    دی‌ماه 1399 با یادگیری زبان Python به‌صورت خودآموز آغاز
                    کردم. سپس، از تیر 1400 تا دی 1400 در مجتمع فنی تهران،
                    دوره‌های الگوریتم در زبان‌های C++ و Python را با نمره 100 از
                    100 و همچنین دوره Advanced Django را از دی ۱۴۰۰ تا دی ۱۴۰۱
                    با نمره 95 از 100 گذراندم. پس از آن، به یادگیری فریم‌ورک‌های
                    فرانت‌اند از جمله Vue.js، React و Next.js پرداختم. از اسفند
                    1401 تا اردیبهشت 1403، به‌عنوان برنامه‌نویس در تیم فراییت در
                    زمینه‌های Django، React و Vue فعالیت داشتم. در ادامه، از 13
                    مرداد 1403 به‌عنوان برنامه‌نویس فول‌استک با تمرکز بر Django
                    REST و Next.js در تیم دیجیتال مارکتینگ شرکت عصر دانش افزار
                    پیوستم.
                </Paragraph>

                <Button
                    as="link"
                    href="/contact-me"
                    variant="outlined"
                    className="w-fit mr-px">
                    ارسال پیام
                </Button>
            </MotionSlide>

            <MotionSlide
                once
                amount={0.6}
                duration={0.6}
                initialDirection="left"
                className="relative flex items-center justify-center sm:justify-end w-full">
                <div
                    className="bg-drd-light-neutral-2 shadow-inner overflow-clip transition-all  
                    rounded-full w-56 sm:w-72 md:w-80 lg:w-[350px]">
                    <Image
                        priority
                        width={350}
                        height={350}
                        src={pouria}
                        alt="Portrait of Pouria Darandi"
                        className="filter grayscale hover:grayscale-0 transition-all duration-200"
                    />
                </div>
            </MotionSlide>
        </Container>
    );
};

export default Intro;
