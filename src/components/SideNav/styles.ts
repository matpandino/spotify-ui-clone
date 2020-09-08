import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;

  user-select: none;

  background: #121212;
  width: 194px;
  min-width: 194px;
`

export const LibraryPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  overflow-y: auto;
`

export const Title = styled.span`
  display: block;
  font-weight: 100;
  font-size: 12px;
  letter-spacing: 1px;

  margin-bottom: 10px;

  color: #fff;
`

export const ActiveBar = styled.div`
  position: fixed;
  background: #1ed760;
  width: 4px;
  height: 27px;

  border-radius: 2px;
`
