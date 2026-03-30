import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About3 from "@/components/sections/about/About3";
import About1 from "@/components/sections/about/About1";
import About2 from "@/components/sections/about/About2";
import Blogs3 from "@/components/sections/blogs/Blogs1";
import Brands1 from "@/components/sections/brands/Brands1";
import Hero from "@/components/sections/hero/Hero3";
import Portfolios3 from "@/components/sections/portfolios/Portfolios3";
import PricingPlan2 from "@/components/sections/pricing-plan/PricingPlan2";
import Process2 from "@/components/sections/process/Process2";
import Services3 from "@/components/sections/services/Services3";
import Testimonials3 from "@/components/sections/testimonials/Testimonials3";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Faq() {
	return (
		<div>
			{/*<Header isStickyHeader={true} headerType={3} isCasvas={true} />*/}
			{/*id="smooth-wrapper"*/}
			<div id="smooth-wrapper">
				{/*id="smooth-content"*/}
				<div id="smooth-content">
					<Header
						headerType={3}
						isHeaderTop={true}
						headerTopType={2}
						isCasvas={true}
					/>
					<main>
						<Hero />
						<About1/>
						<Process2 />
						<About3 />
						<About2 />
						{/*<PricingPlan2 />*/}
						<Services3 />
						<Portfolios3 />
						{/*<Testimonials3 />*/}
						{/*<Brands1 />*/}
						{/*<Blogs3 />*/}
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
