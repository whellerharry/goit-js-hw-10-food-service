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

function changeSelectorBodyRef() {
    if (document.body.classList.contains(Theme.LIGHT)) {
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        stillThemeOnLocalStorage(Theme.DARK);
        return;
    }
        document.body.classList.replace(Theme.DARK, Theme.LIGHT);
        stillThemeOnLocalStorage(Theme.LIGHT);
}

function stillThemeOnLocalStorage(theme) {
    localStorage.setItem('theme', theme)
}

function stillThemeAfterF5() {
    const selectedTheme = localStorage.getItem('theme');

    if (selectedTheme === Theme.DARK) {
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        switchThemeRef.checked = true;
    }
};