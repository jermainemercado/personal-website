import React from 'react';
import styled from 'styled-components';

const SpotifyCardContainer = styled.div`
	border-radius: 4px;
	grid-column-start: 4;
	grid-column-end: 5;
	background-color: rgba(232,121,250,.62);
	display: flex;
	width: calc(100vw / 5);
`;

const SpotifyCard = () => (
	<SpotifyCardContainer>
		artist<br/>
		song
	</SpotifyCardContainer>
)

export default SpotifyCard