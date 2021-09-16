const switchThemeRef = document.querySelector('[id="theme-switch-toggle"]');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

stillThemeAfterF5();

switchThemeRef.addEventListener('change', onSwitchTheme);

function onSwitchTheme() {
    changeSelectorBodyRef();

}
