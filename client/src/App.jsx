
import Home from './pages/Home.jsx'
import ViewScreen from './pages/ViewScreen.jsx'
import Navbar from './components/Navbar.jsx'
import { Route } from 'wouter'
import UpdateScreen from './pages/UpdateScreen.jsx'


// bg - 020817
// blue - 3c82f6

function App() {
    return (
        <>
            <Navbar />
            <Route path="/" component={Home} />
            <Route path="/view" component={ViewScreen} />
            <Route path="/update" component={UpdateScreen} />
        </>
    )
}

export default App
