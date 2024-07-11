// ProtectedRoute.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './stores/store';
import { useDispatch } from 'react-redux';
import { setPageLoader } from "./stores/pageLoaderSlice"


const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const isLoading = useSelector((state: RootState) => state.user.isLoading);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [isLoading, user, navigate]);

  if (isLoading) {
    dispatch(setPageLoader(true));
  } else{
    dispatch(setPageLoader(false));
  }

  return children;
};

export default ProtectedRoute;
