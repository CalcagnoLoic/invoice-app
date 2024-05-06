import NavBarIcons from "../../icons/NavBarIcons";
import PROFILE from "../../../public/assets/img/photo.webp";

const Component = () => {
  return (
    <nav className="bg-oxfordBlue flex h-[103px] w-full justify-between xl:h-screen xl:w-[103px] xl:flex-col xl:rounded-r-3xl">
      <div>
        <NavBarIcons kind="background" />
      </div>

      <div className="flex xl:flex-col">
        <NavBarIcons kind="moon" />

        <div className="border-fiord flex h-full items-center self-center border-l-2 xl:w-full xl:border-l-0 xl:border-t-2">
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
