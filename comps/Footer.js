const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <h3>Copyright {date.getFullYear()} NinjaList </h3>
    </footer>
  );
};

export default Footer;
