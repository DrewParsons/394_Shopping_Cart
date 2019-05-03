import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  list: {
    width: 400,
  },
  listItem: {
    height: 100,
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

const ShoppingCart = (props) => {
  const {classes} = props;
  const cart = props.cart;
  const products = props.cartItems
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
              {products ? 
                products.map(product => (
                <ListItem className={classes.listItem}>
                  {product.title}
                  <IconButton aria-label="Delete" className={classes.margin} onClick={() => props.delete(product)}>
                    <DeleteIcon fontSize="small"/>
                  </IconButton>
                </ListItem>
              )) : <div></div> }
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