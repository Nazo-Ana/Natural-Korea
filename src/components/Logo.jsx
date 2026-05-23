import logo from '../assets/natural-korea-logo.svg';

export default function Logo() {
  return (
    <a className="logo" href="#hero" aria-label="Natural Korea home">
      <img className="logo-image" src={logo} alt="" aria-hidden="true" />
    </a>
  );
}
