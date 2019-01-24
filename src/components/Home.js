import React from 'react';

function Home(props) {
  function navToShop(e) {
    e.preventDefault();
    props.history.push('/shop');
  }
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt=""
      />
      <button onClick={navToShop} className="md-button shop-button">
        Shop now!
      </button>
    </div>
  );
}

export default Home;
