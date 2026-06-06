import { useUserStore } from "../stores/useUserStore";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const ProtectedAdminRoute = () => {
  const { user } = useUserStore();

  if (!user) {
    
    return <LoginPage />;
  }

  if (user.role === "admin") {
  
    return <AdminPage />;
  }

    return <HomePage />;
};

export default ProtectedAdminRoute;
