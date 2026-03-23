import HeroInner from "@/components/sections/hero/HeroInner";
import PortfolioDetailsPrimary from "@/components/sections/portfolios/PortfolioDetailsPrimary";
import getPortfolio from "@/libs/getPortfolio";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

interface PropType {
	currentItemId: number;
}
const PortfolioDetailsMain = ({ currentItemId }: PropType) => {
	const items = getPortfolio()?.slice(0, 4);
	const currentId = currentItemId;
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } =
		getPreviousNextItem({ items, currentId });
	const { category } = currentItem || {};
	return (
		<div>
			<HeroInner
				title={category ? category : "Détails"}
				text={"Détails"}
				breadcrums={[{ name: "Projects", path: "/portfolios" }]}
			/>
			<PortfolioDetailsPrimary
				option={{
					currentId,
					prevId,
					nextId,
					isPrevItem,
					isNextItem,
				}}
				items={items}
				currentItem={currentItem}
			/>
		</div>
	);
};

export default PortfolioDetailsMain;
