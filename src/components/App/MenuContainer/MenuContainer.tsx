import React, { useState } from 'react';
import './MenuContainer.css';
import NavigationMenu from './NavigationMenu/NavigationMenu';

import menuSections from './MenuInterface';

const MenuContainer = () => {

  const [menu, setMenu] = useState<any>(menuSections);
  const [openedSections, setOpenedSections] = useState<any>(
    ['root']
  );
  let sections = 1;

  const onClickItemMenu = (id: string, param: string) => {
    const newSection = Number(id.split('')[0]);
    const tmpArray = [
      ...openedSections
    ];

    
    sections = newSection;
    tmpArray[sections] = param;
    
    setOpenedSections(tmpArray);
    

  }


  let sectionWrapped = (content: any, key : string) => {
    return (
      <div className="menu" key={key}>
        <NavigationMenu content = { content } onClickItem = { onClickItemMenu }/>
      </div>
    )
  }

  let tmpSections = [];
  let i = 0;

    for(let menuKey in menu) {
      if(menuKey === openedSections[i]) {
        //console.log(sectionWrapped(menu[menuKey].menuItems));
        tmpSections.push(sectionWrapped(menu[menuKey].menuItems, menuKey));
        i++;
      }
    }


  return (
    <div className="menu-container">
      {
        tmpSections.map( section => {
          return section;
        })
      }
    </div>
  )
} 

export default MenuContainer;