import ThemeSwitcher from "../UI/ThemeSwitcher";

const MainHeading = () => {
  return (
    <header className="flex flex-row bg-indigo-500 dark:bg-black px-6 text-center h-30 md:h-20 justify-between items-center">
      <h1 className="text-2xl underline font-bold">DTC List</h1>
      <ThemeSwitcher />
    </header>
  );
};

export default MainHeading;
