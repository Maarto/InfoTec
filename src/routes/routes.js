import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Shop from '../pages/shop/Shop';
import Contact from '../pages/contact/Contact';
import Login from '../pages/auth/login/Login';
import Register from '../pages/auth/register/Register';
import ResetPassword from '../pages/auth/reset_password/ResetPassword';
import Error from '../pages/error/Error';

function routes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />

            {/* Auth */}
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
            <Route path='/auth/reset_password' element={<ResetPassword />} />

            {/* Error */}
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default routes;