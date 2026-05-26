import logo from '../../assets/images/brand/natural-korea-logo.png';

export default function Logo() {
  return (
    <a className="logo" href="#hero" aria-label="Natural Korea home">
      <img className="logo-image" src={logo} alt="" aria-hidden="true" />
    </a>
  );
}
