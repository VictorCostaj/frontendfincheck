import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Dashboard } from '../view/pages/Dashboard';
import { Login } from '../view/pages/Login';
import { Register } from '../view/pages/Register';
import { AuthGuard } from './AuthGuard';


export function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<AuthGuard isPrivate={false} />}> {/*Layout */}
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>


                {/*Rota privado*/}
                <Route element={<AuthGuard isPrivate />}>
                    <Route path='/' element={<Dashboard />} />
                </Route >
            </Routes>
        </BrowserRouter>
    )
}