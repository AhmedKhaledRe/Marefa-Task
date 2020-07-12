import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SwipeableTemporaryDrawer from './Drawer';

import { withTranslation } from 'react-i18next';


class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "en"
    };
  }

  handleInput = e => {
    let buttonValue = e.target.value;
    this.setState({value: buttonValue});
    this.props.i18n.changeLanguage(buttonValue);
  };


  render() {
    const {t} = this.props;
    return (
      <nav className="navbar navbar-expand-md navbar-light mb-4 bg-white shadow">
    
      <div className="collapse navbar-collapse row">

        <div className="col-5">
          <div className="ml-3">

          <button type="button" className="btn btn-secondary btn-sm mr-2 active" onClick={this.handleInput} value={"en"}>{t('EN')}</button>
          <button type="button" className="btn btn-primary btn-sm" onClick={this.handleInput} value={"ar"}>{t('AR')}</button>

          </div>
          <div className="pt-2 ml-2">
            <span className="h6">contactus@mcst.edu.sa</span>
          </div>
        </div>
        
        <div className="col-6 mb-2">
          <Link to='/process-page'>
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt=""/>
          </Link>
        </div>

        <div className="col-1">
          <SwipeableTemporaryDrawer />
        </div>

      </div>
    </nav>
    )
  }
}

export default withRouter(withTranslation()(Header));
