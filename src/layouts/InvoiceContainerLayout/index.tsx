interface Layout {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Layout) => (
  <div className="mx-6 mt-8 grid grid-cols-1 items-center md:mx-8 md:mt-14 xl:mx-[325px]">
    {children}
  </div>
);

export default Layout;
