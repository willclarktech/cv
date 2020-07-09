import { obfuscateEmail, redact } from "./helpers";

const {
	REACT_APP_EMAIL: EMAIL,
	REACT_APP_PHONE: PHONE,
	REACT_APP_ADDRESS: ADDRESS,
	REACT_APP_WEBSITE: WEBSITE,
	REACT_APP_BLOG: BLOG,
	REACT_APP_TWITTER: TWITTER,
	REACT_APP_LINKEDIN: LINKEDIN,
	REACT_APP_GITHUB: GITHUB,
} = process.env;

const intro = {
	name: "Will Clark",
	summary:
		"Full-stack developer with diverse interests and an academic background in philosophy and psychology",
};

const contact = {
	email: obfuscateEmail(EMAIL),
	phone: redact(PHONE),
	address: redact(ADDRESS),
	website: WEBSITE,
	blog: BLOG,
	twitter: TWITTER,
	linkedIn: LINKEDIN,
	gitHub: GITHUB,
};

const sections = [
	{
		title: "Experience",
		timeline: [
			{
				title: "Senior software developer",
				organization: "CosmWasm - cosmwasm.com",
				dates: [new Date("2020-06-07"), "present"],
				description:
					"Building official TypeScript client library for the Cosmos blockchain project, including new protocol buffer encoding: [github.com/CosmWasm/cosmjs](https://github.com/CosmWasm/cosmjs).",
			},
			{
				title: "Volunteer contributor",
				organization: "OpenMined - openmined.org",
				dates: [new Date("2020-04-01"), "present"],
				description:
					"Providing TypeScript support for JS wrappers of private set intersection library (with potential contact-tracing applications): [github.com/OpenMined/PSI](https://github.com/OpenMined/PSI). Also contributing blog posts on the technologies involved.",
			},
			{
				title: "Blockchain library developer",
				organization: "IOV SAS - iov.one",
				dates: [new Date("2019-02-22"), new Date("2020-01-15")],
				description:
					"Worked primarily on the TypeScript library which provides abstractions over different types of blockchains. Also developed Solidity smart contracts to support IOV’s atomic swap protocol on Ethereum, including security analysis.",
			},
			{
				title: "Cohort member",
				organization: "Entrepreneur First - joinef.com",
				dates: [new Date("2018-10-01"), new Date("2019-01-31")],
				description:
					"Pre-team, pre-idea startup accelerator focused on introducing potential high-impact founders and supporting them in creating companies.",
			},
			{
				title: "Blockchain developer",
				organization: "Lightcurve GmbH - lisk.io",
				dates: [new Date("2017-07-01"), new Date("2018-09-30")],
				description:
					"Led development of Lisk’s CLI tool, then the general-purpose library. Also helped with development of the “core” (node) software, in particular testing, standards and protocol design, including security aspects.",
			},
			{
				title: "Full-stack developer",
				organization: "Pixsy GmbH - pixsy.com",
				dates: [new Date("2016-01-04"), new Date("2017-03-31")],
				description:
					"Universal JS stack: React/Redux front end, Node.js/MongoDB back end, testing, bug-fixing, AWS management, CI integration, database migrations etc.",
			},
		],
	},
	{
		title: "Skills",
		timeline: [
			{
				title: "JS/TypeScript/Node.js",
				description:
					"Primary languages/environment I have used professionally since Jan 2016. Experience with modern front end development, but my focus more recently has been on back end/isomorphic library work.",
			},
			{
				title: "Machine learning & AI",
				description:
					"Current focus in side projects. Originally learned to code in Python. See eg [github.com/willclarktech/ts-ml-framework](https://github.com/willclarktech/ts-ml-framework), [github.com/willclarktech/policy-gradient-implementations](https://github.com/willclarktech/policy-gradient-implementations), [github.com/willclarktech/ts-rl](https://github.com/willclarktech/ts-rl). Especially interested in full-stack security of ML/AI applications.",
			},
			{
				title: "Cryptography & Security",
				description:
					"Comfortable with many concepts through blockchain experience. Learning by implementing cryptography primitives from scratch, eg Dan Boneh’s Coursera course and [cryptopals.com](https://cryptopals.com) exercises: [github.com/willclarktech/crypto-primitives](https://github.com/willclarktech/crypto-primitives). Hobbyist web application hacker. Wrote npm package for steganography: [npmjs.com/package/steggy](https://www.npmjs.com/package/steggy).",
			},
		],
	},
	{
		title: "Education",
		timeline: [
			{
				title: "BPhil Philosophy (master’s)",
				organization: "Hertford College, Oxford",
				dates: [new Date("2011-10-01"), new Date("2013-06-30")],
				description:
					"Distinction awarded (overall and for each assessed component), Hertford College prize. Full AHRC funding: fees and living expenses for two years.",
			},
			{
				title: "BA Philosophy & Psychology",
				organization: "Hertford College, Oxford",
				dates: [new Date("2007-10-01"), new Date("2010-07-31")],
				description:
					"1st Class, Gibbs Prize in Philosophy, Hertford College prize in PPP. Final year practical project (80%) built a neural network testing theories of meaning.",
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
