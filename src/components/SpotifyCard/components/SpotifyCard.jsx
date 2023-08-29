import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Card = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	grid-column-start: 4;
	grid-column-end: -1;
	grid-row-start: 3;
	background-color: rgba(232,121,250,.62);
	margin-top: 33px;
	width: calc(100vw / 5);
	height: calc(100vw / 9.618);

`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: calc(100vw / 5);
	margin-left: 216px;
`;

const Subtitle = styled.h3`
	white-space: nowrap;
	color: white;
	font-weight: 300;
`;

const AlbumCover = styled.img`
	object-fit: contain;
`;

const MusicCard = () => {

	const [tracks, setTracks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jermerc&api_key=${process.env.NEXT_PUBLIC_LAST_FM_API_KEY}&format=json`)
			const { recenttracks: { track } } = await res.json();

			console.log(track);
			const tracksData = track.reduce((acc, cur) => {
				acc.push({
					name: cur.name,
					artist: cur.artist['#text'],
					image: cur.image[3]['#text'],
				})
				return acc;
			}, []);

			setTracks(tracksData);
			setIsLoading(false);

			console.log(tracksData);
		})();
	}, []);

	if (isLoading) {
		return <></>;
	}

	return (
		<Container>
			<Subtitle>here&apos;s what i&apos;ve been listening to lately — ↓ </Subtitle>
			<Card>
				<>{tracks[0].artist}</>
				<br/>
				<>{tracks[0].name}</>
				<AlbumCover src={tracks[0].image}/>
			</Card>
		</Container>
	)
}


export default MusicCard