import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isDetailPage = location.pathname !== "/";

  return (
    <>
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 p-4">
        <nav>
          <div className="flex items-center justify-between">
            <Link to="/" className="font-bold text-2xl text-white">
              Restaurant Fun<span className="text-orange-600">.</span>
            </Link>

            <ul className="flex gap-12 mr-12">
              {isHomePage && (
                <li>
                  <span className="text-white font-semibold drop-shadow-[1px_0.5px_4.5px_white]">
                    Home
                  </span>
                </li>
              )}

              {isDetailPage && (
                <li>
                  <span className="text-white font-semibold drop-shadow-[1px_0.5px_4.5px_white]">
                    Detail Cuisine
                  </span>
                </li>
              )}
            </ul>

            <a
              href="https://client-cms-site-gc02.vercel.app/login"
              className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-2 rounded-full mr-4 hover:from-orange-400 hover:to-red-500 transition duration-200 hover:shadow-sm shadow-gray-600"
            >
              <span className="text-white font-bold">Login</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
