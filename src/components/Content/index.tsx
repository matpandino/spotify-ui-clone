import React from 'react'

import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight
} from 'react-icons/md'

import { FiSearch } from 'react-icons/fi'

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
              src="https://avatars3.githubusercontent.com/u/16725679?s=460&u=5b3c92ba2c36592ec68f40095a5c424cfc47fb1e&v=4"
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
              imgUrl="https://cdn.vox-cdn.com/thumbor/bhLfjooRbe5eq4t2UIIHoy1x1kI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10183111/_lowfi_anime.jpg"
              title="lofi hip hop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></CategoryItem>
            <CategoryItem
              imgUrl="https://cdn.vox-cdn.com/thumbor/bhLfjooRbe5eq4t2UIIHoy1x1kI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10183111/_lowfi_anime.jpg"
              title="lofi hip hop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></CategoryItem>
            <CategoryItem
              imgUrl="https://cdn.vox-cdn.com/thumbor/bhLfjooRbe5eq4t2UIIHoy1x1kI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10183111/_lowfi_anime.jpg"
              title="lofi hip hop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></CategoryItem>
            <CategoryItem
              imgUrl="https://cdn.vox-cdn.com/thumbor/bhLfjooRbe5eq4t2UIIHoy1x1kI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10183111/_lowfi_anime.jpg"
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
              imgUrl="https://scontent.ffln3-1.fna.fbcdn.net/v/t1.0-9/86999039_2919805604709906_3434629915763277824_n.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=V1vrtl3xXTcAX-ioqV7&_nc_ht=scontent.ffln3-1.fna&oh=91c70a21ac8e447daae3c23aebba1173&oe=5F7CD574"
              title="The Weekend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            ></CategoryItem>
            <CategoryItem
              imgUrl="https://scontent.ffln3-1.fna.fbcdn.net/v/t1.0-9/86999039_2919805604709906_3434629915763277824_n.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=V1vrtl3xXTcAX-ioqV7&_nc_ht=scontent.ffln3-1.fna&oh=91c70a21ac8e447daae3c23aebba1173&oe=5F7CD574"
              title="The Weekend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            ></CategoryItem>
            <CategoryItem
              imgUrl="https://scontent.ffln3-1.fna.fbcdn.net/v/t1.0-9/86999039_2919805604709906_3434629915763277824_n.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=V1vrtl3xXTcAX-ioqV7&_nc_ht=scontent.ffln3-1.fna&oh=91c70a21ac8e447daae3c23aebba1173&oe=5F7CD574"
              title="The Weekend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            ></CategoryItem>
            <CategoryItem
              imgUrl="https://scontent.ffln3-1.fna.fbcdn.net/v/t1.0-9/86999039_2919805604709906_3434629915763277824_n.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=V1vrtl3xXTcAX-ioqV7&_nc_ht=scontent.ffln3-1.fna&oh=91c70a21ac8e447daae3c23aebba1173&oe=5F7CD574"
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
