import { HeaderProps } from '@interfaces/props';

const Header = ({ Logo, NavBar }: HeaderProps) => {
  return (
    <header>
      <div>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
