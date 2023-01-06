import React from 'react';
import ReactDOM from 'react-dom/client';
// import PropTypes from 'prop-types';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const element1 = React.createElement('div', { a: 5, b: 10, children: 'Hello world' });

// console.log(element1);

// ReactDOM.render(element, document.querySelector('#root'));
// ReactDOM.createRoot(document.getElementById('root')).render(element1);

// const span1 = React.createElement('span', { children: 'hello world' });
// const span2 = React.createElement('span', { children: 'My name is Kate' });
// const element2 = React.createElement('div', { a: 5, b: 10, children: [span1, ' ', span2] });
// ReactDOM.createRoot(document.getElementById('root')).render(element2);

//перепис код выше с помощью синтаксиса jsx

// const spanJsx1 = <span>hello world</span>;
// const spanJsx2 = <span>My name is Katе</span>;
// const elementJsx = (
//   <div>
//     {spanJsx1}
//     {spanJsx2}
//   </div>
// );
// ReactDOM.createRoot(document.getElementById('root')).render(elementJsx);

// component-function
const Product = props => (
  <div>
    <img
      src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      width="640"
    />
    <h2>Tacos With Lime</h2>
    <p>Price: 10.99$</p>
    <button type="button">Add to cart</button>
  </div>
);

// another variant component-function - the same

// function Product2() {
//   return (
//     <div>
//       <img
//         src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         alt="Tacos With Lime"
//         width="640"
//       />
//       <h2>Tacos With Lime</h2>
//       <p>Price: 10.99$</p>
//       <button type="button">Add to cart</button>
//     </div>
//   );
// }

// У розмітці компонент записується як JSX-тег
ReactDOM.createRoot(document.getElementById('root')).render(<Product />);
