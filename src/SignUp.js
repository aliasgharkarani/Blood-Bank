import React, { Component } from "react";
import { Link } from 'react-router-dom';

// Used!
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as firebase from 'firebase';

const styles = {
    root: {
        flexGrow: 1,

    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    AppBar: {
        background: 'rebeccapurple'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%'
    },
    textField: {
        fontSize: '5px',
        width: 250,
    },
    button: {
        alignItems: 'center'
    },
};

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email: 'aliasgharkarani125@hotmail.com',
            Password: '',
            Phoneno: '',
            BloodGroup: '',
            name: 'Ali',
        }
        // if(firebase.auth().currentUser){
        // console.log(firebase.auth().currentUser)
        // this.props.navigation.navigate("Main")
        //   }
        //   else{
        // console.log("firebase.auth().currentUser", firebase.auth().currentUser)
        //   }
    }
    SignUp() {

        let user = {
            name: this.state.name,
            Phoneno: this.state.Phoneno,
            email: this.state.email,
            BloodGroup: this.state.BloodGroup,
            Password: this.state.Password
        }
        firebase.auth().createUserWithEmailAndPassword(user.email, user.Password)
            .then((studentcreatedUser) => {
                // delete user.password;
                // delete user.confirmPassword;
                // user.uid = studentcreatedUser.uid;
                firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).set(user)
                //   this.props.navigation.navigate("Signin")
                this.props.history.push('/SignIn')
                console.log("User Authenticated!");
            }).catch(
                (Error) => { alert(Error.message) }
            )
    }
    render() {
        return (
            <div style={styles.root}>
                <AppBar position="static" style={styles.AppBar}>
                    <Toolbar>
                        <i className="material-icons" style={{ marginRight: '1%' }}>
                            account_circle
                </i>
                        <Typography variant="h6" color="inherit" style={styles.grow}>
                            Blood Bank
             </Typography>
             <Button color="inherit"><Link style={{color:"white"}} to="/SignIn">SignIn</Link></Button>
                    </Toolbar>
                </AppBar>

                <div style={{ display: "inline-flex", width: '100%' }}>
                    <div style={{ width: '30%' }}></div>
                    <form style={styles.container} noValidate autoComplete="off">
                    <TextField
                            id="standard-textarea"
                            label="Name"
                            placeholder={this.state.name}
                            multiline
                            style={styles.textField}
                            margin="normal"
                            onChange={(event) => { this.setState({ name: event.target.value }) }}
                        />
                        <br />
                        <TextField
                            id="standard-textarea"
                            label="Email"
                            placeholder={this.state.email}
                            multiline
                            style={styles.textField}
                            margin="normal"
                            onChange={(event) => { this.setState({ email: event.target.value }) }}
                        />
                        <br />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            placeholder={this.state.Password}
                            className={styles.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={(event) => { this.setState({ Password: event.target.value }) }}
                        />
                        <br />
                        <TextField
                            id="standard-textarea"
                            label="Phoneno"
                            placeholder={this.state.Phoneno}
                            multiline
                            style={styles.textField}
                            margin="normal"
                            onChange={(event) => { this.setState({ Phoneno: event.target.value }) }}
                        />
                        <br />
                        <TextField
                            id="standard-textarea"
                            label="BloodGroup"
                            placeholder={this.state.BloodGroup}
                            multiline
                            style={styles.textField}
                            margin="normal"
                            onChange={(event) => { this.setState({ BloodGroup: event.target.value }) }}
                        />
                        <br />
                        <div style={{ width: '55%', display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" color="primary" style={styles.button} onClick={() => this.SignUp()}>
                                SignUp
             </Button>
                        </div>
                    </form>
                    <div style={{ width: '30%' }}></div>
                </div>
            </div>
        )
    }
}
export default SignUp;