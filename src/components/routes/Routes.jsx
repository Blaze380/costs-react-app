import Home from '../pages/home/Home';
import Company from '../pages/company/Company';
import NewProject from '../pages/newproject/NewProject';
import Contact from '../pages/contact/Contact';
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