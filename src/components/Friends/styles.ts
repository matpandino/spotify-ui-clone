import styled from 'styled-components'

export const Container = styled.div`
  background: #121212;
  width: 260px;
  min-width: 260px;
  overflow: hidden;
  overflow-y: auto;

  padding: 15px;

  user-select: none;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`

export const CategoryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;

  padding-bottom: 15px;

  border-bottom: 1px solid #2c2b2b;
`

export const FriendContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 200px;

  div {
    display: flex;
    flex-direction: column;
  }

  .user-song-info {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 130px;

    b {
      font-size: 14px;
      padding: 2px 0px;

      border: 1px solid transparent;

      :hover {
        cursor: pointer;
        border-bottom: 1px solid #fff;
      }
    }

    span {
      font-size: 12px;
      font-weight: 400;

      padding: 2px 0px;

      color: #c7c7c7;
    }
  }

  .listening-time {
    display: flex;
    color: #c7c7c7;
    margin-bottom: auto;
  }

  .avatar-friend {
    width: 50px;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;

      border-radius: 50%;
    }
  }
`

export const FriendList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    padding: 20px 0px;
  }
`
