import React from "react"
import styled from 'styled-components'
import TypingTitleText from "./typingTitleText"

const Div = styled.div`
  @media (max-width: 600px){
    margin: 10vh 5vh;
  };
  @media (min-width: 600px){
    margin: 100px;
  };
  border-color: ${props => props.theme.primary};
  @media (min-width: 600px){
    border-width: 0px 1px 1px 0px;
  };
  @media (max-width: 600px){
    border-width: 0px;
  };
  border-style: solid;
  margin-bottom: 1.45rem;
  color: ${props => props.theme.primary};;
  padding: 20px;
  height: 100%;
`;

const SubTitle = styled.p`
  margin-top: 15px;
  font-family: Roboto;
  font-size: 20px;
  letterSpacing: 1px;
  color: ${props => props.theme.primary};

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

const TagLineText = styled.p`
  margin-top: 100px;
  font-family: Roboto;
  font-size: 15px;
  letter-spacing: 1px;
  color: ${props => props.theme.primary};;
`;

const HomeSummaryBox = ({ className }) => (
  <Div>
    <TypingTitleText
      prefixText="Prefix "
      typingTextSequence={['Doers', 'Coders', 'Makers', 'Writers', 'Innovators']} />

    <SubTitle>
      A thirty-acre, blockchain-backed, mixed-use development for technology tastemakers, innovative enthusiasts, and enterprise-leading experts.
    </SubTitle>
    <SubTitle>
      Enabling Ability. Providing Possibility.
     </SubTitle>
    <TagLineText>
      The environment of innovation for business, life, work, and play
     </TagLineText>
  </Div >
)

export default HomeSummaryBox;