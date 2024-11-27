import Art from './components/Art';
import Carousel from './components/Carousel';
import Category from './components/Category';
import Create from './components/Create';
import Creators from './components/Creators';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Creators />
      <Category />
      <Create />
      <Art />
      <Footer />
    </>
  );
}
