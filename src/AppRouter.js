import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class AppRouter extends React.Component {


    render() {
        return (
            <Router>
                <Route exact path="/"><Home /></Route>
            </Router>
          );
    }

    componentDidMount() {
    }
    
};