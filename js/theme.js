const root = document.querySelector(":root");
const btnTheme = document.querySelector("#btn-theme");
const btnThemeMobile = document.querySelector("#btn-theme-mobile");
const brandLogo = document.querySelector("#logo");

const getStyle = (element, style) =>
  window
    .getComputedStyle(element)
    .getPropertyValue(style);

const initialColors = {
  primaryBgColor: getStyle(root, "--primary-bg-color"),
  secondaryBgColor: getStyle(root, "--secondary-bg-color"),
  primaryFtColor: getStyle(root, "--primary-ft-color"),
  tertiaryBgColor: getStyle(root, "--tertiary-bg-color"),
  quaternaryFtColor: getStyle(root, "--quaternary-ft-color"),
  quintenaryFtColor: getStyle(root, "--quintenary-ft-color")
}

const lightMode = {
  primaryBgColor: "#f2f2f2",
  secondaryBgColor: "#e6e6e6",
  tertiaryBgColor: "#e5e5e5",
  primaryFtColor: "#242424",
  quaternaryFtColor: "#0004FF",
  quintenaryFtColor: "#003CFF"
}

const transformKey = key => "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase();

const changeTheme = (colors, logo = false) => {
  Object.keys(colors).map(key =>
    root.style.setProperty(transformKey(key), colors[key]));

  (logo) ? brandLogo.style.filter = "contrast(60%)" : brandLogo.style.filter = "invert(100%)"
}

const savePreferences = (active) => localStorage.setItem('theme', active)

const loadSavedPreferences = () =>
  (localStorage.getItem('theme') === null) ? savePreferences(false) : localStorage.getItem('theme') == 'true';

const loadUserPreferences = () =>
  (loadSavedPreferences()) ? changeTheme(lightMode, true) : savePreferences(false)

const btnEvents = function (elements) {
  elements.forEach(element => {
    element.addEventListener("click", () => {

      if (loadSavedPreferences()) {

        savePreferences(false)
        changeTheme(initialColors)

      } else {

        savePreferences(true)

      }

      loadUserPreferences();
    });
  })
}

btnEvents([btnTheme, btnThemeMobile])

loadUserPreferences();