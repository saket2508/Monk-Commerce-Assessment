import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AlbumPage from "../pages/AlbumPage"
import GalleryPage from "../pages/GalleryPage"

export default function AppRoutes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/users">
                    <HomePage/>
                </Route>
                <Route exact path = "/albums/:uid">
                    <AlbumPage/>
                </Route>
                <Route exact path = "/gallery/:aid">
                    <GalleryPage/>
                </Route>
                <Route exact path="/">
                    <Redirect to="/users"/>
                </Route>
            </Switch>
        </Router>
    )
}