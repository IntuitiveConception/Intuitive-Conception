import Link from "next/link";

const FooterServiceNavs = () => {
	return (
		<ul>
			<li>
				<Link href="/services/1">Audit & Maquette</Link>
			</li>
			<li>
				<Link href="/services/2">Développement Modulaire</Link>
			</li>
			<li>
				<Link href="/services/3">Infrastructure Cloud & Déploiement</Link>
			</li>
			<li>
				<Link href="/services/4">Maintenance & Support</Link>
			</li>
			{/*
			<li>
				<Link href="/services/5"></Link>
			</li>
			<li>
				<Link href="/services/6"></Link>
			</li>
			*/}
		</ul>
	);
};

export default FooterServiceNavs;
