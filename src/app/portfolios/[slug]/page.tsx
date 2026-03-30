import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import PortfolioDetailsMain from "@/components/layout/main/PortfolioDetailsMain";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getPortfolio, { PortfolioType } from "@/libs/getPortfolio";
import { notFound } from "next/navigation";

// Load team items
const items: PortfolioType[] = getPortfolio();

// ------------------------------
// TYPES
// ------------------------------
interface PropsType {
	params: {
		slug: string;
	};
}

// ------------------------------
// PAGE COMPONENT
// ------------------------------
export default async function PortfolioDetails({ params }: PropsType) {
	const { slug } = await params;
	const item = items.find(item => item.slug === slug);

	if (!item) {
		notFound();
	}

	const currentId = Number(item.id);

	return (
		<div>
			<Header isStickyHeader={true} headerType={2} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<div className="top-gap-20"></div>
					<Header headerType={2} isNotAbsolute={true} />
					<main>
						<PortfolioDetailsMain currentItemId={currentId} />
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
