import React from 'react'

import AboutPage from "./pages/aboutPage/AboutPage";




const App = () => {
    const object = {
        title : "I am a Title",
        body : "Lorem Ipsum bla bla"
    }

    return (
      <div className="container" >

       {/*   <MainPage/>*/}
       {/*-----------------------   */}

       {/*   <ContactsPage/>*/}

   ------------------------------------
              <AboutPage info={object}/>
      </div >
  );
};

export default App;
