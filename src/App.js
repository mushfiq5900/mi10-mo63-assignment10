import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/not-found/NotFound';
import Services from './components/services/Services';
import Blogs from './components/blogs/Blogs';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Login from './components/login/login/Login';
import Register from './components/login/register/Register';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/checkout" element={<Checkout></Checkout>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
