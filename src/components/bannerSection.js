import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Container = styled.div`
  height: 40vh;
  padding: 10vh 5vh;
  width: auto;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary};
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 3rem;
`;

const SubTitle = styled.h1`
  font-family: Roboto;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-align: justify;
`;

const BannerSection = ({ theme, title, subTitle }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>
          {title}
        </Title>
        <SubTitle>
          {subTitle}
        </SubTitle>
      </Container>
    </ThemeProvider>
  )
}

export default BannerSection;