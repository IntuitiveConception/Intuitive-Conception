"use client";

import getNavItems, { NavItemPropsType } from "@/libs/getNavItems";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();
	const homeNav: NavItemPropsType = navItems[0];
	const pagesNav: NavItemPropsType = navItems[1];
	const serviceNav: NavItemPropsType = navItems[2];
	const portfolioNav: NavItemPropsType = navItems[3];
	const blogNav: NavItemPropsType = navItems[4];
	const contactNav: NavItemPropsType = navItems[5];

	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							{/* Home Menu */}
							<MobileMenuItem
								text={homeNav?.name ?? "Home"}
								url={homeNav?.path ?? "#"}
							>
							</MobileMenuItem>

							{/* Pages Menu */}
							{/*
							<MobileMenuItem
								text={pagesNav?.name ?? "Pages"}
								url={pagesNav?.path ?? "#"}
							>
								{pagesNav?.submenu?.map((item, idx: number) => (
									<li
										key={idx}
										className={item?.isActive ? "current-menu-item" : ""}
									>
										<Link href={item?.path ?? "/blog"}>
											{item?.name ?? "Blog"}
										</Link>
									</li>
								))}
							</MobileMenuItem>
							*/}

							{/* Service Menu */}
							<MobileMenuItem
								text={serviceNav?.name ?? "Services"}
								url={serviceNav?.path ?? "#"}
							>
							</MobileMenuItem>

							{/* Portfolio Menu */}
							<MobileMenuItem
								text={portfolioNav?.name ?? "Portfolio"}
								url={portfolioNav?.path ?? "#"}
							>
							</MobileMenuItem>

							{/* Blog Menu */}
							{/*
							<MobileMenuItem
								text={blogNav?.name ?? "Blog"}
								url={blogNav?.path ?? "#"}
							>
								{blogNav?.submenu?.map((item, idx: number) => (
									<li
										key={idx}
										className={item?.isActive ? "current-menu-item" : ""}
									>
										<Link href={item?.path ?? "/blog"}>
											{item?.name ?? "Blog"}
										</Link>
									</li>
								))}
							</MobileMenuItem>
							*/}

							{/* Contact Menu */}
							<li className="mean-last">
								<Link href={contactNav?.path ?? "#"}>
									{contactNav?.name ?? "Contact"}
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
