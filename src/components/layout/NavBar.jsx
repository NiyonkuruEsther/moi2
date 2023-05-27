import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-12">
      <nav className="flex justify-between w-full">
        <div>
          <img src={Logo} alt="" />
        </div>
        <ul className="flex gap-24 w-fit text-white font-semibold">
          <li className="text-white font-semibold">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#contact">Albums</a>
          </li>
          <li>
            <a href="#blog">Blogs</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
