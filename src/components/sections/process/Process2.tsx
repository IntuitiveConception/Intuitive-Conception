import ProcessCard2 from "@/components/shared/cards/ProcessCard2";

const Process2 = () => {
	const items = [
		{
			id: 1,
			iconName: "tji-discovery",
			title: "Audit & Stratégie",
			desc: "Compréhension du besoin, définition des objectifs, plannification des étapes.",
		},
		{
			id: 2,
			iconName: "tji-development",
			title: "Développement & Intégration",
			desc: "Conception agile, remises régulières de livrables, tests utilisateurs.",
		},
		{
			id: 3,
			iconName: "tji-support",
			title: "Optimisation & Support",
			desc: "Modifications, refactorisations des livrables validés, formations à l'utilisation.",
		},
	];
	return (
		<div className="tj-working-process-2 section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle-2"></i>How Its Work
							</span>
							<h2 className="sec-title text-anim">
								Construisons une étape à la fois
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{items?.length
						? items?.map((item, idx) => (
								<div key={idx} className="col-lg-4">
									<ProcessCard2 item={item} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</div>
	);
};

export default Process2;
