import logoImage from "../../../public/assets/kv-logo.png";

const Header = () => {
  return (
    <header>
      <div className="kv-logo">
        <img src={logoImage} height="50px" width="250px" />
      </div>
    </header>
  );
};

export default Header;
