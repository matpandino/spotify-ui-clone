import React from 'react'

import TopMenu from './TopMenu'
import LibraryMenu from './LibraryMenu'
import PlaylistsMenu from './PlaylistsMenu'

import { Container, LibraryPlaylistContainer } from './styles'

const SideNav: React.FC = () => {
  return (
    <Container>
      <TopMenu />
      <LibraryPlaylistContainer>
        <LibraryMenu />
        <PlaylistsMenu />
      </LibraryPlaylistContainer>
    </Container>
  )
}

export default SideNav
