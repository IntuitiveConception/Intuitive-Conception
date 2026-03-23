import portfolio from "@/data/portfolio.json";
export interface PortfolioType {
	id: number | string;
	title: string;
	title2: string;
	img: string;
	img2: string;
	desc: string;
	desc2: string;
	desc3: string;
	tech: string;
	tech2: string;
	tech3: string;
	tech4: string;
	tech5: string;
	tech6: string;
	tech7: string;
	tech8: string;
	client: string;
	location: string;
	sector: string;
	year: string;
	category: string;
	link: string;
}
const getPortfolio = () => {
	return portfolio;
};

export default getPortfolio;
