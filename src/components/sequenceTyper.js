import React from "react";
import Typist from 'react-typist';

const SequenceTyper = ({ typingTextSequence }) => {
  let items = [];

  typingTextSequence.forEach((t) => {
    items.push(t);
    items.push(<Typist.Backspace count={t.length} delay={500} />);
  });


  items.pop(); // Remove last backspace

  return (
    <Typist
      avgTypingDelay={150}
      stdTypingDelay={10}>
      {items}
    </Typist>
  )
}

export default SequenceTyper