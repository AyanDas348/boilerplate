import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, Section1, Section2, Contact } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
          <Section1/>
          <Section2/>
          <Contact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
