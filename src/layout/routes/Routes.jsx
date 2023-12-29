import HomePage from '../pages/home/HomePage';
import CompanyPage from '../pages/company/CompanyPage';
import NewProjectPage from '../pages/newproject/NewProjectPage';
import ContactPage from '../pages/contact/ContactPage';
import Container from '../components/container/Container';
import HeaderComp from '../components/header/HeaderComp';
import FooterComp from '../components/footer/FooterComp';
import RedirectBox from '../components/redirect_box/RedirectBoxComp'
import { BrowserRouter as Router, Routes as Routes1, Route} from 'react-router-dom';

function Routes() {
    return (
        <Router>
            <HeaderComp></HeaderComp>
            <Container customClass="min_height">
                <RedirectBox link="Oliver Mutukudzi"/>
                    <Routes1>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/contato" element={<ContactPage />}></Route>
                        <Route path="/novo-projeto" element={<NewProjectPage />}></Route>
                        <Route path="/company" element={<CompanyPage />}></Route>
                    </Routes1>
                </Container>
            <FooterComp></FooterComp>
            </Router>
    );
}
export default Routes;