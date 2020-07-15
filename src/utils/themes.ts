/** @format */

import { createMuiTheme } from "@material-ui/core";

export const defaultTheme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			"@global": {},
		},
		MuiButton: {
			root: {
				textTransform: "capitalize",
				fontFamily: "primaryFontRegular",
			},
		},
	},
	typography: {
		button: {
			fontSize: "10rem",
		},
		fontFamily: [
			"Helvetica Neue",
			"-apple-system",
			"BlinkMacSystemFont",
			"Segoe UI",
			"Roboto",
			"Arial",
			"sans-serif",
			"Apple Color Emoji",
			"Segoe UI Emoji",
			"Segoe UI Symbol",
		].join(","),
	},
});
export const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
	},
	overrides: {
		MuiButton: {
			root: {
				// textTransform: "capitalize",
				fontFamily: "primaryFontRegular",
			},
		},
	},
	typography: {
		button: {
			textTransform: "none",
		},
	},
});

// palette: Object
// common: Object
// black:
// #000
// white:
// #fff
// type: "light"
// primary: Object
// light:
// #7986cb
// main:
// #3f51b5
// dark:
// #303f9f
// contrastText:
// #fff
// secondary: Object
// light:
// #ff4081
// main:
// #f50057
// dark:
// #c51162
// contrastText:
// #fff
// error: Object
// light:
// #e57373
// main:
// #f44336
// dark:
// #d32f2f
// contrastText:
// #fff
// warning: Object
// light:
// #ffb74d
// main:
// #ff9800
// dark:
// #f57c00
// contrastText:
// rgba(0, 0, 0, 0.87)
// info: Object
// light:
// #64b5f6
// main:
// #2196f3
// dark:
// #1976d2
// contrastText:
// #fff
// success: Object
// light:
// #81c784
// main:
// #4caf50
// dark:
// #388e3c
// contrastText:
// rgba(0, 0, 0, 0.87)
// grey: Object
// 50:
// #fafafa
// 100:
// #f5f5f5
// 200:
// #eeeeee
// 300:
// #e0e0e0
// 400:
// #bdbdbd
// 500:
// #9e9e9e
// 600:
// #757575
// 700:
// #616161
// 800:
// #424242
// 900:
// #212121
// A100:
// #d5d5d5
// A200:
// #aaaaaa
// A400:
// #303030
// A700:
// #616161
// contrastThreshold: 3
// getContrastText: f E()
// augmentColor: f B()
// tonalOffset: 0.2
// text: Object
// primary:
// rgba(0, 0, 0, 0.87)
// secondary:
// rgba(0, 0, 0, 0.54)
// disabled:
// rgba(0, 0, 0, 0.38)
// hint:
// rgba(0, 0, 0, 0.38)
// divider:
// rgba(0, 0, 0, 0.12)
// background: Object
// paper:
// #fff
// default:
// #fafafa
// action: Object
// active:
// rgba(0, 0, 0, 0.54)
// hover:
// rgba(0, 0, 0, 0.04)
// hoverOpacity: 0.04
// selected:
// rgba(0, 0, 0, 0.08)
// selectedOpacity: 0.08
// disabled:
// rgba(0, 0, 0, 0.26)
// disabledBackground:
// rgba(0, 0, 0, 0.12)
// disabledOpacity: 0.38
// focus:
// rgba(0, 0, 0, 0.12)
// focusOpacity: 0.12
// activatedOpacity: 0.12
// props: Object
// shadows: Array(25)
// 0: "none"
// 1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
// 2: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"
// 3: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)"
// 4: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"
// 5: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)"
// 6: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"
// 7: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"
// 8: "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)"
// 9: "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)"
// 10: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)"
// 11: "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)"
// 12: "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)"
// 13: "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)"
// 14: "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)"
// 15: "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)"
// 16: "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)"
// 17: "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)"
// 18: "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)"
// 19: "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)"
// 20: "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)"
// 21: "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)"
// 22: "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)"
// 23: "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)"
// 24: "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
// export const defaultTheme = {
// 	// General
// 	background: neutral[100],
// 	textColor: neutral[600],
// 	secondaryColor: neutral[400],

// 	// Borders
// 	lightBr: neutral[300],
// 	// Buttons,Tabs,Texts

// 	// primaryColor: blue[700],
// 	// primaryHoverColor: blue[500],
// 	// primaryActiveColor: blue[300],
// 	primaryDisabledColor: neutral[400],
// 	textColorPrimary: neutral[100],
// 	textColorDisabled: neutral[300],
// 	primaryFontBold: "primaryFontBold",
// 	primaryFontMedium: "primaryFontMedium",
// 	primaryFontRegular: "primaryFontRegular",
// 	secondaryFont: "secondaryFont",
// 	buttonTextSize: typescale.subtitle,
// 	buttonTextSizeOnHover: typescale.header6,
// 	componentTransition: "all 0.2s ease-in-out",

// 	sidebarBg: neutral[200],
// 	sidebarItemBg: neutral[200],
// 	sidebarItemBr: neutral[300],
// 	sidebarItemHoverBg: neutral[300],

// 	status: {
// 		successColor: green[300],
// 		successHoverColor: green[200],
// 		successActiveColor: green[100],

// 		warningColor: yellow[300],
// 		warningHoverColor: yellow[200],
// 		warningActiveColor: yellow[100],

// 		// errorColor: red[300],
// 		// errorHoverColor: red[200],
// 		// errorActiveColor: red[100],
// 	},

// 	// Elements
// 	cardBackgroundColor:
// 		"linear-gradient(124.73deg, #f4f5f7 31.22%, #dcddde 105.43%)",
// 	cardShadow:
// 		"-11.0159px -11.0159px 17.6255px rgba(255, 255, 255, 0.8),11.0159px 11.0159px 17.6255px rgba(174, 187, 195, 0.3)",
// };

// // "linear-gradient(129.56deg, #4D535C -7.06%, #171C21 50.9%, #121417 107.91%)",
// export const darkTheme = {
// 	background: neutral[600],
// 	primaryColor: neutral[500],
// 	primaryHoverColor: neutral[400],
// 	primaryActiveColor: neutral[300],
// 	primaryDisabledColor: neutral[600],
// 	textColorPrimary: neutral[100],
// 	textColorDisabled: neutral[300],
// 	primaryFontBold: "primaryFontBold",
// 	primaryFontMedium: "primaryFontMedium",
// 	primaryFontRegular: "primaryFontRegular",
// 	secondaryFont: "secondaryFont",
// 	buttonTextSize: typescale.subtitle,

// 	// sidebarLogoContainerColor: blue[700],
// 	// sidebarUserContainerColor: blue[600],
// 	// sidebarItemsContainerColor: blue[500],

// 	status: {
// 		successColor: green[300],
// 		successHoverColor: green[200],
// 		successActiveColor: green[100],

// 		warningColor: yellow[300],
// 		warningHoverColor: yellow[200],
// 		warningActiveColor: yellow[100],

// 		// errorColor: red[300],
// 		// errorHoverColor: red[200],
// 		// errorActiveColor: red[100],
// 	},
// };
