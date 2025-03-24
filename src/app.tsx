import { Router, Route } from 'preact-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Suspense } from 'preact/compat';

import routes from '@/routes';
import { AuthProvider } from '@/context/authContext';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        <Router>
          {routes.map(route => {
            return <Route key={route.path} path={route.path} component={route.component} />;
          })}
        </Router>
      </AuthProvider>
    </Suspense>
  </QueryClientProvider>
);


export default App;
