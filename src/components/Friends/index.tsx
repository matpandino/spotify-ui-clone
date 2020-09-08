import React from 'react'

import { FiVolume1 } from 'react-icons/fi'

import { Container, CategoryTitle, FriendContainer, FriendList } from './styles'

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
            avatarUrl:
              'https://scontent.ffln3-1.fna.fbcdn.net/v/t34.0-12/16176889_112685309244626_578204711_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=L6gDlKXxEZYAX_O98U6&_nc_ht=scontent.ffln3-1.fna&oh=3a95abdaafd22fa842514bd411889fce&oe=5F59CE98'
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
              'https://images.redetv.uol.com.br/public/esporte/redetviesportes/20200812163430I2VySPVDwP.jpeg'
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
              'https://images.redetv.uol.com.br/public/esporte/redetviesportes/20200812163430I2VySPVDwP.jpeg'
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
              'https://images.redetv.uol.com.br/public/esporte/redetviesportes/20200812163430I2VySPVDwP.jpeg'
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
              'https://images.redetv.uol.com.br/public/esporte/redetviesportes/20200812163430I2VySPVDwP.jpeg'
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
              'https://images.redetv.uol.com.br/public/esporte/redetviesportes/20200812163430I2VySPVDwP.jpeg'
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
              'https://images.redetv.uol.com.br/public/esporte/redetviesportes/20200812163430I2VySPVDwP.jpeg'
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
