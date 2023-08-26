'use client';

import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	grid-column-start: 1;
	grid-row-end: 1-end;
	grid-row-end: 2;
	padding-top: 32px;
	padding-left: 144px;
	white-space: nowrap;
`;

const Name = styled.h1`
	color: #FFFFFF;
	font-size: 71.8px;
`;

const Occupation = styled.h2`
	color: #E879FA;
	font-weight: 200;
	font-style: italic;
	font-size: 31.8px;
`
const Title = () => (
	<TitleContainer>
		<Name>jermaine mercado</Name>
		<Occupation>full-stack developer</Occupation>
	</TitleContainer>
);

export default Title;