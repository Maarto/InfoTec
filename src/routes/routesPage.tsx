import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/homePage';
import ErrorPage from '../pages/error/ErrorPage';
import ShopPage from '../pages/shop/tienda';
import ContactPage from '../pages/contact/contact';
import LoginPage from '../pages/auth/login/login';
import RegisterPage from '../pages/auth/register/register';
import ResetPasswordPage from '../pages/auth/reset_password/resetpwd';

function RoutesPage() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/contact' element={<ContactPage />} />

                {/* Auth */}
                <Route path='/auth/login' element={<LoginPage />} />
                <Route path='/auth/register' element={<RegisterPage />} />
                <Route path='/auth/reset_password' element={<ResetPasswordPage/>}/>
                
                {/* Error */}
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default RoutesPage;