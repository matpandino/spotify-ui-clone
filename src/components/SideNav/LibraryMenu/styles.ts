import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  margin-left: 20px;

  height: 100%;

  > div + div {
    margin-top: 16px;
  }
`

export const LibraryItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  font-weight: 300;
  font-size: 14px;

  color: #c4c4c4;

  :hover {
    cursor: default;
    color: #fff;
  }

  :active {
    color: ${shade(0.2, '#a8a8a8')};
  }
`
