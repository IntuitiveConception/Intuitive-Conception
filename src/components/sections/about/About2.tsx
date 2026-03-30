import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TextMarqueeSlider from "@/components/shared/sliders/TextMarqueeSlider";
import Image from "next/image";
interface PropType {
	type?: number | string;
}
const About2 = ({ type }: PropType) => {
	return (
		<section
			className={`tj-about-section-2 section-gap-x ${
				type === 2 ? "" : "section-gap-top"
			}`}
		>
			<div className="about-wrapper">
				<div className="about-area">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="about-techno-area">
									<div className="sec-heading style-2">
										<span
											className="sub-title wow fadeInUp"
											data-wow-delay=".3s"
										>
											Applications web
										</span>
										<h2 className="sec-title">
											Des technologies modernes au service de votre croissance
										</h2>
										<p className='mt-3'>
											Nous concevons des applications web sur mesure en combinant des technologies
											éprouvées
											et une architecture robuste pour vous garantir performance, sécurité et
											évolutivité.
										</p>
									</div>
									<div className="about-bottom-area-2">
										<div className="mission-vision-wrap">
											<article
												className="mission-vision-box wow fadeInRight"
												data-wow-delay=".5s"
											>
												<h3 className="title">Django & API</h3>
												<p className="desc">
													Un backend fiable pour structurer vos données et automatiser vos processus métiers.
												</p>
											</article>
											<article
												className="mission-vision-box wow fadeInRight"
												data-wow-delay=".5s"
											>
												<h3 className="title">Next.js & performance</h3>
												<p className="desc">
													Des interfaces rapides, optimisées SEO et pensées pour l’expérience utilisateur.
												</p>
											</article>
											<article
												className="mission-vision-box wow fadeInRight"
												data-wow-delay=".5s"
											>
												<h3 className="title">AWS & scalabilité</h3>
												<p className="desc">
													Une infrastructure cloud capable d’évoluer avec votre activité sans compromis.
												</p>
											</article>
											<article
												className="mission-vision-box wow fadeInRight"
												data-wow-delay=".5s"
											>
												<h3 className="title">Architecture modulaire</h3>
												<p className="desc">
													Des applications évolutives, maintenables et adaptées à vos enjeux business.
												</p>
											</article>
											<div className=" wow fadeInUp" data-wow-delay=".5s"></div>
											<ButtonPrimary
												text="Demander un devis"
												url="/contact"
												className="style-2"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*
						<div className="about-img-area">
							<div
								className="about-img wow fadeInLeft"
								data-wow-delay=".3s"
								data-wow-duration="0.8s"
							>
								<Image
									width={1250}
									height={1205}
									loading="eager"
									priority
									src="/images/about/about-img-2.webp"
									alt="Image"
								/>
							</div>
						</div>
					*/}
				</div>
				<TextMarqueeSlider />
			</div>
		</section>
	);
};

export default About2;
