import React from 'react'

import { Container, LibraryItem } from './styles'
import { Title } from '../styles'

const LibraryMenu: React.FC = () => {
  return (
    <Container>
      <Title>YOUR LIBRARY</Title>
      <LibraryItem>Made For You</LibraryItem>
      <LibraryItem>Recently Played</LibraryItem>
      <LibraryItem>Liked Songs</LibraryItem>
      <LibraryItem>Albums</LibraryItem>
      <LibraryItem>Artists</LibraryItem>
      <LibraryItem>Podcasts</LibraryItem>
    </Container>
  )
}

export default LibraryMenu
