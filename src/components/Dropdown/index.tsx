import { dropdownItems } from "../../data/data";
import { CallbackProps, DropdownType } from "../../types/interface";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useRef } from "react";
import { useTheme } from "../../hooks/useTheme";

const Component = ({ callback }: CallbackProps) => {
  const { theme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside({ callback: callback, ref: dropdownRef });

  return (
    <div
      className={`absolute top-52 w-[162px] rounded-xl  p-6 shadow-xl xl:top-36 ${theme ? "bg-ebonyClay" : "bg-white"}`}
      ref={dropdownRef}
    >
      {dropdownItems.map((items: DropdownType) => (
        <div className="flex  gap-3 " key={items.id}>
          <input
            type="checkbox"
            name={items.link}
            id={items.link}
            className="accent-cornflowerBlue"
          />
          <label
            htmlFor={items.link}
            className={`cursor-pointer font-bold ${theme ? "text-white" : "text-vulcan"}`}
          >
            {items.content}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Component;
