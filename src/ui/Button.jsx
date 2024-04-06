import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type ,onClick}) {
  const base =
    "bg-yellow-400 text-sm uppercase font-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:bg-yellow-300 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4 ",
    small: base + " py-2 md:py-2.5 px-3 md:px-5 text-xs md:text-sm",
    secondary:"bg-transparent text-sm border-2 border-stone-300 uppercase font-semibold text-stone-400  inline-block tracking-wide rounded-full hover:bg-stone-300  hover:text-stone-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:bg-stone-300 disabled:cursor-not-allowed py-2.5 px-3 md:px-6 md:py-3.5 ",
    round: base + " py-1 md:py-2.5 px-2 md:px-3.5 text-sm md:text-sm",

  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

    if(onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  type: PropTypes.oneOf(["primary", "small","round", "secondary"]),
};

export default Button;
