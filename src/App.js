
import './App.css';

import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'

let name= "Gopal"
function App() {
  return (
    <>





<Navbar title="TextUtils" about="About TextUtils"/>

<div className="container my-3">
<TextForm heading="Enter the text to analyze"/>
</div>

    </>
  );
}

export default App;


