"use client";

import PricingCard1 from "@/components/shared/cards/PricingCard1";
import getPricingPlans from "@/libs/getPricingItems";
import { useMemo, useState } from "react";

const PricingPlan1 = () => {
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const items = useMemo(() => getPricingPlans(), []);
	return (
		<section className="tj-pricing-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle"></i>Choose Plan
							</span>
							<h2 className="sec-title text-anim">
								Flexible Pricing, Powerful Tangible Results
							</h2>
						</div>
						<div
							className="pricing-switcher-area wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<div className="pricing-switcher-inner">
								<span>Monthly</span>
								<div className="tj-tab-switcher">
									<div className="form-check form-switch">
										<label className="form-check-label" htmlFor="tjTabSwitcher">
											<input
												className="form-check-input tj-tab-switcher__controller"
												type="checkbox"
												id="tjTabSwitcher"
												checked={isChecked}
												onChange={e => setIsChecked(e?.target?.checked)}
											/>
										</label>
									</div>
								</div>
								<span>Yearly (Save 15%)</span>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="row row-gap-4">
							{items?.length
								? items?.map((item, idx) => (
										<div key={idx} className="col-xl-4 col-md-6">
											<PricingCard1 item={item} isChecked={isChecked} />
										</div>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingPlan1;
