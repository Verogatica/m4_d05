import './App.css'
import Navbar from './componentes/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/Home'
import Footer from './componentes/Footer';
import Register from './componentes/Register';

function App() {
  return (
    <>
    <Navbar></Navbar>
    {/* <Home /> */}
    <Register></Register>
    <Footer></Footer>
    </>
  )
}

export default App
