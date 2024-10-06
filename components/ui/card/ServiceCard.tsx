import Link from "next/link";
import Container from "../typography/Container";

interface ServiceCardProps {
    children?: React.ReactNode;
    githubLink?: string;
    websiteLink?: string;
}

const ServiceCard = (props: ServiceCardProps) => {
    return (
        <Container className="bg-drd-light-neutral-2 border-2 border-transparent hover:border-drd-primary rounded-lg p-6">
            {props.children}

            <div className="flex justify-center items-center gap-2 mt-2">
                {props.websiteLink && (
                    <Link
                        href={props.websiteLink}
                        target="_blank"
                        className="text-drd-primary">
                        <span className="text-xs">سایت</span>
                    </Link>
                )}
                {props.githubLink && (
                    <Link
                        href={props.githubLink}
                        target="_blank"
                        className="text-drd-primary">
                        <span className="text-xs">سورس کد</span>
                    </Link>
                )}
            </div>
        </Container>
    );
};

export default ServiceCard;
