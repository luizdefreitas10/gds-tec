import { createGlobalStyle } from 'styled-components';
import backgroundImg from './images/224773413_370368351332536_7982558865154286042_n(1).jpg';
// import Inter from './fonts/Inter.ttf';


const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 14px;
  }

  body {
    background-image: url('${backgroundImg}');
    background-color: black;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    color: #dafb4c;
    height: 100vh;
    object-fit: contain;
  }
`;

// url('${backgroundImg}');

export default GlobalStyles;
