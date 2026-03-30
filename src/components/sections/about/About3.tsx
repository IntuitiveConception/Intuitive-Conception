import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";

const About3 = () => {
	return (
		<section className="tj-about-section-3 section-gap">
			<div className="container-fluid p-lg-5">
				<div className="row about-3-row">
					<div className="col-lg-7">
						<div className="about-content-area style-3">
							<div className="sec-heading style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-subtitle-2"></i>Notre objectif
								</span>
								<h2 className="sec-title ">
									Concevoir des applications web qui transforment les entreprises en Nouvelle-Calédonie.
								</h2>
							</div>
							<div className="about-bottom-area-3">
								<div className="experience-wrap">
									<FunfactSingle currentValue={15} sup="+" type={2} />
									<h6 className="experience-text">
										Plus de 15 ans d&#39;expérience professionnelle.
									</h6>
								</div>
								<div className="about-content">
									<p className="desc">
										Nous combinons nos expériences métiers aux technologies numériques
										pour vous permettre de vous concentrer sur l&#39;essentiel.
									</p>
									<ul className="list-style-1 text-white">
										<li>Django</li>
										<li>NextJS</li>
										<li>Amazon Web Services</li>
										<li>Intelligence Artificielle</li>
									</ul>
									{/*<ButtonPrimary text="Plus" url="/about" />*/}
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5 ">
						<div className="about-img-area-2">
							<div
								className="about-img wow fadeInLeft"
								data-wow-delay=".3s"
								data-wow-duration="0.8s"
							>
								<Image
									width={768}
									height={1029}
									src="/images/about/ai-about-1.png"
									alt="Développement d'applications"
								/>
							</div>
							{/*}
							<div className="video-wrap">
								<PopupVideo>
									<Link
										className="video-btn video-popup glightbox"
										href="https://www.youtube.com/watch?v=MLpWrANjFbI&amp;ab_channel=eidelchteinadvogados"
									>
										<span className="video-text">Let’s See How we did it.</span>
										<span className="video-icon">
											<i className="tji-play"></i>
										</span>
									</Link>
								</PopupVideo>
							</div>
							*/}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About3;
