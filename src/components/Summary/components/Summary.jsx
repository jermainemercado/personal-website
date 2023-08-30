import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	color: white;

	/* Medium devices such as tablets (768px and up) */
	@media only screen and (max-width: 63.9em) {
		margin-top: 10vw;
		padding-right: 64px;
		padding-left: 64px;
		letter-spacing: 0.5px;

		font-size: 2.5vw;
		line-height: 3vw;
	}

	/* Large devices such as laptops (1024px and up) */
	@media only screen and (min-width: 64em) {
		margin-top: 144px;
		letter-spacing: 2px;
		padding-left: 144px;
		line-height: 21px;

		grid-column-start: 1;
		grid-column-end: 4;
		grid-row-start: 2-end;
	}
`;

const Keyword = styled.strong`
	color: #E879FA;
`;

const EmojiBulletedList = styled.ul`
	list-style: none;
	@media only screen and (max-width: 48em) {
		padding-left: 0px;
	}
	@media only screen and (min-width: 64em) {
		padding-left: 24px;
	}
`;

/**
 * Can't pass emojis as props :(
 */
const ListItemMercari = styled.li`
	padding-top: 12px;

	&::marker {
		content: '🧪 ';
	}
`;

const ListItemKonradGroup = styled.li`
	padding-top: 12px;

	&::marker {
		content: '🎨 ';
	}
`;

const ListItemKenna = styled.li`
	padding-top: 12px;

	&::marker {
		content: '🚚 ';
	}
`;

const ListItemTicketkings = styled.li`
	padding-top: 12px;

	&::marker {
		content: '💳 ';
	}
`;

const ListItemMi9 = styled.li`
	padding-top: 12px;

	&::marker {
		content: '⚙️ ';
	}
`;

const ListItemStitchy = styled.li`
	padding-top: 12px;

	&::marker {
		content: '📈 ';
	}
`;



const Summary = () => (
	<TextContainer>
		<p>
			hi! i&apos;m jermaine - a <Keyword>software engineer</Keyword> specializing in producing <Keyword>accessible web</Keyword> experiences; with exposure across the entire stack. <br />
			my <span title="bread and butter">🍞 and 🧈</span>  is react and node.js using typescript.<br />
			<br />
		</p>
		<Keyword>
			i have:
		</Keyword>
		<EmojiBulletedList>
			<ListItemMercari>
				developed <Keyword>experiments controlled by A/B tests</Keyword> for <Keyword>millions</Keyword> of users as part of the Mercari, Inc. web team
			</ListItemMercari>
			<ListItemKonradGroup>
				created a <Keyword>responsive and WCAG compliant</Keyword> component library while interning at Konrad Group
			</ListItemKonradGroup>
			<ListItemKenna>
				enhanced features for a supply chain management application during my time at Kenna Technology Solutions Inc.
			</ListItemKenna>
			<ListItemTicketkings>
				built a subscription tracker and authentication handler, controlling recurring payments, automating supervision of content access for Ticketkings IO, LLC.
			</ListItemTicketkings>
		</EmojiBulletedList>
		<br />
		<Keyword>
			i am currently:
		</Keyword>
		<EmojiBulletedList>
			<ListItemMi9>
				leading architecture of a software licensing portal, providing <Keyword>role-based access control</Keyword> for the retrieval and modification of software versioning systems for point-of-sale systems at Mi9 Retail, Inc.
			</ListItemMi9>
			<ListItemStitchy>
				designing a portfolio analysis application for ERC-20 tokens, reading data from the <Keyword>Ethereum </Keyword>blockchain; recording profitability, displaying expected values of anticipated positions and visualizing historical metrics for trades undertaken
			</ListItemStitchy>
		</EmojiBulletedList>
		<br />
		<br />
		{/* to learn more about what i get up to outside of breaking code —  keep scrolling!  ↓ */}
	</TextContainer>
)

export default Summary;