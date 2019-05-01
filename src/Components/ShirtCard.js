import React, { Component } from "react";
import '../Styles/Card.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    position: "relative",
    maxWidth: 250,
    height: 450,
    display: "inline-block",
    margin: "20px",
    textAlign: "center",
  },
  media: {
    margin: "0 auto",
    objectFit: 'contain',
    marginTop: '5px',
  },
  buy: {
    margin: "0 auto",
    position: "absolute",
    bottom: 10,
    left: 60.79,
    color: "#365193"
  },
  bar: {
    width: "20%",
    border: "1px solid #365193",
  }
};

function ShirtCard(props) {
  const { classes } = props;
  const title = props.product.title
  return (
    <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="220"
          image={`./products/${props.product.sku}_1.jpg`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{height: "60px"}}>
            {title}
          </Typography>
          <hr className={classes.bar} color="primary"></hr>
          <Typography component="p" variant="h6">
          <br></br>
            <span style={{color: "#279AF1"}}>$</span> {(Math.round(props.product.price*Math.pow(10,2))/Math.pow(10,2)).toFixed(2)} 
          </Typography>
        </CardContent>
      <CardActions>
        <Button variant="outlined" size="medium" color="primary" className={classes.buy}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

ShirtCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


// const ShirtCard = ({product, images}) => {
//   console.log(product)
//   const title = product.title
//   return (
//     <div className="card">{title}</div>
//   )
// }

export default withStyles(styles)(ShirtCard);