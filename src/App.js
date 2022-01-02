import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Watchlist from './components/watchlist/Watchlist';
import Login from './components/login/Login';
import Search from './components/search/Search';
function App() {
    return (
        <div className="app">
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Search />
                    <Route path="/home" exact component={Homepage} />
                    <Route path="/watchlist" component={Watchlist} />
                    <Route path="/login" component={Login} />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
