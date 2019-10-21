import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const TextDiv = styled.div`
  @media (max-width: 600px){
    padding: 5vh 5vh;
    height: auto
  };
  @media (min-width: 600px){
    display: inline-block;
    padding: 25vh 10vh;
    vertical-align: center;
    width: 50%;
    height: 100%;
  };
  color: ${props => props.theme.primary};;
`;

const ImgDiv = styled.div`
  @media (max-width: 600px){
    height: 40vh
  };
  @media (min-width: 600px){
    display: inline-block;
    vertical-align:top;
    width: 50%;
    height: 100%;
  };
  color: ${props => props.theme.primary};
`;

const SubTitle = styled.p`
  margin-top: 15px;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 2rem;
  letterSpacing: 1px;
  color: ${props => props.theme.primary};
`;

const H1 = styled.div`
  font-family: Domine;
  font-weight: bold;
  display: inline;
  width: 100 %;
  font-size: 1.5rem;
  line-height: 3rem;
`;

const Container = styled.div`
  background-color: ${props => props.theme.background};
  @media(max-width: 600px) {
    height: auto
  };
  @media(min-width: 600px) {
    height: 100vh;
  };
  width: auto;
  `;

export {
  TextDiv,
  ImgDiv,
  H1,
  SubTitle,
  Container
}