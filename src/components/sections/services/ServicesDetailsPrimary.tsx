"use client";
import FaqCommon from "@/components/shared/faq/FaqCommon";
import PrevNextNav, {
	OptionType,
} from "@/components/shared/others/PrevNextNav";
import { ServiceType } from "@/libs/getALlServices";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

interface PropType {
	option: OptionType;
	items: ServiceType[];
	currentItem: ServiceType;
}
const ServicesDetailsPrimary = ({ option, items, currentItem }: PropType) => {
	const { currentId } = option || {};
	const {
		img2 = "/images/service/service-details-1.webp",
		img3 = "/images/service/service-details-1.webp",
		img4 = "/images/service/service-details-1.webp",
		title,
		desc,
		sub1,
		sub2,
		sub3,
		desc2,
		desc3,
		desc4,
		subDesc1,
		subDesc2,
		subDesc3,
		faq
	} = currentItem || {};
	const sidebarItems = items?.slice(0, 4);
	return (
		<section className="tj-blog-section section-gap">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper p-3">
							<div className="blog-images">
								<Image
									width={870}
									height={450}
									style={{ height: "auto" }}
									src={img2}
									alt="Images"
								/>
							</div>
							<h2 className="title">
								{title}
							</h2>
							<div className="blog-text">
								<p>
									{desc2}
								</p>
								<p>
									{desc3}
								</p>
								<ul>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										{sub1}
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										{sub2}
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										{sub3}
									</li>

								</ul>
								<div className="images-wrap">
									<div className="row">
										<div className="col-sm-6">
											<div className="image-box">
												<Image
													width={420}
													height={420}
													style={{ height: "auto" }}
													src={img3}
													alt="Image"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="image-box">
												<Image
													width={420}
													height={420}
													style={{ height: "auto" }}
													src={img4}
													alt="Image"
												/>
											</div>
										</div>
									</div>
								</div>
								<h3>{desc}</h3>
								<p>
									{desc4}
								</p>
								<div className="details-content-box">
									<div className="service-details-item">
										<span className="number">01.</span>
										<h6 className="title">
											{sub1}
										</h6>
										<div className="desc">
											<p>
												{subDesc1}
											</p>
										</div>
									</div>
									<div className="service-details-item">
										<div className="service-number">
											<span className="number">02.</span>
											<h6 className="title">
												{sub2}
											</h6>
											<div className="desc">
												<p>
													{subDesc2}
												</p>
											</div>
										</div>
									</div>
									<div className="service-details-item">
										<div className="service-number">
											<span className="number">03.</span>
											<h6 className="title">
												{sub3}
											</h6>
											<div className="desc">
												<p>
													{subDesc3}
												</p>
											</div>
										</div>
									</div>
								</div>
								<h3>Frequently asked questions</h3>
								<FaqCommon items={faq}/>
							</div>
							<PrevNextNav option={option} itemsUrl="/services" />
						</div>
					</div>
					<div className="col-lg-4">
						<div className="tj-main-sidebar sticky-lg-top">
							<div className="tj-sidebar-widget service-categories">
								<h4 className="widget-title">Nos Services</h4>
								<ul>
									{sidebarItems?.length
										? sidebarItems?.map(({ title, id }, idx) => (
												<li key={idx}>
													<Link
														className={`${currentId === id ? "active" : ""}`}
														href={`/services/${id}`}
													>
														{title}
														<span className="icon">
															<i className="tji-arrow-right-3"></i>
														</span>
													</Link>
												</li>
										  ))
										: ""}
								</ul>
							</div>
							<div className="tj-sidebar-widget widget-feature-item">
								<CtaSidebar img={img3} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetailsPrimary;
