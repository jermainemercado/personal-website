import React from 'react';
import styled from 'styled-components';

const SpotifyCardContainer = styled.div`
	border-radius: 4px;
	grid-column-start: 4;
	grid-column-end: -1;
	grid-row-start: 3;
	background-color: rgba(232,121,250,.62);
	display: flex;
	width: calc(100vw / 5);
	height: calc(100vw / 9.618);
	margin-left: 72px;
`;

const SpotifyCard = () => (
	<>
		<h3>here's what i'm listening to right now!</h3>
		<SpotifyCardContainer>
			artist
			song
		</SpotifyCardContainer>
	</>
)

export default SpotifyCard