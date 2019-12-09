import React, {useState} from 'react';
import './NavigationMenu.css';
import MenuItems from './MenuItems/MenuItems';
import styled from "styled-components";


const MenuMain = styled.ul `
    display: flex;
    flex-direction: column;
    height: 100%;
    list-style-type: none;
    padding: 0;
`;

const NavigationMenu = (props: any) => {
    console.dir(props);
  return (
        <MenuMain>
            {props.menu.map((menuItem: any) => {
                return (
                    <MenuItems key={menuItem.id}
                                menuItem ={menuItem}
                                onClick = {props.onClick}
                               isOpen={ props.isOpen }
                   />
                )
            })
            }
        </MenuMain>
  )
};

export default NavigationMenu;