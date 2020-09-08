import React from 'react'

import { RiHome5Fill } from 'react-icons/ri'
import { FiRadio, FiDisc } from 'react-icons/fi'

import { Container, MenuItem } from './styles'
import { ActiveBar } from '../styles'

const TopMenu: React.FC = () => {
  return (
    <Container>
      <MenuItem active>
        <ActiveBar /> <RiHome5Fill size={25} />
        <span>Home</span>
      </MenuItem>
      <MenuItem>
        <FiDisc size={25} />
        <span>Browse</span>
      </MenuItem>
      <MenuItem>
        <FiRadio size={25} />
        <span>Radio</span>
      </MenuItem>
    </Container>
  )
}

export default TopMenu
