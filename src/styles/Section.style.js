import variables from "./_variables.style";
import { h2 } from "./_mixins.style";

const {
	mainTextColor,
	lightTextColor,
	baseFontSize,
	defaultFontWeight,
	leftColumnWidthPercentage,
} = variables;

const timelineItemFontSize = "0.8em";
const ruleGapPercentage = 4;

export const sectionHeadingStyle = {
	...h2,
};

export const subHeadingStyle = {
	color: lightTextColor,
	fontSize: baseFontSize,
	textTransform: "initial",
	paddingLeft: `${ruleGapPercentage / 2}%`,
};

const ruleStyle = {
	width: `${leftColumnWidthPercentage * 100 - ruleGapPercentage}%`,
	borderBottom: `1px solid ${mainTextColor}`,
};

export const ruleLeftStyle = {
	...ruleStyle,
	float: "left",
	margin: `1.5% ${ruleGapPercentage}% 1.5% 0`,
};

export const ruleRightStyle = {
	...ruleStyle,
	flex: 1,
	margin: `2.2% 0 1.5% ${ruleGapPercentage}%`,
	height: 0,
};

export const timelineStyle = {
	width: "100%",
};

export const timelineCellStyle = {
	paddingBottom: "5mm",
};

export const timelineHeaderCellStyle = {
	...timelineCellStyle,
	paddingRight: `${ruleGapPercentage}%`,
	width: `${leftColumnWidthPercentage * 100}%`,
	textAlign: "right",
};

export const timelineCellQuickStyle = {
	paddingBottom: "1mm",
};

export const timelineItemTitleStyle = {
	fontWeight: defaultFontWeight * 1.2,
};

export const timelineItemDatesStyle = {
	fontSize: timelineItemFontSize,
	fontWeight: defaultFontWeight,
	color: lightTextColor,
};

export const timelineItemOrganisationStyle = {
	fontSize: timelineItemFontSize,
	fontWeight: defaultFontWeight,
	color: lightTextColor,
};

export default {
	marginTop: "-1.8mm", // HACK
};
