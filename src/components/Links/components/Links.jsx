import React from "react";
import styled from 'styled-components';
import Link from "./StyledLink";

const LinksContainer = styled.div`
	display: flex;
	grid-column-start: 1;
	grid-column-end: span 3;
	grid-row-start: 5;
	justify-content: space-between;
	padding-bottom: 72px;
	margin-top: auto;

	@media only screen and (max-width: 63.99em) {
		padding-left: 32px;
		padding-right: 32px;

	}
	@media only screen and (min-width: 64em) {
		padding-left: 144px;
	}
`

const Links = () => (
	<LinksContainer>
		<Link
			href='https://drive.google.com/file/d/1FCdrCU85TEA7oPxxZSo6rS1BjkFMTOqW/view?usp=sharing'
			label='resume'
			newTab
		/>
		<Link
			href='https://github.com/jermainemercado'
			label='github'
			newTab
		/>
		<Link
			href='https://www.linkedin.com/in/jermaine-mercado'
			label='linkedin'
			newTab
		/>
		<Link
			href='mailto:jermaine.mercado7@gmail.com'
			label='contact'
		/>
		{/* TO BE ADDED AT A LATER DATE.
		<Link
			href='#aboutMe'
			label='about me'
		/> */}
	</LinksContainer>
);

export default Links;