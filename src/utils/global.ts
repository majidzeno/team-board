/** @format */

import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import PoppinsBold from "../assets/fonts/Poppins/Poppins-Bold.ttf";
import PoppinsMedium from "../assets/fonts/Poppins/Poppins-Medium.ttf";
import PoppinsRegular from "../assets/fonts/Poppins/Poppins-Regular.ttf";
import PoppinsLight from "../assets/fonts/Poppins/Poppins-Light.ttf";
import HelvticaRegular from "../assets/fonts/helveticaneue/HelveticaNeue.ttf";
// import { defaultTheme, darkTheme } from "./themes";

export const GlobalStyles = createGlobalStyle<{ darkThemeActive: boolean }>`
@font-face {
font-family: primaryFontBold;
font-style: normal;
font-weight: 400;
src: url(${PoppinsBold});
  }
  @font-face {
    font-family: primaryFontMedium;
    font-style: normal;
    font-weight: 400;
    src: url(${PoppinsMedium});
}
@font-face {
font-family: primaryFontRegular;
font-style: normal;
font-weight: 400;
src: url(${PoppinsRegular});
  }
  @font-face {
    font-family: primaryFontLight;
    font-style: normal;
    font-weight: 400;
    src: url(${PoppinsLight});
}
@font-face {
font-family: secondaryFont;
font-style: normal;
font-weight: 400;
src: url(${HelvticaRegular});
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
