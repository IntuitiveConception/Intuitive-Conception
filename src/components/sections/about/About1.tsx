import Image from "next/image";
import Link from "next/link";

const About1 = () => {
	return (
		<section className=" about-1-gap">
			<div className="about-container">
				<div className="row">
					<div className="col-xl-4 col-lg-5 order-lg-1 order-2">
						<div
							className="about-img wow fadeInLeft"
							data-wow-delay=".3s"
							data-wow-duration="0.8s"
						>
							<Image
								width={419}
								height={591}
								loading="eager"
								priority
								src="/images/about/ai-about-2.png"
								alt="Agence de développement web à Nouméa"
							/>
						</div>
					</div>
					<div className="col-xl-8 col-lg-7 order-lg-2 order-1">
						<div className="about-content-area">
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-subtitle"></i>Nouvelle-Calédonie
								</span>
								<h2 className="sec-title title-highlight">
									Pourquoi faire appel à notre agence web ?
								</h2>
							</div>
							<div
								className="about-bottom-area wow fadeInUp"
								data-wow-delay=".4s"
								data-wow-duration="0.8s"
							>
								<ul className="about-list-style-2">
									<li>Gagnez du temps grâce à l’automatisation de vos processus</li>
									<li>Centralisez vos opérations dans des outils métiers sur mesure</li>
									<li>Déployez une solution évolutive adaptée à votre activité</li>
									<li>Bénéficiez d’un accompagnement technique local et durable</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About1;
