import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="tj-banner-section">
			<div className="banner-content-area">
				<div className="banner-col">
					<div className="banner-content">
						<h1 className="banner-title">
							Agence web à Nouméa et en Nouvelle-Calédonie
						</h1>
						<p>Basée en Nouvelle-Calédonie, notre agence accompagne les entreprises locales à Nouméa, Dumbéa, Païta et dans tout le territoire.</p>
					</div>
				</div>
				{/*}
				<div className="banner-col">
					<div
						className="banner-highlight wow fadeInUp"
						data-wow-delay=".2s"
						data-wow-duration="0.8s"
					>
						<div className="banner-video">
							<video
								loop
								muted
								autoPlay
								playsInline
								poster="/images/hero/hero-video-thumb.webp"
							>
								<source src="/video/hero.mp4" type="video/mp4" />
							</video>
						</div>
						<div className="heighlight-content">
							<h6>Best Recognized:</h6>
							<div className="heighlight-inner">
								<div className="countup-item">
									<FunfactSingle currentValue={20} symbol="K" />
									<span className="count-text">Repeated Users.</span>
								</div>
								<div className="countup-item">
									<FunfactSingle currentValue={80} symbol="%" />
									<span className="count-text">Realized Projects.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				*/}
				<div className="banner-scroll wow fadeIn" data-wow-delay=".3s">
					<button data-target="#client" className="scroll-down tj-scroll-btn">
						<span>
							<i className="tji-arrow-down-long"></i>
						</span>
						En savoir plus
					</button>
				</div>
			</div>
			{/*}
			<div
				className="banner-img-area-1 wow fadeInUp"
				data-wow-delay=".4s"
				data-wow-duration="0.8s"
			>
				<div className="banner-img">
					<Image
						width={1760}
						height={747}
						loading="eager"
						priority
						src="/images/hero/ai-hero-1.png"
						alt="Image"
					/>
				</div>
				<div className="collab-text">
					<span>
						<i className="tji-ai"></i>
					</span>
					<p className="desc">Collaborative Minds, Creative Hearts.</p>
				</div>
			</div>
			*/}
		</section>
	);
};

export default Hero;
