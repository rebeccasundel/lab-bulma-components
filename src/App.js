import React from 'react';
import 'bulma/css/bulma.min.css';
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js";
import CoolButton from "./coolbutton/CoolButton.js";


const App = () => {
  // return <h1>Bulma</h1>;
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Rebecca Sundel" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. rebeccasundel@gmail.com"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
    </>
  );
};

export default App;
