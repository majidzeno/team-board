/** @format */

import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { defaultTheme, darkTheme } from "utils/themes";
import { GlobalStyles } from "utils/global";
import { Container } from "components/main/style";
import { ThemeProvider } from "styled-components";
import Sidebar from "components/sidebar";
import Main from "components/main";
import { ScreenProvider } from "context/screenContext";
import { UserProvider } from "context/userContext";

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
