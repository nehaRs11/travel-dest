"use client";
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { Divider } from '@nextui-org/react';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Discover", href: "/discover" },
  { text: "Special Deals", href: "/specialdeals" },
  { text: "Contact", href: "/contact" },
];

const TravelSection = () => {
  return (
    <nav className="navbar-items relative flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex flex-row">
          <Link className="text-black text-4xl font-sans font-bold flex items-center" href={''}>
            <Image src={'/final-logo.png'} alt={'logo'} width={44} height={20} />
            <span>Travlog</span>
          </Link>
          <div className="md:hidden">
            <div className="sm:px-3 mt-0 ml-32" style={{ display: 'flex', flexDirection: 'row', width: 'fit-content' }}>
              {MENU_LIST.map((item, key) =>
                <><Link className=" text-medium text-black flexCenter text-left mr-20 cursor-pointer transition-all hover:font-bold" key={key} href={item.href}>{item.text}</Link><Divider orientation='vertical' />
                </>
              )}
              <ul>
                <Link className="text-small text-black flexCenter text-center cursor-pointer transition-all font-bold mr-10" href={"/"}>LogIn</Link>
              </ul>
              <div>
                <Button
                  title="Sign Up"
                  variant="sign-up"
                />
              </div>
            </div>
          </div>
        </div>

        <ul className="hidden h-full gap-28 lg:flex left-5 ml-52">
          {MENU_LIST.map((item, key) =>
            <Link className=" text-medium text-black flexCenter text-center cursor-pointer transition-all hover:font-bold" key={key} href={item.href}>{item.text}</Link>
          )}
        </ul>
      </div>
      <div className="flex items-center">
        <ul className="hidden h-full lg:flex ">
          <Link className="text-small text-black flexCenter text-center cursor-pointer transition-all font-bold" href={"/"}>Log In</Link>
        </ul>
        {/* <div className="hidden navbar-items lg:flex"> */}
        <div className="hidden lg:flex">
          <Button
            title="Sign Up"
            variant="sign-up"
          />
        </div>
      </div>
    </nav>
  )
}

export default TravelSection