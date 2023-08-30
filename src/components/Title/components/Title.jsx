'use client';

import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	white-space: nowrap;


	@media only screen and (max-width: 63.99em) {
		padding-top: 21px;
		align-items: center;
	}

	@media only screen and (min-width: 64em) {
		grid-column-start: 1;
		grid-row-end: 1-end;
		grid-row-end: 2;
		padding-top: 32px;
		padding-left: 144px;
		white-space: nowrap;
	}
`;

const Name = styled.h1`
	color: #FFFFFF;
	font-size: 71.8px;
	@media only screen and (max-width: 63.99em) {
		font-size: 6.64vw;
	}
`;

const Occupation = styled.h2`
	color: #E879FA;
	font-weight: 200;
	font-style: italic;
	font-size: 31.8px;
	@media only screen and (max-width: 63.99em) {
		font-size: 4vw;
	}
`

const OccupationEmoji = styled.span`
	font-style: normal;
`

const Title = () => (
	<TitleContainer>
		<Name>jermaine mercado </Name>
		<Occupation>full-stack developer <OccupationEmoji>👨🏽‍💻</OccupationEmoji></Occupation>
	</TitleContainer>
);

export default Title;