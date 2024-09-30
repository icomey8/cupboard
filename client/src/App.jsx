import AddScreen from './pages/AddScreen.jsx';
import Home from './pages/Home.jsx';
import UpdateScreen from './pages/UpdateScreen.jsx';
import DeleteScreen from './pages/DeleteScreen.jsx';
import ViewScreen from './pages/ViewScreen.jsx';
import Navbar from './components/Navbar.jsx';
import { Route } from 'wouter';

// bg - 020817
// blue - 3c82f6

function App() {
	return (
		<>
			<Navbar/>
			<Route path='/' component={Home}/>
			<Route path='/view' component={ViewScreen}/>
			<Route path='/add' component={AddScreen}/>
		</>
	);
}

export default App;
