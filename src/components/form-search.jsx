import { joinClassnames } from "@/utils/common";
import { useState } from "react";

const FormSearch = ({ onSearch, buttonVariant = "default" }) => {
  const [searchValue, setSearchValue] = useState("");

  const buttonClassVariants = {
    default: "bg-white-20",
    gradient: "bg-gradient-to-r from-burple-primary to-[#a45deb]",
  };

  return (
    <form
      className="space-y-[15px] w-full"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchValue);
      }}
    >
      <input
        type="text"
        className="bg-white text-bluegray-500 text-xs rounded-full w-full block py-[13px] px-5 focus:outline-0 text-center"
        placeholder="Artist / Album / Title"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button
        type="submit"
        className={joinClassnames([
          "flex items-center justify-center gap-3 rounded-full px-4 py-[13px] text-sm font-medium text-white duration-300 w-full",
          buttonClassVariants[buttonVariant],
        ])}
        disabled={searchValue?.length < 3}
      >
        Search
      </button>
    </form>
  );
};

export default FormSearch;
