export default function Navigation() {
  return (
    <nav className="relative z-20 flex justify-between items-center p-6 lg:px-12" data-testid="navigation">
      <div className="flex items-center space-x-2" data-testid="brand-logo">
        <span className="text-3xl font-semibold text-white">Weone<span className="text-green-500">AI</span></span>
      </div>
      
      <div className="flex items-center space-x-4" data-testid="auth-buttons">
        {/* <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors" data-testid="button-login">Log in</button> */}
        <button className="px-4 py-2 bg-white text-dark-primary rounded-full cursor-pointer hover:bg-gray-100 transition-colors font-medium" data-testid="button-signup">Book Demo</button>
      </div>
    </nav>
  );
}
