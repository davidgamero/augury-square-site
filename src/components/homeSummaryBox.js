import React from "react";
import Typist from 'react-typist';
import styled from 'styled-components';
import TypingTitleText from "./typingTitleText";

const Div = styled.div`
  margin: 50;
  border-color: #white;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  max-width: 1500px;
  max-height: 1000px;
  margin-bottom: 1.45rem;
  color: white;
  padding: 20px;
`;

const SubTitle = styled.p`
  margin-top: 15px;
  font-family: Roboto;
  font-size: 20px;
  letterSpacing: 1px;
`;

const TagLineText = styled.p`
  margin-top: 100px;
  font-family: Roboto;
  font-size: 15px;
  letter-spacing: 1px;
  color: white;
`;

const HomeSummaryBox = ({ className }) => (
  <Div>
    <TypingTitleText
      prefixText="Prefix "
      typingTextSequence={['Doers', 'Coders', 'Makers', 'Writers', 'Innovators']} />

    <SubTitle>
      A thirty-acre, blockchain-backed, mixed-use development for technology tastemakers, innovative enthusiants, and enterprise-leading experts.
    </SubTitle>
    <SubTitle>
      Enabling Ability. Providing Possibility.
     </SubTitle>
    <div>
      <TagLineText>
        The environment of innovation for business, life, work, and play
     </TagLineText>
    </div>
  </Div >
)

export default HomeSummaryBox;