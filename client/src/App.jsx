
import Home from './pages/Home.jsx'
import ViewScreen from './pages/ViewScreen.jsx'
import Navbar from './components/Navbar.jsx'
import { Route } from 'wouter'
import UpdateScreen from './pages/UpdateScreen.jsx'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

// bg - 020817
// blue - 3c82f6

const queryClient = new QueryClient();


function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <Route path="/" component={Home} />
                <Route path="/view" component={ViewScreen} />
                <Route path="/update" component={UpdateScreen} />
            </QueryClientProvider>
        </>
    )
}

export default App
