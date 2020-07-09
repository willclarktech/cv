import React from "react";
import style, {
	introHeadingStyle,
	introSummaryStyle,
} from "../styles/Intro.style";

export default ({ name, summary }) => (
	<section id="intro" style={style}>
		<h1 style={introHeadingStyle}>{name}</h1>
		<p id="summary" style={introSummaryStyle}>
			{summary}
		</p>
	</section>
);
