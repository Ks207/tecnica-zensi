import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import UserList from './pages/UserList';
import UserForm from './pages/UserForm';
import Layout from './components/Layout';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={
        isAuthenticated ? <Navigate to="/" /> : <Login />
      } />
      <Route path="/register" element={
        isAuthenticated ? <Navigate to="/" /> : <Register />
      } />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout>
              <Container>
                <UserList />
              </Container>
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/users/new"
        element={
          <PrivateRoute>
            <Layout>
              <Container>
                <UserForm />
              </Container>
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/users/:id/edit"
        element={
          <PrivateRoute>
            <Layout>
              <Container>
                <UserForm />
              </Container>
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
