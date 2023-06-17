const TabNavItem = ({ id, title, activeProject, setActiveProject }) => {
  const handleClick = () => {
    setActiveProject(id);
  };

  return (
    <div className="tabName">
      <li className="tab" onClick={handleClick}>
        {title}
      </li>
    </div>
  );
};
export default TabNavItem;
