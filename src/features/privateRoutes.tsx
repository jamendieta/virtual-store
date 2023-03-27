import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../app/store';

const PrivateRoutes = () => {
    const isAuthenticated: any = useSelector((state: RootState) => state.isAuthenticated);
    
    return (
        isAuthenticated.value ?
            <Outlet />
            :
            <Navigate to="/login" />
    )
}
export default PrivateRoutes;