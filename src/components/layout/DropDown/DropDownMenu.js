import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import { CSSTransition } from "react-transition-group";
import DropDownItem from "./DropDownItem";

function DropDownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight + 30;
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon="👤"
            onClickHandler={() => setActiveMenu("profile")}
          >
            My Profile
          </DropDownItem>
          <DropDownItem
            leftIcon="⚙️"
            gotoMenu="settings"
            onClickHandler={() => setActiveMenu("settings")}
          >
            Settings
          </DropDownItem>
          <DropDownItem
            leftIcon="X"
            onClickHandler={() => setActiveMenu("empty")}
          >
            Second Section
          </DropDownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            gotoMenu="main"
            onClickHandler={() => setActiveMenu("main")}
          ></DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "profile"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            gotoMenu="main"
            onClickHandler={() => setActiveMenu("main")}
          ></DropDownItem>
          <DropDownItem>Profile</DropDownItem>
          <DropDownItem>Profile</DropDownItem>
          <DropDownItem>Profile</DropDownItem>
          <DropDownItem>Profile</DropDownItem>
          <DropDownItem>Profile</DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "empty"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            gotoMenu="main"
            onClickHandler={() => setActiveMenu("main")}
          ></DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropDownMenu;
