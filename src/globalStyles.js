import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: url(/img/background.png) no-repeat;
  background-size: 100%;
  background-position: bottom;
  background-color: #f6f6f6;
  min-height: 100%;
}
html {
    min-height: 100%;
  }
  
  form {
    padding: 20px;
    margin-top: 60px;
  }
  
  form button,
  form h5 {
    margin: 20px 0;
  }
  
  input[type="text"]:not(.browser-default):focus:not([readonly]),
  input[type="email"]:not(.browser-default):focus:not([readonly]),
  input[type="password"]:not(.browser-default):focus:not([readonly]),
  textarea.materialize-textarea:focus:not([readonly]) {
    border-color: #426cf5;
    box-shadow: none;
  }
  
  :root {
    --bg: #242526;
    --bg-accent: #484a4d;
    --text-color: #dadce1;
    --nav-size: 60px;
    --border: 1px solid #474a4d;
    --border-radius: 8px;
    --speed: 500ms;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    color: var(---text-color);
    text-decoration: none;
  }
  
  .navbar {
    height: var(--nav-size);
    background-color: var(--bg);
  }
  
  .navbar-nav {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
  
  .dropdown {
    position: absolute;
    z-index: 1000;
    top: 58px;
    width: 300px;
    transform: translate(-45%);
    background-color: var(--bg);
    border: var(--border);
    border-radius: var(--border-radius);
    padding: 1rem;
    overflow: hidden;
  
    transition: height var(--speed) ease;
  }
  
  .icon-right {
    margin-left: auto;
  }
  
  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  
  .menu-primary-exit {
    position: absolute;
    transform: translateX(0%);
  }
  
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
  }
  
  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .menu-secondary-exit {
  }
  
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all var(--speed) ease;
  }
  
  .outer {
    width: 100%;
    text-align: center;
  }
  
  .inner {
    display: inline-block;
  }
  
`;

export default GlobalStyles;
