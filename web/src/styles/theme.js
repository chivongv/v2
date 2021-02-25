import { Global, css } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap');

      :root {
        --colors-primary: rgb(86, 134, 245);
        --colors-background: #17191c;
        --colors-text: #ececec;
        --colors-nav-background: rgba(23, 25, 28, 0.8);
        --colors-tag: rgb(219, 232, 225, 0.7);
        --colors-shadow: rgba(0, 0, 0, 0.7);
        --colors-thumbnail-background: #f2f2f205;
      }

      [data-theme='light'] {
        --colors-primary: #3d92f3;
        --colors-background: rgb(250, 250, 250);
        --colors-text: #444a51;
        --colors-nav-background: rgba(250, 250, 250, 0.9);
        --colors-tag: rgba(0, 0, 0, 0.6);
        --colors-shadow: rgba(0, 0, 0, 0.1);
        --colors-thumbnail-background: #f2f2f2;
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      ::selection {
        background-color: none;
        color: var(--colors-primary);
      }

      html,
      body {
        font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        min-height: 100vh;
        width: 100%;
        scroll-behavior: smooth;
        background: var(--colors-background);
        color: var(--colors-text);
        scrollbar-color: rgb(86, 134, 245) #f2f2f205;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `}
  />
);
