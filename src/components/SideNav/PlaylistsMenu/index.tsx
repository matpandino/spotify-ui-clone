import React from 'react'

import { Container, LibraryItem } from './styles'
import { Title } from '../styles'

const PlaylistsMenu: React.FC = () => {
  return (
    <Container>
      <Title>PLAYLISTS</Title>
      <LibraryItem>futuristic vibes</LibraryItem>
      <LibraryItem>old school</LibraryItem>
      <LibraryItem>idk</LibraryItem>
      <LibraryItem>another playlist</LibraryItem>
      <LibraryItem>trap</LibraryItem>
      <LibraryItem>other songs</LibraryItem>
      <LibraryItem>other songs</LibraryItem>
      <LibraryItem>other songs</LibraryItem>
      <LibraryItem>other songs</LibraryItem>
    </Container>
  )
}

export default PlaylistsMenu
