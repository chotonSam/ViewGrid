import Link from "next/link";
import { FaCameraRetro } from "react-icons/fa"; // Camera icon

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2 text-gray-800">
        <FaCameraRetro className="text-3xl text-light-cyan" />
        <h1 className="text-2xl font-bold">
          <span className="text-light-cyan">View</span>Grid
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
