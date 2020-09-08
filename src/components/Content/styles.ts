import styled from 'styled-components'

export const Container = styled.div`
  background: #171717;
  width: 100%;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  flex: 1;

  user-select: none;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;

  top: 0;

  background: none;
`

export const FixedTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  position: absolute;
  padding: 10px;
`

export const ArrowsSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const SearchBar = styled.div`
  background: #fff;

  margin-left: 10px;

  border-radius: 30px;
  height: 25px;
  border: 0;

  padding: 0px 5px;
`

export const SeachBarInput = styled.input`
  border: 0;
  color: #000;
  font-size: 13px;
  background: none;

  margin-left: 5px;

  ::placeholder {
    color: #000;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: 300;

    :hover {
      border-bottom: 1px solid #fff;
    }
  }

  img {
    border-radius: 50%;
    height: 30px;
    width: 30px;

    margin-right: 10px;
  }

  svg {
    margin-left: 10px;
  }
`

export const ContentTitle = styled.div`
  display: flex;
  align-items: flex-end;

  background: linear-gradient(180deg, #333333 0%, #171717 90.69%, #171717 100%);

  font-size: 42px;
  font-weight: bolder;
  color: #fff;

  padding: 20px 20px;

  height: 200px;
`

export const ContentBody = styled.div`
  height: 10px;
`

export const Category = styled.div`
  padding: 20px;
`

export const CategoryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: #fff;

  border-bottom: 1px solid #2c2b2b;
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 15rem;

  font-size: 15px;

  b,
  p {
    margin-top: 5px;
  }

  b {
    color: #fff;
  }

  p {
    font-size: 14px;
    color: #c7c7c7;
  }

  img {
    height: 15rem;
    width: 15rem;

    margin-bottom: 10px;
  }
`

export const CategoryItens = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-x: hidden;
  width: auto;

  > div {
    padding: 15px 0px;
  }

  div + div {
    margin-left: 20px;
  }
`
