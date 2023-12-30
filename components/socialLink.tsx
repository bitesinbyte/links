import { Link, Image } from "@nextui-org/react";
type SocialLinkProps = {
    href: string
    brand: string
};

export const SocialLink = ({ href, brand, ...props }: SocialLinkProps) => {
    return (
        <Link target="_black" href={href} rel="noopener noreferrer">
            <Image src={brand + ".svg"} alt={brand} className="h-10 w-10 dark:invert" />
        </Link>
    );
};