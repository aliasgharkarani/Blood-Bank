import React, { Component } from 'react';
import './App.css'
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import history from './History';
import Notfound from './Notfound';
import firebase from 'firebase'
import App from './App';
import SignIn from './SignIn';
import Main from './Main';
import SignUp from './SignUp';


function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/SignIn', state: { from: props.location } }} />}
        />
    )
}

class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: false,
            // loader: false,
        }
    }

    componentWillMount() {
        let that = this
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                that.setState({
                    authed: true,
                    // loader: true,
                })
                let type = localStorage.getItem("type")
                let convertype = JSON.parse(type)
                if (convertype !== null) {
                    // history.push(convertype)
                this.props.history.push(convertype)
                }
            }

            else {
                console.log(user)
                that.setState({
                    authed: false
                })
            }
        });
    }


    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/SignUp" component={SignUp} />
                        <Route exact path="/SignIn" component={SignIn} />
                        {/* <Route exact path="/Main" component={Main} /> */}
                        <PrivateRoute authed={this.state.authed} path="/Main" component={Main} />
                        {/* <PrivateRoute3 authed={this.state.authed} path="/studentdata" component={Studentdata} />
                        <PrivateRoute4 authed={this.state.authed} path="/studentprofile" component={StudentProfile} />
                        <PrivateRoute5 authed={this.state.authed} path="/companyprofile" component={Companyprofile} /> */}
                        {/* <PrivateRoute8 authed={this.state.authed} path="/mycompanypostedjobs" component={MycompanyPostedJobs} /> */}
                        <Route path="*" component={Notfound} />
                    </Switch>
                </Router>
            </div >
        )

    }
}


export default Routers;