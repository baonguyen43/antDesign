import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {axiosAdmin} from 'helper/axiosClient';
import { LOCATIONS } from 'constants/index';
import { routers, unAuthRouter } from 'router/router';
import { actionGetMyProfile } from 'store/profile/action';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const getUserProfile = async () => {
  //   try {
  //   const url = 'https://jsonplaceholder.typicode.com/users/1';
  //     const res = await axios.get(url);

  //     dispatch(actionSavingMyProfile({
  //       ...res.data,
  //       avt: 'https://i.pravatar.cc/300',
  //     }));
  //   } catch (err) {
  //     console.error('««««« err »»»»»', err);
  //   }
  // };

  useEffect(() => {
    // getUserProfile();
    dispatch(actionGetMyProfile());
  }, [dispatch]);
  const token = window.localStorage.getItem('TOKEN');

  useEffect(() => {
    if (token) {
      axiosAdmin.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      navigate(LOCATIONS.LOGIN);
    }
  }, []);
  
  return !token ? (
    <Routes>
    {unAuthRouter.map((r, idx) => {
      if (r.children && r.children.length > 0) {
        return (
          <Route path={r.path} element={r.element} key={idx}>
            {r.children.map((rc, index) => {
              if (rc.isRoot) {
                return <Route index element={rc.element} key={index} />;
              }

              return (
                <Route path={rc.path} element={rc.element} key={index} />
              );
            })}
          </Route>
        );
      }

      return <Route path={r.path} element={r.element} key={idx} />;
    })}
  </Routes>
) : (
  <Routes>
    {routers.map((r, idx) => {
      if (r.children && r.children.length > 0) {
        return (
          <Route path={r.path} element={r.element} key={idx}>
            {r.children.map((rc, index) => {
              if (rc.isRoot) {
                return <Route index element={rc.element} key={index} />;
              }

              return (
                <Route path={rc.path} element={rc.element} key={index} />
              );
            })}
          </Route>
        );
      }

      return <Route path={r.path} element={r.element} key={idx} />;
    })}
  </Routes>
);
}

export default App;
