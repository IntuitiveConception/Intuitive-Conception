"use client";

import useActiveLink from "@/hooks/useActiveLink";
import getNavItems, { NavItemPropsType } from "@/libs/getNavItems";
import Link from "next/link";

const Navbar = () => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();
	const homeNav: NavItemPropsType = makeActiveLink(navItems[0]);
	const pagesNav: NavItemPropsType = makeActiveLink(navItems[1]);
	const serviceNav: NavItemPropsType = makeActiveLink(navItems[2]);
	const portfolioNav: NavItemPropsType = makeActiveLink(navItems[3]);
	const blogNav: NavItemPropsType = makeActiveLink(navItems[4]);
	const contactNav: NavItemPropsType = makeActiveLink(navItems[5]);
	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{/* Home Menu */}
					<li
						className={` ${
							homeNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={homeNav?.path ?? "#"}>{homeNav?.name}</Link>
						{/*
						<ul className="sub-menu">
							{homeNav?.submenu?.map((item, idx: number) => (
								<li
									key={idx}
									className={item?.isActive ? "current-menu-item" : ""}
								>
									<Link href={item?.path ?? "/blog"}>
										{item?.name ?? "Blog"}
									</Link>
								</li>
							))}
						</ul>
						*/}
					</li>
					{/* Page Menu */}
					{/*
					<li
						className={`has-dropdown ${
							pagesNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={pagesNav?.path ?? "#"}>{pagesNav?.name}</Link>
						<ul className="sub-menu">
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
						</ul>
					</li>
					*/}
					{/* Services Menu */}
					<li
						className={`${
							serviceNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={serviceNav?.path ?? "#"}>{serviceNav?.name}</Link>
					</li>
					{/* Portfolio Menu */}
					<li
						className={`${
							portfolioNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={portfolioNav?.path ?? "#"}>{portfolioNav?.name}</Link>

					</li>

					{/* Blog Menu */}
					{/*
					<li
						className={`has-dropdown ${
							blogNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={blogNav?.path ?? "#"}>{blogNav?.name}</Link>
						<ul className="sub-menu">
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
						</ul>
					</li>
					*/}

					{/* Contact Menu */}
					<li className={contactNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={contactNav?.path ?? "#"}>
							{contactNav?.name ?? "Contact"}
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
