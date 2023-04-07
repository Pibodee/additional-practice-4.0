import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Homepage from 'pages/Homepage/Homepage';
import UsersPage from 'pages/UserPage/UserPage';
import UserDetailsPage from 'pages/UserDetailsPage/UserDetailsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
      </Route>
    </Routes>
  );
};
