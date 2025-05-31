import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Feed from "./Feed";
import Login from "./Login";
import Profile from "./Profile";
import { Provider } from "react-redux";
import Connections from "./Connections";
import Requests from "./Requests";
import appStore from "../utils/appstore";
function App() {
	return (
		<Provider store={appStore}>
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<Body />}>
						<Route path="/" element={<Feed />}></Route>
						<Route path="login" element={<Login />}></Route>
						<Route path="profile" element={<Profile />}></Route>
						<Route path="/requests" element={<Requests />}></Route>
						<Route path="/connections" element={<Connections />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
