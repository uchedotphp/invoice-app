import Logo from "@components/Logo";
import moon from "@assets/icons/moon.svg";
import profileImg from "@assets/icons/profile-img.svg";
import { Link } from "react-router";

const SidebarItem = ({
  icon,
  link,
  alt,
}: {
  icon: string;
  link: string;
  alt: string;
}) => {
  return (
    <Link to={link}>
      <img src={icon} alt={alt} />
    </Link>
  );
};

const Sidebar = () => {
  const sidebarItems = [
    { icon: moon, link: "/", alt: "moon icon" },
    { icon: profileImg, link: "/profile", alt: "profile icon" },
  ];

  return (
    <nav className="bg-dark flex lg:flex-col justify-between lg:rounded-tr-4xl lg:rounded-br-4xl overflow-x-auto lg:overflow-x-hidden lg:h-full lg:overflow-y-auto items-stretch">
      <Logo />

      <ul className="flex lg:flex-col items-center divide-[#979797] divide-y-0 divide-x lg:divide-x-0 lg:divide-y">
        {sidebarItems.map(({ icon, link, alt }) => (
          <li className="lg:w-full h-full lg:h-auto flex items-center lg:justify-center px-6 lg:px-0 lg:py-6">
            <SidebarItem key={link} icon={icon} link={link} alt={alt} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
