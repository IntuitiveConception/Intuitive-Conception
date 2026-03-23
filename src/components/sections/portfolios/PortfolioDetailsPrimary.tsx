"use client";
import PrevNextNav, {
	OptionType,
} from "@/components/shared/others/PrevNextNav";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import { PortfolioType } from "@/libs/getPortfolio";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

interface PropType {
	option: OptionType;
	items: PortfolioType[];
	currentItem: PortfolioType;
}
const PortfolioDetailsPrimary = ({ option, items, currentItem }: PropType) => {
	const { currentId } = option || {};
	const {
		img2 = "/images/project/project-details-1.webp",
		title2,
		desc,
		desc2,
		desc3,
		tech,
		tech2,
		tech3,
		tech4,
		tech5,
		tech6,
		tech7,
		tech8,
		client,
		location,
		sector,
		year,
		link
	} = currentItem || {};

	return (
		<section className="tj-blog-section section-gap">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images">
								{ link
									? <Link href={link} target="_blank" rel="noopener noreferrer">
										<Image
											width={870}
											height={450}
											style={{ height: "auto" }}
											src={img2}
											alt="Images"
										/>
									</Link>
									: <Image
										width={870}
										height={450}
										style={{ height: "auto" }}
										src={img2}
										alt="Images"
									/>
								}

							</div>
							<h2 className="title">
								{title2}
							</h2>
							<div className="blog-text">
								<p>
									{desc}
								</p>
								<p>
									{desc2}
								</p>
								<h3>Complément</h3>
								<p>
									{desc3}
								</p>
								<ul>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										{tech}
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										{tech2}
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										{tech3}
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										{tech4}
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										{tech5}
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										{tech6}
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										{tech7}
									</li>
									<li>
										<span>
											<i className="tji-check-2"></i>
										</span>
										{tech8}
									</li>
								</ul>
								{/*
								<h3>Project Galley</h3>
								<p>
									It begins with conceptual sketches and wireframes that
									illustrate the project’s vision, followed by snapshots of the
									design and development process, showcasing the innovative
									technologies.
								</p>
								<div className="images-wrap">
									<div className="row">
										<div className="col-sm-12">
											<div className="image-box">
												<PopupVideo>
													<Link
														className="gallery glightbox"
														data-gall="gallery"
														href="/images/project/project-gallery-1.webp"
														prefetch={false}
													>
														<Image
															width={870}
															height={420}
															style={{ height: "auto" }}
															src="/images/project/project-gallery-1.webp"
															alt="Image"
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="image-box">
												<PopupVideo>
													<Link
														className="gallery glightbox"
														data-gall="gallery"
														href="/images/project/project-gallery-2.webp"
														prefetch={false}
													>
														<Image
															width={420}
															height={420}
															style={{ height: "auto" }}
															src="/images/project/project-gallery-2.webp"
															alt="Image"
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="image-box">
												<PopupVideo>
													<Link
														className="gallery glightbox"
														data-gall="gallery"
														href="/images/project/project-gallery-3.webp"
														prefetch={false}
													>
														<Image
															width={420}
															height={420}
															style={{ height: "auto" }}
															src="/images/project/project-gallery-3.webp"
															alt="Image"
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
									</div>
								</div>
								*/}
							</div>
							<PrevNextNav option={option} itemsUrl="/portfolios" />
						</div>
					</div>

					{/* Right Column */}
					<div className="col-lg-4">
						<div className="tj-main-sidebar sticky-lg-top">
							<div className="tj-sidebar-widget widget-categories">
								<h4 className="widget-title">Informations</h4>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-user"></i>
									</div>
									<div className="project-text">
										<span>Client</span>
										<h6 className="title">{client}</h6>
									</div>
								</div>
								{/*
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-budget"></i>
									</div>
									<div className="project-text">
										<span>Budget</span>
										<h6 className="title">$100M USD</h6>
									</div>
								</div>
								*/}
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-location-2"></i>
									</div>
									<div className="project-text">
										<span>Pays</span>
										<h6 className="title">{location}</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-chart"></i>
									</div>
									<div className="project-text">
										<span>Secteur</span>
										<h6 className="title">{sector}</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-calendar"></i>
									</div>
									<div className="project-text">
										<span>Année</span>
										<h6 className="title">{year}</h6>
									</div>
								</div>
							</div>
							<div className="tj-sidebar-widget widget-feature-item">
								<CtaSidebar />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioDetailsPrimary;
