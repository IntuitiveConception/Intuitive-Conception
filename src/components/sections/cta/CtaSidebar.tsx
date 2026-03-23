import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const CtaSidebar = ({img="/images/service/ai-service-1_1.png"}) => {
	return (
		<div className="feature-box">
			<div className="feature-content">
				<h2 className="title">Plus de détails ?</h2>
				<p className="desc">

				</p>
				<ButtonPrimary text="Contact" url="/contact" />
			</div>
			<div className="feature-images">
				<Image
					width={540}
					height={776}
					src={img}
					alt=""
				/>
			</div>
		</div>
	);
};

export default CtaSidebar;
