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
	title: "Agence de développement web en Nouvelle-Calédonie | Intuitive Conception",
	description: "Agence web en Nouvelle-Calédonie. Développement d’applications sur mesure avec Django, React et AWS. Donnez vie à votre projet digital.",
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
							"@type": "LocalBusiness",
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
							"openingHours": "Mo-Fr 08:00-17:00",
						}),
					}}
				/>
				{children}
			</body>
		</html>
	);
}
