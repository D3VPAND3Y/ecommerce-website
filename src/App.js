import Home from "./routes/home/home.component";
import { Routes,Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Auth from "./routes/auth/auth.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./checkout/checkout.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigation />} >
      <Route index element={ <Home />} /> {/* base url */}
      <Route path="auth" element={ <Auth/>} />

      <Route path="shop" element={ <Shop />} />
      <Route path="checkout" element={ <Checkout />} />
      </Route>

    </Routes>
  );
}


export default App;
