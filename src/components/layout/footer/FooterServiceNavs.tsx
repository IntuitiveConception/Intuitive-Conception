import Link from "next/link";
import getALlServices from "@/libs/getALlServices";

const FooterServiceNavs = () => {

	const items = getALlServices()?.slice(0, 4);

	return (
		<ul>
			{items.map(item => {
				return (
					<li key={item.id}>
						<Link href={`/services/${item.slug}`}>{item.title}</Link>
					</li>
				)
			})}
		</ul>
	);
};

export default FooterServiceNavs;
