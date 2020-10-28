window.gotofix = {}
window.gotofix.onlye = false

const appRoot = document.getElementById('sl-root');
const configService = angular.element(appRoot).injector().get('configService');
const pointService = angular.element(appRoot).injector().get('pointService');

window.gotofix.testFilter = configService.testFilter
configService.testFilter = function (e, t, n, o, a) {
    if (window.gotofix.onlye) {
        return e["電子クーポン"] === "1" && window.gotofix.testFilter(e, t, n, o, a)
    } else {
        return window.gotofix.testFilter(e, t, n, o, a)
    }
}

let domstr = `
<div class="conditions-wrapper">
    <h4>
    <img class="icon" alt="検索オプション (gotofix)" title="検索オプション (gotofix)" src="/static/maps/gotocp/images/icon_other.png">
    <span>検索オプション (gotofix)</span>
    </h4>
    <ul class="conditions"">
    <li id="gotofix-ui-onlye">
        <i class="material-icons theme-color" >check_box_outline_blank</i>
        <div class="name">電子クーポンのみ</div>
    </li>
    </ul>
</div>
`

const ui = document.createElement('div')
ui.innerHTML = domstr
ui.id = "gotofix-ui"
document.querySelector('#sl-root .option-box').appendChild(ui)

document.getElementById('gotofix-ui-onlye').addEventListener('click', () => {
    if (window.gotofix.onlye) {
        ui.querySelector('i').textContent = 'check_box_outline_blank';
        window.gotofix.onlye = false;

        pointService.showMarkers();
    } else {
        ui.querySelector('i').textContent = 'check_box';
        window.gotofix.onlye = true;

        pointService.showMarkers();
    }
})

document.querySelector('#sl-root .tab-switch li:first-child').addEventListener('click', () => {
    ui.style.display = "block"
})
document.querySelector('#sl-root .tab-switch li:last-child').addEventListener('click', () => {
    ui.style.display = "none"
})
