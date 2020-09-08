import { createGlobalStyle } from 'styled-components'

import RobotoRegular from '../fonts/Roboto-Regular.ttf'
import RobotoThin from '../fonts/Roboto-Thin.ttf'
import RobotoMedium from '../fonts/Roboto-Medium.ttf'
import RobotoBold from '../fonts/Roboto-Bold.ttf'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }


  @font-face {
  font-family: 'Roboto';
  src: url(${RobotoRegular}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoThin}) format('truetype');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoMedium}) format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBold}) format('truetype');
  font-weight: bold;
  font-style: normal;
}

  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    color: #fff;
  }

  strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }


  scroll-behavior: smooth;


  ::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #212121;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #555;
}


/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #888;
}

`
