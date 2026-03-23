import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const Funfact1 = () => {
	const items = [
		{
			id: 1,
			iconName: "tji-hand",
			title: "Engaged Customers",
			desc: "Our customers are not just clients—they are active participants in our journey.",
			currentValue: 10,
			symbol: "K+",
		},
		{
			id: 2,
			iconName: "tji-trophy",
			title: "Customer Success Stories",
			desc: "Our customers are not just clients—they are active participants in our journey.",
			currentValue: 800,
			symbol: "+",
		},
		{
			id: 3,
			iconName: "tji-team",
			title: "Team of Professionals",
			desc: "Our customers are not just clients—they are active participants in our journey.",
			currentValue: 250,
			symbol: "+",
		},
	];
	return (
		<section className="tj-countup-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle"></i>Cutting-edge solutions
							</span>
							<h2 className="sec-title text-anim">
								The Intelligent Choice for Business
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{items?.map(
						({ iconName, title, desc, currentValue, symbol }, idx) => (
							<div className="col-lg-4" key={idx}>
								<div className="countup-item-wrap">
									<div className="countup-item style-1">
										<FunfactSingle
											currentValue={currentValue}
											symbol={symbol}
										/>
										<span className="count-text">{title}</span>
										<p className="desc">{desc}</p>
										<span className="count-icon">
											<i className={iconName}></i>
										</span>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default Funfact1;
