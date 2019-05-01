import React, { Component } from "react";
import '../Styles/SizeBar.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function SizeBar(props) {
  let { classes } = props;
  return (
      <div className="size-bar">
        <Typography variant="h6" >Sizes</Typography>
        <hr style={{width: "35%", marginLeft: "0"}}></hr>
        <Fab color="primary" aria-label="Add" size="small" className={classes.fab} onClick={props.small = !props.small}>
          s
        </Fab>
        <Fab color="primary" aria-label="Add" size="small" className={classes.fab} onClick={props.medium = !props.medium}>
          m
        </Fab>
        <Fab color="primary" aria-label="Add" size="small" className={classes.fab} onClick={props.large = !props.large}>
          l
        </Fab>
        <Fab color="primary" aria-label="Add" size="small" className={classes.fab} onClick={props.xlarge = !props.xlarge}>
          xl
        </Fab>
      </div>
    );
} 

SizeBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SizeBar);