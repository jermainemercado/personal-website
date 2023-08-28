import React from "react";
import styled from 'styled-components';
import Link from "./StyledLink";

const LinksContainer = styled.div`
	display: flex;
	grid-column-start: 1;
	grid-column-end: span 3;
	grid-row-start: 5;
	padding-left: 144px;
	justify-content: space-between;
	margin-top: auto;
	padding-bottom: 72px;
`

const Links = () => (
	<LinksContainer>
		<Link
			href='https://www.google.com/'
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
		<Link
			href='#aboutMe'
			label='about me'
		/>
	</LinksContainer>
);

export default Links;