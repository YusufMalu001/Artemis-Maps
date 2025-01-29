const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Switch to {theme === "light" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
