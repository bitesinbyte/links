import { LinkData } from "@/components/link";
import { Social } from "@/components/social";
import getConfig from "@/utils/configUtils";
import getLinkData from "@/utils/linksUtils";
import { Avatar } from "@nextui-org/react";

export default function Home() {
	let config: AppConfig = getConfig();
	let linkData: LinkData = getLinkData();
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-6 md:py-10">
			{
				config &&
				<div className="grid grid-cols-6 gap-4">
					<span className="col-start-3 col-span-4">
						<Avatar isBordered radius="sm" color="danger" src={config.mainImageSource} name={config.mainImageAlt} size="lg" className="w-20 h-20 text-large ml-2 md:ml-24 dark:invert" />
					</span>
					<span className="col-start-2 col-span-4 ml-4 md:col-start-3 md:ml-10">
						<h1 className="text-3xl font-bold md:text-4xl">
							{config.brandName}
						</h1>
					</span>
					<span className="col-start-2 col-span-4">
						<p className="text-xl">
							{config.description}
						</p>
					</span>
					<span className="col-start-2 col-span-4 md:ml-4 md:col-start-3">
						{config.socialLinks && <Social socialLink={config.socialLinks} />}
					</span>
					<span className="col-start-2 col-span-4">
						{linkData && <LinkData linkData={linkData} />}
					</span>
				</div>
			}
		</section>
	);
}
