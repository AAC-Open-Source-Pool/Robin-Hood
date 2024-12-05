import { useUserStore } from "../stores/useUserStore";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const ProtectedAdminRoute = () => {
  const { user } = useUserStore();

  if (!user) {
    // If no user is logged in, render LoginPage
    return <LoginPage />;
  }

  if (user.role === "admin") {
    // If the user is an admin, render AdminPage
    return <AdminPage />;
  }

  // If the user is logged in but not an admin, render HomePage
  return <HomePage />;
};

export default ProtectedAdminRoute;
