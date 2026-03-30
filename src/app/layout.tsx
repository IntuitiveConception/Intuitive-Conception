import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./assets/css/ainex-icons.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./globals.scss";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: "--tj-ff-heading",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["normal", "italic"],
	variable: "--tj-ff-body",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.intuitive-conception.com"),
	title: "Agence de développement web à Nouméa – Applications sur mesure en Nouvelle-Calédonie | Intuitive Conception",
	description: "Agence de développement web à Nouméa. Création d’applications web sur mesure, outils métiers et solutions SaaS en Nouvelle-Calédonie. Automatisez vos processus et accélérez votre croissance.",
	openGraph: {
		title: "Agence de développement web à Nouméa",
		description: "Applications web sur mesure en Nouvelle-Calédonie",
		url: "https://www.intuitive-conception.com",
		siteName: "Intuitive Conception",
		locale: "fr_FR",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${roboto.variable}`}>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebDevelopmentCompany",
							"name": "Intuitive Conception",
							"image": "https://www.intuitive-conception.com/images/logos/IC_logo.png",
							"url": "https://www.intuitive-conception.com",
							"telephone": "+687805423",
							"address": {
								"@type": "PostalAddress",
								"addressLocality": "Nouméa",
								"addressRegion": "Nouvelle-Calédonie",
								"addressCountry": "NC"
							},
							"areaServed": {
								"@type": "AdministrativeArea",
								"name": "Nouvelle-Calédonie"
							},
							"description": "Agence de développement web spécialisée en applications sur mesure avec Django, React et AWS en Nouvelle-Calédonie.",
							"priceRange": "$$",
							"openingHoursSpecification": [
								{
									"@type": "OpeningHoursSpecification",
									"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
									"opens": "08:00",
									"closes": "17:00"
								}
							],
							"founder": {
								"@type": "Person",
								"name": "Sébastien GENTY"
							},
							"makesOffer": [
								{
									"@type": "Service",
									"name": "Développement d'applications web sur mesure"
								},
								{
									"@type": "Service",
									"name": "Automatisation de processus métier"
								},
								{
									"@type": "Service",
									"name": "Développement SaaS"
								}
							]
						}),
					}}
				/>
				{children}
			</body>
		</html>
	);
}
