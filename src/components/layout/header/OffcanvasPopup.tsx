"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, Fragment } from "react";

interface PropType {
	isOffcanvasOpen: boolean;
	handleOffcanvasClose: () => void;
}

const OffcanvasPopup: FC<PropType> = ({
	isOffcanvasOpen,
	handleOffcanvasClose,
}) => {
	return (
		<Fragment>
			<div
				className={`body-overlay ${isOffcanvasOpen ? "opened" : ""}`}
				onClick={handleOffcanvasClose}
			></div>

			<div
				className={`tj-offcanvas-area d-none d-lg-block ${
					isOffcanvasOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_bg"></div>

				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<Link href="/" className="mobile_logo">
									<Image
										width={636}
										height={154}
										style={{ height: "auto" }}
										src="/images/logos/IC_logo.png"
										alt="Agence de développement web à Nouméa"
									/>
								</Link>
							</div>
							<div className="hamburger_close">
								<button
									className="hamburger_close_btn"
									onClick={handleOffcanvasClose}
								>
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17 1L1 17"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M1 1L17 17"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div className="offcanvas-text">
							<p>
								Nous concevons des applications web, outils métiers et solutions SaaS pour
      							aider les entreprises à Nouméa, Dumbéa, Païta et dans toute la Nouvelle-Calédonie
								à automatiser leurs processus et accélérer leur croissance.
							</p>
						</div>
						<div className="hamburger-infos">
							<h5 className="hamburger-title">Coordonnées</h5>
							<div className="contact-info">
								<div className="contact-item">
									<span className="subtitle">Téléphone</span>
									<Link className="contact-link" href="tel:+687 805423">
										+687 805423
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Email</span>
									<Link className="contact-link" href="mailto:contact@intuitive-conception.com">
										contact@intuitive-conception.com
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Ville</span>
									<span className="contact-link">
										Dumbéa, Nouvelle-Calédonie
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className="hamburger-socials">
						<h5 className="hamburger-title">Follow Us</h5>
						<div className="social-links style-2">
							<ul>
								<li>
									<Link href="https://www.facebook.com/" target="_blank">
										<i className="tji-facebook"></i>
									</Link>
								</li>
								<li>
									<Link href="https://www.linkedin.com/" target="_blank">
										<i className="tji-linkedin"></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default OffcanvasPopup;
