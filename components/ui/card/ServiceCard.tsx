import Container from "../typography/Container";

interface ServiceCardProps {
    children?: React.ReactNode;
}

const ServiceCard = (props: ServiceCardProps) => {
    return (
        <Container className="bg-drd-light-neutral-2 border-2 border-transparent hover:border-drd-primary rounded-lg px-6 py-8">
            {props.children}
        </Container>
    );
};

export default ServiceCard;
