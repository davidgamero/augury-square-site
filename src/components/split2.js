/**
 * Reverse of split.js, for the white background + black text sections
 */
import React from 'react'
import styled from 'styled-components'

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
  color: black;
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
  color: black;
  ${props => props.css && props.css}
`;

const H1 = styled.div`
  font-family: Domine;
  font-weight: 500;
  display: inline;
  width: 100%;
  font-size: 3.5rem;
  line-height: 4.5rem;
  color: black;
  /* flexible css override option */
  ${props => props.css && props.css}
`;

const Container = styled.div`
  background-color: white;
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