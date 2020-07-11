/** @format */

import React from "react";
// import PrimaryButton from "./components/button";
import { GlobalStyles, defaultTheme, darkTheme } from "./utils";
import { Container } from "./components/common/button/style";
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import { ScreenProvider } from "./context/screenContext";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
	const [darkThemeActive, setDarkThemeActive] = React.useState(false);
	return (
		<div>
			<ThemeProvider theme={darkThemeActive ? darkTheme : defaultTheme}>
				<ScreenProvider>
					<Router>
						<Switch>
							<Container>
								<Sidebar
									darkThemeActive={darkThemeActive}
									setDarkThemeActive={setDarkThemeActive}
								/>
								<Main />
								{/* <PrimaryButton modifiers={"error"}> Submit</PrimaryButton>
					<PrimaryButton modifiers={"warning"}> Submit</PrimaryButton>
					<PrimaryButton modifiers={"success"}> Submit</PrimaryButton>
				<PrimaryButton disabled> Disabled</PrimaryButton> */}
							</Container>
						</Switch>
					</Router>
					<GlobalStyles darkThemeActive={darkThemeActive} />
				</ScreenProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
