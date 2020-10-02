import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  /* background: goldenrod; */
  align-items: center;
`

const LinkBox = ({ hashid, url }) => {
  localStorage.setItem('url', url)
  localStorage.setItem('hashid', hashid)

  return (
    <StyledDiv>
      <div>
        <p>{url}</p>
      </div>
      <div>
        {/* <a href={`https://rel.ink/${hashid}`}>{`https://rel.ink/${hashid}`}</a> */}
        <a
          href={localStorage.getItem('url')}
        >{`https://rel.ink/${localStorage.getItem('hashid')}`}</a>
        <button>COPY</button>
      </div>
    </StyledDiv>
  )
}

export default LinkBox
