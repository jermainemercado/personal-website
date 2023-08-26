import React from "react";
import styled from 'styled-components';

const LinksContainer = styled.div`
	display: flex;
	grid-column-start: 1;
	grid-column-end: span 3;
	grid-row-start: 5;
	color: white;
	padding-left: 144px;
	justify-content: space-between;
	margin-top: auto;
	padding-bottom: 72px;
	h3 {
		font-weight: 100;
	}
`

const Links = () => (
	<LinksContainer>
		<h3>resume</h3>
		<h3>github</h3>
		<h3>linkedin</h3>
		<h3>email</h3>
		<h3>about me</h3>
	</LinksContainer>
)


export default Links;