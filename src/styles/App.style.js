import variables from "./_variables.style.js";

const { mainFont, baseFontSize, mainTextColor } = variables;

export default {
	position: "relative",
	height: "100%",
	fontFamily: mainFont,
	fontSize: baseFontSize,
	color: mainTextColor,
	WebkitPrintColorAdjust: "exact",
};
