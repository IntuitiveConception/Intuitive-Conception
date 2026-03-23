import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard1 from "@/components/shared/cards/ServiceCard1";
import getALlServices from "@/libs/getALlServices";

const Services1 = () => {
	const items = getALlServices()?.slice(0, 4);
	return (
		<section className="tj-service-section section-gap section-gap-x sidebar-sticky-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="content-wrap sidebar-sticky">
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									<i className="tji-subtitle"></i>Our Services
								</span>
								<h2 className="sec-title text-anim">
									Best Innovative Solution for Modern Businesses
								</h2>
							</div>
							<p className="desc wow fadeInUp" data-wow-delay=".3s">
								Specialize in delivering AI-powered solution <br />
								revolutionize the businesses.
							</p>

							<div
								className="d-none d-lg-block wow fadeInUp"
								data-wow-delay=".4s"
							>
								<ButtonPrimary text="Explore More" url="/services" />
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="service-wrapper wow fadeInUp" data-wow-delay=".4s">
							{items?.length
								? items?.map((item, idx: number) => (
										<ServiceCard1 key={idx} item={item} idx={idx} />
								  ))
								: ""}
						</div>
						<div className="d-lg-none text-center mt-40">
							<ButtonPrimary text="Explore More" url="/services" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services1;
