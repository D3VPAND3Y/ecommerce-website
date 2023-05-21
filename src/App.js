import Home from "./routes/home/home.component";
import { Routes,Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Auth from "./routes/auth/auth.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigation />} >
      <Route index element={ <Home />} /> {/* base url */}
      <Route path="auth" element={ <Auth/>} />

      {/* <Route path="shop" element={ <Home />} /> base url */}
      </Route>

    </Routes>
  );
}


export default App;
