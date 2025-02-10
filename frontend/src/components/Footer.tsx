const Footer = () => {
  return (
    <div className="bg-blue-800 py-10 px-4 md:px-0">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-4">
        <span className="text-3xl text-white font-bold tracking-tight">
          BookMyStay.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
