// Copyright 2020 [reatjs-desktop] Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, {useState, useEffect, useReducer} from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';

import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: 20,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));


const initialState = {
    loading: true,
    error: false,
    user:{
        id: null,
        secrets: '',
    }
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
    case 'AUTH_SUCCESS':
        return {
            ...state,
            loading: false,
            error: false,
            user: action.payload
        };
    case 'AUTH_ERROR':
        return {
            ...state,
            loading: false,
            error: true,
        };
    default:
        return state;
    }
};

const authenticate = async (dispatch, userName, password) => {
    const resp = await axios.post('/api/auth',{'id':userName, 'secrets':password}, {timeout: 1000});
    try{
        dispatch({
            type: 'AUTH_SUCCESS',
            payload: resp.data
        });
    }catch(err){
        dispatch({
            type: 'AUTH_ERROR',
            payload: resp.data
        });
    }
};

const Auth = (props) =>{

    const {history} = props;

    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        if ((!state.error) & (!state.loading)){
            history.push('/dashboard');
        }
    },[state.user]);

    return (
        <div className={classes.root}>
            <Grid container 
                spacing={2}
                alignItems="center"
                justify="center"
                direction="column">
                <Grid item xs={6}>
                    <TextField onChange={e => setUsername(e.target.value)} value={username} id="username" label="Username" type="email" fullWidth autoFocus required />
                </Grid>
                <Grid item xs={6}>
                    <TextField onChange={e => setPassword(e.target.value)} value={password} id="password" label="Password" type="password" fullWidth required />
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={
                        async () => {
                            if (username !== '' && password !== ''){
                                await authenticate(dispatch, username, password);
                            }
                        }
                    }
                    variant="outlined" 
                    color="primary" 
                    style={{ textTransform: 'none' }}>Login</Button>
                </Grid>
               
            </Grid>
        </div>
    );
};

Auth.propTypes = {
    classes: PropTypes.object,
    history: PropTypes.object.isRequired,
};

export default Auth;