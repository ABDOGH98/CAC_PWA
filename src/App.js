import { lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";

const Actus = lazy(() => import("./pages/Actus"));
const PubBody = lazy(() => import("./components/PubBody"));
const Articles = lazy(() => import("./pages/Articles"));

const loader = () => <h1>Loading .......</h1>;

function App() {
	return (
		<>
			<Suspense fallback={loader}>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/actus">
							<Actus />
						</Route>
						<Route exact path="/articles">
							<Articles />
						</Route>
						<Route exact path="/actus/:id">
							<PubBody />
						</Route>
						<Route exact path="/articles/:id">
							<PubBody />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
			</Suspense>
		</>
	);
}

export default App;
