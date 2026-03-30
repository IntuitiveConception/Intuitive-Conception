import services from "@/data/services.json";

type FaqItem = {
	title: string;
	desc: string;
	initActive: boolean;
}

export interface ServiceType {
	id: number;
	title: string;
	SEOTitle: string;
	slug: string;
	img: string;
	img2: string;
	img3: string;
	img4: string;
	iconName: string;
	desc: string;
	subTitle: string;
	sub1: string;
	sub2: string;
	sub3: string;
	descTitle2: string;
	descTitle3: string;
	descTitle4: string;
	desc2: string;
	desc3: string;
	desc4: string;
	subDesc1: string;
	subDesc2: string;
	subDesc3: string;
	faqTitle: string;
	faq: FaqItem[];
}
const getALlServices = () => {
	return services;
};

export default getALlServices;
