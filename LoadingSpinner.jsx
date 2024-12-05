const LoadingSpinner = () => {
	return (
		<div className='flex items-center justify-center min-h-screen bg-white'>
			<div className='relative'>
			<div className="w-20 h-20 border-[#9f4444] border-2 rounded-full bg-white" />
            <div className="w-20 h-20 border-[#9f4444] border-t-2 animate-spin rounded-full absolute left-0 top-0 bg-white" />
            <div className="sr-only">Loading</div>

			</div>
		</div>
	);
};

export default LoadingSpinner;