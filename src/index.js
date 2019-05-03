import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

let products, inventory;

fetch('./data/products.json')
.then(resp => resp.json()) 
.then((body) => {
   console.log(body.products)
   products = body.products
   console.log(products)
   return fetch('./data/inventory.json')
})
.then(resp => resp.json()) 
.then((body) => {
   inventory = body.inventory
   console.log(inventory)
   ReactDOM.render(<App products={products} inventory={inventory}/>, document.getElementById('root'));
});


// fetch('./data/products.json')
// .then(resp => resp.json()) 
// .then(({products}) => {
//    ReactDOM.render(<App products={products}/>, document.getElementById('root'));
// })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
