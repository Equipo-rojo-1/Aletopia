import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import { Toaster, toast } from 'sonner';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="*" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
      </Routes>
      <Toaster expand={true} richColors duration={1000} />
    </div>
  );
}

export default App;
