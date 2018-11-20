import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import * as firebase from 'firebase';
//spring boot
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'aliasgharkarani125@hotmail.com',
            Password: '',
            data: [],
            loader: false,
            open: true,
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    rand = () => {
        return Math.round(Math.random() * 20) - 10;
    }
    getModalStyle = () => {
        const top = 50 + this.rand();
        const left = 50 + this.rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }
    componentWillMount() {
        this.setState({ loader: true })
    }
    componentDidMount() {
        firebase.database().ref(`user`).on('value', (snapshot) => {
            var data = snapshot.val();
            var array = [];
            for (let keys in data) {
                array.push(data[keys])
            }
            this.setState({ data: array, loader: false })
        });
    }
    render() {
        return (
                <Paper className={styles.root}>
                    <Table className={styles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell numeric>Email</TableCell>
                                <TableCell numeric>Phone no.</TableCell>
                                <TableCell numeric>Blood Group</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.map((donors, index) => {
                                return (
                                    <TableRow key={index} onClick={() => this.handleOpen}>
                                        <TableCell component="th" scope="row">
                                            {donors.name}
                                        </TableCell>
                                        <TableCell numeric>{donors.email}</TableCell>
                                        <TableCell numeric>{donors.Phoneno}</TableCell>
                                        <TableCell numeric>{donors.BloodGroup}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
        );
    }
}

export default Main;

// class Main extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: 'aliasgharkarani125@hotmail.com',
//             Password: ''
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" />
//                 <h1>{this.state.email} jcbxjxzbvj</h1>
//             </div>
//         )
//     }
// }
// export default Main;