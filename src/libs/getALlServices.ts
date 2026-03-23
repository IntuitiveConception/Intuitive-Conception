import services from "@/data/services.json";

type FaqItem = {
	title: string;
	desc: string;
	initActive: boolean;
}

export interface ServiceType {
	id: number;
	title: string;
	img: string;
	img2: string;
	img3: string;
	img4: string;
	iconName: string;
	desc: string;
	sub1: string;
	sub2: string;
	sub3: string;
	desc2: string;
	desc3: string;
	desc4: string;
	subDesc1: string;
	subDesc2: string;
	subDesc3: string;
	faq: FaqItem[];
}
const getALlServices = () => {
	return services;
};

export default getALlServices;
