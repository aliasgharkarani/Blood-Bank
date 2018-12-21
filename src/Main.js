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
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography';
import * as firebase from 'firebase';
import { filter } from 'rsvp';
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
            orignal: [],
            loader: false,
            input: "",
            // open: true,
        }
    }
    filter = () => {
        // let userInput=(this.state.input).toUpperCase();
        // let array=this.state.data;
        // let orignal=this.state.data;
        // let newArray=[];
        // if(userInput=="O"){
        //     for(let i=0;i<array.length;i++)
        //      {
        //          if(array[i].BloodGroup=="O"||array[i].BloodGroup=="A"||array[i].BloodGroup=="B"||array[i].BloodGroup=="AB")
        //          {
        //             newArray.push(array[i]);
        //          }
        //      }
        //      this.setState({
        //          data:newArray
        //      })
        //  }
        // else if(userInput=="A"){
        //    for(let i=0;i<array.length;i++)
        //     {
        //         if(array[i].BloodGroup=="A"||array[i].BloodGroup=="AB")
        //         {
        //            newArray.push(array[i]);
        //         }
        //     }
        //     this.setState({
        //         data:newArray
        //     })
        // }
        // else if(userInput=="B"){
        //     for(let i=0;i<array.length;i++)
        //      {
        //          if(array[i].BloodGroup=="B"||array[i].BloodGroup=="AB")
        //          {
        //             newArray.push(array[i]);
        //          }
        //      }
        //      this.setState({
        //         data:newArray
        //     })
        //  }
        // else if(userInput=="AB"){
        //     for(let i=0;i<array.length;i++)
        //      {
        //          if(array[i].BloodGroup=="AB")
        //          {
        //             newArray.push(array[i]);
        //          }
        //      }
        //      this.setState({
        //         data:newArray
        //     })
        //  }
        //  else{
        //     this.setState({
        //         data:orignal
        //     })
        //  }        
    }
    handlechange = (event) => {
        this.setState({
            input: event.target.value
        })
        console.log((event.target.value).toUpperCase()," Upper Case")
        // let userInput = (this.state.input).toUpperCase();
        let array = this.state.orignal;
        // let data = this.state.data;
        let newArray = [];
        if ((event.target.value).toUpperCase() == "O") {
            for (let i = 0; i < array.length; i++) {
                if (array[i].BloodGroup == "O" || array[i].BloodGroup == "A" || array[i].BloodGroup == "B" || array[i].BloodGroup == "AB") {
                    newArray.push(array[i]);
                }
            }
            this.setState({
                data: newArray
            })
        }
        else if ((event.target.value).toUpperCase() == "A") {
            for (let i = 0; i < array.length; i++) {
                if (array[i].BloodGroup == "A" || array[i].BloodGroup == "AB") {
                    newArray.push(array[i]);
                }
            }
            this.setState({
                data: newArray
            })
        }
        else if ((event.target.value).toUpperCase() == "B") {
            for (let i = 0; i < array.length; i++) {
                if (array[i].BloodGroup == "B" || array[i].BloodGroup == "AB") {
                    newArray.push(array[i]);
                }
            }
            this.setState({
                data: newArray
            })
        }
        else if ((event.target.value).toUpperCase() == "AB") {
            for (let i = 0; i < array.length; i++) {
                if (array[i].BloodGroup == "AB") {
                    newArray.push(array[i]);
                }
            }
            this.setState({
                data: newArray
            })
        }
        else {
            this.setState({
                data: array
            })
            console.log(array," Orignal")
        }

        // this.filter();
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
            this.setState({ data: array,orignal:array,loader: false })
        });
    }
    render() {
        return (
            <Paper className={styles.root}>
                <input type="text" value={this.state.input} onChange={this.handlechange} />
                {/* <button onClick={this.filter}>Check</button> */}
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