import Link from "next/link";

const FooterQuickLinkNavs = () => {
	return (
		<ul>
			<li>
				<Link href="/">Accueil</Link>
			</li>
			{/*}
			<li>
				<Link href="/about">About Us</Link>
			</li>
			*/}
			<li>
				<Link href="/services">Services</Link>
			</li>
			{/*}
			<li>
				<Link href="/blogs">Blog</Link>
			</li>
			*/}
			<li>
				<Link href="/portfolios">Projets</Link>
			</li>
			<li>
				<Link href="/contact">Contact</Link>
			</li>
		</ul>
	);
};

export default FooterQuickLinkNavs;
