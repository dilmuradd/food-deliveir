import Main from './componets/Main/Main';
import Layout from './componets/Layout/Layout';
import Header from './componets/Header/Header';
import Cart from './componets/Cart/CartItems/Cart';
import Search from './componets/Header/Search/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Filter from './componets/Main/Filter/Filter';
import ProductList from './componets/Main/ProductList/ProductList';
import ProductCard from './componets/Main/ProductList/ProductCard';
import CartItems from './componets/Cart/CartItems';
import useThemeStore from './store/useThemeStore';
import Footer from './Footer/Footer';
import Logo from './componets/Header/logo/Logo';
import NotFountPage from './componets/NotFountPage/NotFountPage';
import DynamicPage from './componets/DynamicPage';
import WelcomePage from './componets/Main/WelcomePage';

function App() {
  let { useTheme } = useThemeStore();

  return (
    <Box
      sx={{
        backgroundColor: useTheme ?  '#ffffff':"#00152a",
      }}
    >
      <Router>
        <Layout>
          <Routes>
            <Route
              path='/'
              element={
                <Box>
                  <Header>
                    <Logo/>
                    <Search />
                  </Header>
                  <Main>
                    <WelcomePage/>
                    <Filter />
                    <ProductList>
                      <ProductCard />
                    </ProductList>
                  </Main>
                </Box>
              }
            />
            <Route
              path='/cart'
              element={
                <Cart>
                  <CartItems />
                </Cart>
              }
            />
            <Route path='/:id' element={<DynamicPage/>}/>
            <Route path='*' element={<NotFountPage/>}/>
          </Routes>
        </Layout>
      </Router>
      <Footer/>
    </Box>
  );
}

export default App;
