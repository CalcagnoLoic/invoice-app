import { useTheme } from "../../hooks/useTheme";

import NavBarIcons from "../../icons/NavBarIcons";
import PROFILE from "../../../public/assets/img/photo.webp";

const Component = () => {
  const { theme } = useTheme();

  return (
    <nav className="sticky top-0 z-10 flex h-1/6 w-full justify-between bg-mirage xl:h-screen xl:w-[103px] xl:flex-col xl:rounded-r-3xl">
      <div>
        <NavBarIcons kind="background" />
      </div>

      <div className="flex xl:flex-col">
        {theme ? <NavBarIcons kind="sun" /> : <NavBarIcons kind="moon" />}

        <div className="flex h-full items-center self-center border-l-2 border-fiord xl:w-full xl:border-l-0 xl:border-t-2">
          <img
            src={PROFILE}
            alt="My Profile"
            className="mx-6 my-auto h-10 w-10 rounded-full xl:mx-auto xl:my-6"
          />
        </div>
      </div>
    </nav>
  );
};

export default Component;
