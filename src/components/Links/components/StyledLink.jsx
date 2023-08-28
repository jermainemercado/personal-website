import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
	color: white;

	border: 3px solid transparent;
	border-bottom: 3px solid white;
	border-radius: 4px;
	padding: 4px;
`;

const Link = ({ label, href, newTab }) => (
	<StyledLink
		href={href}
		target={newTab ? '_blank' : null}
	>
		{label}
	</StyledLink>
);

export default Link;