import React from 'react'

import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight
} from 'react-icons/md'

import { FiSearch } from 'react-icons/fi'

import neymarImg from '../../../assets/neymar.jpeg'
import theWeekndImg from '../../../assets/the-weeknd.png'
import lofiImg from '../../../assets/lofi.jpg'

import {
  Container,
  Header,
  ArrowsSearchContainer,
  Profile,
  ContentBody,
  ContentTitle,
  SearchBar,
  SeachBarInput,
  Category,
  CategoryTitle,
  CategoryContainer,
  CategoryItens,
  FixedTopBar
} from './styles'

interface CatergoryItemProps {
  imgUrl: string
  title: string
  description: string
}

const CategoryItem: React.FC<CatergoryItemProps> = ({
  imgUrl,
  title,
  description
}) => {
  return (
    <CategoryContainer>
      <img src={imgUrl} alt={title}></img>
      <b>{title}</b>
      <p>{description}</p>
    </CategoryContainer>
  )
}

const Content: React.FC = () => {
  return (
    <Container>
      <Header>
        <FixedTopBar>
          <ArrowsSearchContainer>
            <div>
              <MdKeyboardArrowLeft size={30} />
              <MdKeyboardArrowRight color={'#aaa'} size={30} />
            </div>
            <SearchBar>
              <FiSearch color={'#000'} size={17} />
              <SeachBarInput placeholder="Search"></SeachBarInput>
            </SearchBar>
          </ArrowsSearchContainer>
          <Profile>
            <img
              src={neymarImg}
              alt="user avatar"
            ></img>
            <span>Mateus Pandino</span>
            <MdKeyboardArrowDown size={30} />
          </Profile>
        </FixedTopBar>
        <ContentTitle>Home</ContentTitle>
      </Header>
      <ContentBody>
        <Category>
          <CategoryTitle>
            <span>Shortcuts</span>
            <div>
              <MdKeyboardArrowLeft color={'#aaa'} size={30} />
              <MdKeyboardArrowRight size={30} />
            </div>
          </CategoryTitle>
          <CategoryItens>
            <CategoryItem
              imgUrl={lofiImg}
              title="lofi hip hop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></CategoryItem>
            <CategoryItem
              imgUrl={lofiImg}
              title="lofi hip hop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></CategoryItem>
            <CategoryItem
              imgUrl={lofiImg}
              title="lofi hip hop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></CategoryItem>
            <CategoryItem
              imgUrl={lofiImg}
              title="lofi hip hop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></CategoryItem>
          </CategoryItens>
        </Category>
        <Category>
          <CategoryTitle>
            <span>Recently Played</span>
            <div>
              <MdKeyboardArrowLeft color={'#aaa'} size={30} />
              <MdKeyboardArrowRight size={30} />
            </div>
          </CategoryTitle>
          <CategoryItens>
            <CategoryItem
              imgUrl={theWeekndImg}
              title="The Weekend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            ></CategoryItem>
            <CategoryItem
              imgUrl={theWeekndImg}
              title="The Weekend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            ></CategoryItem>
            <CategoryItem
              imgUrl={theWeekndImg}
              title="The Weekend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            ></CategoryItem>
            <CategoryItem
              imgUrl={theWeekndImg}
              title="The Weekend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            ></CategoryItem>
          </CategoryItens>
        </Category>
      </ContentBody>
    </Container>
  )
}

export default Content
