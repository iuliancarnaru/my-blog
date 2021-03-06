/*
var colorList = {
    'cascade' : {
        colorNormal: '#96a5a6',
        colorDark: '#7f8c8d'
    },
    'zest' : {
        colorNormal: '#e67e22',
        colorDark: '#d35400'
    },
    'buttercup' : {
        colorNormal: '#f1c40f',
        colorDark: '#f39c12'
    }
};

console.log(colorList);
*/

const themeButtonList = [...document.querySelectorAll('.theme-button')];
themeButtonList.map(themeButton => themeButton.addEventListener('click', e => {
    document.documentElement.style.setProperty('--color-dark', themeButton.dataset.colorDark);
    document.documentElement.style.setProperty('--color-normal', themeButton.dataset.colorNormal);
}));