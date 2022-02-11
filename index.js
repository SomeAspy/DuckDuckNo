// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
"use strict";
window.onload=init;
function init(){
    document.getElementById("searchButton").onclick=function(event){
        event.preventDefault();
        window.location.replace(`https://duckduckgo.com/?q=${document.getElementById("userSearch").value}`);
    };
};