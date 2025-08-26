import React from 'react';

export default function App() {
  return (
    <div style={{textAlign:'center', padding:'20px'}}>
      <h1>Welcome to Dumpling's Den</h1>
      <p>Celebrating 63 days of cuteness, love, and Shih Tzu magic!</p>
      <img src="/public/shih-tzu-placeholder.jpg" alt="Shih Tzu" style={{maxWidth:'300px', borderRadius:'20px'}} />
      <h2>Shop Merchandise</h2>
      <ul style={{listStyle:'none', padding:0}}>
        <li>Shih Tzu Printed T-Shirts</li>
        <li>Cute Dog Bowls</li>
        <li>Custom Shih Tzu Collars</li>
        <li>Shih Tzu Plush Toys</li>
      </ul>
    </div>
  );
}
