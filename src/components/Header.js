import Input from './Input';
import '../styles/styleheader.css';

const Header = ({ search, updateQuery }) => {
  return (
    <header className="container">
      <h1 className="heading">Fchrl Notes</h1>
      <Input value={search} onChange={updateQuery} type="search" id="search_note" name="search_note" placeholder="Find notes..." />
    </header>
  );
};

export default Header;
