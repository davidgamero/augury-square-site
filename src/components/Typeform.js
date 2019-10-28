import React from 'react'
import styled from 'styled-components'
import { ReactTypeformEmbed } from 'react-typeform-embed';


const TF_DATA_URL = 'https://blake127965.typeform.com/to/EgnYhs'

// ---- this one does nothing
export default function Typeform() {
  return (
    <Ctr>
      <ReactTypeformEmbed 
        url={TF_DATA_URL} 
        style={{ 
          // explicit or it sets it fixed on top of page like in here
          position: 'relative',
        }}
        hideHeaders
        hideFooter
      />
    </Ctr>
  )
}
// control how much space the typeform embed will expand
const Ctr = styled.div`
  height: 50vh;
`