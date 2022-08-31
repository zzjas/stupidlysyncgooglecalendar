// ==UserScript==
// @name         SyncImportedByURLCalendar
// @namespace    https://calendar.google.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://calendar.google.com/calendar/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

const ICS_URL_T = "Put your ics link here that ends with .ics"
const USER_NUM = "3"

const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

function add_calendar() {
    let ICS_URL = ICS_URL_T.concat(`?stupid=${genRanHex(10)}`)
    let inputOut = document.getElementsByClassName("Kb2sf nXeosb FFraie Vv9Jyd t4IwDf");
    let items = document.getElementsByTagName("input");
    let item = items[items.length-1]
    console.log(item);
    item.focus();
    item.value = ICS_URL;
    item.dispatchEvent(new KeyboardEvent('input',{'target': {"value": 'a'}, 'bubbles':true}));
    setTimeout(()=>{
        let confirm = document.getElementsByClassName("VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7")[0];
        confirm.click();
        setTimeout(() => {
            window.location.href = `https://calendar.google.com/calendar/u/${USER_NUM}/r`
        }, 5000);
    }, 500);
}

function delete_calendar() {
    let items = document.getElementsByClassName("NI2kfb Ioup7e DX3x9d");
    let item = Array.from(items).filter(e => e.firstChild.innerText == "Calendar")[0];
    if(!item) window.location.href = `https://calendar.google.com/calendar/u/${USER_NUM}/r/settings/addbyurl?stupid=1`
    item.click();
    setTimeout(()=>{
        let buttons = document.getElementsByTagName("button");
        let button = buttons[buttons.length-1];
        button.click();
        setTimeout(()=>{
            let remove = document.getElementsByClassName("uArJ5e UQuaGc kCyAyd l3F1ye ARrCac HvOprf evJWRb M9Bg4d")[0];
            remove.click();
            setTimeout(()=>{
                window.location.href = `https://calendar.google.com/calendar/u/${USER_NUM}/r/settings/addbyurl?stupid=1`
            },1000);
        }, 1000);
    }, 1000);
}

window.onload = () => {
    if(window.location.href.includes("settings?stupid=1")) {
        delete_calendar();
    }
    if(window.location.href.includes("addbyurl?stupid=1")) {
        setTimeout(add_calendar, 500);
    }
};
