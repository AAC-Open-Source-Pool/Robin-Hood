import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import CartPage from "./pages/CartPage";
import { useCartStore } from "./stores/useCartStore";
import TrackingPage from "./pages/TrackingPage"


function App() {
	const { user, checkAuth, checkingAuth } = useUserStore();
	const { getCartItems } = useCartStore();
	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	useEffect(() => {
		if (!user) return;

		getCartItems();
	}, [getCartItems, user]);

	if (checkingAuth) return <LoadingSpinner />;
	

	return (
		<div className='min-h-screen bg-gray-100 text-black relative overflow-hidden'>
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute inset-0'>
					<div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white border-t-8 border-maroon-700'/>
				</div>
			</div>

			<div className='relative z-50 pt-20'>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={user?<HomePage/>:<LoginPage /> } />
					<Route path='/signup' element={user?<HomePage/>:<SignUpPage/> } />
					<Route path='/secret-dashboard'
						element={user?.role === "admin" ? <AdminPage /> : <Navigate to='/login'/>}/>
					<Route path='/category/:category' element={<CategoryPage />} />
					<Route path='/cart' element={<CartPage/>} />
					<Route path='/tracking' element={<TrackingPage /> }/>
				</Routes>
			</div>
			<Toaster />
		</div>
	);
}

export default App;