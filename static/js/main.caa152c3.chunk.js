(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(15);function s(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand  ",href:"#"},e.title)," ",l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},e.Home)," "))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,"aria-checked":"false",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Change Mode")))))}function m(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mb-3 ",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("label",{htmlFor:"textform",className:"form-label "}," ",l.a.createElement("h4",{className:"my-3"},"Example textarea")," "),l.a.createElement("textarea",{className:"form-control",id:"textform",rows:"8",value:r,onChange:function(e){c(e.target.value)},style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"grey":"white"}})),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("converted to upper case","success")}}," UPPER"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("converted to lower case","success")}}," LOWER"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){document.getElementById("under").innerHTML="<u>".concat(r,"</u>"),e.showAlert("text underlined","success")}}," Underline"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){c(""),e.showAlert("Text cleared","success")}},"Clear"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("textform");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("copied to clipboard","success")}},"Copy"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.split(/[ ]+/);c(t.join(" ")),e.showAlert("extra spaces removed","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters "),l.a.createElement("h4",{className:"my-1"},"Preview"),l.a.createElement("p",{id:"under"},r)))}function i(e){return e.alert&&l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg,l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})))}s.defaultProps={Home:"home"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],p=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},2500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",Home:"Home",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="grey",p("Dark mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"))}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container"},l.a.createElement(m,{mode:a,showAlert:p})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.caa152c3.chunk.js.map