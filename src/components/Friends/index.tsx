import React from 'react'

import { FiVolume1 } from 'react-icons/fi'

import { Container, CategoryTitle, FriendContainer, FriendList } from './styles'

import markImg from '../../../assets/mark.jpeg'
import neymarImg from '../../../assets/neymar.jpeg'

interface FriendProps {
  user: {
    name: string
    avatarUrl: string
  }
  song: {
    name: string
    artist: string
    source: string
  }
  sinceListenTime?: string
  listeningNow: boolean
}

const Friend: React.FC<FriendProps> = ({
  user,
  song,
  sinceListenTime,
  listeningNow
}) => {
  return (
    <FriendContainer>
      <div className="avatar-friend">
        <img src={user.avatarUrl} alt={user.name + ' avatar'}></img>
      </div>
      <div className="user-song-info">
        <b>{user.name}</b>
        <span>{song.name}</span>
        <span>{song.artist}</span>
        <span>{song.source}</span>
      </div>
      <div className="listening-time">
        {listeningNow ? <FiVolume1 size={20} /> : sinceListenTime}
      </div>
    </FriendContainer>
  )
}

const Friends: React.FC = () => {
  return (
    <Container>
      <CategoryTitle>Friend Activity</CategoryTitle>
      <FriendList>
        <Friend
          user={{
            name: 'Mark Zucc',
            avatarUrl: markImg
          }}
          song={{
            name: 'Human Music',
            artist: '100% Human',
            source: 'Totally Human Music'
          }}
          listeningNow={true}
        />
        <Friend
          user={{
            name: 'Neymar Jr.',
            avatarUrl:
              neymarImg
          }}
          song={{
            name: 'Oh Juliana',
            artist: 'Niack',
            source: 'Funkzão'
          }}
          listeningNow={true}
        />
        <Friend
          user={{
            name: 'Neymar Jr.',
            avatarUrl:
              neymarImg
          }}
          song={{
            name: 'Oh Juliana',
            artist: 'Niack',
            source: 'Funkzão'
          }}
          listeningNow={true}
        />
        <Friend
          user={{
            name: 'Neymar Jr.',
            avatarUrl:
              neymarImg
          }}
          song={{
            name: 'Oh Juliana',
            artist: 'Niack',
            source: 'Funkzão'
          }}
          listeningNow={true}
        />
        <Friend
          user={{
            name: 'Neymar Jr.',
            avatarUrl:
              neymarImg
          }}
          song={{
            name: 'Oh Juliana',
            artist: 'Niack',
            source: 'Funkzão'
          }}
          listeningNow={true}
        />
        <Friend
          user={{
            name: 'Neymar Jr.',
            avatarUrl:
              neymarImg
          }}
          song={{
            name: 'Oh Juliana',
            artist: 'Niack',
            source: 'Funkzão'
          }}
          listeningNow={true}
        />
        <Friend
          user={{
            name: 'Neymar Jr.',
            avatarUrl:
              neymarImg
          }}
          song={{
            name: 'Oh Juliana',
            artist: 'Niack',
            source: 'Funkzão'
          }}
          listeningNow={true}
        />
      </FriendList>
    </Container>
  )
}

export default Friends
