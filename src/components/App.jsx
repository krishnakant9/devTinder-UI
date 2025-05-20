import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Feed from "./Feed";
import Login from "./Login";
import Profile from "./Profile";
import { Provider } from "react-redux";
import appStore from "../utils/appstore";
function App() {
	return (
		<Provider store={appStore}>
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<Body />}>
						<Route path="/" element={<Feed/>}></Route>
						<Route path="login" element={<Login />}></Route>
						<Route path="profile" element={<Profile />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
