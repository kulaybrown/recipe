import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #F3F7FB;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .ant-form-item-label {
      label {
      font-family: 'Lato', sans-serif;
    }
  }
  .ant-drawer-content-wrapper {
    @media (max-width: 480px) {
      width: 100%!important;
    }
  }
  .ant-form-item-children {
    .ant-btn-dashed {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

export default GlobalStyle;
