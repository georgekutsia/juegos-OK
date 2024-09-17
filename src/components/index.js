// estete archivo sirve para tener las importaciones mas limpias y simples. en lugar de tener que
// importar 9 componentes en 9 lineas diferentes, todas se importan desde un mismo sitio y queda
// el componente en el que se importa más limpio con una sola línea de importación

export { default as LanguageComponent } from "./settings/idiomas/LanguageComponent";
export { default as ProfileComponent } from "./profile/ProfileComponent";
export { default as MainNavbarComponent } from "./navbars/main-navbar/MainNavbarComponent";
export { default as MainNavbarButtonComponent } from "./navbars/main-navbar/main-navbar-button/MainNavbarButtonComponent";
export { default as ProfileNavbarButtonComponent } from "./navbars/main-navbar/profile-navbar-button/ProfileNavbarButtonComponent";



// buttons
export { default as ButtonLanguageComponent } from "./buttons/button-language/ButtonLanguageComponent";
