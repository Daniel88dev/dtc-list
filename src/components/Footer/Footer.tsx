const Footer = () => {
  return (
    <div className="flex flex-row bg-gray-200 dark:bg-blue-950 h-20 fixed bottom-0 left-0 right-0 justify-end items-center">
      <p className="mr-4">
        Developed by{" "}
        <a
          href="https://hrynusiwdaniel.com"
          className="hover:underline hover:cursor-pointer hover:text-blue-600 hover:dark:text-gray-400"
          target="_blank"
        >
          Daniel Hrynusiw
        </a>
      </p>
    </div>
  );
};

export default Footer;
