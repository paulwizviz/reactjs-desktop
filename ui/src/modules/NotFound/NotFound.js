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

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    },
    content: {
        paddingTop: 150,
        textAlign: 'center'
    },
    image: {
        marginTop: 50,
        display: 'inline-block',
        maxWidth: '100%',
        width: 560
    }
}));

const NotFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                justify="center"
                spacing={4}
            >
                <Grid
                    item
                    lg={6}
                    xs={12}
                >
                    <div className={classes.content}>
                        <Typography variant="h1">
                            404: The page you are looking for isn’t here
                        </Typography>
                        <Typography variant="subtitle2">
                            You either tried some shady route or you came here by mistake.
                            Whichever it is, try using the navigation
                        </Typography>
                        <img
                            alt="Under development"
                            className={classes.image}
                            src="/images/logos/underdevelopment.png"
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default NotFound;
