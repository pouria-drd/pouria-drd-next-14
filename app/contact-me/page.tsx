"use client";
import {
    Button,
    Container,
    Input,
    MotionSlide,
    Paragraph,
    TextArea,
    Title,
} from "@/components/ui";
import { useState } from "react";

function ContactMePage() {
    const [body, setBody] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [email, setEmail] = useState<string>("pouriadrd@gmail.com");

    // Function to copy the email to the clipboard
    const handleCopyEmail = async () => {
        await navigator.clipboard.writeText(email).then(
            function () {
                console.log("Async: Copying to clipboard was successful!");
            },
            function (err) {
                console.error("Async: Could not copy text: ", err);
            }
        );

        // Alert the copied text
        alert("ایمیل کپی شد!");
    };

    return (
        <MotionSlide
            once
            amount={0.6}
            duration={0.6}
            id="contact-me"
            initialDirection="up"
            className="flex items-center justify-center flex-col gap-2 h-full flex-1">
            <Container className="gap-2 pt-8">
                <Title>ارسال پیام</Title>
                <Paragraph className="max-w-60">
                    برای براقراری ارتباط می توانید از طریق فرم زیر پیام بفرستید
                    و یا به ایمیل زیر پیام دهید.
                </Paragraph>

                {/* Email span with copy functionality */}
                <span
                    className="text-drd-primary cursor-pointer"
                    onClick={handleCopyEmail}>
                    {email}
                </span>
            </Container>

            <div className="space-y-4 w-full sm:max-w-80">
                <Input
                    label="موضوع"
                    value={subject}
                    placeholder="موضوع پیام خود را وارد کنید..."
                    onChange={(e) => setSubject(e.target.value)}
                />
                <TextArea
                    label="متن"
                    value={body}
                    placeholder="متن پیام خود را وارد کنید..."
                    onChange={(e) => setBody(e.target.value)}
                />

                <Button
                    as="link"
                    href={`mailto:${email}?subject=${encodeURIComponent(
                        subject
                    )}&body=${encodeURIComponent(body)}`}>
                    ارسال پیام
                </Button>
            </div>
        </MotionSlide>
    );
}

export default ContactMePage;
