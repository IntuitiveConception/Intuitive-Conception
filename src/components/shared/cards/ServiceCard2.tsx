import { ServiceType } from "@/libs/getALlServices";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";


interface PropType {
	item: ServiceType;
	idx: number;
}
const ServiceCard2 = ({ item, idx = 0 }: PropType) => {
	const {
		title,
		SEOTitle,
		desc,
		id = 0,
		slug = "",
		img = "/images/service/service-1.webp",
	} = item || {};
	return (
		<div className="service-item style-2">
			<div className="service-inner">
				<div className="service-content">
					<h2 className="service-detail-h2">
						<Link href={`/services/${slug}`}>{title}</Link>
					</h2>
					<p className="desc">{desc}</p>
				</div>
				<div className="service-img">
					<Image width={490} height={360} src={img} alt={SEOTitle} />
					<Link className="text-btn" href={`/services/${slug}`}>
						<span className="btn-text">
							<span>En Savoir Plus</span>
						</span>
						<span className="btn-icon">
							<span>
								<i className="tji-arrow-right"></i>
							</span>
						</span>
					</Link>
				</div>
			</div>
			<span className="item-count">{modifyNumber(id)}.</span>
		</div>
	);
};

export default ServiceCard2;
