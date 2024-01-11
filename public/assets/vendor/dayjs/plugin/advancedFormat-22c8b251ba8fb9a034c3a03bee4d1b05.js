/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/dayjs@1.11.10/plugin/advancedFormat.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var e={exports:{}},r=e.exports=function(e,r){var t=r.prototype,s=t.format;t.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return s.bind(this)(e);var a=this.$utils(),n=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((r.$M+1)/3);case"Do":return t.ordinal(r.$D);case"gggg":return r.weekYear();case"GGGG":return r.isoWeekYear();case"wo":return t.ordinal(r.week(),"W");case"w":case"ww":return a.s(r.week(),"w"===e?1:2,"0");case"W":case"WW":return a.s(r.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return a.s(String(0===r.$H?24:r.$H),"k"===e?1:2,"0");case"X":return Math.floor(r.$d.getTime()/1e3);case"x":return r.$d.getTime();case"z":return"["+r.offsetName()+"]";case"zzz":return"["+r.offsetName("long")+"]";default:return e}}));return s.bind(this)(n)}};export{r as default};
