'use client';

import React from 'react';
import styled from 'styled-components';

const Background = styled.main`
height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const Container = ({ children }) => (
	<Background>
		{children}
	</Background>
)

export default Container;
