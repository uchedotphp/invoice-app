import { Link } from "react-router";
import desktopLogo from "@assets/icons/desktop-logo.svg";
import tabletLogo from "@assets/icons/tablet-logo.svg";
import mobileLogo from "@assets/icons/mobile-logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img src={desktopLogo} alt="desktop logo" className="hidden lg:block" />
      <img
        src={tabletLogo}
        alt="tablet logo"
        className="hidden md:block lg:hidden"
      />
      <img src={mobileLogo} alt="mobile logo" className="block md:hidden" />
    </Link>
  );
};

export default Logo;
