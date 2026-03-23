import ProcessCard from "@/components/shared/cards/ProcessCard";
import Image from "next/image";

const Process = () => {
	const items = [
		{
			id: 1,
			iconName: "tji-discovery",
			title: "Discovery & Strategy",
			desc: "Understanding client needs, defining goals, and designing tailored AI solutions.",
		},
		{
			id: 2,
			iconName: "tji-development",
			title: "Development & Integration",
			desc: "Building, training, and deploying AI models, seamlessly integrating them into existing systems.",
		},
		{
			id: 3,
			iconName: "tji-support",
			title: "Optimization & Support",
			desc: "Monitoring performance, refining algorithms, and providing ongoing technical upport.",
		},
	];
	return (
		<div className="tj-working-process section-gap section-gap-x fix">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-1 order-2">
						<div className="working-img wow fadeInLeft" data-wow-delay=".3s">
							<Image
								width={906}
								height={1097}
								src="/images/process/process-img.webp"
								alt="Image"
							/>
						</div>
					</div>
					<div className="col-lg-6 order-lg-2 order-1">
						<div className="sec-heading">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle"></i>How Its Work
							</span>
							<h2 className="sec-title text-anim">
								Building Success, One Step at a Time
							</h2>
						</div>
						<div className="working-process-area">
							{items?.length
								? items?.map((item, idx) => (
										<ProcessCard key={idx} item={item} idx={idx} />
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Process;
