'use client';
import { getLinkBrandImage } from "@/utils/linksUtils";
import capitalizeFirstLetter from "@/utils/stringUtils";
import { Link, Card, Chip, CardBody, Image, Accordion, AccordionItem } from "@nextui-org/react";

type LinkDataProps = {
    linkData: LinkData
};
export const LinkData = ({ linkData, ...props }: LinkDataProps) => {
    return (
        <Accordion variant="splitted">
            {linkData &&
                Object.keys(linkData).map((key) => {
                    let linkInformation = linkData[key];
                    console.log(linkInformation.length);
                    console.log(linkInformation.length < 0);
                    return (
                        <AccordionItem
                            key={key}
                            aria-label={key}
                            hidden={linkInformation.length == 0}
                            startContent={
                                <Image src={getLinkBrandImage(key) + ".svg"} alt={key} className="h-10 w-10 dark:invert" />
                            }
                            title={
                                <div className="grid md:grid-cols-3 gap-4">
                                    <span>{capitalizeFirstLetter(key)}</span>
                                    <span className="md:col-end-5">
                                        <Chip color="primary">
                                            {linkInformation.length + " links"}
                                        </Chip>
                                    </span>
                                </div>}
                        >
                            <Card>
                                <CardBody className="gap-2">
                                    {linkInformation.map((l, k) => {
                                        return (
                                            <Link showAnchorIcon key={k} target="_black" href={l.link} rel="noopener noreferrer" className="border-solid border-1 border-sky-500 justify-center font-bold" >
                                                {l.title}
                                            </Link>
                                        );
                                    })}
                                </CardBody>
                            </Card>
                        </AccordionItem>
                    );
                })
            }
        </Accordion >
    );
};