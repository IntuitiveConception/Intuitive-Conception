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
			title: "Développement & tests",
			desc: "Conception agile, remises régulières de livrables, tests utilisateurs.",
		},
		{
			id: 3,
			iconName: "tji-support",
			title: "Déploiement & accompagnement",
			desc: "Modifications, refactorisations des livrables validés, formations à l'utilisation.",
		},
	];
	return (
		<section className="tj-working-process-2 section-gap section-gap-x">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						{/* sec-heading sec-heading-centered style-3 */}
						<div className="sec-heading sec-heading-centered style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle-2"></i>Le Process
							</span>
						</div>
						{/*text-anim*/}
						<h2 className="sec-title process-h2">
							Création d&#39;applications web sur mesure
						</h2>
					</div>
				</div>
				<div className="row row-gap-4 process-card-row">
					{items?.length
						? items?.map((item, idx) => (
								<div key={idx} className="col-lg-4 col-xl-3">
									<ProcessCard2 item={item} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Process2;
