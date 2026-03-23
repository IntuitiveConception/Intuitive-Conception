import Link from "next/link";

const ContactTop = () => {
	return (
		<div className="tj-contact-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title">
								<i className="tji-subtitle"></i>Coordonnées
							</span>
							<h2 className="sec-title">Comment nous joindre</h2>
						</div>
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div className="col-xl-3 col-lg-6 col-sm-6 mb-5">
						<div className="contact-item style-2">
							<div className="contact-icon">
								<i className="tji-location"></i>
							</div>
							<h3 className="contact-title">Pays</h3>
							<p>Nouvelle-Calédonie</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6 mb-5">
						<div className="contact-item style-2">
							<div className="contact-icon">
								<i className="tji-envelop"></i>
							</div>
							<h3 className="contact-title">Email</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:contact@intuitive-conception.com">contact@intuitive-conception.com</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6 mb-5">
						<div className="contact-item style-2">
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">Téléphone</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:+687805423">+687 805423</Link>
								</li>
							</ul>
						</div>
					</div>
					{/*
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div className="contact-item style-2">
							<div className="contact-icon">
								<i className="tji-chat"></i>
							</div>
							<h3 className="contact-title">Live chat</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:livechat@ainex.com">
										livechat@ainex.com
									</Link>
								</li>
								<li className="active">
									<Link href="/contact">Need help?</Link>
								</li>
							</ul>
						</div>
					</div>
					*/}
				</div>
			</div>
		</div>
	);
};

export default ContactTop;
