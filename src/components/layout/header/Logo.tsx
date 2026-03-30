"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {
	headerType: number;
	isStickyHeader: boolean;
}

const Logo: FC<LogoProps> = ({ headerType, isStickyHeader }) => {
	const logoSrc = "/images/logos/IC_logo.png";

	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<Image
					src={logoSrc}
					alt="Intuitive Conception – Agence de développement web en Nouvelle-Calédonie"
					width={636}
					height={154}
					className="logo-img"
				/>
			</Link>
		</div>
	);
};

export default Logo;
