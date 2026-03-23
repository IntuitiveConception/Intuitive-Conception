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
						<div className="col-lg-4 col-md-5">
							<div className="footer-widget footer-col-1">
								<div className="footer-logo">
									<Link href="/">
										<Image
											width={636}
											height={154}
											style={{ height: "auto" }}
											src="/images/logos/IC_logo.png"
											alt="Logo"
										/>
									</Link>
								</div>
								<div className="footer-text">
									<p>
										Écoute de vos besoins et conception de vos solutions.
									</p>
								</div>
								<div className="social-links style-2">
									<Socials1 />
								</div>
							</div>
						</div>
						<div className="col-xxl-2 col-lg-3 col-md-2 col-sm-6">
							<div className="footer-widget widget-nav-menu footer-col-2">
								<h5 className="title">Liens</h5>
								<FooterQuickLinkNavs />
							</div>
						</div>
						<div className="col-lg-5 col-md-5 col-sm-6">
							<div className="footer-widget widget-nav-menu footer-col-2">
								<h5 className="title">Nos Services</h5>
								<FooterServiceNavs />
							</div>
						</div>
						<div className="col-xxl-3 col-lg-2">
							<div className="footer-widget widget-subscribe footer-col-4">
								<h3 className="title"></h3>

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
											&copy; 2026 
											<Link
												href="https://themeforest.net/user/theme-junction/portfolio"
												target="_blank"
											>
												Intuitive Conception
											</Link>{" "}
											All right reserved
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
												<Link href="/legal-notice">Mentions Légales</Link>
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
