/** @format */

import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import HelvticaBold from "assets/fonts/helveticaneue/HelveticaNeuBold.ttf";
import HelvticaMedium from "assets/fonts/helveticaneue/HelveticaNeueMedium.ttf";
import HelvticaRegular from "assets/fonts/helveticaneue/HelveticaNeue.ttf";
import HelvticaLight from "assets/fonts/helveticaneue/HelveticaNeueLight.ttf";
// import { defaultTheme, darkTheme } from "./themes";

export const GlobalStyles = createGlobalStyle<{ darkThemeActive: boolean }>`
  @font-face {
    font-family: primaryFontBold;
    font-style: normal;
    font-weight: 400;
    src: url(${HelvticaBold});
  }
  @font-face {
    font-family: primaryFontMedium;
    font-style: normal;
    font-weight: 400;
    src: url(${HelvticaMedium});
  }
  @font-face {
    font-family: primaryFontRegular;
    font-style: normal;
    font-weight: 400;
    src: url(${HelvticaRegular});
  }
  @font-face {
    font-family: primaryFontLight;
    font-style: normal;
    font-weight: 400;
    src: url(${HelvticaLight});
  }

  ${normalize()}
  html{
    font-size:16px;
    box-sizing:border-box;
  }
  *,*:before,*:after{
    box-sizing:inherit;
  }
  body{
    margin:0;
    font-family: primaryFontRegular,serif;
    transition:.5s all ease-in-out;
  }
`;

// color:${(props) => (props.darkThemeActive ? "white" : "black")};
// background-color:${(props) =>
// props.darkThemeActive ? darkTheme.background : defaultTheme.background};
