"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import Link from "next/link";

const Contact2 = () => {
	return (
		<section className="contact-team-details section-gap-bottom">
			<div className="container">
				<div className="contact-team-details-inner">
					<div className="row justify-content-between">
						<div className="col-xxl-5 col-lg-6">
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-subtitle"></i>Contact Us
								</span>
								<h2 className="sec-title text-anim">
									Let’s Discuss Further to Get Better Results
								</h2>
								<p className="desc wow fadeInUp" data-wow-delay="0.3s">
									Our mission is to empowers businesses off our all size too
									thrive in an businesses ever changing marketplaces. In today's
									dynamics business environment, the key to success lies.
								</p>
								<h6
									className="contact-team-details-message wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<Link href="mailto:support@ainex.com">
										{" "}
										<i className="tji-chat"></i>livechat@ainex.com
									</Link>
								</h6>
							</div>
						</div>
						<div className="col-xxl-6 col-lg-6">
							<div className="contact-form">
								<form id="contact-form">
									<div className="row">
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="text"
													name="cfName"
													placeholder="Full Name *"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="email"
													name="cfEmail"
													placeholder="Email Address *"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="tel"
													name="cfPhone"
													placeholder="Phone number *"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<div className="tj-nice-select-box">
													<div className="tj-select">
														<ReactNiceSelect
															selectedIndex={0}
															options={[
																{ value: "0", optionName: "Chose a option" },
																{ value: "1", optionName: "Custom Technolog" },
																{
																	value: "2",
																	optionName: "AI-Powered Solutions",
																},
																{
																	value: "3",
																	optionName: "Predictive Analytics",
																},
																{
																	value: "4",
																	optionName: "Machine Learning",
																},
																{
																	value: "5",
																	optionName: "Computer Vision",
																},
																{
																	value: "6",
																	optionName: "Language Processing",
																},
															]}
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-12">
											<div className="form-input message-input">
												<textarea
													name="cfMessage"
													id="message"
													placeholder="Type message *"
												></textarea>
											</div>
										</div>
										<div className="submit-btn">
											<ButtonPrimary type="submit" text="Submit Now" />
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact2;
