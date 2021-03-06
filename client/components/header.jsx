import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.getSummary = this.getSummary.bind(this);
    this.switchView = this.switchView.bind(this);
  }

  getSummary() {
    this.props.setView('cart', {});
  }

  switchView() {
    this.props.setView('catalog', {});
  }

  render() {
    return (
      <header>
        <div className="row">
          <div className="col-sm-3 col-md-4 col-lg-3 ml-4 mr-5 align-self-start header-definition">許願 (xu3 yuan4): to make a wish / to make a vow / to promise a reward.</div>
          <h1 className="col-sm-5 col-md-7 col-lg-4 ml-5 mr-5 align-self-end header-title" onClick={this.switchView}>許願 Shop.</h1>
          <div className="col-sm-2 col-md-2 ml-5 align-self-end cart-header">
            <h4 className="row align-items-center header-title" onClick={this.getSummary}>{this.props.cartItemCount + ' Items'}
              <img src="https://img.icons8.com/dotty/80/000000/favorite-cart.png" className="shopping-cart"></img>
            </h4>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
