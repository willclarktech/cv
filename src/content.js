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
		title: "Development Experience",
		timeline: [
			{
				title: "Self-directed study",
				dates: [new Date("2011-03-01"), "present"],
				description:
					"Built my first website in 2011 and started taking it more seriously in Jan 2015. From Aug 2015 embarked upon a period of intensive self-directed study, focusing on Python, Django and front end development, culminating in my job at Pixsy. Currently taking some time out to focus on learning projects.",
			},
			{
				title: "Full-stack developer",
				organization: "Pixsy GmbH",
				dates: [new Date("2016-01-04"), new Date("2017-03-31")],
				description:
					"Universal JavaScript stack: I worked on all parts of the app including React/Redux front end, Koa2 back end (previously Express), testing, bug-fixing, dev-ops tasks involving AWS and CircleCI etc.",
			},
		],
	},
	{
		title: "Skills",
		subtitle: "with brief indication of level",
		timeline: [
			{
				title: "JavaScript",
				description:
					"ES7+. Comfortable with `fn.bind`/`fn.call`/`fn.apply` and partial application.",
			},
			{
				title: "Functional programming",
				description:
					"[Side projects](https://github.com/willclarktech/elm-boilerplate) using Elm. Prefer `const` and avoid mutations/side-effects in JS except where necessary for performance. Comfortable with `arr.reduce`.",
			},
			{
				title: "React",
				description:
					"Separation of smart vs dumb components. Prefer stateless functional.",
			},
			{
				title: "Redux",
				description:
					"My project [apollo-redux-server](https://github.com/willclarktech/apollo-redux-server) initializes a redux store on the server from a dynamically-updated list of actions from an event store.",
			},
			{
				title: "MongoDB",
				description: "Comfortable writing aggregation pipelines.",
			},
			{
				title: "End-to-end testing",
				description:
					"Experience with Gherkin, Selenium, Nightmare.js, Browserstack. Designed and built E2E testing setup from scratch at Pixsy. Comfortable with page object model.",
			},
			{
				title: "Git",
				description:
					"Comfortable with `rebase`, `bisect`, `cherry-pick`, `push --force-with-lease`.",
			},
			{
				title: "AWS",
				description:
					"Migrated data from one EC2 instance to another via a volume snapshot. Set up EC2 containers from scratch in a new region.",
			},
			{
				title: "NPM",
				description:
					"Published semver-compliant package: [steggy](https://www.npmjs.com/package/steggy). Familiar with yarn.",
			},
			{
				title: "ELK stack",
				description:
					"Set up and configured Filebeat, Logstash, Elasticsearch, and Kibana using a docker image. Experience deleting indices and deleting by query.",
			},
			{
				title: "Cryptography etc",
				description:
					"Learning the basics by implementing them in my project [crypto-primitives](https://github.com/willclarktech/crypto-primitives). Wrote an NPM package for steganography. Interest in Bitcoin and Blockchain.",
			},
		],
	},
	{
		title: "Education",
		timeline: [
			{
				title: "Lean Launch Program",
				organization: "Saïd Business School, Oxford",
				dates: [new Date("2014-05-01")],
				description:
					"Course designed to develop entrepreneurial skills within the Lean Startup framework by applying concepts to a real-life business idea. Extended contact with a mentor and other successful entrepreneurs.",
			},
			{
				title: "BPhil Philosophy",
				organization: "Hertford College, Oxford",
				dates: [new Date("2011-10-01"), new Date("2013-06-30")],
				description:
					"Distinction awarded (overall and for each assessed component). Full AHRC funding: tuition fees and living expenses for two years. Hertford College prize.",
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
