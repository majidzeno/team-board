/** @format */

import { blue, neutral, green, red, yellow } from "./colors";
import { typescale } from "./typography";
import { createMuiTheme } from "@material-ui/core";

// const theme = createMuiTheme({
// 	palette: {
// 		primary: purple[500],
// 	},
// });

export const defaultTheme = {
	// General
	background: neutral[100],
	textColor: neutral[600],
	secondaryColor: neutral[400],

	// Borders
	lightBr: neutral[300],
	// Buttons,Tabs,Texts

	// primaryColor: blue[700],
	// primaryHoverColor: blue[500],
	// primaryActiveColor: blue[300],
	primaryDisabledColor: neutral[400],
	textColorPrimary: neutral[100],
	textColorDisabled: neutral[300],
	primaryFontBold: "primaryFontBold",
	primaryFontMedium: "primaryFontMedium",
	primaryFontRegular: "primaryFontRegular",
	secondaryFont: "secondaryFont",
	buttonTextSize: typescale.subtitle,
	buttonTextSizeOnHover: typescale.header6,
	componentTransition: "all 0.2s ease-in-out",

	sidebarBg: neutral[200],
	sidebarItemBg: neutral[200],
	sidebarItemBr: neutral[300],
	sidebarItemHoverBg: neutral[300],

	status: {
		successColor: green[300],
		successHoverColor: green[200],
		successActiveColor: green[100],

		warningColor: yellow[300],
		warningHoverColor: yellow[200],
		warningActiveColor: yellow[100],

		// errorColor: red[300],
		// errorHoverColor: red[200],
		// errorActiveColor: red[100],
	},

	// Elements
	cardBackgroundColor:
		"linear-gradient(124.73deg, #f4f5f7 31.22%, #dcddde 105.43%)",
	cardShadow:
		"-11.0159px -11.0159px 17.6255px rgba(255, 255, 255, 0.8),11.0159px 11.0159px 17.6255px rgba(174, 187, 195, 0.3)",
};

// "linear-gradient(129.56deg, #4D535C -7.06%, #171C21 50.9%, #121417 107.91%)",
export const darkTheme = {
	background: neutral[600],
	primaryColor: neutral[500],
	primaryHoverColor: neutral[400],
	primaryActiveColor: neutral[300],
	primaryDisabledColor: neutral[600],
	textColorPrimary: neutral[100],
	textColorDisabled: neutral[300],
	primaryFontBold: "primaryFontBold",
	primaryFontMedium: "primaryFontMedium",
	primaryFontRegular: "primaryFontRegular",
	secondaryFont: "secondaryFont",
	buttonTextSize: typescale.subtitle,

	// sidebarLogoContainerColor: blue[700],
	// sidebarUserContainerColor: blue[600],
	// sidebarItemsContainerColor: blue[500],

	status: {
		successColor: green[300],
		successHoverColor: green[200],
		successActiveColor: green[100],

		warningColor: yellow[300],
		warningHoverColor: yellow[200],
		warningActiveColor: yellow[100],

		// errorColor: red[300],
		// errorHoverColor: red[200],
		// errorActiveColor: red[100],
	},
};
