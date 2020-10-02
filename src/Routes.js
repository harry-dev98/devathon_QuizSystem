import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import {
    Home,
    ExamList,
    Exam,
} from './Components/Components';

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={""} />
                <Route exact path="/register" component={""} />
                <Route exact path="/exam/:user" component={ExamList} />
                <Route exact path="/exam/:exam/:user" component={Exam} />
                <Route exact path="/score/:exam/:user" component={""} />
            </Switch>
        </Router>
    );
}

export default Main;