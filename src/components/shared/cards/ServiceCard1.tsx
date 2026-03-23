import { ServiceType } from "@/libs/getALlServices";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
interface PropType {
	item: ServiceType;
	idx: number;
}
const ServiceCard1 = ({ item, idx = 0 }: PropType) => {
	const {
		title,
		desc,
		id,
		img = "/images/service/service-1.webp",
		iconName,
	} = item || {};
	return (
		<div className="service-item-wrap">
			<div className="service-item style-1">
				<div className="service-img">
					<Image width={490} height={360} src={img} alt="Image" />
					<span className="item-count">{modifyNumber(idx + 1)}.</span>
				</div>
				<div className="service-content">
					<h3 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h3>
					<p className="desc">{desc}</p>
					<ul className="list-style-2">
						<li>Personalized Experience</li>
						<li>Process Automation</li>
						<li>Predictive Analytics</li>
					</ul>
				</div>
				<Link className="service-link" href={`/services/${id}`}>
					<span>
						<i className="tji-arrow-right-long"></i>
					</span>
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard1;
