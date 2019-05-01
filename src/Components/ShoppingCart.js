import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
  list: {
    width: 400,
  },
};

const ShoppingCart = (props) => {
  const {classes} = props;
  const cart = props.cart
  const open = (cart) => {
    return cart
  }

  return(
    <div>
      <Drawer anchor="right" open={cart} onClose={props.toggleCart}>
          <div
            tabIndex={0}
            role="button"
            onClick={props.toggleCart}
          >
          <div className={classes.list}>
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

ShoppingCart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShoppingCart);