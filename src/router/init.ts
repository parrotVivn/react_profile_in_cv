import _, { reject } from "lodash";
import Cookie from 'cookie-universal'
import { resolve } from "path";

export default (function () {
    console.time("init");
    const cookie = Cookie();
    !_.isEmpty(cookie.get("uuid")) ? null : cookie.set("uuid", (Math.random() * 100));
    !_.isEmpty((localStorage.getItem("lang"))) ? null : localStorage.setItem("lang", "viVN");
    !_.isEmpty((localStorage.getItem("mode"))) ? null : localStorage.setItem("mode", "dark");
    _.isEmpty((localStorage.getItem("isView"))) ? createView(cookie.get("uuid")) : null;
})();
function createView(uuid: String) {
    const _fetch_one_checkViewer = fetch("https://635f831f3e8f65f283b49ad5.mockapi.io/view", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error,
        body: JSON.stringify({
            "count": 1,
            "name": uuid,
        }),
    }).then(res => {
        return localStorage.setItem("isView", "true");
    })
    const _fetch_two_get_count_viewer = new Promise(async (resolve, ) => {
        const dataRes = await fetch("https://635f831f3e8f65f283b49ad5.mockapi.io/view", { method: 'GET', }).then(res => {
            return res.json()
        })
        localStorage.setItem("view", dataRes.length);         
    })
    Promise.all([_fetch_one_checkViewer, _fetch_two_get_count_viewer]);
}