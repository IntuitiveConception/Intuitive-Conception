import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard1 from "@/components/shared/cards/PortfolioCard1";
import getPortfolio from "@/libs/getPortfolio";
import makeWowDelay from "@/libs/makeWowDelay";

const Portfolios3 = () => {
	const items = getPortfolio()?.slice(0, 2);
	return (
		<>
			<section className="tj-project-section-3 section-gap">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="sec-heading-wrap">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-subtitle-2"></i>Nos réalisations
								</span>
								<div className="heading-wrap-content">
									<h2 className="sec-title">
										Nos réalisations en Nouvelle-Calédonie.
									</h2>
									<div
										className="project-button d-none d-lg-inline-flex wow fadeInUp"
										data-wow-delay=".5s"
									>
										<ButtonPrimary text="En voir plus" url="/portfolios" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row row-gap-4">
						{items?.length
							? items?.map((item, idx) => (
									<div
										key={idx}
										className="col-lg-6 wow fadeInUp"
										data-wow-delay={makeWowDelay(idx, 0.1)}
									>
										<PortfolioCard1 item={item} />
									</div>
							  ))
							: ""}
					</div>
					<div
						className="d-lg-none text-center mt-40 wow fadeInUp"
						data-wow-delay=".5s"
					>
						<ButtonPrimary text="En savoir plus" url="/portfolios" />
					</div>
				</div>
			</section>
			<section className='tj-project-section-3'>
				<div className='row project-local-seo'>
					<h2 className="text-center">Votre agence web à Nouméa</h2>
					<p className='text-center'>
						Basée en Nouvelle-Calédonie, notre agence accompagne les entreprises à Nouméa,
						Dumbéa, Païta et sur l’ensemble du territoire dans la création d’applications web
						sur mesure, l’automatisation de processus et le développement de solutions SaaS.
					</p>
				</div>
			</section>
		</>
	);
};

export default Portfolios3;
