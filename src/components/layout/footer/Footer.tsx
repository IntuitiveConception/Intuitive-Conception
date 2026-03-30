import Socials1 from "@/components/shared/socials/Socials1";
import Image from "next/image";
import Link from "next/link";
import FooterQuickLinkNavs from "./FooterQuickLinkNavs";
import FooterServiceNavs from "./FooterServiceNavs";

const Footer = () => {
	return (
		<footer className="tj-footer-section footer-1 section-gap-x">
			<div className="footer-top-shape"></div>
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-2 col-md-5">
							<div className="footer-widget footer-col-1">
								<div className="footer-logo">
									<Link href="/">
										<Image
											width={636}
											height={154}
											style={{ height: "auto" }}
											src="/images/logos/IC_logo.png"
											alt="Intuitive Conception – Agence de développement web en Nouvelle-Calédonie"
										/>
									</Link>
								</div>
							</div>
							<div className="social-links style-2">
								<Socials1/>
							</div>
						</div>
						<div className="col-lg-4 col-md-5">
							<div className="footer-widget footer-col-2">
								<div className="footer-text">
									<p>
										Intuitive Conception<br/>
										Développement web<br/>
										Nouvelle-Calédonie - Nouméa<br/>
										contact@intuitive-conception.com - +687 805423
									</p>
									<p>
										Création d&#39;applications web sur mesure, développement SaaS,
										automatisation de processus métier en Nouvelle-Calédonie.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xxl-2 col-lg-2 col-md-2 col-sm-6">
							<div className="footer-widget widget-nav-menu footer-col-2">
								<h5 className="title">Liens</h5>
								<FooterQuickLinkNavs />
							</div>
						</div>
						<div className="col-lg-4 col-md-5 col-sm-6">
							<div className="footer-widget widget-nav-menu footer-col-2">
								<h5 className="title">Nos Services</h5>
								<FooterServiceNavs />
							</div>
						</div>

					</div>
				</div>
			</div>
			<div className="tj-copyright-area">
				<div className="copyright-wrap">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="copyright-content-area">
									<div className="copyright-text">
										<p>
											&copy; 2026  Intuitive Conception All right reserved
										</p>
									</div>
									<div className="copyright-menu">
										<ul>
											{/*}
											<li>
												<Link href="/contact">Privacy Policy</Link>
											</li>
											*/}
											<li>
												<Link href="/mentions-legales">Mentions Légales</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
