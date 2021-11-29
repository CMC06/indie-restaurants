import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import Image from 'next/image';
import logo from '../public/Logo.jpg';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <Image src={logo} width='45px' height='45px' alt="Indy's Indies Logo, image of cutlery over Indianapolis circle city flag."></Image>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
