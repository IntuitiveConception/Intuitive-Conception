"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero3 = () => {
	const items = [
		{
			title: "Développement d’applications web sur mesure",
			subtitle: "Agence web en Nouvelle-Calédonie",
			desc: "Création d’applications web et d’outils métiers adaptés à vos besoins pour optimiser votre activité à Nouméa et en Nouvelle-Calédonie.",
			img: "/images/hero/ai-hero-1.png",
			linkText: "Demander un devis",
			url: "/contact",
		},
		{
			title: "Automatisation de vos processus métier",
			subtitle: "Gain de temps et productivité",
			desc: "Simplifiez vos opérations grâce à des outils sur mesure qui automatisent vos tâches et améliorent votre efficacité.",
			img: "/images/hero/ai-hero-2.png",
			linkText: "Demander un devis",
			url: "/contact",
		},
		{
			title: "Développement de solutions SaaS",
			subtitle: "Applications web évolutives",
			desc: "Concevez et déployez des services en ligne performants et accessibles à vos utilisateurs, partout en Nouvelle-Calédonie.",
			img: "/images/hero/ai-hero-3.png",
			linkText: "Demander un devis",
			url: "/contact",
		},
	];
	return (
		<section className="tj-slider-section tj-banner-section">
			<div className="banner-content-area">
				<div className="banner-col">
					<div className="banner-content">
						<h1 className="banner-title">
							Agence web à Nouméa <br/> Applications sur mesure en Nouvelle-Calédonie
						</h1>
						<p>
							Nous concevons des applications web, outils métiers et solutions SaaS pour
      						aider les entreprises à Nouméa, Dumbéa, Païta et dans toute la Nouvelle-Calédonie
							à automatiser leurs processus et accélérer leur croissance.
						</p>
						<div
							className="text-center mt-40 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<ButtonPrimary text="Demander un devis" url="/contact" />
						</div>
					</div>
				</div>
			</div>
			<section className="slider-container">
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
													<h2 className="slider-title h3">{title}</h2>
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
		</section>
	);
};

export default Hero3;
