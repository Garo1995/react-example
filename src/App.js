import React from 'react';

import Header from "./components/header/header";
import HomePages from "./components/homePages/homePages";
import Footer from "./components/footer/footer";

class App extends React.Component{

  render() {
    return <div>
      <Header/>
      <HomePages/>
      <Footer/>
    </div>
  }

}


export default  App