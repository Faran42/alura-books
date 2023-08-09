import logo from '../../images/logo.svg'
import './estilo.css'

export default function Logo() {
  return (
    <div className="logo">
      <img className="logo-img" src={logo} alt="Logo" />
      <p>
        <strong>Alura Books</strong>
      </p>
    </div>
  );
}
