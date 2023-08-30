'use client';

import React from 'react';
import styled from 'styled-components';

const Background = styled.main`
	height: 100vh;

	@media only screen and (min-width: 64em) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
	}

	@media only screen and (max-width: 63.9em) {
		display: flex;
		flex-direction: column;
	}
`;

const Container = ({ children }) => (
	<Background>
		{children}
	</Background>
)

export default Container;
