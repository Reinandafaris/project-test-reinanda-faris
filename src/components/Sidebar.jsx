import PropTypes from "prop-types";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ path, icon, name, href, handleCloseNav }) => {
	const location = useLocation();
	return (
		<Link
			aria-describedby={`tooltip-${name}`}
			to={href}
      onClick={handleCloseNav}
			className={clsx(
				"grid h-[50px] items-center ps-2 mb-1 py-1.5 hover:cursor-pointer text-black transition-all duration-300 w-full hover:bg-green-500",
				location.pathname === path && "bg-green-500 text-white"
			)}
		>
			{icon}
			<span>
				{name}
			</span>
			<div
				role="tooltip"
				className="hidden transition-all duration-100 delay-1000"
				id={`tooltip-${name}`}
			>
				<span>
					{name}
				</span>
			</div>
		</Link>
	);
};

Sidebar.propTypes = {
	path: PropTypes.string,
	icon: PropTypes.element,
	name: PropTypes.string,
	href: PropTypes.string,
  handleCloseNav: PropTypes.func.isRequired,
};

export default Sidebar;
