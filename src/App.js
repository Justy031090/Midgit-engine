import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Watchlist from './components/watchlist/Watchlist';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Search from './components/search/Search';
import WrongPage from './components/WrongPage/WrongPage';
import { GlobalProvider } from './components/context/GlobalState';
import { AuthProvider } from './components/context/AuthContext';
import PrivateRoute from './PrivateRoute';

function App() {
    return (
        <div className="app">
            <div>
                <AuthProvider>
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
                                <PrivateRoute
                                    path="/watchlist"
                                    component={Watchlist}
                                ></PrivateRoute>
                                <Route path="/login" component={Login}></Route>
                                <Route path="/signup" component={Signup} />
                                <Route component={WrongPage} />
                            </Switch>
                        </BrowserRouter>
                    </GlobalProvider>
                </AuthProvider>
            </div>
        </div>
    );
}

export default App;
