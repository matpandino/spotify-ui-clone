import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  margin-top: 25px;
  margin-left: 20px;

  user-select: none;

  height: 100%;
  > div + div {
    padding-top: 16px;
  }
`

export const LibraryItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  font-weight: 400;
  font-size: 14px;

  color: #c4c4c4;
  user-select: none;

  :hover {
    cursor: default;
    color: #fff;
  }

  :active {
    color: ${shade(0.2, '#a8a8a8')};
  }
`
