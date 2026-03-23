import { ServiceType } from "@/libs/getALlServices";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";
interface PropType {
	item: ServiceType;
	idx: number;
	lastIteme: number;
}
const ServiceCard3 = ({ item, idx = 0, lastIteme }: PropType) => {
	const {
		title,
		desc,
		id,
		img = "/images/service/service-1.webp",
		iconName,
		sub1,
		sub2,
		sub3
	} = item || {};
	return (
		<div
			className={`service-item style-3${
				idx === lastIteme ? "" : " tj-stack-item"
			}`}
		>
			<div className="service-inner">
				<div className="service-content">
					<h3 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h3>
					<p className="desc">{desc}</p>
					<ul className="list-style-2">
						<li>{sub1}</li>
						<li>{sub2}</li>
						<li>{sub3}</li>
					</ul>
					<ButtonPrimary text="Plus" url={`/services/${id}`} />
				</div>
				<div className="service-img">
					<Image width={490} height={360} src={img} alt="Image" />
				</div>
			</div>
			<span className="item-count">{modifyNumber(idx + 1)}.</span>
		</div>
	);
};

export default ServiceCard3;
