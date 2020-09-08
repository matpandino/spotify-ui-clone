import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #252525;
  height: 92px;
  width: 100%;
`

export const SongArtistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;

  b {
    font-size: 14px;
    font-weight: normal;

    border: 1px solid transparent;

    :hover {
      cursor: pointer;
      border-bottom: 1px solid #fff;
    }
  }

  span {
    margin-top: 10px;
    font-size: 12px;
    font-weight: normal;
    color: #c7c7c7;
  }

  img {
    height: 60px;
    width: 60px;

    margin-left: 10px;
  }

  div {
    display: flex;
    padding: 0px 10px;
  }

  .song-artist {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

export const MainPlayer = styled.div`
  display: flex;
  flex-direction: column;

  user-select: none;
`

export const PlayerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-bottom: 8px;

  color: #a8a8a8;

  svg {
    margin: 0px 10px;

    :hover {
      color: #fff;
    }

    :active {
      color: ${shade(0.2, '#a8a8a8')};
    }
  }
`

export const TimeBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  color: #a8a8a8;

  .song-time-bar {
    height: 4px;
    width: 40vw;

    margin: 0px 10px;

    border-radius: 30px;
    background: #a8a8a8;

    :hover {
      background: #50a33b;
    }
  }
`

export const Sound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #a8a8a8;

  .volume-bar {
    height: 4px;
    width: 130px;

    margin: 0px 10px;

    margin-right: 30px;

    border-radius: 30px;
    background: #a8a8a8;

    :hover {
      background: #50a33b;
    }
  }
`
