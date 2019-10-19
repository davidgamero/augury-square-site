import React from "react";
import styled from 'styled-components'
import SequenceTyper from "./sequenceTyper"

const Container = styled.div`
  align-ttems: left;
  display: inline-block;
  @media (min-width: 600px){
    padding-top: 100px;
  };
  @media (max-width: 600px){
    padding-top: 0px;
  };
`;

const Div = styled.div`
  display: inline-block;
`;

const H1 = styled.div`
  font-size: 50px;
  font-family: Domine;
  font-weight: bold;
  display: inline;
  width: 100 %;
  line-height: 50px;
`;

const TypingTitleText = ({ className, prefixText, typingTextSequence }) => (
  <Container>
    <Div>
      <H1 style={{ marginRight: `10px` }}>Augury Square is for</H1>
    </Div>
    <Div>
      <H1>
        <SequenceTyper typingTextSequence={typingTextSequence} />
      </H1>
    </Div>
  </Container >)

export default TypingTitleText;