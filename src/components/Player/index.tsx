import React, { useState } from 'react'

import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { BiShuffle } from 'react-icons/bi'
import { RiSkipBackFill, RiSkipForwardFill } from 'react-icons/ri'
import { ImPause, ImPlay2 } from 'react-icons/im'
import { FiRepeat, FiVolume1 } from 'react-icons/fi'

import theWeekndImg from '../../../assets/the-weeknd.png'

import {
  Container,
  SongArtistContainer,
  MainPlayer,
  Sound,
  PlayerButtons,
  TimeBar
} from './styles'

interface SongArtistProps {
  imageUrl: string
  name: string
  artist: string
  favorited?: boolean
}
const SongArtist: React.FC<SongArtistProps> = ({ imageUrl, name, artist }) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(false)

  return (
    <SongArtistContainer>
      <div>
        <img src={imageUrl} alt={name}></img>
        <div className="song-artist">
          <b>{name}</b>
          <span>{artist}</span>
        </div>
        <div onClick={() => setIsFavorited(!isFavorited)}>
          <span>
            {isFavorited ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
          </span>
        </div>
      </div>
    </SongArtistContainer>
  )
}

const Player: React.FC = () => {
  const [isSongPlaying, setIsPaused] = useState<boolean>(false)

  return (
    <Container>
      <SongArtist
        artist="The Weeknd"
        favorited={true}
        name="Blinding Lights"
        imageUrl={theWeekndImg}
      ></SongArtist>
      <MainPlayer>
        <PlayerButtons>
          <BiShuffle size={15} />
          <RiSkipBackFill size={20} />
          <div onClick={() => setIsPaused(!isSongPlaying)}>
            {isSongPlaying ? <ImPlay2 size={33} /> : <ImPause size={33} />}
          </div>
          <RiSkipForwardFill size={20} />
          <FiRepeat size={14} />
        </PlayerButtons>
        <TimeBar>
          3:20 <div className="song-time-bar" /> 3:20
        </TimeBar>
      </MainPlayer>
      <Sound>
        <FiVolume1 size={20} />
        <div className="volume-bar" />
      </Sound>
    </Container>
  )
}

export default Player
