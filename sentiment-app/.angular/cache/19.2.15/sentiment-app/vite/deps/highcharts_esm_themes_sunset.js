import {
  l$
} from "./chunk-PGQUEOWL.js";
import "./chunk-3OV72XIM.js";

// node_modules/highcharts/esm/themes/sunset.js
var e;
var r;
var t = {};
t.n = (o) => {
  var e2 = o && o.__esModule ? () => o.default : () => o;
  return t.d(e2, {
    a: e2
  }), e2;
}, t.d = (o, e2) => {
  for (var r2 in e2) t.o(e2, r2) && !t.o(o, r2) && Object.defineProperty(o, r2, {
    enumerable: true,
    get: e2[r2]
  });
}, t.o = (o, e2) => Object.prototype.hasOwnProperty.call(o, e2);
var l = l$;
var a = t.n(l);
var {
  setOptions: n
} = a();
(e = r || (r = {})).options = {
  colors: ["#FDD089", "#FF7F79", "#A0446E", "#251535"],
  colorAxis: {
    maxColor: "#60042E",
    minColor: "#FDD089"
  },
  plotOptions: {
    map: {
      nullColor: "#fefefc"
    }
  },
  navigator: {
    series: {
      color: "#FF7F79",
      lineColor: "#A0446E"
    }
  }
}, e.apply = function() {
  n(e.options);
};
var s = r;
a().theme = s.options, s.apply();
var p = a();
export {
  p as default
};
//# sourceMappingURL=highcharts_esm_themes_sunset.js.map
