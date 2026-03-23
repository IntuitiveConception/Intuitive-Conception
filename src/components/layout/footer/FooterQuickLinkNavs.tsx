import Link from "next/link";

const FooterQuickLinkNavs = () => {
	return (
		<ul>
			<li>
				<Link href="/">Home</Link>
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
				<Link href="/portfolios">Portfolio</Link>
			</li>
			<li>
				<Link href="/contact">Contact</Link>
			</li>
		</ul>
	);
};

export default FooterQuickLinkNavs;
