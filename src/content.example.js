// Copy this to src/content.js and complete with your own information.
import { blah, obfuscateEmail, redact } from "./helpers";

const {
	REACT_APP_EMAIL: EMAIL,
	REACT_APP_PHONE: PHONE,
	REACT_APP_ADDRESS: ADDRESS,
	REACT_APP_WEBSITE: WEBSITE,
	REACT_APP_TWITTER: TWITTER,
	REACT_APP_LINKEDIN: LINKEDIN,
	REACT_APP_GITHUB: GITHUB,
} = process.env;

const intro = {
	name: "Will Clark",
	summary:
		"Test developer with made up skills and experience, best known for the Y2K Bug",
};

const contact = {
	email: obfuscateEmail(EMAIL),
	phone: redact(PHONE),
	address: redact(ADDRESS),
	website: WEBSITE,
	twitter: TWITTER,
	linkedIn: LINKEDIN,
	gitHub: GITHUB,
};

const sections = [
	{
		title: "Development Experience",
		timeline: [
			{
				title: "Current job",
				dates: [new Date("2000-01-01"), "present"],
				description: blah(60),
			},
			{
				title: "Previous job",
				dates: [new Date("1970-01-01"), new Date("1999-12-31")],
				description: blah(60),
			},
		],
	},
	{
		title: "Skills",
		subtitle: "with brief indication of level",
		timeline: [
			{
				title: "Some cool skill",
				description: blah(30),
			},
			{
				title: "Another cool skill",
				description: blah(30),
			},
			{
				title: "This is also cool",
				description: blah(30),
			},
			{
				title: "This one not so much",
				description: blah(30),
			},
			{
				title: "Just kidding, it’s cool",
				description: blah(30),
			},
			{
				title: "More skills",
				description: blah(30),
			},
			{
				title: "More",
				description: blah(30),
			},
			{
				title: "Testing",
				description: blah(30),
			},
		],
	},
	{
		title: "Education",
		timeline: [
			{
				title: "Test Education",
				organization: "Test School",
				dates: [new Date("2000-01-01"), "present"],
				description: blah(40),
			},
			{
				title: "More Education",
				organization: "Test School",
				dates: [new Date("1970-01-01"), new Date("1999-01-01")],
				description: blah(40),
			},
			{
				title: "Month-Long Education",
				organization: "Test School",
				dates: [new Date("1969-12")],
				description: blah(40),
			},
		],
	},
];

const footer = {
	link: "github.com/willclarktech/cv",
};

export default {
	intro,
	contact,
	sections,
	footer,
};
