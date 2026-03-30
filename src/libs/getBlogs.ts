import blogs from "@/data/blogs.json";
export interface BlogType {
	id: number;
	title: string;
	slug: string;
	img: string;
	smallImg: string;
	desc: string;
	desc2: string;
	date: number;
	day: number;
	month: string;
	category: string;
	tags: string[];
	author: string | undefined;
	totalComment: number;
}
const getBlogs = (): BlogType[] => {
	return blogs as BlogType[];
};

export default getBlogs;
