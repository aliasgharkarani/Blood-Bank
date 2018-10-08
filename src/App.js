import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

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
    alignItems:'center'
    // margin: theme.spacing.unit,
  },
};


class AppBarr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'aliasgharkarani125@hotmail.com',
      Password: '**************'
    }
  }
  render() {
    return (
      <div style={styles.root}>
        <AppBar position="static" style={styles.AppBar}>
          <Toolbar>
            {/* <IconButton style={styles.menuButton} color="inherit" aria-label="material-icons">
            <MenuIcon />
          </IconButton> */}
            <i className="material-icons" style={{ marginRight: '1%' }}>
              account_circle
             </i>
            <Typography variant="h6" color="inherit" style={styles.grow}>
              Blood Bank
          </Typography>
            <Button color="inherit" onClick={() => alert('Hi How are you?')}>Login</Button>
          </Toolbar>
        </AppBar>

        <div style={{ display: "inline-flex", width: '100%' }}>
          <div style={{ width: '30%' }}></div>
          <form style={styles.container} noValidate autoComplete="off">
            <TextField
              id="standard-textarea"
              label="Email"
              placeholder={this.state.email}
              multiline
              style={styles.textField}
              margin="normal"
              onChange={(event)=>{this.setState({ email:event.target.value })}}
            />
            <br />
            <TextField
              id="standard-textarea"
              label="Password"
              placeholder={this.state.Password}
              multiline
              style={styles.textField}
              margin="normal"
              onChange={(event)=>{this.setState({ Password:event.target.value })}}

            />
            <br />
            <div style={{width:'55%',display: 'flex',justifyContent: 'center'}}>
            <Button variant="contained" color="primary" style={styles.button} onClick={()=>{alert(this.state.email+" Password! "+this.state.Password)}}>
              Login
           </Button>
           </div>
          </form>
          <div style={{ width: '30%' }}></div>
        </div>

      </div>
    );
  }
}

export default AppBarr;
