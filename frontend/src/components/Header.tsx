import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-blue-800 py-6 px-4 md:px-0">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">BookMyStay.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="hidden md:flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="hidden md:flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>

      {isLoggedIn && (
        <div className="container mx-auto flex mt-3 gap-x-5 md:hidden">
          <Link
            className="flex items-center text-white px-0.5 md:px-3 font-bold hover:bg-blue-600"
            to="/my-bookings"
          >
            My Bookings
          </Link>
          <Link
            className="flex items-center text-white px-0.5 md:px-3 font-bold hover:bg-blue-600"
            to="/my-hotels"
          >
            My Hotels
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
