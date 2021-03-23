import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
const App = () => (
  <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Route path="/" component={HomePage} exact />
        <Route path="/product/:id" component={ProductPage} />
      </Container>
    </main>
    <Footer />
  </Router>
);

export default App;
