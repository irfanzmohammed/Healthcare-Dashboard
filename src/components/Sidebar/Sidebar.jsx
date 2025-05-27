import React from 'react';

const Sidebar = ({ navItems }) => { 
 
  const navList = navItems.reduce((acc, item) => {
    const section = item.section || '';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(item);
    return acc;
  }, {});

  const sections = Object.entries(navList);
  const bottomSection = sections.find(([sectionName]) => sectionName === '') || null;
  const mainSection = sections.filter(([sectionName]) => sectionName !== '');

  return (
    <div className="sidebar">
     
      {mainSection.map(([sectionName, items]) => (
        <div key={sectionName} className="nav-section">
          <div className="section-heading">{sectionName}</div>
          {items.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="nav-item">
                <IconComponent className="nav-icon" />
                <span className="icon-name">{item.label}</span>
              </div>
            );
          })}
        </div>
      ))}


      {bottomSection && (
        <div className="nav-section bottom-section">
          {bottomSection[1].map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="nav-item">
                <IconComponent className="nav-icon" />
                <span className="icon-name">{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sidebar;