/** @format */

import React from "react";
// import PrimaryButton from "./components/button";
import { defaultTheme, darkTheme } from "./utils/themes";
import { GlobalStyles } from "./utils/global";
import { Container } from "./components/main/style";
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import { ScreenProvider } from "./context/screenContext";
import { UserProvider } from "./context/userContext";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
	const [darkThemeActive, setDarkThemeActive] = React.useState(false);
	return (
		<div>
			<ThemeProvider theme={darkThemeActive ? darkTheme : defaultTheme}>
				<ScreenProvider>
					<UserProvider>
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
					</UserProvider>
				</ScreenProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
