/** @format */

import { blue, neutral, green, red, yellow } from "./colors";
import { typescale } from "./typography";

export const defaultTheme = {
	background: neutral[100],
	primaryColor: blue[700],
	primaryHoverColor: blue[500],
	primaryActiveColor: blue[300],
	primaryDisabledColor: neutral[400],
	textColorPrimary: neutral[100],
	textColorDisabled: neutral[300],
	primaryFontBold: "primaryFontBold",
	primaryFontMedium: "primaryFontMedium",
	primaryFontRegular: "primaryFontRegular",
	secondaryFont: "secondaryFont",
	buttonTextSize: typescale.sidebarText,
	buttonTextSizeOnHover: typescale.header6,
	sidebarLogoContainerColor: blue[700],
	sidebarUserContainerColor: blue[600],
	sidebarItemsContainerColor: blue[700],
	status: {
		successColor: green[300],
		successHoverColor: green[200],
		successActiveColor: green[100],

		warningColor: yellow[300],
		warningHoverColor: yellow[200],
		warningActiveColor: yellow[100],

		errorColor: red[300],
		errorHoverColor: red[200],
		errorActiveColor: red[100],
	},
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
	buttonTextSize: typescale.sidebarText,
	sidebarLogoContainerColor: blue[700],
	sidebarUserContainerColor: blue[600],
	sidebarItemsContainerColor: blue[700],
	status: {
		successColor: green[300],
		successHoverColor: green[200],
		successActiveColor: green[100],

		warningColor: yellow[300],
		warningHoverColor: yellow[200],
		warningActiveColor: yellow[100],

		errorColor: red[300],
		errorHoverColor: red[200],
		errorActiveColor: red[100],
	},
};
