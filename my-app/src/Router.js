import React, { useEffect, useRef, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import NavigationBar from "./NavBar";
import './App.css'
import SignIn from "./views/SignIn";
import CustomInput from "./components/CustomInput";
import ForgotPassword from "./views/ForgotPassword";


export default function WebRouter() {

    return (
        <Router>
            <div >
                <Switch>
                    <Route path="/profile">
                        <Profile1 />
                    </Route>
                    <Route path="/">

                        <div className='App'>
                            {/* <SignIn /> */}
                            {/* <ForgotPassword/> */}
                            
                            <NavigationBar />

                        </div>
                        <Switch>
                            <Route path="/tvshow">
                                <TVShow />
                            </Route>
                            <Route path="/playlist">
                                <MyPlaylist />
                            </Route>
                            <Route path="/movies">
                                <Movies />
                            </Route>
                            <Route path="/popular">
                                <NewAndPopular />
                            </Route>
                            <Router path='/home'>
                                <Home />
                            </Router>
                        </Switch>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function TVShow() {
    return <h2>TVShow</h2>;
}
function MyPlaylist() {
    return <h2>MyPlaylist</h2>;
}

function Movies() {
    return <h2>Movies</h2>;
}
function NewAndPopular() {
    return <h2>NewAndPopular</h2>;
}
function Profile1() {
    return <h2>Profile1</h2>;
}
function Profile2() {
    return <h2>Profile1</h2>;
}


// function Topics() {
//     let match = useRouteMatch();

//     return (
//         <div>
//             <h2>Topics</h2>
//             <ul>
//                 <li>
//                     <Link to={`${match.url}/components`}>Components</Link>
//                 </li>
//                 <li>
//                     <Link to={`${match.url}/props-v-state`}>
//                         Props v. State
//                     </Link>
//                 </li>
//             </ul>

//             {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//             <Switch>
//                 <Route path={`${match.path}/:topicId`}>
//                     <Topic />
//                 </Route>
//                 <Route path={match.path}>
//                     <h3>Please select a topic.</h3>
//                 </Route>
//             </Switch>
//         </div>
//     );
// }

// function Topic() {
//     let { topicId } = useParams();
//     return <h3>Requested topic ID: {topicId}</h3>;
// }