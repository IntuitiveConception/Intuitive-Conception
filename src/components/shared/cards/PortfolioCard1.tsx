import { PortfolioType } from "@/libs/getPortfolio";
import Image from "next/image";
import Link from "next/link";
interface PropType {
	item: PortfolioType;
}
const PortfolioCard1 = ({ item }: PropType) => {
	const {
		title,
		slug,
		altImg,
		img = "/images/project/project-1.webp",
		id,
		category = "Connect",
	} = item || {};
	return (
		<div className="project-item">
			<div className="project-img">
				<Image width={615} height={478} src={img} alt={altImg} />
			</div>
			<div className="project-content">
				<h4 className="title">
					<Link href={`/portfolios/${slug}`}>{title}</Link>
				</h4>
				<Link className="icon-btn" href={`/portfolios/${slug}`}>
					<i className="tji-arrow-right-long"></i>
				</Link>
			</div>
			<span className="categories">
				<Link href={`/portfolios/${slug}`}>{category}</Link>
			</span>
		</div>
	);
};

export default PortfolioCard1;
