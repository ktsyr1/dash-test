import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AppRoutes } from './routes';
import { Toaster } from './components/ui/Toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Layout>
          <AppRoutes />
        </Layout>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;