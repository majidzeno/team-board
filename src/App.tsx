/** @format */

import React from "react";
import PrimaryButton from "./components/button";
import { GlobalStyles, defaultTheme, darkTheme } from "./utils";
import { Container } from "./components/button/style";
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/sidebar";

function App() {
	const [darkThemeActive, setDarkThemeActive] = React.useState(false);
	return (
		<div>
			<ThemeProvider theme={darkThemeActive ? darkTheme : defaultTheme}>
				<Container>
					<Sidebar />
					{/* <PrimaryButton modifiers={"error"}> Submit</PrimaryButton>
					<PrimaryButton modifiers={"warning"}> Submit</PrimaryButton>
					<PrimaryButton modifiers={"success"}> Submit</PrimaryButton>
					<PrimaryButton disabled> Disabled</PrimaryButton> */}

					<PrimaryButton onClick={() => setDarkThemeActive(!darkThemeActive)}>
						{darkThemeActive ? "Light Theme" : "Dark Theme"}
					</PrimaryButton>
				</Container>
				<GlobalStyles darkThemeActive={darkThemeActive} />
			</ThemeProvider>
		</div>
	);
}

export default App;
