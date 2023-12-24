import Home from '../pages/Home';
import Company from '../pages/Company';
import NewProject from '../pages/NewProject';
import Contact from '../pages/Contact';
import Container from '../layout/Container';
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';
import { BrowserRouter as Router, Routes as Routes1, Route} from 'react-router-dom';

function Routes() {
    return (
        <Router>
            <Header></Header>
                <Container customClass="min_height">
                    <Routes1>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/contato" element={<Contact />}></Route>
                        <Route path="/novo-projeto" element={<NewProject />}></Route>
                        <Route path="/company" element={<Company />}></Route>
                    </Routes1>
                </Container>
            <Footer></Footer>
            </Router>
    );
}
export default Routes;