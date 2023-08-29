'use client';

import Image from 'next/image'
import styles from './page.module.css'
import Container from '@/components/Container';
import Title from '@/components/Title'
import Summary from '@/components/Summary';
import styled from 'styled-components';
import Links from '@/components/Links/components/Links';
import MusicCard from '@/components/SpotifyCard/components/SpotifyCard';

const PageContainer = styled.main`
  * {
    background-color: #222222;
  }
`;

export default function Home() {
  return (
    <PageContainer>
      <Container>
        <Title/>
        <Summary/>
        <Links/>
        {/* <MusicCard/> */}
      </Container>
    </PageContainer>
  )
}
