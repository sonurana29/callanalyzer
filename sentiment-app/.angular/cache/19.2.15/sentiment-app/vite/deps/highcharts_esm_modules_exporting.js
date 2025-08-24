import {
  l$
} from "./chunk-PGQUEOWL.js";
import {
  __async,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/highcharts/esm/modules/exporting.js
var t;
var n;
var i = {};
i.n = (e) => {
  var t2 = e && e.__esModule ? () => e.default : () => e;
  return i.d(t2, {
    a: t2
  }), t2;
}, i.d = (e, t2) => {
  for (var n2 in t2) i.o(t2, n2) && !i.o(e, n2) && Object.defineProperty(e, n2, {
    enumerable: true,
    get: t2[n2]
  });
}, i.o = (e, t2) => Object.prototype.hasOwnProperty.call(e, t2);
var o = l$;
var r = i.n(o);
var s = l$.AST;
var a = i.n(s);
var l = l$.Chart;
var c = i.n(l);
var p = t || (t = {});
p.compose = function(e) {
  return e.navigation || (e.navigation = new h(e)), e;
};
var h = class {
  constructor(e) {
    this.updates = [], this.chart = e;
  }
  addUpdate(e) {
    this.chart.navigation.updates.push(e);
  }
  update(e, t2) {
    this.updates.forEach((n2) => {
      n2.call(this.chart, e, t2);
    });
  }
};
p.Additions = h;
var d = t;
var {
  isSafari: u,
  win: g,
  win: {
    document: f
  }
} = r();
var {
  error: m
} = r();
var x = g.URL || g.webkitURL || g;
function y(e) {
  let t2 = e.replace(/filename=.*;/, "").match(/data:([^;]*)(;base64)?,([A-Z+\d\/]+)/i);
  if (t2 && t2.length > 3 && g.atob && g.ArrayBuffer && g.Uint8Array && g.Blob && x.createObjectURL) {
    let e2 = g.atob(t2[3]), n2 = new g.ArrayBuffer(e2.length), i2 = new g.Uint8Array(n2);
    for (let t3 = 0; t3 < i2.length; ++t3) i2[t3] = e2.charCodeAt(t3);
    return x.createObjectURL(new g.Blob([i2], {
      type: t2[1]
    }));
  }
}
var {
  isTouchDevice: b
} = r();
var w = {
  exporting: {
    allowTableSorting: true,
    libURL: "https://code.highcharts.com/12.3.0/lib/",
    local: true,
    type: "image/png",
    url: `https://export-svg.highcharts.com?v=${r().version}`,
    pdfFont: {
      normal: void 0,
      bold: void 0,
      bolditalic: void 0,
      italic: void 0
    },
    printMaxWidth: 780,
    scale: 2,
    buttons: {
      contextButton: {
        className: "highcharts-contextbutton",
        menuClassName: "highcharts-contextmenu",
        symbol: "menu",
        titleKey: "contextButtonTitle",
        menuItems: ["viewFullscreen", "printChart", "separator", "downloadPNG", "downloadJPEG", "downloadSVG"]
      }
    },
    menuItemDefinitions: {
      viewFullscreen: {
        textKey: "viewFullscreen",
        onclick: function() {
          this.fullscreen?.toggle();
        }
      },
      printChart: {
        textKey: "printChart",
        onclick: function() {
          this.exporting?.print();
        }
      },
      separator: {
        separator: true
      },
      downloadPNG: {
        textKey: "downloadPNG",
        onclick: function() {
          return __async(this, null, function* () {
            yield this.exporting?.exportChart();
          });
        }
      },
      downloadJPEG: {
        textKey: "downloadJPEG",
        onclick: function() {
          return __async(this, null, function* () {
            yield this.exporting?.exportChart({
              type: "image/jpeg"
            });
          });
        }
      },
      downloadPDF: {
        textKey: "downloadPDF",
        onclick: function() {
          return __async(this, null, function* () {
            yield this.exporting?.exportChart({
              type: "application/pdf"
            });
          });
        }
      },
      downloadSVG: {
        textKey: "downloadSVG",
        onclick: function() {
          return __async(this, null, function* () {
            yield this.exporting?.exportChart({
              type: "image/svg+xml"
            });
          });
        }
      }
    }
  },
  lang: {
    viewFullscreen: "View in full screen",
    exitFullscreen: "Exit from full screen",
    printChart: "Print chart",
    downloadPNG: "Download PNG image",
    downloadJPEG: "Download JPEG image",
    downloadPDF: "Download PDF document",
    downloadSVG: "Download SVG vector image",
    contextButtonTitle: "Chart context menu"
  },
  navigation: {
    buttonOptions: {
      symbolSize: 14,
      symbolX: 14.5,
      symbolY: 13.5,
      align: "right",
      buttonSpacing: 5,
      height: 28,
      y: -5,
      verticalAlign: "top",
      width: 28,
      symbolFill: "#666666",
      symbolStroke: "#666666",
      symbolStrokeWidth: 3,
      theme: {
        fill: "#ffffff",
        padding: 5,
        stroke: "none",
        "stroke-linecap": "round"
      }
    },
    menuStyle: {
      border: "none",
      borderRadius: "3px",
      background: "#ffffff",
      padding: "0.5em"
    },
    menuItemStyle: {
      background: "none",
      borderRadius: "3px",
      color: "#333333",
      padding: "0.5em",
      fontSize: b ? "0.9em" : "0.8em",
      transition: "background 250ms, color 250ms"
    },
    menuItemHoverStyle: {
      background: "#f2f2f2"
    }
  }
};
!function(e) {
  let t2 = [];
  function n2(e2, t3, n3, i3) {
    return [["M", e2, t3 + 2.5], ["L", e2 + n3, t3 + 2.5], ["M", e2, t3 + i3 / 2 + 0.5], ["L", e2 + n3, t3 + i3 / 2 + 0.5], ["M", e2, t3 + i3 - 1.5], ["L", e2 + n3, t3 + i3 - 1.5]];
  }
  function i2(e2, t3, n3, i3) {
    let o2 = i3 / 3 - 2, r2 = [];
    return r2.concat(this.circle(n3 - o2, t3, o2, o2), this.circle(n3 - o2, t3 + o2 + 4, o2, o2), this.circle(n3 - o2, t3 + 2 * (o2 + 4), o2, o2));
  }
  e.compose = function(e2) {
    if (-1 === t2.indexOf(e2)) {
      t2.push(e2);
      let o2 = e2.prototype.symbols;
      o2.menu = n2, o2.menuball = i2.bind(o2);
    }
  };
}(n || (n = {}));
var v = n;
var {
  composed: S
} = r();
var {
  addEvent: C,
  fireEvent: E,
  pushUnique: O
} = r();
function T() {
  this.fullscreen = new k(this);
}
var k = class {
  static compose(e) {
    O(S, "Fullscreen") && C(e, "beforeRender", T);
  }
  constructor(e) {
    this.chart = e, this.isOpen = false;
    let t2 = e.renderTo;
    !this.browserProps && ("function" == typeof t2.requestFullscreen ? this.browserProps = {
      fullscreenChange: "fullscreenchange",
      requestFullscreen: "requestFullscreen",
      exitFullscreen: "exitFullscreen"
    } : t2.mozRequestFullScreen ? this.browserProps = {
      fullscreenChange: "mozfullscreenchange",
      requestFullscreen: "mozRequestFullScreen",
      exitFullscreen: "mozCancelFullScreen"
    } : t2.webkitRequestFullScreen ? this.browserProps = {
      fullscreenChange: "webkitfullscreenchange",
      requestFullscreen: "webkitRequestFullScreen",
      exitFullscreen: "webkitExitFullscreen"
    } : t2.msRequestFullscreen && (this.browserProps = {
      fullscreenChange: "MSFullscreenChange",
      requestFullscreen: "msRequestFullscreen",
      exitFullscreen: "msExitFullscreen"
    }));
  }
  close() {
    let e = this, t2 = e.chart, n2 = t2.options.chart;
    E(t2, "fullscreenClose", null, function() {
      e.isOpen && e.browserProps && t2.container.ownerDocument instanceof Document && t2.container.ownerDocument[e.browserProps.exitFullscreen](), e.unbindFullscreenEvent && (e.unbindFullscreenEvent = e.unbindFullscreenEvent()), t2.setSize(e.origWidth, e.origHeight, false), e.origWidth = void 0, e.origHeight = void 0, n2.width = e.origWidthOption, n2.height = e.origHeightOption, e.origWidthOption = void 0, e.origHeightOption = void 0, e.isOpen = false, e.setButtonText();
    });
  }
  open() {
    let e = this, t2 = e.chart, n2 = t2.options.chart;
    E(t2, "fullscreenOpen", null, function() {
      if (n2 && (e.origWidthOption = n2.width, e.origHeightOption = n2.height), e.origWidth = t2.chartWidth, e.origHeight = t2.chartHeight, e.browserProps) {
        let n3 = C(t2.container.ownerDocument, e.browserProps.fullscreenChange, function() {
          e.isOpen ? (e.isOpen = false, e.close()) : (t2.setSize(null, null, false), e.isOpen = true, e.setButtonText());
        }), i2 = C(t2, "destroy", n3);
        e.unbindFullscreenEvent = () => {
          n3(), i2();
        };
        let o2 = t2.renderTo[e.browserProps.requestFullscreen]();
        o2 && o2.catch(function() {
          alert("Full screen is not supported inside a frame.");
        });
      }
    });
  }
  setButtonText() {
    let e = this.chart, t2 = e.exporting?.divElements, n2 = e.options.exporting, i2 = n2 && n2.buttons && n2.buttons.contextButton.menuItems, o2 = e.options.lang;
    if (n2 && n2.menuItemDefinitions && o2 && o2.exitFullscreen && o2.viewFullscreen && i2 && t2) {
      let e2 = t2[i2.indexOf("viewFullscreen")];
      e2 && a().setElementHTML(e2, this.isOpen ? o2.exitFullscreen : n2.menuItemDefinitions.viewFullscreen.text || o2.viewFullscreen);
    }
  }
  toggle() {
    this.isOpen ? this.close() : this.open();
  }
};
var {
  win: F
} = r();
var {
  discardElement: R,
  objectEach: N
} = r();
var P = {
  ajax: function(e) {
    let t2 = {
      json: "application/json",
      xml: "application/xml",
      text: "text/plain",
      octet: "application/octet-stream"
    }, n2 = new XMLHttpRequest();
    function i2(t3, n3) {
      e.error && e.error(t3, n3);
    }
    if (!e.url) return false;
    n2.open((e.type || "get").toUpperCase(), e.url, true), e.headers?.["Content-Type"] || n2.setRequestHeader("Content-Type", t2[e.dataType || "json"] || t2.text), N(e.headers, function(e2, t3) {
      n2.setRequestHeader(t3, e2);
    }), e.responseType && (n2.responseType = e.responseType), n2.onreadystatechange = function() {
      let t3;
      if (4 === n2.readyState) {
        if (200 === n2.status) {
          if ("blob" !== e.responseType && (t3 = n2.responseText, "json" === e.dataType)) try {
            t3 = JSON.parse(t3);
          } catch (e2) {
            if (e2 instanceof Error) return i2(n2, e2);
          }
          return e.success?.(t3, n2);
        }
        i2(n2, n2.responseText);
      }
    }, e.data && "string" != typeof e.data && (e.data = JSON.stringify(e.data)), n2.send(e.data);
  },
  getJSON: function(e, t2) {
    P.ajax({
      url: e,
      success: t2,
      dataType: "json",
      headers: {
        "Content-Type": "text/plain"
      }
    });
  },
  post: function(e, t2, n2) {
    return __async(this, null, function* () {
      let i2 = new F.FormData();
      N(t2, function(e2, t3) {
        i2.append(t3, e2);
      }), i2.append("b64", "true");
      let o2 = yield F.fetch(e, __spreadValues({
        method: "POST",
        body: i2
      }, n2));
      if (o2.ok) {
        let e2 = yield o2.text(), n3 = document.createElement("a");
        n3.href = `data:${t2.type};base64,${e2}`, n3.download = t2.filename, n3.click(), R(n3);
      }
    });
  }
};
var {
  defaultOptions: L,
  setOptions: M
} = r();
var {
  downloadURL: D,
  getScript: A
} = {
  dataURLtoBlob: y,
  downloadURL: function(e, t2) {
    let n2 = g.navigator, i2 = f.createElement("a");
    if ("string" != typeof e && !(e instanceof String) && n2.msSaveOrOpenBlob) return void n2.msSaveOrOpenBlob(e, t2);
    if (e = "" + e, n2.userAgent.length > 1e3) throw Error("Input too long");
    let o2 = /Edge\/\d+/.test(n2.userAgent);
    if ((u && "string" == typeof e && 0 === e.indexOf("data:application/pdf") || o2 || e.length > 2e6) && !(e = y(e) || "")) throw Error("Failed to convert to blob");
    if (void 0 !== i2.download) i2.href = e, i2.download = t2, f.body.appendChild(i2), i2.click(), f.body.removeChild(i2);
    else try {
      if (!g.open(e, "chart")) throw Error("Failed to open window");
    } catch {
      g.location.href = e;
    }
  },
  getScript: function(e) {
    return new Promise((t2, n2) => {
      let i2 = f.getElementsByTagName("head")[0], o2 = f.createElement("script");
      o2.type = "text/javascript", o2.src = e, o2.onload = () => {
        t2();
      }, o2.onerror = () => {
        n2(m(`Error loading script ${e}`));
      }, i2.appendChild(o2);
    });
  }
};
var {
  composed: H,
  doc: U,
  isFirefox: I,
  isMS: j,
  isSafari: B,
  SVG_NS: G,
  win: V
} = r();
var {
  addEvent: W,
  clearTimeout: $,
  createElement: q,
  css: z,
  discardElement: K,
  error: J,
  extend: _,
  find: X,
  fireEvent: Y,
  isObject: Z,
  merge: Q,
  objectEach: ee,
  pick: et,
  pushUnique: en,
  removeEvent: ei,
  splat: eo,
  uniqueKey: er
} = r();
a().allowedAttributes.push("data-z-index", "fill-opacity", "filter", "preserveAspectRatio", "rx", "ry", "stroke-dasharray", "stroke-linejoin", "stroke-opacity", "text-anchor", "transform", "transform-origin", "version", "viewBox", "visibility", "xmlns", "xmlns:xlink"), a().allowedTags.push("desc", "clippath", "fedropshadow", "femorphology", "g", "image");
var es = V.URL || V.webkitURL || V;
var ea = class _ea {
  constructor(e, t2) {
    this.options = {}, this.chart = e, this.options = t2, this.btnCount = 0, this.buttonOffset = 0, this.divElements = [], this.svgElements = [];
  }
  static hyphenate(e) {
    return e.replace(/[A-Z]/g, function(e2) {
      return "-" + e2.toLowerCase();
    });
  }
  static imageToDataURL(e, t2, n2) {
    return __async(this, null, function* () {
      let i2 = yield _ea.loadImage(e), o2 = U.createElement("canvas"), r2 = o2?.getContext("2d");
      if (r2) return o2.height = i2.height * t2, o2.width = i2.width * t2, r2.drawImage(i2, 0, 0, o2.width, o2.height), o2.toDataURL(n2);
      throw Error("No canvas found!");
    });
  }
  static loadImage(e) {
    return new Promise((t2, n2) => {
      let i2 = new V.Image();
      i2.crossOrigin = "Anonymous", i2.onload = () => {
        setTimeout(() => {
          t2(i2);
        }, _ea.loadEventDeferDelay);
      }, i2.onerror = (e2) => {
        n2(e2);
      }, i2.src = e;
    });
  }
  static prepareImageOptions(e) {
    let t2 = e?.type || "image/png", n2 = e?.libURL || L.exporting?.libURL;
    return {
      type: t2,
      filename: (e?.filename || "chart") + "." + ("image/svg+xml" === t2 ? "svg" : t2.split("/")[1]),
      scale: e?.scale || 1,
      libURL: n2?.slice(-1) !== "/" ? n2 + "/" : n2
    };
  }
  static sanitizeSVG(e, t2) {
    let n2 = e.indexOf("</svg>") + 6, i2 = e.indexOf("<foreignObject") > -1, o2 = e.substr(n2);
    return e = e.substr(0, n2), i2 ? e = e.replace(/(<(?:img|br).*?(?=\>))>/g, "$1 />") : o2 && t2?.exporting?.allowHTML && (o2 = '<foreignObject x="0" y="0" width="' + t2.chart.width + '" height="' + t2.chart.height + '"><body xmlns="http://www.w3.org/1999/xhtml">' + o2.replace(/(<(?:img|br).*?(?=\>))>/g, "$1 />") + "</body></foreignObject>", e = e.replace("</svg>", o2 + "</svg>")), e = e.replace(/zIndex="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery\d+="[^"]+"/g, "").replace(/url\(("|&quot;)(.*?)("|&quot;)\;?\)/g, "url($2)").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS\d+\:)?href=/g, " xlink:href=").replace(/\n+/g, " ").replace(/&nbsp;/g, " ").replace(/&shy;/g, "­");
  }
  static svgToDataURL(e) {
    let t2 = V.navigator.userAgent, n2 = t2.indexOf("WebKit") > -1 && 0 > t2.indexOf("Chrome");
    try {
      if (!n2 && -1 === e.indexOf("<foreignObject")) return es.createObjectURL(new V.Blob([e], {
        type: "image/svg+xml;charset-utf-16"
      }));
    } catch {
    }
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(e);
  }
  addButton(e) {
    let t2, n2 = this, i2 = n2.chart, o2 = i2.renderer, r2 = Q(i2.options.navigation?.buttonOptions, e), s2 = r2.onclick, a2 = r2.menuItems, l2 = r2.symbolSize || 12;
    if (false === r2.enabled || !r2.theme) return;
    let c2 = i2.styledMode ? {} : r2.theme, p2 = () => {
    };
    s2 ? p2 = function(e2) {
      e2 && e2.stopPropagation(), s2.call(i2, e2);
    } : a2 && (p2 = function(e2) {
      e2 && e2.stopPropagation(), n2.contextMenu(h2.menuClassName, a2, h2.translateX || 0, h2.translateY || 0, h2.width || 0, h2.height || 0, h2), h2.setState(2);
    }), r2.text && r2.symbol ? c2.paddingLeft = et(c2.paddingLeft, 30) : r2.text || _(c2, {
      width: r2.width,
      height: r2.height,
      padding: 0
    });
    let h2 = o2.button(r2.text || "", 0, 0, p2, c2, void 0, void 0, void 0, void 0, r2.useHTML).addClass(e.className || "").attr({
      title: et(i2.options.lang[r2._titleKey || r2.titleKey], "")
    });
    h2.menuClassName = e.menuClassName || "highcharts-menu-" + n2.btnCount++, r2.symbol && (t2 = o2.symbol(r2.symbol, Math.round((r2.symbolX || 0) - l2 / 2), Math.round((r2.symbolY || 0) - l2 / 2), l2, l2, {
      width: l2,
      height: l2
    }).addClass("highcharts-button-symbol").attr({
      zIndex: 1
    }).add(h2), i2.styledMode || t2.attr({
      stroke: r2.symbolStroke,
      fill: r2.symbolFill,
      "stroke-width": r2.symbolStrokeWidth || 1
    })), h2.add(n2.group).align(_(r2, {
      width: h2.width,
      x: et(r2.x, n2.buttonOffset)
    }), true, "spacingBox"), n2.buttonOffset += ((h2.width || 0) + (r2.buttonSpacing || 0)) * ("right" === r2.align ? -1 : 1), n2.svgElements.push(h2, t2);
  }
  afterPrint() {
    let e = this.chart;
    if (!this.printReverseInfo) return;
    let {
      childNodes: t2,
      origDisplay: n2,
      resetParams: i2
    } = this.printReverseInfo;
    this.moveContainers(e.renderTo), [].forEach.call(t2, function(e2, t3) {
      1 === e2.nodeType && (e2.style.display = n2[t3] || "");
    }), this.isPrinting = false, i2 && e.setSize.apply(e, i2), delete this.printReverseInfo, _ea.printingChart = void 0, Y(e, "afterPrint");
  }
  beforePrint() {
    let e = this.chart, t2 = U.body, n2 = this.options.printMaxWidth, i2 = {
      childNodes: t2.childNodes,
      origDisplay: [],
      resetParams: void 0
    };
    this.isPrinting = true, e.pointer?.reset(void 0, 0), Y(e, "beforePrint"), n2 && e.chartWidth > n2 && (i2.resetParams = [e.options.chart.width, void 0, false], e.setSize(n2, void 0, false)), [].forEach.call(i2.childNodes, function(e2, t3) {
      1 === e2.nodeType && (i2.origDisplay[t3] = e2.style.display, e2.style.display = "none");
    }), this.moveContainers(t2), this.printReverseInfo = i2;
  }
  contextMenu(e, t2, n2, i2, o2, r2, s2) {
    let l2 = this, c2 = l2.chart, p2 = c2.options.navigation, h2 = c2.chartWidth, d2 = c2.chartHeight, u2 = "cache-" + e, g2 = Math.max(o2, r2), f2, m2 = c2[u2];
    m2 || (l2.contextMenuEl = c2[u2] = m2 = q("div", {
      className: e
    }, __spreadValues({
      position: "absolute",
      zIndex: 1e3,
      padding: g2 + "px",
      pointerEvents: "auto"
    }, c2.renderer.style), c2.scrollablePlotArea?.fixedDiv || c2.container), f2 = q("ul", {
      className: "highcharts-menu"
    }, c2.styledMode ? {} : {
      listStyle: "none",
      margin: 0,
      padding: 0
    }, m2), c2.styledMode || z(f2, _({
      MozBoxShadow: "3px 3px 10px #0008",
      WebkitBoxShadow: "3px 3px 10px #0008",
      boxShadow: "3px 3px 10px #0008"
    }, p2?.menuStyle || {})), m2.hideMenu = function() {
      z(m2, {
        display: "none"
      }), s2 && s2.setState(0), c2.exporting && (c2.exporting.openMenu = false), z(c2.renderTo, {
        overflow: "hidden"
      }), z(c2.container, {
        overflow: "hidden"
      }), $(m2.hideTimer), Y(c2, "exportMenuHidden");
    }, l2.events?.push(W(m2, "mouseleave", function() {
      m2.hideTimer = V.setTimeout(m2.hideMenu, 500);
    }), W(m2, "mouseenter", function() {
      $(m2.hideTimer);
    }), W(U, "mouseup", function(t3) {
      c2.pointer?.inClass(t3.target, e) || m2.hideMenu();
    }), W(m2, "click", function() {
      c2.exporting?.openMenu && m2.hideMenu();
    })), t2.forEach(function(e2) {
      if ("string" == typeof e2 && l2.options.menuItemDefinitions?.[e2] && (e2 = l2.options.menuItemDefinitions[e2]), Z(e2, true)) {
        let t3;
        e2.separator ? t3 = q("hr", void 0, void 0, f2) : ("viewData" === e2.textKey && l2.isDataTableVisible && (e2.textKey = "hideData"), t3 = q("li", {
          className: "highcharts-menu-item",
          onclick: function(t4) {
            t4 && t4.stopPropagation(), m2.hideMenu(), "string" != typeof e2 && e2.onclick && e2.onclick.apply(c2, arguments);
          }
        }, void 0, f2), a().setElementHTML(t3, e2.text || c2.options.lang[e2.textKey]), c2.styledMode || (t3.onmouseover = function() {
          z(this, p2?.menuItemHoverStyle || {});
        }, t3.onmouseout = function() {
          z(this, p2?.menuItemStyle || {});
        }, z(t3, _({
          cursor: "pointer"
        }, p2?.menuItemStyle || {})))), l2.divElements.push(t3);
      }
    }), l2.divElements.push(f2, m2), l2.menuHeight = m2.offsetHeight, l2.menuWidth = m2.offsetWidth);
    let x2 = {
      display: "block"
    };
    n2 + (l2.menuWidth || 0) > h2 ? x2.right = h2 - n2 - o2 - g2 + "px" : x2.left = n2 - g2 + "px", i2 + r2 + (l2.menuHeight || 0) > d2 && s2.alignOptions?.verticalAlign !== "top" ? x2.bottom = d2 - i2 - g2 + "px" : x2.top = i2 + r2 - g2 + "px", z(m2, x2), z(c2.renderTo, {
      overflow: ""
    }), z(c2.container, {
      overflow: ""
    }), c2.exporting && (c2.exporting.openMenu = true), Y(c2, "exportMenuShown");
  }
  destroy(e) {
    let t2, n2 = e ? e.target : this.chart, {
      divElements: i2,
      events: o2,
      svgElements: r2
    } = this;
    r2.forEach((e2, i3) => {
      e2 && (e2.onclick = e2.ontouchstart = null, n2[t2 = "cache-" + e2.menuClassName] && delete n2[t2], r2[i3] = e2.destroy());
    }), r2.length = 0, this.group && (this.group.destroy(), delete this.group), i2.forEach(function(e2, t3) {
      e2 && ($(e2.hideTimer), ei(e2, "mouseleave"), i2[t3] = e2.onmouseout = e2.onmouseover = e2.ontouchstart = e2.onclick = null, K(e2));
    }), i2.length = 0, o2 && (o2.forEach(function(e2) {
      e2();
    }), o2.length = 0);
  }
  downloadSVG(e, t2) {
    return __async(this, null, function* () {
      let n2, i2 = {
        svg: e,
        exportingOptions: t2,
        exporting: this
      };
      if (Y(_ea.prototype, "downloadSVG", i2), i2.defaultPrevented) return;
      let {
        type: o2,
        filename: r2,
        scale: s2,
        libURL: a2
      } = _ea.prepareImageOptions(t2);
      if ("application/pdf" === o2) throw Error("Offline exporting logic for PDF type is not found.");
      if ("image/svg+xml" === o2) {
        if (void 0 !== V.MSBlobBuilder) {
          let t3 = new V.MSBlobBuilder();
          t3.append(e), n2 = t3.getBlob("image/svg+xml");
        } else n2 = _ea.svgToDataURL(e);
        D(n2, r2);
      } else {
        n2 = _ea.svgToDataURL(e);
        try {
          _ea.objectURLRevoke = true;
          let e2 = yield _ea.imageToDataURL(n2, s2, o2);
          D(e2, r2);
        } catch (c2) {
          if ("No canvas found!" === c2.message) throw c2;
          if (e.length > 1e8) throw Error("Input too long");
          let t3 = U.createElement("canvas"), n3 = t3.getContext("2d"), i3 = e.match(/^<svg[^>]*\s{,1000}width\s{,1000}=\s{,1000}\"?(\d+)\"?[^>]*>/), l2 = e.match(/^<svg[^>]*\s{0,1000}height\s{,1000}=\s{,1000}\"?(\d+)\"?[^>]*>/);
          if (n3 && i3 && l2) {
            let c3 = i3[1] * s2, p2 = l2[1] * s2;
            t3.width = c3, t3.height = p2, V.canvg || (_ea.objectURLRevoke = true, yield A(a2 + "canvg.js")), V.canvg.Canvg.fromString(n3, e).start(), D(V.navigator.msSaveOrOpenBlob ? t3.msToBlob() : t3.toDataURL(o2), r2);
          }
        } finally {
          if (_ea.objectURLRevoke) try {
            es.revokeObjectURL(n2);
          } catch {
          }
        }
      }
    });
  }
  exportChart(e, t2) {
    return __async(this, null, function* () {
      if ((e = Q(this.options, e)).local) yield this.localExport(e, t2 || {});
      else {
        let n2 = this.getSVGForExport(e, t2);
        e.url && (yield P.post(e.url, {
          filename: e.filename ? e.filename.replace(/\//g, "-") : this.getFilename(),
          type: e.type,
          width: e.width,
          scale: e.scale,
          svg: n2
        }, e.fetchOptions));
      }
    });
  }
  fallbackToServer(e, t2) {
    return __async(this, null, function* () {
      false === e.fallbackToExportServer ? e.error ? e.error(e, t2) : J(28, true) : "application/pdf" === e.type && (e.local = false, yield this.exportChart(e));
    });
  }
  getChartHTML(e) {
    let t2 = this.chart;
    return e && this.inlineStyles(), this.resolveCSSVariables(), t2.container.innerHTML;
  }
  getFilename() {
    let e = this.chart.userOptions.title?.text, t2 = this.options.filename;
    return t2 ? t2.replace(/\//g, "-") : ("string" == typeof e && (t2 = e.toLowerCase().replace(/<\/?[^>]+(>|$)/g, "").replace(/[\s_]+/g, "-").replace(/[^a-z\d\-]/g, "").replace(/^[\-]+/g, "").replace(/[\-]+/g, "-").substr(0, 24).replace(/[\-]+$/g, "")), (!t2 || t2.length < 5) && (t2 = "chart"), t2);
  }
  getSVG(e) {
    let t2 = this.chart, n2, i2, o2 = Q(t2.options, e);
    o2.plotOptions = Q(t2.userOptions.plotOptions, e?.plotOptions), o2.time = Q(t2.userOptions.time, e?.time);
    let r2 = q("div", void 0, {
      position: "absolute",
      top: "-9999em",
      width: t2.chartWidth + "px",
      height: t2.chartHeight + "px"
    }, U.body), s2 = t2.renderTo.style.width, a2 = t2.renderTo.style.height, l2 = o2.exporting?.sourceWidth || o2.chart.width || /px$/.test(s2) && parseInt(s2, 10) || (o2.isGantt ? 800 : 600), c2 = o2.exporting?.sourceHeight || o2.chart.height || /px$/.test(a2) && parseInt(a2, 10) || 400;
    _(o2.chart, {
      animation: false,
      renderTo: r2,
      forExport: true,
      renderer: "SVGRenderer",
      width: l2,
      height: c2
    }), o2.exporting && (o2.exporting.enabled = false), delete o2.data, o2.series = [], t2.series.forEach(function(e2) {
      (i2 = Q(e2.userOptions, {
        animation: false,
        enableMouseTracking: false,
        showCheckbox: false,
        visible: e2.visible
      })).isInternal || o2?.series?.push(i2);
    });
    let p2 = {};
    t2.axes.forEach(function(e2) {
      e2.userOptions.internalKey || (e2.userOptions.internalKey = er()), o2 && !e2.options.isInternal && (p2[e2.coll] || (p2[e2.coll] = true, o2[e2.coll] = []), o2[e2.coll].push(Q(e2.userOptions, {
        visible: e2.visible,
        type: e2.type,
        uniqueNames: e2.uniqueNames
      })));
    }), o2.colorAxis = t2.userOptions.colorAxis;
    let h2 = new t2.constructor(o2, t2.callback);
    return e && ["xAxis", "yAxis", "series"].forEach(function(t3) {
      e[t3] && h2.update({
        [t3]: e[t3]
      });
    }), t2.axes.forEach(function(t3) {
      let n3 = X(h2.axes, (e2) => e2.options.internalKey === t3.userOptions.internalKey);
      if (n3) {
        let i3 = t3.getExtremes(), o3 = eo(e?.[t3.coll] || {})[0], r3 = "min" in o3 ? o3.min : i3.userMin, s3 = "max" in o3 ? o3.max : i3.userMax;
        (void 0 !== r3 && r3 !== n3.min || void 0 !== s3 && s3 !== n3.max) && n3.setExtremes(r3 ?? void 0, s3 ?? void 0, true, false);
      }
    }), n2 = h2.exporting?.getChartHTML(t2.styledMode || o2.exporting?.applyStyleSheets) || "", Y(t2, "getSVG", {
      chartCopy: h2
    }), n2 = _ea.sanitizeSVG(n2, o2), o2 = void 0, h2.destroy(), K(r2), n2;
  }
  getSVGForExport(e, t2) {
    let n2 = this.options;
    return this.getSVG(Q({
      chart: {
        borderRadius: 0
      }
    }, n2.chartOptions, t2, {
      exporting: {
        sourceWidth: e?.sourceWidth || n2.sourceWidth,
        sourceHeight: e?.sourceHeight || n2.sourceHeight
      }
    }));
  }
  inlineStyles() {
    let e, t2 = _ea.inlineDenylist, n2 = _ea.inlineAllowlist, i2 = {}, o2 = q("iframe", void 0, {
      width: "1px",
      height: "1px",
      visibility: "hidden"
    }, U.body), r2 = o2.contentWindow?.document;
    r2 && r2.body.appendChild(r2.createElementNS(G, "svg")), !function o3(s2) {
      let a2, l2, c2, p2, h2, d2, u2 = {};
      if (r2 && 1 === s2.nodeType && -1 === _ea.unstyledElements.indexOf(s2.nodeName)) {
        if (a2 = V.getComputedStyle(s2, null), l2 = "svg" === s2.nodeName ? {} : V.getComputedStyle(s2.parentNode, null), !i2[s2.nodeName]) {
          e = r2.getElementsByTagName("svg")[0], c2 = r2.createElementNS(s2.namespaceURI, s2.nodeName), e.appendChild(c2);
          let t3 = V.getComputedStyle(c2, null), n3 = {};
          for (let e2 in t3) e2.length < 1e3 && "string" == typeof t3[e2] && !/^\d+$/.test(e2) && (n3[e2] = t3[e2]);
          i2[s2.nodeName] = n3, "text" === s2.nodeName && delete i2.text.fill, e.removeChild(c2);
        }
        for (let e2 in a2) (I || j || B || Object.hasOwnProperty.call(a2, e2)) && function(e3, o4) {
          if (p2 = h2 = false, n2.length) {
            for (d2 = n2.length; d2-- && !h2; ) h2 = n2[d2].test(o4);
            p2 = !h2;
          }
          for ("transform" === o4 && "none" === e3 && (p2 = true), d2 = t2.length; d2-- && !p2; ) {
            if (o4.length > 1e3) throw Error("Input too long");
            p2 = t2[d2].test(o4) || "function" == typeof e3;
          }
          !p2 && (l2[o4] !== e3 || "svg" === s2.nodeName) && i2[s2.nodeName][o4] !== e3 && (_ea.inlineToAttributes && -1 === _ea.inlineToAttributes.indexOf(o4) ? u2[o4] = e3 : e3 && s2.setAttribute(_ea.hyphenate(o4), e3));
        }(a2[e2], e2);
        if (z(s2, u2), "svg" === s2.nodeName && s2.setAttribute("stroke-width", "1px"), "text" === s2.nodeName) return;
        [].forEach.call(s2.children || s2.childNodes, o3);
      }
    }(this.chart.container.querySelector("svg")), e.parentNode.removeChild(e), o2.parentNode.removeChild(o2);
  }
  localExport(e, t2) {
    return __async(this, null, function* () {
      let n2 = this.chart, i2, o2, r2 = null, s2;
      if (j && n2.styledMode && !_ea.inlineAllowlist.length && _ea.inlineAllowlist.push(/^blockSize/, /^border/, /^caretColor/, /^color/, /^columnRule/, /^columnRuleColor/, /^cssFloat/, /^cursor/, /^fill$/, /^fillOpacity/, /^font/, /^inlineSize/, /^length/, /^lineHeight/, /^opacity/, /^outline/, /^parentRule/, /^rx$/, /^ry$/, /^stroke/, /^textAlign/, /^textAnchor/, /^textDecoration/, /^transform/, /^vectorEffect/, /^visibility/, /^x$/, /^y$/), j && ("application/pdf" === e.type || n2.container.getElementsByTagName("image").length && "image/svg+xml" !== e.type) || "application/pdf" === e.type && [].some.call(n2.container.getElementsByTagName("image"), function(e2) {
        let t3 = e2.getAttribute("href");
        return "" !== t3 && "string" == typeof t3 && 0 !== t3.indexOf("data:");
      })) return void (yield this.fallbackToServer(e, Error("Image type not supported for this chart/browser.")));
      let a2 = W(n2, "getSVG", (e2) => {
        o2 = e2.chartCopy.options, s2 = (i2 = e2.chartCopy.container.cloneNode(true)) && i2.getElementsByTagName("image") || [];
      });
      try {
        let n3;
        for (let n4 of (this.getSVGForExport(e, t2), s2 ? Array.from(s2) : [])) if (r2 = n4.getAttributeNS("http://www.w3.org/1999/xlink", "href")) {
          _ea.objectURLRevoke = false;
          let t3 = yield _ea.imageToDataURL(r2, e?.scale || 1, e?.type || "image/png");
          n4.setAttributeNS("http://www.w3.org/1999/xlink", "href", t3);
        } else n4.parentNode.removeChild(n4);
        let a3 = (n3 = i2?.innerHTML, _ea.sanitizeSVG(n3 || "", o2));
        if (a3.indexOf("<foreignObject") > -1 && "image/svg+xml" !== e.type && (j || "application/pdf" === e.type)) throw Error("Image type not supported for charts with embedded HTML");
        return yield this.downloadSVG(a3, _({
          filename: this.getFilename()
        }, e)), a3;
      } catch (t3) {
        yield this.fallbackToServer(e, t3);
      } finally {
        a2();
      }
    });
  }
  moveContainers(e) {
    let t2 = this.chart, {
      scrollablePlotArea: n2
    } = t2;
    (n2 ? [n2.fixedDiv, n2.scrollingContainer] : [t2.container]).forEach(function(t3) {
      e.appendChild(t3);
    });
  }
  print() {
    let e = this.chart;
    this.isPrinting || (_ea.printingChart = e, B || this.beforePrint(), setTimeout(() => {
      V.focus(), V.print(), B || setTimeout(() => {
        e.exporting?.afterPrint();
      }, 1e3);
    }, 1));
  }
  render() {
    let e = this, {
      chart: t2,
      options: n2
    } = e, i2 = e?.isDirty || !e?.svgElements.length;
    e.buttonOffset = 0, e.isDirty && e.destroy(), i2 && false !== n2.enabled && (e.events = [], e.group || (e.group = t2.renderer.g("exporting-group").attr({
      zIndex: 3
    }).add()), ee(n2?.buttons, function(t3) {
      e.addButton(t3);
    }), e.isDirty = false);
  }
  resolveCSSVariables() {
    Array.from(this.chart.container.querySelectorAll("*")).forEach((e) => {
      ["color", "fill", "stop-color", "stroke"].forEach((t2) => {
        let n2 = e.getAttribute(t2);
        n2?.includes("var(") && e.setAttribute(t2, getComputedStyle(e).getPropertyValue(t2));
        let i2 = e.style?.[t2];
        i2?.includes("var(") && (e.style[t2] = getComputedStyle(e).getPropertyValue(t2));
      });
    });
  }
  update(e, t2) {
    this.isDirty = true, Q(true, this.options, e), et(t2, true) && this.chart.redraw();
  }
};
ea.inlineAllowlist = [], ea.inlineDenylist = [/-/, /^(clipPath|cssText|d|height|width)$/, /^font$/, /[lL]ogical(Width|Height)$/, /^parentRule$/, /^(cssRules|ownerRules)$/, /perspective/, /TapHighlightColor/, /^transition/, /^length$/, /^\d+$/], ea.inlineToAttributes = ["fill", "stroke", "strokeLinecap", "strokeLinejoin", "strokeWidth", "textAnchor", "x", "y"], ea.loadEventDeferDelay = 150 * !!j, ea.unstyledElements = ["clipPath", "defs", "desc"], function(e) {
  function t2(e2) {
    let t3 = e2.exporting;
    t3 && (t3.render(), W(e2, "redraw", function() {
      this.exporting?.render();
    }), W(e2, "destroy", function() {
      this.exporting?.destroy();
    }));
  }
  function n2() {
    let t3 = this;
    t3.options.exporting && (t3.exporting = new e(t3, t3.options.exporting), d.compose(t3).navigation.addUpdate((e2, n3) => {
      t3.exporting && (t3.exporting.isDirty = true, Q(true, t3.options.navigation, e2), et(n3, true) && t3.redraw());
    }));
  }
  function i2({
    alignTo: e2,
    key: t3,
    textPxLength: n3
  }) {
    let i3 = this.options.exporting, {
      align: o2,
      buttonSpacing: r2 = 0,
      verticalAlign: s2,
      width: a2 = 0
    } = Q(this.options.navigation?.buttonOptions, i3?.buttons?.contextButton), l2 = e2.width - n3, c2 = a2 + r2;
    (i3?.enabled ?? true) && "title" === t3 && "right" === o2 && "top" === s2 && l2 < 2 * c2 && (l2 < c2 ? e2.width -= c2 : this.title?.alignValue !== "left" && (e2.x -= c2 - l2 / 2));
  }
  e.compose = function(o2, r2) {
    v.compose(r2), k.compose(o2), en(H, "Exporting") && (_(c().prototype, {
      exportChart: function(e2, t3) {
        return __async(this, null, function* () {
          yield this.exporting?.exportChart(e2, t3);
        });
      },
      getChartHTML: function(e2) {
        return this.exporting?.getChartHTML(e2);
      },
      getFilename: function() {
        return this.exporting?.getFilename();
      },
      getSVG: function(e2) {
        return this.exporting?.getSVG(e2);
      },
      print: function() {
        return this.exporting?.print();
      }
    }), o2.prototype.callbacks.push(t2), W(o2, "afterInit", n2), W(o2, "layOutTitle", i2), B && V.matchMedia("print").addListener(function(t3) {
      e.printingChart && (t3.matches ? e.printingChart.exporting?.beforePrint() : e.printingChart.exporting?.afterPrint());
    }), M(w));
  };
}(ea || (ea = {}));
var el = ea;
var ec = r();
ec.Exporting = el, ec.HttpUtilities = ec.HttpUtilities || P, ec.ajax = ec.HttpUtilities.ajax, ec.getJSON = ec.HttpUtilities.getJSON, ec.post = ec.HttpUtilities.post, el.compose(ec.Chart, ec.Renderer);
var ep = r();
export {
  ep as default
};
//# sourceMappingURL=highcharts_esm_modules_exporting.js.map
