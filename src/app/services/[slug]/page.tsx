import type { Metadata } from "next";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getALlServices, { ServiceType } from "@/libs/getALlServices";
import { notFound } from "next/navigation";

// ------------------------------
// TYPES
// ------------------------------
interface PropsType {
	params: {
		slug: string;
	}

}

// ------------------------------
// METADATA
// ------------------------------
export async function generateMetadata({params}: PropsType): Promise<Metadata> {
	const { slug } = params;
	const item = items.find(item => item.slug === slug);

	if (!item) return {};

	return {
		title: `${item.SEOTitle} | Intuitive Conception`,
		description: `${item.desc} : service de développement web en Nouvelle-Calédonie. Solutions sur mesure avec Django, React et AWS.`
	}
}


// Load team items
const items: ServiceType[] = getALlServices();


// ------------------------------
// PAGE COMPONENT
// ------------------------------
export default async function ServiceDetails({ params }: PropsType) {
	const { slug } = await params;
	const item = items.find(item => item.slug === slug);

	if (!item) {
		notFound();
	}

	const currentId = Number(item.id);

	return (
		<div>
			<script
				id="faq-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: item.faq?.length
							? item.faq.map(f => ({
								"@type": "Question",
								name: f.title,
								acceptedAnswer: {
									"@type": "Answer",
									text: f.desc,
								},
							}))
							: []
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Service",
						name: item.SEOTitle,
						description: item.desc2,
						provider: {
							"@type": "Organization",
							name: "Intuitive Conception",
							url: "https://www.intuitive-conception.com",
							logo: "https://www.intuitive-conception.com/images/logos/IC_logo.png"
						},
						areaServed: {
							"@type": "AdministrativeArea",
							name: "Nouvelle-Calédonie"
						},
						serviceType: item.SEOTitle,
						url: `https://www.intuitive-conception.com/services/${item.slug}`,
						offers: {
							"@type": "Offer",
							"url": `https://www.intuitive-conception.com/services/${item.slug}`,
							"availability": "https://schema.org/InStock"
						}
					}),
				}}
			/>
			<Header isStickyHeader={true} headerType={2} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<div className="top-gap-20"></div>
					<Header headerType={2} isNotAbsolute={true} />
					<main>
						<ServiceDetailsMain currentItemId={currentId} />
					</main>
					<Footer />
					<div className="bottom-gap-30"></div>
				</div>
			</div>
			<ClientWrapper />
			<BackToTop />
		</div>
	);
}

// ------------------------------
// STATIC PARAMS
// ------------------------------
export async function generateStaticParams() {
	return items.map(({ slug }) => ({
		slug,
	}));
}
