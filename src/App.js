import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Watchlist from './components/watchlist/Watchlist';
import Login from './components/login/Login';
import Search from './components/search/Search';
import { GlobalProvider } from './components/context/GlobalState';
function App() {
    return (
        <div className="app">
            <div>
                <GlobalProvider>
                    <BrowserRouter>
                        <Navbar />
                        <Switch>
                            <Route path="/" exact>
                                <Homepage></Homepage>
                            </Route>
                            <Route path="/search">
                                <Search></Search>
                            </Route>
                            <Route path="/watchlist">
                                <Watchlist></Watchlist>
                            </Route>
                            <Route path="/login">
                                <Login></Login>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </GlobalProvider>
            </div>
        </div>
    );
}

export default App;
