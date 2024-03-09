import { useState } from "react";

import ngmusic from "@/assets/images/ngmusic.webp";
import MenuIcon from "@/assets/icons/menu.svg?react";
import SearchIcon from "@/assets/icons/search.svg?react";
import SearchOverlay from "./search-overlay";

const Header = ({ onClickSearch }) => {
  const [searchOverlayOpen, setSearchOverlayOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 -ml-[10%] h-[60px] w-[120%] flex flex-col justify-center rounded-b-[150%] bg-gradient-to-r from-burple-primary to-[#a45deb] shadow-[0_0_6px_0_rgba(148,77,230,0.75)]">
        <div className="w-screen mx-auto px-[15px] flex items-center justify-between md:px-[20px] lg:px-[25px]">
          <MenuIcon className="-mt-3 sm:hidden" />
          <img src={ngmusic} className="sm:-mt-3" />
          <SearchIcon className="-mt-3" onClick={() => setSearchOverlayOpen(true)} />
        </div>
      </header>
      <SearchOverlay
        isOpen={searchOverlayOpen}
        setIsOpen={setSearchOverlayOpen}
        onSearch={(v) => {
          onClickSearch(v);
          setSearchOverlayOpen(false);
        }}
      />
    </>
  );
};

export default Header;
