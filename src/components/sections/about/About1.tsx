import Image from "next/image";
import Link from "next/link";

const About1 = () => {
	return (
		<section className="tj-about-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-4 col-lg-5 order-lg-1 order-2">
						<div
							className="about-img wow fadeInLeft"
							data-wow-delay=".3s"
							data-wow-duration="0.8s"
						>
							<Image
								width={419}
								height={591}
								loading="eager"
								priority
								src="/images/about/about-img-1.webp"
								alt="Image"
							/>
						</div>
					</div>
					<div className="col-xl-8 col-lg-7 order-lg-2 order-1">
						<div className="about-content-area">
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-subtitle"></i>About our Company
								</span>
								<h2 className="sec-title title-highlight">
									Driving Innovation{" "}
									<Image
										width={344}
										height={108}
										style={{ width: "auto" }}
										src="/images/about/title-img-1.webp"
										alt="Image"
									/>
									Through AI and Technology, Delivering Our Tailored{" "}
									<Image
										width={108}
										height={108}
										style={{ width: "auto" }}
										src="/images/about/title-img-2.webp"
										alt="Image"
									/>{" "}
									Solutions are Best that Transform Next Businesses and Enhance
									Efficient Level Seam Effective & Sustainable
								</h2>
							</div>
							<div
								className="about-bottom-area wow fadeInUp"
								data-wow-delay=".4s"
								data-wow-duration="0.8s"
							>
								<ul className="list-style-1">
									<li>Artificial Intelligence</li>
									<li>Local Insights</li>
									<li>Business Analytics</li>
									<li>Identity Management</li>
									<li>Public Infrastructure</li>
								</ul>
								<div className="btn-hover-wrapper">
									<Link className="about-btn btn-hover-inner" href="/about">
										<span className="text-wrap">
											<span className="btn-text">
												<span>Explore Us More</span>
											</span>
											<span className="btn-icon">
												<span>
													<i className="tji-arrow-right"></i>
												</span>
											</span>
										</span>
										<Image
											width={162}
											height={162}
											src="/images/about/btn-img.webp"
											alt="Image"
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About1;
