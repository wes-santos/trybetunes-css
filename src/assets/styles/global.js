import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Montserrat, sans-serif;
  }

  body {
    background-image: linear-gradient(90deg, #470587 0%, #55099f 50%, #470587 100%);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
