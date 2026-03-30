"use client";
import ServiceCard2 from "@/components/shared/cards/ServiceCard2";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getALlServices from "@/libs/getALlServices";
import makeWowDelay from "@/libs/makeWowDelay";
import { useMemo } from "react";
const Services4 = () => {
	const items = useMemo(() => getALlServices(), []);
	const limit = 4;
	// Get pagination details from hook
	const paginationDetails = usePagination({
		filteredItems: items,
		currentLimit: limit,
	});
	const { currentItems } = paginationDetails;
	const totalItems = items.length;
	const totalItemsToShow = currentItems?.length || 0;

	return (
		<section className="tj-service-section-2 section-gap">
			<div className="container">
				<h1 className='service-detail-SEOTitle text-center'>Nos services dédiés à la conception d&#39;applications web en Nouvelle-Calédonie</h1>
				<div className="row row-gap-4">
					{currentItems?.length
						? currentItems?.map((item, idx) => (
								<div
									key={idx}
									className="  col-md-6  wow fadeInUp"
									data-wow-delay={makeWowDelay(idx % 3, 0.1, 2)}
								>
									<ServiceCard2 item={item} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
				{/* Pagination */}
				{/*
				{totalItemsToShow < totalItems ? (
					<Paginations paginationDetails={paginationDetails} />
				) : (
					""
				)}
				*/}
			</div>
		</section>
	);
};

export default Services4;
