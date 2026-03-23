"use client";

import Link from "next/link";
import { FC } from "react";

interface HeaderTopProps {
	type?: number;
}

const HeaderTop: FC<HeaderTopProps> = ({ type }) => {
	return (
		<div className={`header-top${type === 2 ? " style-2" : ""}`}>
			<div className="container-fluid">
				<div className="row d-flex justify-content-end mt-4">
					<div className="col-5 col-lg-8 pt-3 ">
						<div className="header-top-content">
							{/*
							<p className="topbar-text">
								<i className="tji-idea"></i>Concevons maintenant les projets de demain{" "}
								<Link href="/contact">Cliquez ici</Link>
							</p>
							*/}

							<div className="header-info">
								<div className="info-item">
									<span>
										<i className="tji-envelop-2"></i>
									</span>
									<Link href="mailto:contact@intuitive-conception.com">contact@intuitive-conception.com</Link>
								</div>
								<div className="info-item">
									<span>
										<i className="tji-phone-2"></i>
									</span>
									<Link href="tel:+687805423">+687 805423</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderTop;
