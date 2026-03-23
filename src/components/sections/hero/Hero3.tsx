"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero3 = () => {
	const items = [
		{
			title: "Conception Innovation",
			subtitle: "Tranformons votre métier.",
			desc: "Spécialisé dans la conception de solutions innovantes pour révolutionner votre métier.",
			img: "/images/hero/ai-hero-1.png",
			linkText: "Plus",
			url: "/contact",
		},
		{
			title: "Optimisation Performance",
			subtitle: "Gagnez du temps",
			desc: "Automatisation digitalisation simplification",
			img: "/images/hero/ai-hero-2.png",
			linkText: "Plus",
			url: "/contact",
		},
		{
			title: "Accompagnement Bienveillance",
			subtitle: "Des solutions adaptées",
			desc: "Audit auprès de vos équipes, formation à l'utilisation",
			img: "/images/hero/ai-hero-3.png",
			linkText: "Plus",
			url: "/contact",
		},
	];
	return (
		<section className="tj-slider-section">
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				effect="fade"
				loop={true}
				speed={1400}
				autoplay={{
					delay: 4000,
				}}
				navigation={{
					nextEl: ".slider-next",
					prevEl: ".slider-prev",
				}}
				pagination={{
					el: ".hero-pagination",
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class="' + className + '">' + "0" + (index + 1) + "</span>"
						);
					},
				}}
				modules={[Pagination, Navigation, Autoplay, EffectFade]}
				className="hero-slider"
			>
				{items?.length
					? items?.map(
							(
								{
									title,
									subtitle,
									img = "/images/hero/slider-1.webp",
									desc,
									linkText,
									url,
								},
								idx
							) => (
								<SwiperSlide key={idx} className="tj-slider-item">
									<div
										className="slider-bg-image"
										style={{ backgroundImage: `url("${img}")` }}
									></div>
									<div className="slider-wrapper">
										<div className="slider-content">
											<div className="slider-title-area">
												<span className="sub-title">
													<i className="tji-subtitle-2"></i>
													{subtitle}
												</span>
												<h1 className="slider-title">{title}</h1>
											</div>
											<div className="slider-desc">{desc}</div>
											<div className="slider-btn">
												<ButtonPrimary text={linkText} url={url} />
											</div>
										</div>
									</div>
								</SwiperSlide>
							)
					  )
					: ""}
				<div className="hero-navigation">
					<div className="slider-prev">
						<span className="anim-icon">
							<i className="tji-arrow-left-long"></i>
							<i className="tji-arrow-left-long"></i>
						</span>
					</div>
					<div className="slider-next">
						<span className="anim-icon">
							<i className="tji-arrow-right-long"></i>
							<i className="tji-arrow-right-long"></i>
						</span>
					</div>
				</div>
				<div className="swiper-pagination hero-pagination"></div>
			</Swiper>
		</section>
	);
};

export default Hero3;
