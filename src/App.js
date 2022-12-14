//main
import './App.css';
import React from 'react';
//header and footer
import Header from './component/UI/header/header.js';
import Footer from './component/UI/footer/footer.js';
//div
import Firstdiv from './component/UI/firstdiv/firstdiv.js';
import Seconddiv from './component/UI/seconddiv/secondDiv.js';
import Thirddiv from './component/UI/thirddiv/thirddiv.js';




function App() {


	return (
    <div
      style={{
        //backgroundImage: "url(./img/background.png)",
          //backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 'auto',
      }}
    >
      <Header/>
      <Firstdiv/>
      <Seconddiv/>
      <Thirddiv/>
      <Footer/>
    </div>
	);
}



export default App;