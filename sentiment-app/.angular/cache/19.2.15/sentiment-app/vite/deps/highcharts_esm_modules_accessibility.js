import {
  l$
} from "./chunk-PGQUEOWL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/highcharts/esm/modules/accessibility.js
var e;
var i;
var n;
var s;
var r;
var o = {};
o.n = (e10) => {
  var t = e10 && e10.__esModule ? () => e10.default : () => e10;
  return o.d(t, {
    a: t
  }), t;
}, o.d = (e10, t) => {
  for (var i10 in t) o.o(t, i10) && !o.o(e10, i10) && Object.defineProperty(e10, i10, {
    enumerable: true,
    get: t[i10]
  });
}, o.o = (e10, t) => Object.prototype.hasOwnProperty.call(e10, t);
var a = l$;
var l = o.n(a);
var {
  doc: h,
  win: d
} = l();
var {
  css: c
} = l();
var u = d.EventTarget && new d.EventTarget() || "none";
function p(e10) {
  if ("function" == typeof d.MouseEvent) return new d.MouseEvent(e10.type, e10);
  if (h?.createEvent) {
    let t = h.createEvent("MouseEvent");
    if (t.initMouseEvent) return t.initMouseEvent(e10.type, e10.bubbles, e10.cancelable, e10.view || d, e10.detail, e10.screenX, e10.screenY, e10.clientX, e10.clientY, e10.ctrlKey, e10.altKey, e10.shiftKey, e10.metaKey, e10.button, e10.relatedTarget), t;
  }
  return g(e10.type);
}
function g(e10, t, i10) {
  let n10 = t || {
    x: 0,
    y: 0
  };
  if ("function" == typeof d.MouseEvent) return new d.MouseEvent(e10, {
    bubbles: true,
    cancelable: true,
    composed: true,
    button: 0,
    buttons: 1,
    relatedTarget: i10 || u,
    view: d,
    detail: +("click" === e10),
    screenX: n10.x,
    screenY: n10.y,
    clientX: n10.x,
    clientY: n10.y
  });
  if (h?.createEvent) {
    let t10 = h.createEvent("MouseEvent");
    if (t10.initMouseEvent) return t10.initMouseEvent(e10, true, true, d, +("click" === e10), n10.x, n10.y, n10.x, n10.y, false, false, false, false, 0, null), t10;
  }
  return {
    type: e10
  };
}
var m = {
  addClass: function(e10, t) {
    e10.classList ? e10.classList.add(t) : 0 > e10.className.indexOf(t) && (e10.className += " " + t);
  },
  cloneMouseEvent: p,
  cloneTouchEvent: function(e10) {
    let t = (e11) => {
      let t10 = [];
      for (let i11 = 0; i11 < e11.length; ++i11) {
        let n10 = e11.item(i11);
        n10 && t10.push(n10);
      }
      return t10;
    };
    if ("function" == typeof d.TouchEvent) {
      let i11 = new d.TouchEvent(e10.type, {
        touches: t(e10.touches),
        targetTouches: t(e10.targetTouches),
        changedTouches: t(e10.changedTouches),
        ctrlKey: e10.ctrlKey,
        shiftKey: e10.shiftKey,
        altKey: e10.altKey,
        metaKey: e10.metaKey,
        bubbles: e10.bubbles,
        cancelable: e10.cancelable,
        composed: e10.composed,
        detail: e10.detail,
        view: e10.view
      });
      return e10.defaultPrevented && i11.preventDefault(), i11;
    }
    let i10 = p(e10);
    return i10.touches = e10.touches, i10.changedTouches = e10.changedTouches, i10.targetTouches = e10.targetTouches, i10;
  },
  escapeStringForHTML: function(e10) {
    return e10.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
  },
  getElement: function(e10) {
    return h.getElementById(e10);
  },
  getFakeMouseEvent: g,
  getHeadingTagNameForElement: function(e10) {
    let t = (e11) => "h" + Math.min(6, parseInt(e11.slice(1), 10) + 1), i10 = (e11) => /^H[1-6]$/i.test(e11), n10 = (e11) => {
      let t10 = e11;
      for (; t10 = t10.previousSibling; ) {
        let e12 = t10.tagName || "";
        if (i10(e12)) return e12;
      }
      return "";
    }, s2 = (e11) => {
      let r2 = n10(e11);
      if (r2) return t(r2);
      let o2 = e11.parentElement;
      if (!o2) return "h6";
      let a2 = o2.tagName;
      return i10(a2) ? t(a2) : s2(o2);
    };
    return s2(e10);
  },
  removeChildNodes: function(e10) {
    for (; e10.lastChild; ) e10.removeChild(e10.lastChild);
  },
  removeClass: function(e10, t) {
    e10.classList ? e10.classList.remove(t) : e10.className = e10.className.replace(RegExp(t, "g"), "");
  },
  removeElement: function(e10) {
    e10 && e10.parentNode && e10.parentNode.removeChild(e10);
  },
  reverseChildNodes: function(e10) {
    let t = e10.childNodes.length;
    for (; t--; ) e10.appendChild(e10.childNodes[t]);
  },
  simulatedEventTarget: u,
  stripHTMLTagsFromString: function(e10, t = false) {
    return "string" == typeof e10 ? t ? e10.replace(/<\/?[^>]+(>|$)/g, "") : e10.replace(/<\/?(?!\s)[^>]+(>|$)/g, "") : e10;
  },
  visuallyHideElement: function(e10) {
    c(e10, {
      position: "absolute",
      width: "1px",
      height: "1px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      clip: "rect(1px, 1px, 1px, 1px)",
      marginTop: "-3px",
      "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)",
      filter: "alpha(opacity=1)",
      opacity: 0.01
    });
  }
};
var b = l$.Templating;
var f = o.n(b);
var {
  format: x
} = f();
var {
  getNestedProperty: y,
  pick: v
} = l();
var w = i || (i = {});
function E(e10, t, i10) {
  let n10 = (e11, t10) => {
    let i11 = e11.slice(t10 || 0), n11 = i11.indexOf("{"), s3 = i11.indexOf("}");
    if (n11 > -1 && s3 > n11) return {
      statement: i11.substring(n11 + 1, s3),
      begin: t10 + n11 + 1,
      end: t10 + s3
    };
  }, s2 = [], r2, o2, a2 = 0;
  do
    r2 = n10(e10, a2), (o2 = e10.substring(a2, r2 && r2.begin - 1)).length && s2.push({
      value: o2,
      type: "constant"
    }), r2 && s2.push({
      value: r2.statement,
      type: "statement"
    }), a2 = r2 ? r2.end + 1 : a2 + 1;
  while (r2);
  return s2.forEach((e11) => {
    "statement" === e11.type && (e11.value = function(e12, t10) {
      let i11, n11, s3 = e12.indexOf("#each("), r3 = e12.indexOf("#plural("), o3 = e12.indexOf("["), a3 = e12.indexOf("]");
      if (s3 > -1) {
        let r4 = e12.slice(s3).indexOf(")") + s3, o4 = e12.substring(0, s3), a4 = e12.substring(r4 + 1), l3 = e12.substring(s3 + 6, r4).split(","), h2 = Number(l3[1]), d2;
        if (n11 = "", i11 = y(l3[0], t10)) {
          d2 = (h2 = isNaN(h2) ? i11.length : h2) < 0 ? i11.length + h2 : Math.min(h2, i11.length);
          for (let e13 = 0; e13 < d2; ++e13) n11 += o4 + i11[e13] + a4;
        }
        return n11.length ? n11 : "";
      }
      if (r3 > -1) {
        var l2;
        let i12 = e12.slice(r3).indexOf(")") + r3, s4 = e12.substring(r3 + 8, i12).split(",");
        switch (Number(y(s4[0], t10))) {
          case 0:
            n11 = v(s4[4], s4[1]);
            break;
          case 1:
            n11 = v(s4[2], s4[1]);
            break;
          case 2:
            n11 = v(s4[3], s4[1]);
            break;
          default:
            n11 = s4[1];
        }
        return n11 ? (l2 = n11).trim && l2.trim() || l2.replace(/^\s+|\s+$/g, "") : "";
      }
      if (o3 > -1) {
        let n12, s4 = e12.substring(0, o3), r4 = Number(e12.substring(o3 + 1, a3));
        return i11 = y(s4, t10), !isNaN(r4) && i11 && (r4 < 0 ? void 0 === (n12 = i11[i11.length + r4]) && (n12 = i11[0]) : void 0 === (n12 = i11[r4]) && (n12 = i11[i11.length - 1])), void 0 !== n12 ? n12 : "";
      }
      return "{" + e12 + "}";
    }(e11.value, t));
  }), x(s2.reduce((e11, t10) => e11 + t10.value, ""), t, i10);
}
function A(e10, t) {
  let i10 = e10.split("."), n10 = this.options.lang, s2 = 0;
  for (; s2 < i10.length; ++s2) n10 = n10 && n10[i10[s2]];
  return "string" == typeof n10 ? E(n10, t, this) : "";
}
w.compose = function(e10) {
  let t = e10.prototype;
  t.langFormat || (t.langFormat = A);
}, w.i18nFormat = E;
var T = i;
var {
  doc: M
} = l();
var {
  stripHTMLTagsFromString: C
} = m;
var {
  defined: k,
  find: S,
  fireEvent: P
} = l();
function D(e10) {
  if (e10.points && e10.points.length) {
    let t = S(e10.points, (e11) => !!e11.graphic);
    return t && t.graphic && t.graphic.element;
  }
}
function N(e10) {
  let t = D(e10);
  return t && t.parentNode || e10.graph && e10.graph.element || e10.group && e10.group.element;
}
var B = {
  fireEventOnWrappedOrUnwrappedElement: function e2(t, i10) {
    let n10 = i10.type, s2 = t.hcEvents;
    M?.createEvent && (t.dispatchEvent || t.fireEvent) ? t.dispatchEvent ? t.dispatchEvent(i10) : t.fireEvent(n10, i10) : s2 && s2[n10] ? P(t, n10, i10) : t.element && e2(t.element, i10);
  },
  getChartTitle: function(e10) {
    return C(e10.options.title.text || e10.langFormat("accessibility.defaultChartTitle", {
      chart: e10
    }), e10.renderer.forExport);
  },
  getAxisDescription: function(e10) {
    return e10 && (e10.options.accessibility?.description || e10.axisTitle?.textStr || e10.options.id || e10.categories && "categories" || e10.dateTime && "Time" || "values");
  },
  getAxisRangeDescription: function(e10) {
    let t = e10.options || {};
    return t.accessibility && void 0 !== t.accessibility.rangeDescription ? t.accessibility.rangeDescription : e10.categories ? function(e11) {
      let t10 = e11.chart;
      return e11.dataMax && e11.dataMin ? t10.langFormat("accessibility.axis.rangeCategories", {
        chart: t10,
        axis: e11,
        numCategories: e11.dataMax - e11.dataMin + 1
      }) : "";
    }(e10) : e10.dateTime && (0 === e10.min || 0 === e10.dataMin) ? function(e11) {
      let t10 = e11.chart, i10 = {}, n10 = e11.dataMin || e11.min || 0, s2 = e11.dataMax || e11.max || 0, r2 = "Seconds";
      i10.Seconds = (s2 - n10) / 1e3, i10.Minutes = i10.Seconds / 60, i10.Hours = i10.Minutes / 60, i10.Days = i10.Hours / 24, ["Minutes", "Hours", "Days"].forEach(function(e12) {
        i10[e12] > 2 && (r2 = e12);
      });
      let o2 = i10[r2].toFixed(+("Seconds" !== r2 && "Minutes" !== r2));
      return t10.langFormat("accessibility.axis.timeRange" + r2, {
        chart: t10,
        axis: e11,
        range: o2.replace(".0", "")
      });
    }(e10) : function(e11) {
      let t10 = e11.chart, i10 = t10.options, n10 = i10 && i10.accessibility && i10.accessibility.screenReaderSection.axisRangeDateFormat || "", s2 = {
        min: e11.dataMin || e11.min || 0,
        max: e11.dataMax || e11.max || 0
      }, r2 = function(i11) {
        return e11.dateTime ? t10.time.dateFormat(n10, s2[i11]) : s2[i11].toString();
      };
      return t10.langFormat("accessibility.axis.rangeFromTo", {
        chart: t10,
        axis: e11,
        rangeFrom: r2("min"),
        rangeTo: r2("max")
      });
    }(e10);
  },
  getPointFromXY: function(e10, t, i10) {
    let n10 = e10.length, s2;
    for (; n10--; ) if (s2 = S(e10[n10].points || [], function(e11) {
      return e11.x === t && e11.y === i10;
    })) return s2;
  },
  getSeriesFirstPointElement: D,
  getSeriesFromName: function(e10, t) {
    return t ? (e10.series || []).filter(function(e11) {
      return e11.name === t;
    }) : e10.series;
  },
  getSeriesA11yElement: N,
  unhideChartElementFromAT: function e3(t, i10) {
    i10.setAttribute("aria-hidden", false), i10 !== t.renderTo && i10.parentNode && i10.parentNode !== M.body && (Array.prototype.forEach.call(i10.parentNode.childNodes, function(e10) {
      e10.hasAttribute("aria-hidden") || e10.setAttribute("aria-hidden", true);
    }), e3(t, i10.parentNode));
  },
  hideSeriesFromAT: function(e10) {
    let t = N(e10);
    t && t.setAttribute("aria-hidden", true);
  },
  scrollAxisToPoint: function(e10) {
    let t = e10.series.xAxis, i10 = e10.series.yAxis, n10 = t && t.scrollbar ? t : i10, s2 = n10 && n10.scrollbar;
    if (s2 && k(s2.to) && k(s2.from)) {
      let t10 = s2.to - s2.from, i11 = function(e11, t11) {
        if (!k(e11.dataMin) || !k(e11.dataMax)) return 0;
        let i12 = e11.toPixels(e11.dataMin), n11 = e11.toPixels(e11.dataMax), s3 = "xAxis" === e11.coll ? "x" : "y";
        return (e11.toPixels(t11[s3] || 0) - i12) / (n11 - i12);
      }(n10, e10);
      s2.updatePosition(i11 - t10 / 2, i11 + t10 / 2), P(s2, "changed", {
        from: s2.from,
        to: s2.to,
        trigger: "scrollbar",
        DOMEvent: null
      });
    }
  }
};
var {
  doc: I
} = l();
var {
  removeElement: F
} = m;
var O = class {
  constructor() {
    this.elements = [];
  }
  createElement() {
    let e10 = I.createElement.apply(I, arguments);
    return this.elements.push(e10), e10;
  }
  removeElement(e10) {
    F(e10), this.elements.splice(this.elements.indexOf(e10), 1);
  }
  destroyCreatedElements() {
    this.elements.forEach(function(e10) {
      F(e10);
    }), this.elements = [];
  }
};
var {
  addEvent: R
} = l();
var L = class {
  constructor() {
    this.eventRemovers = [];
  }
  addEvent() {
    let e10 = R.apply(l(), arguments);
    return this.eventRemovers.push({
      element: arguments[0],
      remover: e10
    }), e10;
  }
  removeEvent(e10) {
    let t = this.eventRemovers.map((e11) => e11.remover).indexOf(e10);
    this.eventRemovers[t].remover(), this.eventRemovers.splice(t, 1);
  }
  removeAddedEvents() {
    this.eventRemovers.map((e10) => e10.remover).forEach((e10) => e10()), this.eventRemovers = [];
  }
};
var {
  fireEventOnWrappedOrUnwrappedElement: H
} = B;
var {
  getFakeMouseEvent: z
} = m;
var q = class {
  destroy() {
  }
  getKeyboardNavigation() {
    return [];
  }
  init() {
  }
  onChartRender() {
  }
  onChartUpdate() {
  }
  initBase(e10, t) {
    this.chart = e10, this.eventProvider = new L(), this.domElementProvider = new O(), this.proxyProvider = t, this.keyCodes = {
      left: 37,
      right: 39,
      up: 38,
      down: 40,
      enter: 13,
      space: 32,
      esc: 27,
      tab: 9,
      pageUp: 33,
      pageDown: 34,
      end: 35,
      home: 36
    };
  }
  addEvent(e10, t, i10, n10) {
    return this.eventProvider.addEvent(e10, t, i10, n10);
  }
  createElement(e10, t) {
    return this.domElementProvider.createElement(e10, t);
  }
  fakeClickEvent(e10) {
    H(e10, z("click"));
  }
  destroyBase() {
    this.domElementProvider.destroyCreatedElements(), this.eventProvider.removeAddedEvents();
  }
};
var {
  find: U
} = l();
var K = class {
  constructor(e10, t) {
    this.chart = e10, this.keyCodeMap = t.keyCodeMap || [], this.validate = t.validate, this.init = t.init, this.terminate = t.terminate, this.response = {
      success: 1,
      prev: 2,
      next: 3,
      noHandler: 4,
      fail: 5
    };
  }
  run(e10) {
    let t = e10.which || e10.keyCode, i10 = this.response.noHandler, n10 = U(this.keyCodeMap, function(e11) {
      return e11[0].indexOf(t) > -1;
    });
    return n10 ? i10 = n10[1].call(this, t, e10) : 9 === t && (i10 = this.response[e10.shiftKey ? "prev" : "next"]), i10;
  }
};
var {
  unhideChartElementFromAT: G,
  getChartTitle: W
} = B;
var {
  doc: V
} = l();
var {
  stripHTMLTagsFromString: X
} = m;
var Y = class extends q {
  onChartUpdate() {
    this.handleSVGTitleElement(), this.setSVGContainerLabel(), this.setGraphicContainerAttrs(), this.setRenderToAttrs(), this.makeCreditsAccessible();
  }
  handleSVGTitleElement() {
    let e10 = this.chart, t = "highcharts-title-" + e10.index, i10 = X(e10.langFormat("accessibility.svgContainerTitle", {
      chartTitle: W(e10)
    }));
    if (i10.length) {
      let n10 = this.svgTitleElement = this.svgTitleElement || V.createElementNS("http://www.w3.org/2000/svg", "title");
      n10.textContent = i10, n10.id = t, e10.renderTo.insertBefore(n10, e10.renderTo.firstChild);
    }
  }
  setSVGContainerLabel() {
    let e10 = this.chart, t = e10.langFormat("accessibility.svgContainerLabel", {
      chartTitle: W(e10)
    });
    e10.renderer.box && t.length && e10.renderer.box.setAttribute("aria-label", t);
  }
  setGraphicContainerAttrs() {
    let e10 = this.chart, t = e10.langFormat("accessibility.graphicContainerLabel", {
      chartTitle: W(e10)
    });
    t.length && e10.container.setAttribute("aria-label", t);
  }
  setRenderToAttrs() {
    let e10 = this.chart, t = "disabled" !== e10.options.accessibility.landmarkVerbosity, i10 = e10.langFormat("accessibility.chartContainerLabel", {
      title: W(e10),
      chart: e10
    });
    i10 && (e10.renderTo.setAttribute("role", t ? "region" : "group"), e10.renderTo.setAttribute("aria-label", i10));
  }
  makeCreditsAccessible() {
    let e10 = this.chart, t = e10.credits;
    t && (t.textStr && t.element.setAttribute("aria-label", e10.langFormat("accessibility.credits", {
      creditsStr: X(t.textStr, e10.renderer.forExport)
    })), G(e10, t.element));
  }
  getKeyboardNavigation() {
    let e10 = this.chart;
    return new K(e10, {
      keyCodeMap: [],
      validate: function() {
        return true;
      },
      init: function() {
        let t = e10.accessibility;
        t && t.keyboardNavigation.tabindexContainer.focus();
      }
    });
  }
  destroy() {
    this.chart.renderTo.setAttribute("aria-hidden", true);
  }
};
var {
  addEvent: j,
  pick: Z
} = l();
!function(e10) {
  let t = ["x", "y", "transform", "width", "height", "r", "d", "stroke-width"];
  function i10() {
    let e11 = this.focusElement, t10 = this.options.accessibility.keyboardNavigation.focusBorder;
    e11 && (e11.removeFocusBorder(), t10.enabled && e11.addFocusBorder(t10.margin, {
      stroke: t10.style.color,
      strokeWidth: t10.style.lineWidth,
      r: t10.style.borderRadius
    }));
  }
  function n10(e11, t10) {
    let i11 = this.options.accessibility.keyboardNavigation.focusBorder, n11 = t10 || e11.element;
    n11 && n11.focus && (n11.hcEvents && n11.hcEvents.focusin || j(n11, "focusin", function() {
    }), n11.focus(), i11.hideBrowserFocusOutline && (n11.style.outline = "none")), this.focusElement && this.focusElement.removeFocusBorder(), this.focusElement = e11, this.renderFocusBorder();
  }
  function s2(e11, i11) {
    this.focusBorder && this.removeFocusBorder();
    let n11 = this.getBBox(), s3 = Z(e11, 3), r3 = this.parentGroup, o2 = this.scaleX || r3 && r3.scaleX, a2 = this.scaleY || r3 && r3.scaleY, l2 = (o2 ? !a2 : a2) ? Math.abs(o2 || a2 || 1) : (Math.abs(o2 || 1) + Math.abs(a2 || 1)) / 2, h2 = this.renderer.fontMetrics(this).h;
    n11.x += this.translateX ? this.translateX : 0, n11.y += this.translateY ? this.translateY : 0;
    let d2 = n11.x - s3, c2 = n11.y - s3, u2 = n11.width + 2 * s3, p2 = n11.height + 2 * s3, g2 = !!this.text;
    if ("text" === this.element.nodeName || g2) {
      let e12, t10, i12 = !!this.rotation, r4 = g2 ? {
        x: +!!i12,
        y: 0
      } : (e12 = 0, t10 = 0, "middle" === this.attr("text-anchor") ? e12 = t10 = 0.5 : this.rotation ? e12 = 0.25 : t10 = 0.75, {
        x: e12,
        y: t10
      }), o3 = +this.attr("x"), a3 = +this.attr("y");
      if (isNaN(o3) || (d2 = o3 - n11.width * r4.x - s3), isNaN(a3) || (c2 = a3 - ("start" === this.attr("text-anchor") ? h2 : n11.height) * r4.y - s3), g2 && i12) {
        let e13 = u2;
        u2 = p2, p2 = e13, isNaN(o3) || (d2 = o3 - n11.height * r4.x - s3), isNaN(a3) || (c2 = a3 - n11.width * r4.y - s3);
      }
    }
    this.focusBorder = this.renderer.rect(d2, c2, u2, p2, parseInt((i11 && i11.r || 0).toString(), 10) / l2).addClass("highcharts-focus-border").attr({
      zIndex: 99
    }).add(r3), this.renderer.styledMode || this.focusBorder.attr({
      stroke: i11 && i11.stroke,
      "stroke-width": (i11 && i11.strokeWidth || 0) / l2
    }), function(e12, ...i12) {
      e12.focusBorderUpdateHooks || (e12.focusBorderUpdateHooks = {}, t.forEach((t10) => {
        let n12 = t10 + "Setter", s4 = e12[n12] || e12._defaultSetter;
        e12.focusBorderUpdateHooks[n12] = s4, e12[n12] = function() {
          let t11 = s4.apply(e12, arguments);
          return e12.addFocusBorder.apply(e12, i12), t11;
        };
      }));
    }(this, e11, i11), function(e12) {
      if (e12.focusBorderDestroyHook) return;
      let t10 = e12.destroy;
      e12.destroy = function() {
        return e12.focusBorder && e12.focusBorder.destroy && e12.focusBorder.destroy(), t10.apply(e12, arguments);
      }, e12.focusBorderDestroyHook = t10;
    }(this);
  }
  function r2() {
    var e11;
    e11 = this, e11.focusBorderUpdateHooks && (Object.keys(e11.focusBorderUpdateHooks).forEach((t10) => {
      let i11 = e11.focusBorderUpdateHooks[t10];
      i11 === e11._defaultSetter ? delete e11[t10] : e11[t10] = i11;
    }), delete e11.focusBorderUpdateHooks), this.focusBorderDestroyHook && (this.destroy = this.focusBorderDestroyHook, delete this.focusBorderDestroyHook), this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder);
  }
  e10.compose = function(e11, t10) {
    let o2 = e11.prototype, a2 = t10.prototype;
    o2.renderFocusBorder || (o2.renderFocusBorder = i10, o2.setFocusToElement = n10), a2.addFocusBorder || (a2.addFocusBorder = s2, a2.removeFocusBorder = r2);
  };
}(n || (n = {}));
var $ = n;
var _ = l$.AST;
var Q = o.n(_);
var {
  doc: J
} = l();
var {
  addClass: ee,
  visuallyHideElement: et
} = m;
var {
  attr: ei
} = l();
var en = class {
  constructor(e10, t) {
    this.chart = e10, this.domElementProvider = new O(), this.announceRegion = this.addAnnounceRegion(t);
  }
  destroy() {
    this.domElementProvider.destroyCreatedElements();
  }
  announce(e10) {
    Q().setElementHTML(this.announceRegion, e10), this.clearAnnouncementRegionTimer && clearTimeout(this.clearAnnouncementRegionTimer), this.clearAnnouncementRegionTimer = setTimeout(() => {
      this.announceRegion.innerHTML = Q().emptyHTML, delete this.clearAnnouncementRegionTimer;
    }, 3e3);
  }
  addAnnounceRegion(e10) {
    let t = this.chart.announcerContainer || this.createAnnouncerContainer(), i10 = this.domElementProvider.createElement("div");
    return ei(i10, {
      "aria-hidden": false,
      "aria-live": e10,
      "aria-atomic": true
    }), this.chart.styledMode ? ee(i10, "highcharts-visually-hidden") : et(i10), t.appendChild(i10), i10;
  }
  createAnnouncerContainer() {
    let e10 = this.chart, t = J.createElement("div");
    return ei(t, {
      "aria-hidden": false,
      class: "highcharts-announcer-container"
    }), t.style.position = "relative", e10.renderTo.insertBefore(t, e10.renderTo.firstChild), e10.announcerContainer = t, t;
  }
};
var {
  escapeStringForHTML: es,
  stripHTMLTagsFromString: er
} = m;
function eo(e10) {
  return (e10.annotations || []).reduce((e11, t) => (t.options && false !== t.options.visible && (e11 = e11.concat(t.labels)), e11), []);
}
function ea(e10) {
  return e10.options && e10.options.accessibility && e10.options.accessibility.description || e10.graphic && e10.graphic.text && e10.graphic.text.textStr || "";
}
function el(e10) {
  let t = e10.options && e10.options.accessibility && e10.options.accessibility.description;
  if (t) return t;
  let i10 = e10.chart, n10 = ea(e10), s2 = e10.points, r2 = (e11) => e11.graphic && e11.graphic.element && e11.graphic.element.getAttribute("aria-label") || "", o2 = s2.filter((e11) => !!e11.graphic).map((e11) => {
    let t10 = e11.accessibility && e11.accessibility.valueDescription || r2(e11), i11 = e11 && e11.series.name || "";
    return (i11 ? i11 + ", " : "") + "data point " + t10;
  }).filter((e11) => !!e11), a2 = o2.length, l2 = a2 > 1 ? "MultiplePoints" : a2 ? "SinglePoint" : "NoPoints", h2 = {
    annotationText: n10,
    annotation: e10,
    numPoints: a2,
    annotationPoint: o2[0],
    additionalAnnotationPoints: o2.slice(1)
  };
  return i10.langFormat("accessibility.screenReaderSection.annotations.description" + l2, h2);
}
function eh(e10) {
  return eo(e10).map((t) => {
    let i10 = es(er(el(t), e10.renderer.forExport));
    return i10 ? `<li>${i10}</li>` : "";
  });
}
var ed = {
  getAnnotationsInfoHTML: function(e10) {
    let t = e10.annotations;
    if (!(t && t.length)) return "";
    let i10 = eh(e10);
    return `<ul style="list-style-type: none">${i10.join(" ")}</ul>`;
  },
  getAnnotationLabelDescription: el,
  getAnnotationListItems: eh,
  getPointAnnotationTexts: function(e10) {
    let t = eo(e10.series.chart).filter((t10) => t10.points.indexOf(e10) > -1);
    return t.length ? t.map((e11) => `${ea(e11)}`) : [];
  }
};
var {
  getAnnotationsInfoHTML: ec
} = ed;
var {
  getAxisDescription: eu,
  getAxisRangeDescription: ep,
  getChartTitle: eg,
  unhideChartElementFromAT: em
} = B;
var {
  format: eb
} = f();
var {
  doc: ef
} = l();
var {
  addClass: ex,
  getElement: ey,
  getHeadingTagNameForElement: ev,
  stripHTMLTagsFromString: ew,
  visuallyHideElement: eE
} = m;
var {
  attr: eA,
  pick: eT,
  replaceNested: eM
} = l();
function eC(e10) {
  return eM(e10, [/<([\w\-.:!]+)\b[^<>]*>\s*<\/\1>/g, ""]);
}
var ek = class extends q {
  constructor() {
    super(...arguments), this.screenReaderSections = {};
  }
  init() {
    let e10 = this.chart, t = this;
    this.initRegionsDefinitions(), this.addEvent(e10, "afterGetTableAST", function(e11) {
      t.onDataTableCreated(e11);
    }), this.addEvent(e10, "afterViewData", function(e11) {
      e11.wasHidden && (t.dataTableDiv = e11.element, setTimeout(function() {
        t.focusDataTable();
      }, 300));
    }), this.addEvent(e10, "afterHideData", function() {
      t.viewDataTableButton && t.viewDataTableButton.setAttribute("aria-expanded", "false");
    }), e10.exporting && this.addEvent(e10, "afterPrint", function() {
      t.updateAllScreenReaderSections();
    }), this.announcer = new en(e10, "assertive");
  }
  initRegionsDefinitions() {
    let e10 = this, t = this.chart.options.accessibility;
    this.screenReaderSections = {
      before: {
        element: null,
        buildContent: function(i10) {
          let n10 = t.screenReaderSection.beforeChartFormatter;
          return n10 ? n10(i10) : e10.defaultBeforeChartFormatter(i10);
        },
        insertIntoDOM: function(e11, t10) {
          t10.renderTo.insertBefore(e11, t10.renderTo.firstChild);
        },
        afterInserted: function() {
          void 0 !== e10.sonifyButtonId && e10.initSonifyButton(e10.sonifyButtonId), void 0 !== e10.dataTableButtonId && e10.initDataTableButton(e10.dataTableButtonId);
        }
      },
      after: {
        element: null,
        buildContent: function(i10) {
          let n10 = t.screenReaderSection.afterChartFormatter;
          return n10 ? n10(i10) : e10.defaultAfterChartFormatter();
        },
        insertIntoDOM: function(e11, t10) {
          t10.renderTo.insertBefore(e11, t10.container.nextSibling);
        },
        afterInserted: function() {
          e10.chart.accessibility && t.keyboardNavigation.enabled && e10.chart.accessibility.keyboardNavigation.updateExitAnchor();
        }
      }
    };
  }
  onChartRender() {
    this.linkedDescriptionElement = this.getLinkedDescriptionElement(), this.setLinkedDescriptionAttrs(), this.updateAllScreenReaderSections();
  }
  updateAllScreenReaderSections() {
    let e10 = this;
    Object.keys(this.screenReaderSections).forEach(function(t) {
      e10.updateScreenReaderSection(t);
    });
  }
  getLinkedDescriptionElement() {
    let e10 = this.chart.options.accessibility.linkedDescription;
    if (!e10) return;
    if ("string" != typeof e10) return e10;
    let t = eb(e10, this.chart), i10 = ef.querySelectorAll(t);
    if (1 === i10.length) return i10[0];
  }
  setLinkedDescriptionAttrs() {
    let e10 = this.linkedDescriptionElement;
    e10 && (e10.setAttribute("aria-hidden", "true"), ex(e10, "highcharts-linked-description"));
  }
  updateScreenReaderSection(e10) {
    let t = this.chart, i10 = this.screenReaderSections[e10], n10 = i10.buildContent(t), s2 = i10.element = i10.element || this.createElement("div"), r2 = s2.firstChild || this.createElement("div");
    n10 ? (this.setScreenReaderSectionAttribs(s2, e10), Q().setElementHTML(r2, n10), s2.appendChild(r2), i10.insertIntoDOM(s2, t), t.styledMode ? ex(r2, "highcharts-visually-hidden") : eE(r2), em(t, r2), i10.afterInserted && i10.afterInserted()) : (s2.parentNode && s2.parentNode.removeChild(s2), i10.element = null);
  }
  setScreenReaderSectionAttribs(e10, t) {
    let i10 = this.chart, n10 = i10.langFormat("accessibility.screenReaderSection." + t + "RegionLabel", {
      chart: i10,
      chartTitle: eg(i10)
    });
    eA(e10, {
      id: `highcharts-screen-reader-region-${t}-${i10.index}`,
      "aria-label": n10 || void 0
    }), e10.style.position = "relative", n10 && e10.setAttribute("role", "all" === i10.options.accessibility.landmarkVerbosity ? "region" : "group");
  }
  defaultBeforeChartFormatter() {
    let e10 = this.chart, t = e10.options.accessibility.screenReaderSection.beforeChartFormat;
    if (!t) return "";
    let i10 = this.getAxesDescription(), n10 = e10.sonify && e10.options.sonification && e10.options.sonification.enabled, s2 = "highcharts-a11y-sonify-data-btn-" + e10.index, r2 = "hc-linkto-highcharts-data-table-" + e10.index, o2 = ec(e10), a2 = e10.langFormat("accessibility.screenReaderSection.annotations.heading", {
      chart: e10
    }), l2 = {
      headingTagName: ev(e10.renderTo),
      chartTitle: eg(e10),
      typeDescription: this.getTypeDescriptionText(),
      chartSubtitle: this.getSubtitleText(),
      chartLongdesc: this.getLongdescText(),
      xAxisDescription: i10.xAxis,
      yAxisDescription: i10.yAxis,
      playAsSoundButton: n10 ? this.getSonifyButtonText(s2) : "",
      viewTableButton: e10.exporting?.getCSV ? this.getDataTableButtonText(r2) : "",
      annotationsTitle: o2 ? a2 : "",
      annotationsList: o2
    }, h2 = T.i18nFormat(t, l2, e10);
    return this.dataTableButtonId = r2, this.sonifyButtonId = s2, eC(h2);
  }
  defaultAfterChartFormatter() {
    let e10 = this.chart, t = e10.options.accessibility.screenReaderSection.afterChartFormat;
    if (!t) return "";
    let i10 = {
      endOfChartMarker: this.getEndOfChartMarkerText()
    };
    return eC(T.i18nFormat(t, i10, e10));
  }
  getLinkedDescription() {
    let e10 = this.linkedDescriptionElement;
    return ew(e10 && e10.innerHTML || "", this.chart.renderer.forExport);
  }
  getLongdescText() {
    let e10 = this.chart.options, t = e10.caption, i10 = t && t.text, n10 = this.getLinkedDescription();
    return e10.accessibility.description || n10 || i10 || "";
  }
  getTypeDescriptionText() {
    let e10 = this.chart;
    return e10.types ? e10.options.accessibility.typeDescription || function(e11, t) {
      let i10 = t[0], n10 = e11.series && e11.series[0] || {}, s2 = e11.mapView && e11.mapView.geoMap && e11.mapView.geoMap.title, r2 = {
        numSeries: e11.series.length,
        numPoints: n10.points && n10.points.length,
        chart: e11,
        mapTitle: s2
      };
      if (!i10) return e11.langFormat("accessibility.chartTypes.emptyChart", r2);
      if ("map" === i10 || "tiledwebmap" === i10) return r2.mapTitle ? e11.langFormat("accessibility.chartTypes.mapTypeDescription", r2) : e11.langFormat("accessibility.chartTypes.unknownMap", r2);
      if (e11.types.length > 1) return e11.langFormat("accessibility.chartTypes.combinationChart", r2);
      let o2 = t[0], a2 = e11.langFormat("accessibility.seriesTypeDescriptions." + o2, r2), l2 = e11.series && e11.series.length < 2 ? "Single" : "Multiple";
      return (e11.langFormat("accessibility.chartTypes." + o2 + l2, r2) || e11.langFormat("accessibility.chartTypes.default" + l2, r2)) + (a2 ? " " + a2 : "");
    }(e10, e10.types) : "";
  }
  getDataTableButtonText(e10) {
    let t = this.chart;
    return '<button id="' + e10 + '">' + t.langFormat("accessibility.table.viewAsDataTableButtonText", {
      chart: t,
      chartTitle: eg(t)
    }) + "</button>";
  }
  getSonifyButtonText(e10) {
    let t = this.chart;
    return t.options.sonification && false === t.options.sonification.enabled ? "" : '<button id="' + e10 + '">' + t.langFormat("accessibility.sonification.playAsSoundButtonText", {
      chart: t,
      chartTitle: eg(t)
    }) + "</button>";
  }
  getSubtitleText() {
    let e10 = this.chart.options.subtitle;
    return ew(e10 && e10.text || "", this.chart.renderer.forExport);
  }
  getEndOfChartMarkerText() {
    let e10 = ey(`highcharts-end-of-chart-marker-${this.chart.index}`);
    if (e10) return e10.outerHTML;
    let t = this.chart, i10 = t.langFormat("accessibility.screenReaderSection.endOfChartMarker", {
      chart: t
    });
    return '<div id="highcharts-end-of-chart-marker-' + t.index + '">' + i10 + "</div>";
  }
  onDataTableCreated(e10) {
    let t = this.chart;
    if (t.options.accessibility.enabled) {
      this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true");
      let i10 = e10.tree.attributes || {};
      i10.tabindex = -1, i10.summary = t.langFormat("accessibility.table.tableSummary", {
        chart: t
      }), e10.tree.attributes = i10;
    }
  }
  focusDataTable() {
    let e10 = this.dataTableDiv, t = e10 && e10.getElementsByTagName("table")[0];
    t && t.focus && t.focus();
  }
  initSonifyButton(e10) {
    let t = this.sonifyButton = ey(e10), i10 = this.chart, n10 = (e11) => {
      t && (t.setAttribute("aria-hidden", "true"), t.setAttribute("aria-label", "")), e11.preventDefault(), e11.stopPropagation();
      let n11 = i10.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", {
        chart: i10
      });
      this.announcer.announce(n11), setTimeout(() => {
        t && (t.removeAttribute("aria-hidden"), t.removeAttribute("aria-label")), i10.sonify && i10.sonify();
      }, 1e3);
    };
    t && i10 && (t.setAttribute("tabindex", -1), t.onclick = function(e11) {
      (i10.options.accessibility && i10.options.accessibility.screenReaderSection.onPlayAsSoundClick || n10).call(this, e11, i10);
    });
  }
  initDataTableButton(e10) {
    let t = this.viewDataTableButton = ey(e10), i10 = this.chart, n10 = e10.replace("hc-linkto-", "");
    t && (eA(t, {
      tabindex: -1,
      "aria-expanded": !!ey(n10)
    }), t.onclick = i10.options.accessibility.screenReaderSection.onViewDataTableClick || function() {
      i10.exporting?.viewData();
    });
  }
  getAxesDescription() {
    let e10 = this.chart, t = function(t10, i11) {
      let n11 = e10[t10];
      return n11.length > 1 || n11[0] && eT(n11[0].options.accessibility && n11[0].options.accessibility.enabled, i11);
    }, i10 = !!e10.types && 0 > e10.types.indexOf("map") && 0 > e10.types.indexOf("treemap") && 0 > e10.types.indexOf("tilemap"), n10 = !!e10.hasCartesianSeries, s2 = t("xAxis", !e10.angular && n10 && i10), r2 = t("yAxis", n10 && i10), o2 = {};
    return s2 && (o2.xAxis = this.getAxisDescriptionText("xAxis")), r2 && (o2.yAxis = this.getAxisDescriptionText("yAxis")), o2;
  }
  getAxisDescriptionText(e10) {
    let t = this.chart, i10 = t[e10];
    return t.langFormat("accessibility.axis." + e10 + "Description" + (i10.length > 1 ? "Plural" : "Singular"), {
      chart: t,
      names: i10.map(function(e11) {
        return eu(e11);
      }),
      ranges: i10.map(function(e11) {
        return ep(e11);
      }),
      numAxes: i10.length
    });
  }
  destroy() {
    this.announcer && this.announcer.destroy();
  }
};
var {
  attr: eS
} = l();
var {
  getChartTitle: eP,
  unhideChartElementFromAT: eD
} = B;
var {
  getFakeMouseEvent: eN
} = m;
function eB(e10) {
  return e10.exporting?.svgElements?.[0];
}
var eI = class extends q {
  init() {
    let e10 = this.chart, t = this;
    this.addEvent(e10, "exportMenuShown", function() {
      t.onMenuShown();
    }), this.addEvent(e10, "exportMenuHidden", function() {
      t.onMenuHidden();
    }), this.createProxyGroup();
  }
  onMenuHidden() {
    let e10 = this.chart.exporting?.contextMenuEl;
    e10 && e10.setAttribute("aria-hidden", "true"), this.setExportButtonExpandedState("false");
  }
  onMenuShown() {
    let e10 = this.chart, t = e10.exporting?.contextMenuEl;
    t && (this.addAccessibleContextMenuAttribs(), eD(e10, t)), this.setExportButtonExpandedState("true");
  }
  setExportButtonExpandedState(e10) {
    this.exportButtonProxy && this.exportButtonProxy.innerElement.setAttribute("aria-expanded", e10);
  }
  onChartRender() {
    let e10 = this.chart, t = e10.focusElement, i10 = e10.accessibility;
    this.proxyProvider.clearGroup("chartMenu"), this.proxyMenuButton(), this.exportButtonProxy && t && t === e10.exporting?.group && (t.focusBorder ? e10.setFocusToElement(t, this.exportButtonProxy.innerElement) : i10 && i10.keyboardNavigation.tabindexContainer.focus());
  }
  proxyMenuButton() {
    let e10 = this.chart, t = this.proxyProvider, i10 = eB(e10);
    (function(e11) {
      let t10 = e11.options.exporting, i11 = eB(e11);
      return !!(t10 && false !== t10.enabled && t10.accessibility && t10.accessibility.enabled && i11 && i11.element);
    })(e10) && i10 && (this.exportButtonProxy = t.addProxyElement("chartMenu", {
      click: i10
    }, "button", {
      "aria-label": e10.langFormat("accessibility.exporting.menuButtonLabel", {
        chart: e10,
        chartTitle: eP(e10)
      }),
      "aria-expanded": false,
      title: e10.options.lang.contextButtonTitle || null
    }));
  }
  createProxyGroup() {
    this.chart && this.proxyProvider && this.proxyProvider.addGroup("chartMenu");
  }
  addAccessibleContextMenuAttribs() {
    let e10 = this.chart, t = e10.exporting?.divElements;
    if (t && t.length) {
      t.forEach((e11) => {
        e11 && ("LI" !== e11.tagName || e11.children && e11.children.length ? e11.setAttribute("aria-hidden", "true") : e11.setAttribute("tabindex", -1));
      });
      let i10 = t[0] && t[0].parentNode;
      i10 && eS(i10, {
        "aria-hidden": void 0,
        "aria-label": e10.langFormat("accessibility.exporting.chartMenuLabel", {
          chart: e10
        }),
        role: "list"
      });
    }
  }
  getKeyboardNavigation() {
    let e10 = this.keyCodes, t = this.chart, i10 = this;
    return new K(t, {
      keyCodeMap: [[[e10.left, e10.up], function() {
        return i10.onKbdPrevious(this);
      }], [[e10.right, e10.down], function() {
        return i10.onKbdNext(this);
      }], [[e10.enter, e10.space], function() {
        return i10.onKbdClick(this);
      }]],
      validate: function() {
        return !!t.exporting && t.options.exporting?.buttons?.contextButton.enabled !== false && false !== t.options.exporting.enabled && false !== (t.options.exporting.accessibility?.enabled || false);
      },
      init: function() {
        let e11 = i10.exportButtonProxy, n10 = i10.chart.exporting?.group;
        e11 && n10 && t.setFocusToElement(n10, e11.innerElement);
      },
      terminate: function() {
        t.hideExportMenu();
      }
    });
  }
  onKbdPrevious(e10) {
    let t = this.chart, i10 = t.options.accessibility, n10 = e10.response, s2 = t.highlightedExportItemIx || 0;
    for (; s2--; ) if (t.highlightExportItem(s2)) return n10.success;
    return i10.keyboardNavigation.wrapAround ? (t.highlightLastExportItem(), n10.success) : n10.prev;
  }
  onKbdNext(e10) {
    let t = this.chart, i10 = t.options.accessibility, n10 = e10.response;
    for (let e11 = (t.highlightedExportItemIx || 0) + 1; e11 < (t.exporting?.divElements?.length || 0); ++e11) if (t.highlightExportItem(e11)) return n10.success;
    return i10.keyboardNavigation.wrapAround ? (t.highlightExportItem(0), n10.success) : n10.next;
  }
  onKbdClick(e10) {
    let t = this.chart, i10 = void 0 !== t.highlightedExportItemIx && t.exporting?.divElements?.[t.highlightedExportItemIx], n10 = eB(t)?.element;
    return t.exporting?.openMenu ? i10 && this.fakeClickEvent(i10) : (n10 && this.fakeClickEvent(n10), t.highlightExportItem(0)), e10.response.success;
  }
};
!function(e10) {
  function t() {
    let e11 = eB(this);
    if (e11) {
      let t10 = e11.element;
      t10.onclick && t10.onclick(eN("click"));
    }
  }
  function i10() {
    let e11 = this.exporting?.divElements;
    e11 && this.exporting?.contextMenuEl && this.exporting?.openMenu && (e11.forEach((e12) => {
      e12 && "highcharts-menu-item" === e12.className && e12.onmouseout && e12.onmouseout(eN("mouseout"));
    }), this.highlightedExportItemIx = 0, this.exporting.contextMenuEl.hideMenu(), this.container.focus());
  }
  function n10(e11) {
    let t10 = this.exporting?.divElements?.[e11], i11 = void 0 !== this.highlightedExportItemIx && this.exporting?.divElements?.[this.highlightedExportItemIx];
    if (t10 && "LI" === t10.tagName && !(t10.children && t10.children.length)) {
      let n11 = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus;
      return t10.focus && n11 && t10.focus(), i11 && i11.onmouseout && i11.onmouseout(eN("mouseout")), t10.onmouseover && t10.onmouseover(eN("mouseover")), this.highlightedExportItemIx = e11, true;
    }
    return false;
  }
  function s2() {
    if (this.exporting?.divElements) {
      let e11 = this.exporting?.divElements.length;
      for (; e11--; ) if (this.highlightExportItem(e11)) return true;
    }
    return false;
  }
  e10.compose = function(e11) {
    let r2 = e11.prototype;
    r2.hideExportMenu || (r2.hideExportMenu = i10, r2.highlightExportItem = n10, r2.highlightLastExportItem = s2, r2.showExportMenu = t);
  };
}(eI || (eI = {}));
var eF = eI;
var {
  doc: eO,
  win: eR
} = l();
var {
  addEvent: eL,
  defined: eH,
  fireEvent: ez
} = l();
var {
  getElement: eq,
  simulatedEventTarget: eU
} = m;
var eK = class {
  constructor(e10, t) {
    this.currentModuleIx = NaN, this.modules = [], this.init(e10, t);
  }
  init(e10, t) {
    let i10 = this.eventProvider = new L();
    this.chart = e10, this.components = t, this.modules = [], this.currentModuleIx = 0, this.update(), i10.addEvent(this.tabindexContainer, "keydown", (e11) => this.onKeydown(e11)), i10.addEvent(this.tabindexContainer, "focus", (e11) => this.onFocus(e11)), ["mouseup", "touchend"].forEach((e11) => i10.addEvent(eO, e11, (e12) => this.onMouseUp(e12))), ["mousedown", "touchstart"].forEach((t10) => i10.addEvent(e10.renderTo, t10, () => {
      this.isClickingChart = true;
    }));
  }
  update(e10) {
    let t = this.chart.options.accessibility, i10 = t && t.keyboardNavigation, n10 = this.components;
    this.updateContainerTabindex(), i10 && i10.enabled && e10 && e10.length ? (this.modules = e10.reduce(function(e11, t10) {
      let i11 = n10[t10].getKeyboardNavigation();
      return e11.concat(i11);
    }, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor());
  }
  updateExitAnchor() {
    let e10 = eq(`highcharts-end-of-chart-marker-${this.chart.index}`);
    this.removeExitAnchor(), e10 ? (this.makeElementAnExitAnchor(e10), this.exitAnchor = e10) : this.createExitAnchor();
  }
  move(e10) {
    let t = this.modules && this.modules[this.currentModuleIx];
    t && t.terminate && t.terminate(e10), this.chart.focusElement && this.chart.focusElement.removeFocusBorder(), this.currentModuleIx += e10;
    let i10 = this.modules && this.modules[this.currentModuleIx];
    if (i10) {
      if (i10.validate && !i10.validate()) return this.move(e10);
      if (i10.init) return i10.init(e10), true;
    }
    return this.currentModuleIx = 0, this.exiting = true, e10 > 0 ? this.exitAnchor && this.exitAnchor.focus() : this.tabindexContainer.focus(), false;
  }
  onFocus(e10) {
    let t = this.chart, i10 = e10.relatedTarget && t.container.contains(e10.relatedTarget), n10 = t.options.accessibility, s2 = n10 && n10.keyboardNavigation;
    if (s2 && s2.enabled && !this.exiting && !this.tabbingInBackwards && !this.isClickingChart && !i10) {
      let e11 = this.getFirstValidModuleIx();
      null !== e11 && (this.currentModuleIx = e11, this.modules[e11].init(1));
    }
    this.keyboardReset = false, this.exiting = false;
  }
  onMouseUp(e10) {
    if (delete this.isClickingChart, !this.keyboardReset && e10.relatedTarget !== eU) {
      let t = this.chart;
      if (!e10.target || !t.container.contains(e10.target)) {
        let e11 = this.modules && this.modules[this.currentModuleIx || 0];
        e11 && e11.terminate && e11.terminate(), this.currentModuleIx = 0;
      }
      t.focusElement && (t.focusElement.removeFocusBorder(), delete t.focusElement), this.keyboardReset = true;
    }
  }
  onKeydown(e10) {
    let t, i10 = e10 || eR.event, n10 = this.modules && this.modules.length && this.modules[this.currentModuleIx], s2 = i10.target;
    if ((!s2 || "INPUT" !== s2.nodeName || s2.classList.contains("highcharts-a11y-proxy-element")) && (this.keyboardReset = false, this.exiting = false, n10)) {
      let e11 = n10.run(i10);
      e11 === n10.response.success ? t = true : e11 === n10.response.prev ? t = this.move(-1) : e11 === n10.response.next && (t = this.move(1)), t && (i10.preventDefault(), i10.stopPropagation());
    }
  }
  updateContainerTabindex() {
    let e10, t = this.chart.options.accessibility, i10 = t && t.keyboardNavigation, n10 = !(i10 && false === i10.enabled), s2 = this.chart, r2 = s2.container;
    s2.renderTo.hasAttribute("tabindex") ? (r2.removeAttribute("tabindex"), e10 = s2.renderTo) : e10 = r2, this.tabindexContainer = e10;
    let o2 = e10.getAttribute("tabindex");
    n10 && !o2 ? e10.setAttribute("tabindex", "0") : n10 || s2.container.removeAttribute("tabindex");
  }
  createExitAnchor() {
    let e10 = this.chart, t = this.exitAnchor = eO.createElement("div");
    e10.renderTo.appendChild(t), this.makeElementAnExitAnchor(t);
  }
  makeElementAnExitAnchor(e10) {
    let t = this.tabindexContainer.getAttribute("tabindex") || 0;
    e10.setAttribute("class", "highcharts-exit-anchor"), e10.setAttribute("tabindex", t), e10.setAttribute("aria-hidden", false), this.addExitAnchorEventsToEl(e10);
  }
  removeExitAnchor() {
    if (this.exitAnchor) {
      let e10 = this.eventProvider.eventRemovers.find((e11) => e11.element === this.exitAnchor);
      e10 && eH(e10.remover) && this.eventProvider.removeEvent(e10.remover), this.exitAnchor.parentNode && this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor;
    }
  }
  addExitAnchorEventsToEl(e10) {
    let t = this.chart, i10 = this;
    this.eventProvider.addEvent(e10, "focus", function(e11) {
      let n10 = e11 || eR.event, s2 = !(n10.relatedTarget && t.container.contains(n10.relatedTarget) || i10.exiting);
      if (t.focusElement && delete t.focusElement, s2) {
        if (i10.tabbingInBackwards = true, i10.tabindexContainer.focus(), delete i10.tabbingInBackwards, n10.preventDefault(), i10.modules && i10.modules.length) {
          i10.currentModuleIx = i10.modules.length - 1;
          let e12 = i10.modules[i10.currentModuleIx];
          e12 && e12.validate && !e12.validate() ? i10.move(-1) : e12 && e12.init(-1);
        }
      } else i10.exiting = false;
    });
  }
  getFirstValidModuleIx() {
    let e10 = this.modules.length;
    for (let t = 0; t < e10; ++t) {
      let e11 = this.modules[t];
      if (!e11.validate || e11.validate()) return t;
    }
    return null;
  }
  destroy() {
    this.removeExitAnchor(), this.eventProvider.removeAddedEvents(), this.chart.container.removeAttribute("tabindex");
  }
};
function eG() {
  let e10 = this;
  ez(this, "dismissPopupContent", {}, function() {
    e10.tooltip && e10.tooltip.hide(0), e10.hideExportMenu();
  });
}
function eW(e10) {
  27 === (e10.which || e10.keyCode) && l().charts && l().charts.forEach((e11) => {
    e11 && e11.dismissPopupContent && e11.dismissPopupContent();
  });
}
(eK || (eK = {})).compose = function(e10) {
  eF.compose(e10);
  let t = e10.prototype;
  return !t.dismissPopupContent && (t.dismissPopupContent = eG, eO && eL(eO, "keydown", eW)), e10;
};
var eV = eK;
var eX = l$.Legend;
var eY = o.n(eX);
var {
  animObject: ej
} = l();
var {
  doc: eZ
} = l();
var {
  addEvent: e$,
  fireEvent: e_,
  isNumber: eQ,
  pick: eJ,
  syncTimeout: e0
} = l();
var {
  getChartTitle: e1
} = B;
var {
  stripHTMLTagsFromString: e22,
  addClass: e32,
  removeClass: e5
} = m;
function e4(e10) {
  let t = e10.legend && e10.legend.allItems, i10 = e10.options.legend.accessibility || {}, n10 = e10.colorAxis && e10.colorAxis.some((e11) => !e11.dataClasses || !e11.dataClasses.length);
  return !!(t && t.length && !n10 && false !== i10.enabled);
}
function e9(e10, t) {
  let i10 = t.legendItem || {};
  for (let n10 of (t.setState(e10 ? "hover" : "", true), ["group", "label", "symbol"])) {
    let t10 = i10[n10], s2 = t10 && t10.element || t10;
    s2 && e_(s2, e10 ? "mouseover" : "mouseout");
  }
}
var e6 = class extends q {
  constructor() {
    super(...arguments), this.highlightedLegendItemIx = NaN, this.proxyGroup = null;
  }
  init() {
    let e10 = this;
    this.recreateProxies(), this.addEvent(eY(), "afterScroll", function() {
      this.chart === e10.chart && (e10.proxyProvider.updateGroupProxyElementPositions("legend"), e10.updateLegendItemProxyVisibility(), e10.highlightedLegendItemIx > -1 && this.chart.highlightLegendItem(e10.highlightedLegendItemIx));
    }), this.addEvent(eY(), "afterPositionItem", function(t) {
      this.chart === e10.chart && this.chart.renderer && e10.updateProxyPositionForItem(t.item);
    }), this.addEvent(eY(), "afterRender", function() {
      this.chart === e10.chart && this.chart.renderer && e10.recreateProxies() && e0(() => e10.proxyProvider.updateGroupProxyElementPositions("legend"), ej(eJ(this.chart.renderer.globalAnimation, true)).duration);
    });
  }
  updateLegendItemProxyVisibility() {
    let e10, t = this.chart, i10 = t.legend, n10 = i10.allItems || [], s2 = i10.currentPage || 1, r2 = i10.clipHeight || 0;
    n10.forEach((n11) => {
      if (n11.a11yProxyElement) {
        let o2 = i10.pages && i10.pages.length, a2 = n11.a11yProxyElement.element, l2 = false;
        if (e10 = n11.legendItem || {}, o2) {
          let t10 = e10.pageIx || 0;
          l2 = (e10.y || 0) + (e10.label ? Math.round(e10.label.getBBox().height) : 0) - i10.pages[t10] > r2 || t10 !== s2 - 1;
        }
        l2 ? t.styledMode ? e32(a2, "highcharts-a11y-invisible") : a2.style.visibility = "hidden" : (e5(a2, "highcharts-a11y-invisible"), a2.style.visibility = "");
      }
    });
  }
  onChartRender() {
    e4(this.chart) || this.removeProxies();
  }
  highlightAdjacentLegendPage(e10) {
    let t = this.chart, i10 = t.legend, n10 = (i10.currentPage || 1) + e10, s2 = i10.pages || [];
    if (n10 > 0 && n10 <= s2.length) {
      let e11 = 0;
      for (let s3 of i10.allItems) ((s3.legendItem || {}).pageIx || 0) + 1 === n10 && t.highlightLegendItem(e11) && (this.highlightedLegendItemIx = e11), ++e11;
    }
  }
  updateProxyPositionForItem(e10) {
    e10.a11yProxyElement && e10.a11yProxyElement.refreshPosition();
  }
  recreateProxies() {
    let e10 = eZ.activeElement, t = this.proxyGroup, i10 = e10 && t && t.contains(e10);
    return this.removeProxies(), !!e4(this.chart) && (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility(), this.updateLegendTitle(), i10 && this.chart.highlightLegendItem(this.highlightedLegendItemIx), true);
  }
  removeProxies() {
    this.proxyProvider.removeGroup("legend");
  }
  updateLegendTitle() {
    let e10 = this.chart, t = e22((e10.legend && e10.legend.options.title && e10.legend.options.title.text || "").replace(/<br ?\/?>/g, " "), e10.renderer.forExport), i10 = e10.langFormat("accessibility.legend.legendLabel" + (t ? "" : "NoTitle"), {
      chart: e10,
      legendTitle: t,
      chartTitle: e1(e10)
    });
    this.proxyProvider.updateGroupAttrs("legend", {
      "aria-label": i10
    });
  }
  addLegendProxyGroup() {
    let e10 = "all" === this.chart.options.accessibility.landmarkVerbosity ? "region" : null;
    this.proxyGroup = this.proxyProvider.addGroup("legend", "ul", {
      "aria-label": "_placeholder_",
      role: e10
    });
  }
  proxyLegendItems() {
    let e10, t = this;
    ((this.chart.legend || {}).allItems || []).forEach((i10) => {
      (e10 = i10.legendItem || {}).label && e10.label.element && t.proxyLegendItem(i10);
    });
  }
  proxyLegendItem(e10) {
    let t = e10.legendItem || {}, i10 = e10.legendItem?.label, n10 = i10?.element, s2 = t.label?.styles?.textOverflow === "ellipsis";
    if (!t.label || !t.group) return;
    let r2 = this.chart.langFormat("accessibility.legend.legendItem", {
      chart: this.chart,
      itemName: e22(e10.name, this.chart.renderer.forExport),
      item: e10
    }), o2 = {
      tabindex: -1,
      "aria-pressed": e10.visible,
      "aria-label": r2,
      title: ""
    };
    s2 && -1 !== (n10.textContent || "").indexOf("…") && (o2.title = i10?.textStr);
    let a2 = t.group.div ? t.label : t.group;
    e10.a11yProxyElement = this.proxyProvider.addProxyElement("legend", {
      click: t.label,
      visual: a2.element
    }, "button", o2);
  }
  getKeyboardNavigation() {
    let e10 = this.keyCodes, t = this, i10 = this.chart;
    return new K(i10, {
      keyCodeMap: [[[e10.left, e10.right, e10.up, e10.down], function(e11) {
        return t.onKbdArrowKey(this, e11);
      }], [[e10.enter, e10.space], function() {
        return t.onKbdClick(this);
      }], [[e10.pageDown, e10.pageUp], function(i11) {
        let n10 = i11 === e10.pageDown ? 1 : -1;
        return t.highlightAdjacentLegendPage(n10), this.response.success;
      }]],
      validate: function() {
        return t.shouldHaveLegendNavigation();
      },
      init: function() {
        i10.highlightLegendItem(0), t.highlightedLegendItemIx = 0;
      },
      terminate: function() {
        t.highlightedLegendItemIx = -1, i10.legend.allItems.forEach((e11) => e9(false, e11));
      }
    });
  }
  onKbdArrowKey(e10, t) {
    let {
      keyCodes: {
        left: i10,
        up: n10
      },
      highlightedLegendItemIx: s2,
      chart: r2
    } = this, o2 = r2.legend.allItems.length, a2 = r2.options.accessibility.keyboardNavigation.wrapAround, l2 = t === i10 || t === n10 ? -1 : 1;
    return r2.highlightLegendItem(s2 + l2) ? this.highlightedLegendItemIx += l2 : a2 && o2 > 1 && (this.highlightedLegendItemIx = l2 > 0 ? 0 : o2 - 1, r2.highlightLegendItem(this.highlightedLegendItemIx)), e10.response.success;
  }
  onKbdClick(e10) {
    let t = this.chart.legend.allItems[this.highlightedLegendItemIx];
    return t && t.a11yProxyElement && t.a11yProxyElement.click(), e10.response.success;
  }
  shouldHaveLegendNavigation() {
    if (!e4(this.chart)) return false;
    let e10 = this.chart, t = (e10.options.legend || {}).accessibility || {};
    return !!(e10.legend.display && t.keyboardNavigation && t.keyboardNavigation.enabled);
  }
  destroy() {
    this.removeProxies();
  }
};
function e8(e10) {
  let t = this.legend.allItems, i10 = this.accessibility && this.accessibility.components.legend.highlightedLegendItemIx, n10 = t[e10], s2 = n10?.legendItem || {};
  if (n10) {
    eQ(i10) && t[i10] && e9(false, t[i10]);
    var r2 = this.legend;
    let o2 = (r2.allItems[e10].legendItem || {}).pageIx, a2 = r2.currentPage;
    void 0 !== o2 && o2 + 1 !== a2 && r2.scroll(1 + o2 - a2);
    let l2 = s2.label, h2 = n10.a11yProxyElement && n10.a11yProxyElement.innerElement;
    return l2 && l2.element && h2 && this.setFocusToElement(l2, h2), e9(true, n10), true;
  }
  return false;
}
function e7(e10) {
  let t = this.chart.options.accessibility, i10 = e10.item;
  t.enabled && i10 && i10.a11yProxyElement && i10.a11yProxyElement.innerElement.setAttribute("aria-pressed", e10.visible ? "true" : "false");
}
(e6 || (e6 = {})).compose = function(e10, t) {
  let i10 = e10.prototype;
  i10.highlightLegendItem || (i10.highlightLegendItem = e8, e$(t, "afterColorizeItem", e7));
};
var te = e6;
var tt = l$.Axis;
var ti = o.n(tt);
var {
  isTouchDevice: tn
} = l();
var {
  addEvent: ts,
  merge: tr,
  pick: to
} = l();
var ta = [];
function tl() {
  this.navigator && this.navigator.setBaseSeries(null, false);
}
function th() {
  let e10, t, i10, n10 = this.legend, s2 = this.navigator;
  if (s2) {
    e10 = n10 && n10.options, t = s2.xAxis, i10 = s2.yAxis;
    let {
      scrollbarHeight: r2,
      scrollButtonSize: o2
    } = s2;
    this.inverted ? (s2.left = s2.opposite ? this.chartWidth - r2 - s2.height : this.spacing[3] + r2, s2.top = this.plotTop + o2) : (s2.left = to(t.left, this.plotLeft + o2), s2.top = s2.navigatorOptions.top || this.chartHeight - s2.height - r2 - (this.scrollbar?.options.margin || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (e10 && "bottom" === e10.verticalAlign && "proximate" !== e10.layout && e10.enabled && !e10.floating ? n10.legendHeight + to(e10.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), t && i10 && (this.inverted ? t.options.left = i10.options.left = s2.left : t.options.top = i10.options.top = s2.top, t.setAxisSize(), i10.setAxisSize());
  }
}
function td(t) {
  !this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new e(this), to(t.redraw, true) && this.redraw(t.animation));
}
function tc() {
  let t = this.options;
  (t.navigator.enabled || t.scrollbar.enabled) && (this.scroller = this.navigator = new e(this));
}
function tu() {
  let e10 = this.options, t = e10.navigator, i10 = e10.rangeSelector;
  if ((t && t.enabled || i10 && i10.enabled) && (!tn && "x" === this.zooming.type || tn && "x" === this.zooming.pinchType)) return false;
}
function tp(e10) {
  let t = e10.navigator;
  if (t && e10.xAxis[0]) {
    let i10 = e10.xAxis[0].getExtremes();
    t.render(i10.min, i10.max);
  }
}
function tg(e10) {
  let t = e10.options.navigator || {}, i10 = e10.options.scrollbar || {};
  !this.navigator && !this.scroller && (t.enabled || i10.enabled) && (tr(true, this.options.navigator, t), tr(true, this.options.scrollbar, i10), delete e10.options.navigator, delete e10.options.scrollbar);
}
var tm = function(t, i10) {
  if (l().pushUnique(ta, t)) {
    let n10 = t.prototype;
    e = i10, n10.callbacks.push(tp), ts(t, "afterAddSeries", tl), ts(t, "afterSetChartSize", th), ts(t, "afterUpdate", td), ts(t, "beforeRender", tc), ts(t, "beforeShowResetZoom", tu), ts(t, "update", tg);
  }
};
var {
  isTouchDevice: tb
} = l();
var {
  addEvent: tf,
  correctFloat: tx,
  defined: ty,
  isNumber: tv,
  pick: tw
} = l();
function tE() {
  this.navigatorAxis || (this.navigatorAxis = new tT(this));
}
function tA(e10) {
  let t, i10 = this.chart, n10 = i10.options, s2 = n10.navigator, r2 = this.navigatorAxis, o2 = i10.zooming.pinchType, a2 = n10.rangeSelector, l2 = i10.zooming.type;
  if (this.isXAxis && (s2?.enabled || a2?.enabled)) {
    if ("y" === l2 && "zoom" === e10.trigger) t = false;
    else if (("zoom" === e10.trigger && "xy" === l2 || tb && "xy" === o2) && this.options.range) {
      let t10 = r2.previousZoom;
      ty(e10.min) ? r2.previousZoom = [this.min, this.max] : t10 && (e10.min = t10[0], e10.max = t10[1], r2.previousZoom = void 0);
    }
  }
  void 0 !== t && e10.preventDefault();
}
var tT = class {
  static compose(e10) {
    e10.keepProps.includes("navigatorAxis") || (e10.keepProps.push("navigatorAxis"), tf(e10, "init", tE), tf(e10, "setExtremes", tA));
  }
  constructor(e10) {
    this.axis = e10;
  }
  destroy() {
    this.axis = void 0;
  }
  toFixedRange(e10, t, i10, n10) {
    let s2 = this.axis, r2 = (s2.pointRange || 0) / 2, o2 = tw(i10, s2.translate(e10, true, !s2.horiz)), a2 = tw(n10, s2.translate(t, true, !s2.horiz));
    return ty(i10) || (o2 = tx(o2 + r2)), ty(n10) || (a2 = tx(a2 - r2)), tv(o2) && tv(a2) || (o2 = a2 = void 0), {
      min: o2,
      max: a2
    };
  }
};
var tM = l$.Color;
var tC = o.n(tM);
var tk = l$.SeriesRegistry;
var tS = o.n(tk);
var {
  parse: tP
} = tC();
var {
  seriesTypes: tD
} = tS();
var tN = {
  height: 40,
  margin: 22,
  maskInside: true,
  handles: {
    width: 7,
    borderRadius: 0,
    height: 15,
    symbols: ["navigator-handle", "navigator-handle"],
    enabled: true,
    lineWidth: 1,
    backgroundColor: "#f2f2f2",
    borderColor: "#999999"
  },
  maskFill: tP("#667aff").setOpacity(0.3).get(),
  outlineColor: "#999999",
  outlineWidth: 1,
  series: {
    type: void 0 === tD.areaspline ? "line" : "areaspline",
    fillOpacity: 0.05,
    lineWidth: 1,
    compare: null,
    sonification: {
      enabled: false
    },
    dataGrouping: {
      approximation: "average",
      enabled: true,
      groupPixelWidth: 2,
      firstAnchor: "firstPoint",
      anchor: "middle",
      lastAnchor: "lastPoint",
      units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2, 3, 4]], ["week", [1, 2, 3]], ["month", [1, 3, 6]], ["year", null]]
    },
    dataLabels: {
      enabled: false,
      zIndex: 2
    },
    id: "highcharts-navigator-series",
    className: "highcharts-navigator-series",
    lineColor: null,
    marker: {
      enabled: false
    },
    threshold: null
  },
  xAxis: {
    className: "highcharts-navigator-xaxis",
    tickLength: 0,
    lineWidth: 0,
    gridLineColor: "#e6e6e6",
    id: "navigator-x-axis",
    gridLineWidth: 1,
    tickPixelInterval: 200,
    labels: {
      align: "left",
      style: {
        color: "#000000",
        fontSize: "0.7em",
        opacity: 0.6,
        textOutline: "2px contrast"
      },
      x: 3,
      y: -4
    },
    crosshair: false
  },
  yAxis: {
    className: "highcharts-navigator-yaxis",
    gridLineWidth: 0,
    startOnTick: false,
    endOnTick: false,
    minPadding: 0.1,
    id: "navigator-y-axis",
    maxPadding: 0.1,
    labels: {
      enabled: false
    },
    crosshair: false,
    title: {
      text: void 0
    },
    tickLength: 0,
    tickWidth: 0
  }
};
var {
  defined: tB,
  isNumber: tI,
  pick: tF
} = l();
var {
  relativeLength: tO
} = l();
var tR = {
  "navigator-handle": function(e10, t, i10, n10, s2 = {}) {
    var r2, o2, a2, l2, h2;
    let d2 = s2.width ? s2.width / 2 : i10, c2 = tO(s2.borderRadius || 0, Math.min(2 * d2, n10));
    return [["M", -1.5, (n10 = s2.height || n10) / 2 - 3.5], ["L", -1.5, n10 / 2 + 4.5], ["M", 0.5, n10 / 2 - 3.5], ["L", 0.5, n10 / 2 + 4.5], ...(r2 = -d2 - 1, o2 = 0.5, a2 = 2 * d2 + 1, l2 = n10, h2 = {
      r: c2
    }, h2?.r ? function(e11, t10, i11, n11, s3) {
      let r3 = s3?.r || 0;
      return [["M", e11 + r3, t10], ["L", e11 + i11 - r3, t10], ["A", r3, r3, 0, 0, 1, e11 + i11, t10 + r3], ["L", e11 + i11, t10 + n11 - r3], ["A", r3, r3, 0, 0, 1, e11 + i11 - r3, t10 + n11], ["L", e11 + r3, t10 + n11], ["A", r3, r3, 0, 0, 1, e11, t10 + n11 - r3], ["L", e11, t10 + r3], ["A", r3, r3, 0, 0, 1, e11 + r3, t10], ["Z"]];
    }(r2, 0.5, a2, l2, h2) : [["M", r2, o2], ["L", r2 + a2, o2], ["L", r2 + a2, o2 + l2], ["L", r2, o2 + l2], ["Z"]])];
  }
};
var tL = l$.RendererRegistry;
var tH = o.n(tL);
var {
  defined: tz
} = l();
var {
  defaultOptions: tq
} = l();
var {
  composed: tU
} = l();
var {
  getRendererType: tK
} = tH();
var {
  setFixedRange: tG
} = {
  setFixedRange: function(e10) {
    let t = this.xAxis[0];
    tz(t.dataMax) && tz(t.dataMin) && e10 ? this.fixedRange = Math.min(e10, t.dataMax - t.dataMin) : this.fixedRange = e10;
  }
};
var {
  addEvent: tW,
  extend: tV,
  pushUnique: tX
} = l();
function tY() {
  this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, false);
}
var tj = function(e10, t, i10) {
  tT.compose(t), tX(tU, "Navigator") && (e10.prototype.setFixedRange = tG, tV(tK().prototype.symbols, tR), tV(tq, {
    navigator: tN
  }), tW(i10, "afterUpdate", tY));
};
var {
  composed: tZ
} = l();
var {
  addEvent: t$,
  defined: t_,
  pick: tQ,
  pushUnique: tJ
} = l();
!function(e10) {
  let t;
  function i10(e11) {
    let t10 = tQ(e11.options?.min, e11.min), i11 = tQ(e11.options?.max, e11.max);
    return {
      axisMin: t10,
      axisMax: i11,
      scrollMin: t_(e11.dataMin) ? Math.min(t10, e11.min, e11.dataMin, tQ(e11.threshold, 1 / 0)) : t10,
      scrollMax: t_(e11.dataMax) ? Math.max(i11, e11.max, e11.dataMax, tQ(e11.threshold, -1 / 0)) : i11
    };
  }
  function n10() {
    let e11 = this.scrollbar, t10 = e11 && !e11.options.opposite, i11 = this.horiz ? 2 : t10 ? 3 : 1;
    e11 && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[i11] += e11.size + (e11.options.margin || 0));
  }
  function s2() {
    let e11 = this;
    e11.options?.scrollbar?.enabled && (e11.options.scrollbar.vertical = !e11.horiz, e11.options.startOnTick = e11.options.endOnTick = false, e11.scrollbar = new t(e11.chart.renderer, e11.options.scrollbar, e11.chart), t$(e11.scrollbar, "changed", function(t10) {
      let n11, s3, {
        axisMin: r3,
        axisMax: o2,
        scrollMin: a2,
        scrollMax: l2
      } = i10(e11), h2 = l2 - a2;
      if (t_(r3) && t_(o2)) if (e11.horiz && !e11.reversed || !e11.horiz && e11.reversed ? (n11 = a2 + h2 * this.to, s3 = a2 + h2 * this.from) : (n11 = a2 + h2 * (1 - this.from), s3 = a2 + h2 * (1 - this.to)), this.shouldUpdateExtremes(t10.DOMType)) {
        let i11 = "mousemove" !== t10.DOMType && "touchmove" !== t10.DOMType && void 0;
        e11.setExtremes(s3, n11, true, i11, t10);
      } else this.setRange(this.from, this.to);
    }));
  }
  function r2() {
    let e11, t10, n11, {
      scrollMin: s3,
      scrollMax: r3
    } = i10(this), o2 = this.scrollbar, a2 = this.axisTitleMargin + (this.titleOffset || 0), l2 = this.chart.scrollbarsOffsets, h2 = this.options.margin || 0;
    if (o2 && l2) {
      if (this.horiz) this.opposite || (l2[1] += a2), o2.position(this.left, this.top + this.height + 2 + l2[1] - (this.opposite ? h2 : 0), this.width, this.height), this.opposite || (l2[1] += h2), e11 = 1;
      else {
        let t11;
        this.opposite && (l2[0] += a2), t11 = o2.options.opposite ? this.left + this.width + 2 + l2[0] - (this.opposite ? 0 : h2) : this.opposite ? 0 : h2, o2.position(t11, this.top, this.width, this.height), this.opposite && (l2[0] += h2), e11 = 0;
      }
      if (l2[e11] += o2.size + (o2.options.margin || 0), isNaN(s3) || isNaN(r3) || !t_(this.min) || !t_(this.max) || this.dataMin === this.dataMax) o2.setRange(0, 1);
      else if (this.min === this.max) {
        let e12 = this.pointRange / (this.dataMax + 1);
        t10 = e12 * this.min, n11 = e12 * (this.max + 1), o2.setRange(t10, n11);
      } else t10 = (this.min - s3) / (r3 - s3), n11 = (this.max - s3) / (r3 - s3), this.horiz && !this.reversed || !this.horiz && this.reversed ? o2.setRange(t10, n11) : o2.setRange(1 - n11, 1 - t10);
    }
  }
  e10.compose = function(e11, i11) {
    tJ(tZ, "Axis.Scrollbar") && (t = i11, t$(e11, "afterGetOffset", n10), t$(e11, "afterInit", s2), t$(e11, "afterRender", r2));
  };
}(s || (s = {}));
var t0 = s;
var t1 = {
  height: 10,
  barBorderRadius: 5,
  buttonBorderRadius: 0,
  buttonsEnabled: false,
  liveRedraw: void 0,
  margin: void 0,
  minWidth: 6,
  opposite: true,
  step: 0.2,
  zIndex: 3,
  barBackgroundColor: "#cccccc",
  barBorderWidth: 0,
  barBorderColor: "#cccccc",
  buttonArrowColor: "#333333",
  buttonBackgroundColor: "#e6e6e6",
  buttonBorderColor: "#cccccc",
  buttonBorderWidth: 1,
  rifleColor: "none",
  trackBackgroundColor: "rgba(255, 255, 255, 0.001)",
  trackBorderColor: "#cccccc",
  trackBorderRadius: 5,
  trackBorderWidth: 1
};
var {
  defaultOptions: t2
} = l();
var {
  composed: t3
} = l();
var {
  addEvent: t5,
  correctFloat: t4,
  crisp: t9,
  defined: t6,
  destroyObjectProperties: t8,
  extend: t7,
  fireEvent: ie,
  merge: it,
  pick: ii,
  pushUnique: is,
  removeEvent: ir
} = l();
var io = class _io {
  static compose(e10) {
    t0.compose(e10, _io), is(t3, "Scrollbar") && t7(t2, {
      scrollbar: t1
    });
  }
  static swapXY(e10, t) {
    return t && e10.forEach((e11) => {
      let t10, i10 = e11.length;
      for (let n10 = 0; n10 < i10; n10 += 2) "number" == typeof (t10 = e11[n10 + 1]) && (e11[n10 + 1] = e11[n10 + 2], e11[n10 + 2] = t10);
    }), e10;
  }
  constructor(e10, t, i10) {
    this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(e10, t, i10);
  }
  addEvents() {
    let e10 = this.options.inverted ? [1, 0] : [0, 1], t = this.scrollbarButtons, i10 = this.scrollbarGroup.element, n10 = this.track.element, s2 = this.mouseDownHandler.bind(this), r2 = this.mouseMoveHandler.bind(this), o2 = this.mouseUpHandler.bind(this), a2 = [[t[e10[0]].element, "click", this.buttonToMinClick.bind(this)], [t[e10[1]].element, "click", this.buttonToMaxClick.bind(this)], [n10, "click", this.trackClick.bind(this)], [i10, "mousedown", s2], [i10.ownerDocument, "mousemove", r2], [i10.ownerDocument, "mouseup", o2], [i10, "touchstart", s2], [i10.ownerDocument, "touchmove", r2], [i10.ownerDocument, "touchend", o2]];
    a2.forEach(function(e11) {
      t5.apply(null, e11);
    }), this._events = a2;
  }
  buttonToMaxClick(e10) {
    let t = (this.to - this.from) * ii(this.options.step, 0.2);
    this.updatePosition(this.from + t, this.to + t), ie(this, "changed", {
      from: this.from,
      to: this.to,
      trigger: "scrollbar",
      DOMEvent: e10
    });
  }
  buttonToMinClick(e10) {
    let t = t4(this.to - this.from) * ii(this.options.step, 0.2);
    this.updatePosition(t4(this.from - t), t4(this.to - t)), ie(this, "changed", {
      from: this.from,
      to: this.to,
      trigger: "scrollbar",
      DOMEvent: e10
    });
  }
  cursorToScrollbarPosition(e10) {
    let t = this.options, i10 = t.minWidth > this.calculatedWidth ? t.minWidth : 0;
    return {
      chartX: (e10.chartX - this.x - this.xOffset) / (this.barWidth - i10),
      chartY: (e10.chartY - this.y - this.yOffset) / (this.barWidth - i10)
    };
  }
  destroy() {
    let e10 = this, t = e10.chart.scroller;
    e10.removeEvents(), ["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"].forEach(function(t10) {
      e10[t10] && e10[t10].destroy && (e10[t10] = e10[t10].destroy());
    }), t && e10 === t.scrollbar && (t.scrollbar = null, t8(t.scrollbarButtons));
  }
  drawScrollbarButton(e10) {
    let t = this.renderer, i10 = this.scrollbarButtons, n10 = this.options, s2 = this.size, r2 = t.g().add(this.group);
    if (i10.push(r2), n10.buttonsEnabled) {
      let o2 = t.rect().addClass("highcharts-scrollbar-button").add(r2);
      this.chart.styledMode || o2.attr({
        stroke: n10.buttonBorderColor,
        "stroke-width": n10.buttonBorderWidth,
        fill: n10.buttonBackgroundColor
      }), o2.attr(o2.crisp({
        x: -0.5,
        y: -0.5,
        width: s2,
        height: s2,
        r: n10.buttonBorderRadius
      }, o2.strokeWidth()));
      let a2 = t.path(_io.swapXY([["M", s2 / 2 + (e10 ? -1 : 1), s2 / 2 - 3], ["L", s2 / 2 + (e10 ? -1 : 1), s2 / 2 + 3], ["L", s2 / 2 + (e10 ? 2 : -2), s2 / 2]], n10.vertical)).addClass("highcharts-scrollbar-arrow").add(i10[e10]);
      this.chart.styledMode || a2.attr({
        fill: n10.buttonArrowColor
      });
    }
  }
  init(e10, t, i10) {
    this.scrollbarButtons = [], this.renderer = e10, this.userOptions = t, this.options = it(t1, t2.scrollbar, t), this.options.margin = ii(this.options.margin, 10), this.chart = i10, this.size = ii(this.options.size, this.options.height), t.enabled && (this.render(), this.addEvents());
  }
  mouseDownHandler(e10) {
    let t = this.chart.pointer?.normalize(e10) || e10, i10 = this.cursorToScrollbarPosition(t);
    this.chartX = i10.chartX, this.chartY = i10.chartY, this.initPositions = [this.from, this.to], this.grabbedCenter = true;
  }
  mouseMoveHandler(e10) {
    let t, i10 = this.chart.pointer?.normalize(e10) || e10, n10 = this.options.vertical ? "chartY" : "chartX", s2 = this.initPositions || [];
    this.grabbedCenter && (!e10.touches || 0 !== e10.touches[0][n10]) && (t = this.cursorToScrollbarPosition(i10)[n10] - this[n10], this.hasDragged = true, this.updatePosition(s2[0] + t, s2[1] + t), this.hasDragged && ie(this, "changed", {
      from: this.from,
      to: this.to,
      trigger: "scrollbar",
      DOMType: e10.type,
      DOMEvent: e10
    }));
  }
  mouseUpHandler(e10) {
    this.hasDragged && ie(this, "changed", {
      from: this.from,
      to: this.to,
      trigger: "scrollbar",
      DOMType: e10.type,
      DOMEvent: e10
    }), this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null;
  }
  position(e10, t, i10, n10) {
    let {
      buttonsEnabled: s2,
      margin: r2 = 0,
      vertical: o2
    } = this.options, a2 = this.rendered ? "animate" : "attr", l2 = n10, h2 = 0;
    this.group.show(), this.x = e10, this.y = t + this.trackBorderWidth, this.width = i10, this.height = n10, this.xOffset = l2, this.yOffset = h2, o2 ? (this.width = this.yOffset = i10 = h2 = this.size, this.xOffset = l2 = 0, this.yOffset = h2 = s2 ? this.size : 0, this.barWidth = n10 - (s2 ? 2 * i10 : 0), this.x = e10 += r2) : (this.height = n10 = this.size, this.xOffset = l2 = s2 ? this.size : 0, this.barWidth = i10 - (s2 ? 2 * n10 : 0), this.y = this.y + r2), this.group[a2]({
      translateX: e10,
      translateY: this.y
    }), this.track[a2]({
      width: i10,
      height: n10
    }), this.scrollbarButtons[1][a2]({
      translateX: o2 ? 0 : i10 - l2,
      translateY: o2 ? n10 - h2 : 0
    });
  }
  removeEvents() {
    this._events.forEach(function(e10) {
      ir.apply(null, e10);
    }), this._events.length = 0;
  }
  render() {
    let e10 = this.renderer, t = this.options, i10 = this.size, n10 = this.chart.styledMode, s2 = e10.g("scrollbar").attr({
      zIndex: t.zIndex
    }).hide().add();
    this.group = s2, this.track = e10.rect().addClass("highcharts-scrollbar-track").attr({
      r: t.trackBorderRadius || 0,
      height: i10,
      width: i10
    }).add(s2), n10 || this.track.attr({
      fill: t.trackBackgroundColor,
      stroke: t.trackBorderColor,
      "stroke-width": t.trackBorderWidth
    });
    let r2 = this.trackBorderWidth = this.track.strokeWidth();
    this.track.attr({
      x: -t9(0, r2),
      y: -t9(0, r2)
    }), this.scrollbarGroup = e10.g().add(s2), this.scrollbar = e10.rect().addClass("highcharts-scrollbar-thumb").attr({
      height: i10 - r2,
      width: i10 - r2,
      r: t.barBorderRadius || 0
    }).add(this.scrollbarGroup), this.scrollbarRifles = e10.path(_io.swapXY([["M", -3, i10 / 4], ["L", -3, 2 * i10 / 3], ["M", 0, i10 / 4], ["L", 0, 2 * i10 / 3], ["M", 3, i10 / 4], ["L", 3, 2 * i10 / 3]], t.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), n10 || (this.scrollbar.attr({
      fill: t.barBackgroundColor,
      stroke: t.barBorderColor,
      "stroke-width": t.barBorderWidth
    }), this.scrollbarRifles.attr({
      stroke: t.rifleColor,
      "stroke-width": 1
    })), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-t9(0, this.scrollbarStrokeWidth), -t9(0, this.scrollbarStrokeWidth)), this.drawScrollbarButton(0), this.drawScrollbarButton(1);
  }
  setRange(e10, t) {
    let i10, n10, s2 = this.options, r2 = s2.vertical, o2 = s2.minWidth, a2 = this.barWidth, l2 = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
    if (!t6(a2)) return;
    let h2 = a2 * Math.min(t, 1);
    i10 = Math.ceil(a2 * (e10 = Math.max(e10, 0))), this.calculatedWidth = n10 = t4(h2 - i10), n10 < o2 && (i10 = (a2 - o2 + n10) * e10, n10 = o2);
    let d2 = Math.floor(i10 + this.xOffset + this.yOffset), c2 = n10 / 2 - 0.5;
    this.from = e10, this.to = t, r2 ? (this.scrollbarGroup[l2]({
      translateY: d2
    }), this.scrollbar[l2]({
      height: n10
    }), this.scrollbarRifles[l2]({
      translateY: c2
    }), this.scrollbarTop = d2, this.scrollbarLeft = 0) : (this.scrollbarGroup[l2]({
      translateX: d2
    }), this.scrollbar[l2]({
      width: n10
    }), this.scrollbarRifles[l2]({
      translateX: c2
    }), this.scrollbarLeft = d2, this.scrollbarTop = 0), n10 <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(), false === s2.showFull && (e10 <= 0 && t >= 1 ? this.group.hide() : this.group.show()), this.rendered = true;
  }
  shouldUpdateExtremes(e10) {
    return ii(this.options.liveRedraw, l().svg && !l().isTouchDevice && !this.chart.boosted) || "mouseup" === e10 || "touchend" === e10 || !t6(e10);
  }
  trackClick(e10) {
    let t = this.chart.pointer?.normalize(e10) || e10, i10 = this.to - this.from, n10 = this.y + this.scrollbarTop, s2 = this.x + this.scrollbarLeft;
    this.options.vertical && t.chartY > n10 || !this.options.vertical && t.chartX > s2 ? this.updatePosition(this.from + i10, this.to + i10) : this.updatePosition(this.from - i10, this.to - i10), ie(this, "changed", {
      from: this.from,
      to: this.to,
      trigger: "scrollbar",
      DOMEvent: e10
    });
  }
  update(e10) {
    this.destroy(), this.init(this.chart.renderer, it(true, this.options, e10), this.chart);
  }
  updatePosition(e10, t) {
    t > 1 && (e10 = t4(1 - t4(t - e10)), t = 1), e10 < 0 && (t = t4(t - e10), e10 = 0), this.from = e10, this.to = t;
  }
};
io.defaultOptions = t1;
var ia = l$.SVGRenderer;
var il = o.n(ia);
var {
  defaultOptions: ih
} = l();
var {
  isTouchDevice: id
} = l();
var {
  prototype: {
    symbols: ic
  }
} = il();
var {
  addEvent: iu,
  clamp: ip,
  correctFloat: ig,
  defined: im,
  destroyObjectProperties: ib,
  erase: ix,
  extend: iy,
  find: iv,
  fireEvent: iw,
  isArray: iE,
  isNumber: iA,
  merge: iT,
  pick: iM,
  removeEvent: iC,
  splat: ik
} = l();
function iS(e10, ...t) {
  let i10 = [].filter.call(t, iA);
  if (i10.length) return Math[e10].apply(0, i10);
}
var iP = class _iP {
  static compose(e10, t, i10) {
    tm(e10, _iP), tj(e10, t, i10);
  }
  constructor(e10) {
    this.isDirty = false, this.scrollbarHeight = 0, this.init(e10);
  }
  drawHandle(e10, t, i10, n10) {
    let s2 = this.navigatorOptions.handles.height;
    this.handles[t][n10](i10 ? {
      translateX: Math.round(this.left + this.height / 2),
      translateY: Math.round(this.top + parseInt(e10, 10) + 0.5 - s2)
    } : {
      translateX: Math.round(this.left + parseInt(e10, 10)),
      translateY: Math.round(this.top + this.height / 2 - s2 / 2 - 1)
    });
  }
  drawOutline(e10, t, i10, n10) {
    let s2 = this.navigatorOptions.maskInside, r2 = this.outline.strokeWidth(), o2 = r2 / 2, a2 = r2 % 2 / 2, l2 = this.scrollButtonSize, h2 = this.size, d2 = this.top, c2 = this.height, u2 = d2 - o2, p2 = d2 + c2, g2 = this.left, m2, b2;
    i10 ? (m2 = d2 + t + a2, t = d2 + e10 + a2, b2 = [["M", g2 + c2, d2 - l2 - a2], ["L", g2 + c2, m2], ["L", g2, m2], ["M", g2, t], ["L", g2 + c2, t], ["L", g2 + c2, d2 + h2 + l2]], s2 && b2.push(["M", g2 + c2, m2 - o2], ["L", g2 + c2, t + o2])) : (g2 -= l2, e10 += g2 + l2 - a2, t += g2 + l2 - a2, b2 = [["M", g2, u2], ["L", e10, u2], ["L", e10, p2], ["M", t, p2], ["L", t, u2], ["L", g2 + h2 + 2 * l2, u2]], s2 && b2.push(["M", e10 - o2, u2], ["L", t + o2, u2])), this.outline[n10]({
      d: b2
    });
  }
  drawMasks(e10, t, i10, n10) {
    let s2, r2, o2, a2, l2 = this.left, h2 = this.top, d2 = this.height;
    i10 ? (o2 = [l2, l2, l2], a2 = [h2, h2 + e10, h2 + t], r2 = [d2, d2, d2], s2 = [e10, t - e10, this.size - t]) : (o2 = [l2, l2 + e10, l2 + t], a2 = [h2, h2, h2], r2 = [e10, t - e10, this.size - t], s2 = [d2, d2, d2]), this.shades.forEach((e11, t10) => {
      e11[n10]({
        x: o2[t10],
        y: a2[t10],
        width: r2[t10],
        height: s2[t10]
      });
    });
  }
  renderElements() {
    let e10 = this, t = e10.navigatorOptions, i10 = t.maskInside, n10 = e10.chart, s2 = n10.inverted, r2 = n10.renderer, o2 = {
      cursor: s2 ? "ns-resize" : "ew-resize"
    }, a2 = e10.navigatorGroup ?? (e10.navigatorGroup = r2.g("navigator").attr({
      zIndex: 8,
      visibility: "hidden"
    }).add());
    if ([!i10, i10, !i10].forEach((i11, s3) => {
      let l2 = e10.shades[s3] ?? (e10.shades[s3] = r2.rect().addClass("highcharts-navigator-mask" + (1 === s3 ? "-inside" : "-outside")).add(a2));
      n10.styledMode || (l2.attr({
        fill: i11 ? t.maskFill : "rgba(0,0,0,0)"
      }), 1 === s3 && l2.css(o2));
    }), e10.outline || (e10.outline = r2.path().addClass("highcharts-navigator-outline").add(a2)), n10.styledMode || e10.outline.attr({
      "stroke-width": t.outlineWidth,
      stroke: t.outlineColor
    }), t.handles?.enabled) {
      let i11 = t.handles, {
        height: s3,
        width: l2
      } = i11;
      [0, 1].forEach((t10) => {
        let h2 = i11.symbols[t10];
        if (e10.handles[t10] && e10.handles[t10].symbolUrl === h2) {
          if (!e10.handles[t10].isImg && e10.handles[t10].symbolName !== h2) {
            let i12 = ic[h2].call(ic, -l2 / 2 - 1, 0, l2, s3);
            e10.handles[t10].attr({
              d: i12
            }), e10.handles[t10].symbolName = h2;
          }
        } else e10.handles[t10]?.destroy(), e10.handles[t10] = r2.symbol(h2, -l2 / 2 - 1, 0, l2, s3, i11), e10.handles[t10].attr({
          zIndex: 7 - t10
        }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][t10]).add(a2), e10.addMouseEvents();
        n10.inverted && e10.handles[t10].attr({
          rotation: 90,
          rotationOriginX: Math.floor(-l2 / 2),
          rotationOriginY: (s3 + l2) / 2
        }), n10.styledMode || e10.handles[t10].attr({
          fill: i11.backgroundColor,
          stroke: i11.borderColor,
          "stroke-width": i11.lineWidth,
          width: i11.width,
          height: i11.height,
          x: -l2 / 2 - 1,
          y: 0
        }).css(o2);
      });
    }
  }
  update(e10, t = false) {
    let i10 = this.chart, n10 = i10.options.chart.inverted !== i10.scrollbar?.options.vertical;
    if (iT(true, i10.options.navigator, e10), this.navigatorOptions = i10.options.navigator || {}, this.setOpposite(), im(e10.enabled) || n10) return this.destroy(), this.navigatorEnabled = e10.enabled || this.navigatorEnabled, this.init(i10);
    if (this.navigatorEnabled && (this.isDirty = true, false === e10.adaptToUpdatedData && this.baseSeries.forEach((e11) => {
      iC(e11, "updatedData", this.updatedDataHandler);
    }, this), e10.adaptToUpdatedData && this.baseSeries.forEach((e11) => {
      e11.eventsToUnbind.push(iu(e11, "updatedData", this.updatedDataHandler));
    }, this), (e10.series || e10.baseSeries) && this.setBaseSeries(void 0, false), e10.height || e10.xAxis || e10.yAxis)) {
      this.height = e10.height ?? this.height;
      let t10 = this.getXAxisOffsets();
      this.xAxis.update(__spreadProps(__spreadValues({}, e10.xAxis), {
        offsets: t10,
        [i10.inverted ? "width" : "height"]: this.height,
        [i10.inverted ? "height" : "width"]: void 0
      }), false), this.yAxis.update(__spreadProps(__spreadValues({}, e10.yAxis), {
        [i10.inverted ? "width" : "height"]: this.height
      }), false);
    }
    t && i10.redraw();
  }
  render(e10, t, i10, n10) {
    let s2 = this.chart, r2 = this.xAxis, o2 = r2.pointRange || 0, a2 = r2.navigatorAxis.fake ? s2.xAxis[0] : r2, l2 = this.navigatorEnabled, h2 = this.rendered, d2 = s2.inverted, c2 = s2.xAxis[0].minRange, u2 = s2.xAxis[0].options.maxRange, p2 = this.scrollButtonSize, g2, m2, b2, f2 = this.scrollbarHeight, x2, y2;
    if (this.hasDragged && !im(i10)) return;
    if (this.isDirty && this.renderElements(), e10 = ig(e10 - o2 / 2), t = ig(t + o2 / 2), !iA(e10) || !iA(t)) if (!h2) return;
    else i10 = 0, n10 = iM(r2.width, a2.width);
    this.left = iM(r2.left, s2.plotLeft + p2 + (d2 ? s2.plotWidth : 0));
    let v2 = this.size = x2 = iM(r2.len, (d2 ? s2.plotHeight : s2.plotWidth) - 2 * p2);
    g2 = d2 ? f2 : x2 + 2 * p2, i10 = iM(i10, r2.toPixels(e10, true)), n10 = iM(n10, r2.toPixels(t, true)), iA(i10) && Math.abs(i10) !== 1 / 0 || (i10 = 0, n10 = g2);
    let w2 = r2.toValue(i10, true), E2 = r2.toValue(n10, true), A2 = Math.abs(ig(E2 - w2));
    A2 < c2 ? this.grabbedLeft ? i10 = r2.toPixels(E2 - c2 - o2, true) : this.grabbedRight && (n10 = r2.toPixels(w2 + c2 + o2, true)) : im(u2) && ig(A2 - o2) > u2 && (this.grabbedLeft ? i10 = r2.toPixels(E2 - u2 - o2, true) : this.grabbedRight && (n10 = r2.toPixels(w2 + u2 + o2, true))), this.zoomedMax = ip(Math.max(i10, n10), 0, v2), this.zoomedMin = ip(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(i10, n10), 0, v2), this.range = this.zoomedMax - this.zoomedMin, v2 = Math.round(this.zoomedMax);
    let T2 = Math.round(this.zoomedMin);
    l2 && (this.navigatorGroup.attr({
      visibility: "inherit"
    }), y2 = h2 && !this.hasDragged ? "animate" : "attr", this.drawMasks(T2, v2, d2, y2), this.drawOutline(T2, v2, d2, y2), this.navigatorOptions.handles.enabled && (this.drawHandle(T2, 0, d2, y2), this.drawHandle(v2, 1, d2, y2))), this.scrollbar && (d2 ? (b2 = this.top - p2, m2 = this.left - f2 + (l2 || !a2.opposite ? 0 : (a2.titleOffset || 0) + a2.axisTitleMargin), f2 = x2 + 2 * p2) : (b2 = this.top + (l2 ? this.height : -f2), m2 = this.left - p2), this.scrollbar.position(m2, b2, g2, f2), this.scrollbar.setRange(this.zoomedMin / (x2 || 1), this.zoomedMax / (x2 || 1))), this.rendered = true, this.isDirty = false, iw(this, "afterRender");
  }
  addMouseEvents() {
    let e10 = this, t = e10.chart, i10 = t.container, n10 = [], s2, r2;
    e10.mouseMoveHandler = s2 = function(t10) {
      e10.onMouseMove(t10);
    }, e10.mouseUpHandler = r2 = function(t10) {
      e10.onMouseUp(t10);
    }, (n10 = e10.getPartsEvents("mousedown")).push(iu(t.renderTo, "mousemove", s2), iu(i10.ownerDocument, "mouseup", r2), iu(t.renderTo, "touchmove", s2), iu(i10.ownerDocument, "touchend", r2)), n10.concat(e10.getPartsEvents("touchstart")), e10.eventsToUnbind = n10, e10.series && e10.series[0] && n10.push(iu(e10.series[0].xAxis, "foundExtremes", function() {
      t.navigator.modifyNavigatorAxisExtremes();
    }));
  }
  getPartsEvents(e10) {
    let t = this, i10 = [];
    return ["shades", "handles"].forEach(function(n10) {
      t[n10].forEach(function(s2, r2) {
        i10.push(iu(s2.element, e10, function(e11) {
          t[n10 + "Mousedown"](e11, r2);
        }));
      });
    }), i10;
  }
  shadesMousedown(e10, t) {
    e10 = this.chart.pointer?.normalize(e10) || e10;
    let i10 = this.chart, n10 = this.xAxis, s2 = this.zoomedMin, r2 = this.size, o2 = this.range, a2 = this.left, l2 = e10.chartX, h2, d2, c2, u2;
    i10.inverted && (l2 = e10.chartY, a2 = this.top), 1 === t ? (this.grabbedCenter = l2, this.fixedWidth = o2, this.dragOffset = l2 - s2) : (u2 = l2 - a2 - o2 / 2, 0 === t ? u2 = Math.max(0, u2) : 2 === t && u2 + o2 >= r2 && (u2 = r2 - o2, this.reversedExtremes ? (u2 -= o2, d2 = this.getUnionExtremes().dataMin) : h2 = this.getUnionExtremes().dataMax), u2 !== s2 && (this.fixedWidth = o2, im((c2 = n10.navigatorAxis.toFixedRange(u2, u2 + o2, d2, h2)).min) && iw(this, "setRange", {
      min: Math.min(c2.min, c2.max),
      max: Math.max(c2.min, c2.max),
      redraw: true,
      eventArguments: {
        trigger: "navigator"
      }
    })));
  }
  handlesMousedown(e10, t) {
    e10 = this.chart.pointer?.normalize(e10) || e10;
    let i10 = this.chart, n10 = i10.xAxis[0], s2 = this.reversedExtremes;
    0 === t ? (this.grabbedLeft = true, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = s2 ? n10.min : n10.max) : (this.grabbedRight = true, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = s2 ? n10.max : n10.min), i10.setFixedRange(void 0);
  }
  onMouseMove(e10) {
    let t = this, i10 = t.chart, n10 = t.navigatorSize, s2 = t.range, r2 = t.dragOffset, o2 = i10.inverted, a2 = t.left, l2;
    (!e10.touches || 0 !== e10.touches[0].pageX) && (l2 = (e10 = i10.pointer?.normalize(e10) || e10).chartX, o2 && (a2 = t.top, l2 = e10.chartY), t.grabbedLeft ? (t.hasDragged = true, t.render(0, 0, l2 - a2, t.otherHandlePos)) : t.grabbedRight ? (t.hasDragged = true, t.render(0, 0, t.otherHandlePos, l2 - a2)) : t.grabbedCenter && (t.hasDragged = true, l2 < r2 ? l2 = r2 : l2 > n10 + r2 - s2 && (l2 = n10 + r2 - s2), t.render(0, 0, l2 - r2, l2 - r2 + s2)), t.hasDragged && t.scrollbar && iM(t.scrollbar.options.liveRedraw, !id && !this.chart.boosted) && (e10.DOMType = e10.type, setTimeout(function() {
      t.onMouseUp(e10);
    }, 0)));
  }
  onMouseUp(e10) {
    let t, i10, n10, s2, r2, o2, a2 = this.chart, l2 = this.xAxis, h2 = this.scrollbar, d2 = e10.DOMEvent || e10, c2 = a2.inverted, u2 = this.rendered && !this.hasDragged ? "animate" : "attr";
    (this.hasDragged && (!h2 || !h2.hasDragged) || "scrollbar" === e10.trigger) && (n10 = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? s2 = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (r2 = this.fixedExtreme), this.zoomedMax === this.size && (r2 = this.reversedExtremes ? n10.dataMin : n10.dataMax), 0 === this.zoomedMin && (s2 = this.reversedExtremes ? n10.dataMax : n10.dataMin), im((o2 = l2.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, s2, r2)).min) && iw(this, "setRange", {
      min: Math.min(o2.min, o2.max),
      max: Math.max(o2.min, o2.max),
      redraw: true,
      animation: !this.hasDragged && null,
      eventArguments: {
        trigger: "navigator",
        triggerOp: "navigator-drag",
        DOMEvent: d2
      }
    })), "mousemove" !== e10.DOMType && "touchmove" !== e10.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null), this.navigatorEnabled && iA(this.zoomedMin) && iA(this.zoomedMax) && (i10 = Math.round(this.zoomedMin), t = Math.round(this.zoomedMax), this.shades && this.drawMasks(i10, t, c2, u2), this.outline && this.drawOutline(i10, t, c2, u2), this.navigatorOptions.handles.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(i10, 0, c2, u2), this.drawHandle(t, 1, c2, u2)));
  }
  removeEvents() {
    this.eventsToUnbind && (this.eventsToUnbind.forEach(function(e10) {
      e10();
    }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents();
  }
  removeBaseSeriesEvents() {
    let e10 = this.baseSeries || [];
    this.navigatorEnabled && e10[0] && (false !== this.navigatorOptions.adaptToUpdatedData && e10.forEach(function(e11) {
      iC(e11, "updatedData", this.updatedDataHandler);
    }, this), e10[0].xAxis && iC(e10[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
  }
  getXAxisOffsets() {
    return this.chart.inverted ? [this.scrollButtonSize, 0, -this.scrollButtonSize, 0] : [0, -this.scrollButtonSize, 0, this.scrollButtonSize];
  }
  init(e10) {
    let t = e10.options, i10 = t.navigator || {}, n10 = i10.enabled, s2 = t.scrollbar || {}, r2 = s2.enabled, o2 = n10 && i10.height || 0, a2 = r2 && s2.height || 0, l2 = s2.buttonsEnabled && a2 || 0;
    this.handles = [], this.shades = [], this.chart = e10, this.setBaseSeries(), this.height = o2, this.scrollbarHeight = a2, this.scrollButtonSize = l2, this.scrollbarEnabled = r2, this.navigatorEnabled = n10, this.navigatorOptions = i10, this.scrollbarOptions = s2, this.setOpposite();
    let h2 = this, d2 = h2.baseSeries, c2 = e10.xAxis.length, u2 = e10.yAxis.length, p2 = d2 && d2[0] && d2[0].xAxis || e10.xAxis[0] || {
      options: {}
    };
    if (e10.isDirtyBox = true, h2.navigatorEnabled) {
      let t10 = this.getXAxisOffsets();
      h2.xAxis = new (ti())(e10, iT({
        breaks: p2.options.breaks,
        ordinal: p2.options.ordinal,
        overscroll: p2.options.overscroll
      }, i10.xAxis, {
        type: "datetime",
        yAxis: i10.yAxis?.id,
        index: c2,
        isInternal: true,
        offset: 0,
        keepOrdinalPadding: true,
        startOnTick: false,
        endOnTick: false,
        minPadding: p2.options.ordinal ? 0 : p2.options.minPadding,
        maxPadding: p2.options.ordinal ? 0 : p2.options.maxPadding,
        zoomEnabled: false
      }, e10.inverted ? {
        offsets: t10,
        width: o2
      } : {
        offsets: t10,
        height: o2
      }), "xAxis"), h2.yAxis = new (ti())(e10, iT(i10.yAxis, {
        alignTicks: false,
        offset: 0,
        index: u2,
        isInternal: true,
        reversed: iM(i10.yAxis && i10.yAxis.reversed, e10.yAxis[0] && e10.yAxis[0].reversed, false),
        zoomEnabled: false
      }, e10.inverted ? {
        width: o2
      } : {
        height: o2
      }), "yAxis"), d2 || i10.series.data ? h2.updateNavigatorSeries(false) : 0 === e10.series.length && (h2.unbindRedraw = iu(e10, "beforeRedraw", function() {
        e10.series.length > 0 && !h2.series && (h2.setBaseSeries(), h2.unbindRedraw());
      })), h2.reversedExtremes = e10.inverted && !h2.xAxis.reversed || !e10.inverted && h2.xAxis.reversed, h2.renderElements(), h2.addMouseEvents();
    } else h2.xAxis = {
      chart: e10,
      navigatorAxis: {
        fake: true
      },
      translate: function(t10, i11) {
        let n11 = e10.xAxis[0], s3 = n11.getExtremes(), r3 = n11.len - 2 * l2, o3 = iS("min", n11.options.min, s3.dataMin), a3 = iS("max", n11.options.max, s3.dataMax) - o3;
        return i11 ? t10 * a3 / r3 + o3 : r3 * (t10 - o3) / a3;
      },
      toPixels: function(e11) {
        return this.translate(e11);
      },
      toValue: function(e11) {
        return this.translate(e11, true);
      }
    }, h2.xAxis.navigatorAxis.axis = h2.xAxis, h2.xAxis.navigatorAxis.toFixedRange = tT.prototype.toFixedRange.bind(h2.xAxis.navigatorAxis);
    if (e10.options.scrollbar?.enabled) {
      let t10 = iT(e10.options.scrollbar, {
        vertical: e10.inverted
      });
      iA(t10.margin) || (t10.margin = e10.inverted ? -3 : 3), e10.scrollbar = h2.scrollbar = new io(e10.renderer, t10, e10), iu(h2.scrollbar, "changed", function(e11) {
        let t11 = h2.size, i11 = t11 * this.to, n11 = t11 * this.from;
        h2.hasDragged = h2.scrollbar.hasDragged, h2.render(0, 0, n11, i11), this.shouldUpdateExtremes(e11.DOMType) && setTimeout(function() {
          h2.onMouseUp(e11);
        });
      });
    }
    h2.addBaseSeriesEvents(), h2.addChartEvents();
  }
  setOpposite() {
    let e10 = this.navigatorOptions, t = this.navigatorEnabled, i10 = this.chart;
    this.opposite = iM(e10.opposite, !!(!t && i10.inverted));
  }
  getUnionExtremes(e10) {
    let t, i10 = this.chart.xAxis[0], n10 = this.chart.time, s2 = this.xAxis, r2 = s2.options, o2 = i10.options;
    return e10 && null === i10.dataMin || (t = {
      dataMin: iM(n10.parse(r2?.min), iS("min", n10.parse(o2.min), i10.dataMin, s2.dataMin, s2.min)),
      dataMax: iM(n10.parse(r2?.max), iS("max", n10.parse(o2.max), i10.dataMax, s2.dataMax, s2.max))
    }), t;
  }
  setBaseSeries(e10, t) {
    let i10 = this.chart, n10 = this.baseSeries = [];
    e10 = e10 || i10.options && i10.options.navigator.baseSeries || (i10.series.length ? iv(i10.series, (e11) => !e11.options.isInternal).index : 0), (i10.series || []).forEach((t10, i11) => {
      !t10.options.isInternal && (t10.options.showInNavigator || (i11 === e10 || t10.options.id === e10) && false !== t10.options.showInNavigator) && n10.push(t10);
    }), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(true, t);
  }
  updateNavigatorSeries(e10, t) {
    let i10 = this, n10 = i10.chart, s2 = i10.baseSeries, r2 = {
      enableMouseTracking: false,
      index: null,
      linkedTo: null,
      group: "nav",
      padXAxis: false,
      xAxis: this.navigatorOptions.xAxis?.id,
      yAxis: this.navigatorOptions.yAxis?.id,
      showInLegend: false,
      stacking: void 0,
      isInternal: true,
      states: {
        inactive: {
          opacity: 1
        }
      }
    }, o2 = i10.series = (i10.series || []).filter((e11) => {
      let t10 = e11.baseSeries;
      return !(0 > s2.indexOf(t10)) || (t10 && (iC(t10, "updatedData", i10.updatedDataHandler), delete t10.navigatorSeries), e11.chart && e11.destroy(), false);
    }), a2, l2, h2 = i10.navigatorOptions.series, d2;
    s2 && s2.length && s2.forEach((e11) => {
      let c2 = e11.navigatorSeries, u2 = iy({
        color: e11.color,
        visible: e11.visible
      }, iE(h2) ? ih.navigator.series : h2);
      if (c2 && false === i10.navigatorOptions.adaptToUpdatedData) return;
      r2.name = "Navigator " + s2.length, d2 = (a2 = e11.options || {}).navigatorOptions || {}, u2.dataLabels = ik(u2.dataLabels), (l2 = iT(a2, r2, u2, d2)).pointRange = iM(u2.pointRange, d2.pointRange, ih.plotOptions[l2.type || "line"].pointRange);
      let p2 = d2.data || u2.data;
      i10.hasNavigatorData = i10.hasNavigatorData || !!p2, l2.data = p2 || a2.data?.slice(0), c2 && c2.options ? c2.update(l2, t) : (e11.navigatorSeries = n10.initSeries(l2), n10.setSortedData(), e11.navigatorSeries.baseSeries = e11, o2.push(e11.navigatorSeries));
    }), (h2.data && !(s2 && s2.length) || iE(h2)) && (i10.hasNavigatorData = false, (h2 = ik(h2)).forEach((e11, t10) => {
      r2.name = "Navigator " + (o2.length + 1), (l2 = iT(ih.navigator.series, {
        color: n10.series[t10] && !n10.series[t10].options.isInternal && n10.series[t10].color || n10.options.colors[t10] || n10.options.colors[0]
      }, r2, e11)).data = e11.data, l2.data && (i10.hasNavigatorData = true, o2.push(n10.initSeries(l2)));
    })), e10 && this.addBaseSeriesEvents();
  }
  addBaseSeriesEvents() {
    let e10 = this, t = e10.baseSeries || [];
    t[0] && t[0].xAxis && t[0].eventsToUnbind.push(iu(t[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), t.forEach((i10) => {
      i10.eventsToUnbind.push(iu(i10, "show", function() {
        this.navigatorSeries && this.navigatorSeries.setVisible(true, false);
      })), i10.eventsToUnbind.push(iu(i10, "hide", function() {
        this.navigatorSeries && this.navigatorSeries.setVisible(false, false);
      })), false !== this.navigatorOptions.adaptToUpdatedData && i10.xAxis && i10.eventsToUnbind.push(iu(i10, "updatedData", this.updatedDataHandler)), i10.eventsToUnbind.push(iu(i10, "remove", function() {
        t && ix(t, i10), this.navigatorSeries && e10.series && (ix(e10.series, this.navigatorSeries), im(this.navigatorSeries.options) && this.navigatorSeries.remove(false), delete this.navigatorSeries);
      }));
    });
  }
  getBaseSeriesMin(e10) {
    return this.baseSeries.reduce(function(e11, t) {
      return Math.min(e11, t.getColumn("x")[0] ?? e11);
    }, e10);
  }
  modifyNavigatorAxisExtremes() {
    let e10 = this.xAxis;
    if (void 0 !== e10.getExtremes) {
      let t = this.getUnionExtremes(true);
      t && (t.dataMin !== e10.min || t.dataMax !== e10.max) && (e10.min = t.dataMin, e10.max = t.dataMax);
    }
  }
  modifyBaseAxisExtremes() {
    let e10, t, i10 = this.chart.navigator, n10 = this.getExtremes(), s2 = n10.min, r2 = n10.max, o2 = n10.dataMin, a2 = n10.dataMax, l2 = r2 - s2, h2 = i10.stickToMin, d2 = i10.stickToMax, c2 = iM(this.ordinal?.convertOverscroll(this.options.overscroll), 0), u2 = i10.series && i10.series[0], p2 = !!this.setExtremes;
    !(this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger) && (h2 && (e10 = (t = o2) + l2), d2 && (e10 = a2 + c2, h2 || (t = Math.max(o2, e10 - l2, i10.getBaseSeriesMin(u2 && u2.xData ? u2.xData[0] : -Number.MAX_VALUE)))), p2 && (h2 || d2) && iA(t) && (this.min = this.userMin = t, this.max = this.userMax = e10)), i10.stickToMin = i10.stickToMax = null;
  }
  updatedDataHandler() {
    let e10 = this.chart.navigator, t = this.navigatorSeries, i10 = e10.reversedExtremes ? 0 === Math.round(e10.zoomedMin) : Math.round(e10.zoomedMax) >= Math.round(e10.size);
    e10.stickToMax = iM(this.chart.options.navigator && this.chart.options.navigator.stickToMax, i10), e10.stickToMin = e10.shouldStickToMin(this, e10), t && !e10.hasNavigatorData && (t.options.pointStart = this.getColumn("x")[0], t.setData(this.options.data, false, null, false));
  }
  shouldStickToMin(e10, t) {
    let i10 = t.getBaseSeriesMin(e10.getColumn("x")[0]), n10 = e10.xAxis, s2 = n10.max, r2 = n10.min, o2 = n10.options.range, a2 = true;
    return !!(iA(s2) && iA(r2)) && (o2 && s2 - i10 > 0 ? s2 - i10 < o2 : r2 <= i10);
  }
  addChartEvents() {
    this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(iu(this.chart, "redraw", function() {
      let e10 = this.navigator, t = e10 && (e10.baseSeries && e10.baseSeries[0] && e10.baseSeries[0].xAxis || this.xAxis[0]);
      t && e10.render(t.min, t.max);
    }), iu(this.chart, "getMargins", function() {
      let e10 = this.navigator, t = e10.opposite ? "plotTop" : "marginBottom";
      this.inverted && (t = e10.opposite ? "marginRight" : "plotLeft"), this[t] = (this[t] || 0) + (e10.navigatorEnabled || !this.inverted ? e10.height + (this.scrollbar?.options.margin || 0) + e10.scrollbarHeight : 0) + (e10.navigatorOptions.margin || 0);
    }), iu(_iP, "setRange", function(e10) {
      this.chart.xAxis[0].setExtremes(e10.min, e10.max, e10.redraw, e10.animation, e10.eventArguments);
    }));
  }
  destroy() {
    this.removeEvents(), this.xAxis && (ix(this.chart.xAxis, this.xAxis), ix(this.chart.axes, this.xAxis)), this.yAxis && (ix(this.chart.yAxis, this.yAxis), ix(this.chart.axes, this.yAxis)), (this.series || []).forEach((e10) => {
      e10.destroy && e10.destroy();
    }), ["series", "xAxis", "yAxis", "shades", "outline", "scrollbarTrack", "scrollbarRifles", "scrollbarGroup", "scrollbar", "navigatorGroup", "rendered"].forEach((e10) => {
      this[e10] && this[e10].destroy && this[e10].destroy(), this[e10] = null;
    }), [this.handles].forEach((e10) => {
      ib(e10);
    }), this.baseSeries.forEach((e10) => {
      e10.navigatorSeries = void 0;
    }), this.navigatorEnabled = false;
  }
};
var {
  animObject: iD
} = l();
var {
  format: iN
} = f();
var {
  clamp: iB,
  pick: iI,
  syncTimeout: iF
} = l();
var {
  getFakeMouseEvent: iO
} = m;
var {
  getAxisRangeDescription: iR,
  fireEventOnWrappedOrUnwrappedElement: iL
} = B;
var iH = class extends q {
  init() {
    let e10 = this.chart, t = this;
    this.announcer = new en(e10, "polite"), this.addEvent(iP, "afterRender", function() {
      this.chart === t.chart && this.chart.renderer && iF(() => {
        t.proxyProvider.updateGroupProxyElementPositions("navigator"), t.updateHandleValues();
      }, iD(iI(this.chart.renderer.globalAnimation, true)).duration);
    });
  }
  onChartUpdate() {
    let e10 = this.chart, t = e10.options, i10 = t.navigator;
    if (i10.enabled && i10.accessibility?.enabled) {
      let i11 = t.accessibility.landmarkVerbosity, n10 = t.lang.accessibility?.navigator.groupLabel;
      this.proxyProvider.removeGroup("navigator"), this.proxyProvider.addGroup("navigator", "div", {
        role: "all" === i11 ? "region" : "group",
        "aria-label": iN(n10, {
          chart: e10
        }, e10)
      });
      let s2 = t.lang.accessibility?.navigator.handleLabel;
      [0, 1].forEach((t10) => {
        let i12 = this.getHandleByIx(t10);
        if (i12) {
          let n11 = this.proxyProvider.addProxyElement("navigator", {
            click: i12
          }, "input", {
            type: "range",
            "aria-label": iN(s2, {
              handleIx: t10,
              chart: e10
            }, e10)
          });
          this[t10 ? "maxHandleProxy" : "minHandleProxy"] = n11.innerElement, n11.innerElement.style.pointerEvents = "none", n11.innerElement.oninput = () => this.updateNavigator();
        }
      }), this.updateHandleValues();
    } else this.proxyProvider.removeGroup("navigator");
  }
  getNavigatorHandleNavigation(e10) {
    let t = this, i10 = this.chart, n10 = e10 ? this.maxHandleProxy : this.minHandleProxy, s2 = this.keyCodes;
    return new K(i10, {
      keyCodeMap: [[[s2.left, s2.right, s2.up, s2.down], function(r2) {
        if (n10) {
          let o2 = r2 === s2.left || r2 === s2.up ? -1 : 1;
          n10.value = "" + iB(parseFloat(n10.value) + o2, 0, 100), t.updateNavigator(() => {
            let s3 = t.getHandleByIx(e10);
            s3 && i10.setFocusToElement(s3, n10);
          });
        }
        return this.response.success;
      }]],
      init: () => {
        i10.setFocusToElement(this.getHandleByIx(e10), n10);
      },
      validate: () => !!(this.getHandleByIx(e10) && n10 && i10.options.navigator.accessibility?.enabled)
    });
  }
  getKeyboardNavigation() {
    return [this.getNavigatorHandleNavigation(0), this.getNavigatorHandleNavigation(1)];
  }
  destroy() {
    this.updateNavigatorThrottleTimer && clearTimeout(this.updateNavigatorThrottleTimer), this.proxyProvider.removeGroup("navigator"), this.announcer && this.announcer.destroy();
  }
  updateHandleValues() {
    let e10 = this.chart.navigator;
    if (e10 && this.minHandleProxy && this.maxHandleProxy) {
      let t = e10.size;
      this.minHandleProxy.value = "" + Math.round(e10.zoomedMin / t * 100), this.maxHandleProxy.value = "" + Math.round(e10.zoomedMax / t * 100);
    }
  }
  getHandleByIx(e10) {
    let t = this.chart.navigator;
    return t && t.handles && t.handles[e10];
  }
  updateNavigator(e10) {
    this.updateNavigatorThrottleTimer && clearTimeout(this.updateNavigatorThrottleTimer), this.updateNavigatorThrottleTimer = setTimeout(((e11) => {
      let t = this.chart, {
        navigator: i10,
        pointer: n10
      } = t;
      if (i10 && n10 && this.minHandleProxy && this.maxHandleProxy) {
        let s2 = n10.getChartPosition(), r2 = parseFloat(this.minHandleProxy.value) / 100 * i10.size, o2 = parseFloat(this.maxHandleProxy.value) / 100 * i10.size;
        [[0, "mousedown", i10.zoomedMin], [0, "mousemove", r2], [0, "mouseup", r2], [1, "mousedown", i10.zoomedMax], [1, "mousemove", o2], [1, "mouseup", o2]].forEach(([e12, t10, n11]) => {
          let r3 = this.getHandleByIx(e12)?.element;
          r3 && iL(r3, iO(t10, {
            x: s2.left + i10.left + n11,
            y: s2.top + i10.top
          }, r3));
        }), e11 && e11();
        let a2 = t.options.lang.accessibility?.navigator.changeAnnouncement, l2 = iR(t.xAxis[0]);
        this.announcer.announce(iN(a2, {
          axisRangeDescription: l2,
          chart: t
        }, t));
      }
    }).bind(this, e10), 20);
  }
};
var {
  getPointAnnotationTexts: iz
} = ed;
var {
  getAxisDescription: iq,
  getSeriesFirstPointElement: iU,
  getSeriesA11yElement: iK,
  unhideChartElementFromAT: iG
} = B;
var {
  format: iW,
  numberFormat: iV
} = f();
var {
  reverseChildNodes: iX,
  stripHTMLTagsFromString: iY
} = m;
var {
  find: ij,
  isNumber: iZ,
  isString: i$,
  pick: i_,
  defined: iQ
} = l();
function iJ(e10) {
  let t = e10.chart.options.accessibility.series.pointDescriptionEnabledThreshold;
  return !!(false !== t && e10.points && e10.points.length >= +t);
}
function i0(e10, t) {
  let i10 = e10.series, n10 = i10.chart, s2 = n10.options.accessibility.point || {}, r2 = i10.options.accessibility && i10.options.accessibility.point || {}, o2 = i10.tooltipOptions || {}, a2 = n10.options.lang;
  return iZ(t) ? iV(t, r2.valueDecimals || s2.valueDecimals || o2.valueDecimals || -1, a2.decimalPoint, a2.accessibility.thousandsSep || a2.thousandsSep) : t;
}
function i1(e10, t) {
  let i10 = e10[t];
  return e10.chart.langFormat("accessibility.series." + t + "Description", {
    name: iq(i10),
    series: e10
  });
}
function i2(e10) {
  let t = e10.series, i10 = t.chart.series.length > 1 || t.options.name, n10 = function(e11) {
    let t10 = e11.series, i11 = t10.chart, n11 = t10.options.accessibility, s3 = n11 && n11.point && n11.point.valueDescriptionFormat || i11.options.accessibility.point.valueDescriptionFormat, r3 = i_(t10.xAxis && t10.xAxis.options.accessibility && t10.xAxis.options.accessibility.enabled, !i11.angular && "flowmap" !== t10.type), o3 = r3 ? function(e12) {
      let t11 = function(e13) {
        let t12 = e13.series, i13 = t12.chart, n13 = t12.options.accessibility && t12.options.accessibility.point || {}, s5 = i13.options.accessibility.point || {}, r4 = t12.xAxis && t12.xAxis.dateTime;
        if (r4) {
          let t13 = r4.getXDateFormat(e13.x || 0, i13.options.tooltip.dateTimeLabelFormats), o4 = n13.dateFormatter && n13.dateFormatter(e13) || s5.dateFormatter && s5.dateFormatter(e13) || n13.dateFormat || s5.dateFormat || t13;
          return i13.time.dateFormat(o4, e13.x || 0, void 0);
        }
      }(e12), i12 = (e12.series.xAxis || {}).categories && iQ(e12.category) && ("" + e12.category).replace("<br/>", " "), n12 = iQ(e12.id) && 0 > ("" + e12.id).indexOf("highcharts-"), s4 = "x, " + e12.x;
      return e12.name || t11 || i12 || (n12 ? e12.id : s4);
    }(e11) : "";
    return iW(s3, {
      point: e11,
      index: iQ(e11.index) ? e11.index + 1 : "",
      xDescription: o3,
      value: function(e12) {
        let t11 = e12.series, i12 = t11.chart.options.accessibility.point || {}, n12 = t11.chart.options.accessibility && t11.chart.options.accessibility.point || {}, s4 = t11.tooltipOptions || {}, r4 = n12.valuePrefix || i12.valuePrefix || s4.valuePrefix || "", o4 = n12.valueSuffix || i12.valueSuffix || s4.valueSuffix || "", a2 = void 0 !== e12.value ? "value" : "y", l2 = i0(e12, e12[a2]);
        if (e12.isNull) return t11.chart.langFormat("accessibility.series.nullPointValue", {
          point: e12
        });
        if (t11.pointArrayMap) {
          let t12 = r4 || "", i13 = o4 || "", n13 = function(n14) {
            let s5 = i0(e12, i_(e12[n14], e12.options[n14]));
            return void 0 !== s5 ? n14 + ": " + t12 + s5 + i13 : s5;
          };
          return e12.series.pointArrayMap.reduce(function(e13, t13) {
            let i14 = n13(t13);
            return i14 ? e13 + (e13.length ? ", " : "") + i14 : e13;
          }, "");
        }
        return r4 + l2 + o4;
      }(e11),
      separator: r3 ? ", " : ""
    }, i11);
  }(e10), s2 = e10.options && e10.options.accessibility && e10.options.accessibility.description, r2 = i10 ? " " + t.name + "." : "", o2 = function(e11) {
    let t10 = e11.series.chart, i11 = iz(e11);
    return i11.length ? t10.langFormat("accessibility.series.pointAnnotationsDescription", {
      point: e11,
      annotations: i11
    }) : "";
  }(e10);
  return e10.accessibility = e10.accessibility || {}, e10.accessibility.valueDescription = n10, n10 + (s2 ? " " + s2 : "") + r2 + (o2 ? " " + o2 : "");
}
function i3(e10) {
  let t = e10.chart, i10 = t.types || [], n10 = function(e11) {
    let t10 = (e11.options.accessibility || {}).description;
    return t10 && e11.chart.langFormat("accessibility.series.description", {
      description: t10,
      series: e11
    }) || "";
  }(e10), s2 = function(i11) {
    return t[i11] && t[i11].length > 1 && e10[i11];
  }, r2 = e10.index + 1, o2 = i1(e10, "xAxis"), a2 = i1(e10, "yAxis"), l2 = {
    seriesNumber: r2,
    series: e10,
    chart: t
  }, h2 = i10.length > 1 ? "Combination" : "", d2 = t.langFormat("accessibility.series.summary." + e10.type + h2, l2) || t.langFormat("accessibility.series.summary.default" + h2, l2), c2 = (s2("yAxis") ? " " + a2 + "." : "") + (s2("xAxis") ? " " + o2 + "." : "");
  return iW(i_(e10.options.accessibility && e10.options.accessibility.descriptionFormat, t.options.accessibility.series.descriptionFormat, ""), {
    seriesDescription: d2,
    authorDescription: n10 ? " " + n10 : "",
    axisDescription: c2,
    series: e10,
    chart: t,
    seriesNumber: r2
  }, void 0);
}
var i5 = {
  defaultPointDescriptionFormatter: i2,
  defaultSeriesDescriptionFormatter: i3,
  describeSeries: function(e10) {
    let t = e10.chart, i10 = iU(e10), n10 = iK(e10), s2 = t.is3d && t.is3d();
    if (n10) {
      n10.lastChild !== i10 || s2 || iX(n10);
      let r2 = function(e11) {
        let t10 = e11.options.accessibility || {};
        return !iJ(e11) && !t10.exposeAsGroupOnly;
      }(e10), o2 = function(e11) {
        let t10 = e11.chart.options.accessibility.keyboardNavigation.seriesNavigation;
        return !!(e11.points && (e11.points.length < +t10.pointNavigationEnabledThreshold || false === t10.pointNavigationEnabledThreshold));
      }(e10), a2 = e10.chart.options.accessibility.point.describeNull;
      if ((r2 || o2) && e10.points.forEach((t10) => {
        let i11 = t10.graphic && t10.graphic.element || function(e11) {
          let t11 = e11.series, i12 = t11 && t11.chart, n12 = t11 && t11.is("sunburst"), s3 = e11.isNull, r3 = i12 && i12.options.accessibility.point.describeNull;
          return s3 && !n12 && r3;
        }(t10) && function(e11) {
          let t11 = e11.series, i12 = function(e12) {
            let t12 = e12.index;
            if (!e12.series || !e12.series.data || !iQ(t12)) return null;
            let i13 = e12.series.options?.nullInteraction;
            return ij(e12.series.data, function(e13) {
              return !!(e13 && void 0 !== e13.index && (i13 || e13.index > t12) && e13.graphic && e13.graphic.element);
            }) || null;
          }(e11), n12 = i12 && i12.graphic, s3 = n12 ? n12.parentGroup : t11.graph || t11.group, r3 = i12 ? {
            x: i_(e11.plotX, i12.plotX, 0),
            y: i_(e11.plotY, i12.plotY, 0)
          } : {
            x: i_(e11.plotX, 0),
            y: i_(e11.plotY, 0)
          }, o3 = function(e12, t12) {
            let i13 = e12.series.chart.renderer.rect(t12.x, t12.y, 1, 1);
            return i13.attr({
              class: "highcharts-a11y-mock-point",
              fill: "none",
              opacity: 0,
              "fill-opacity": 0,
              "stroke-opacity": 0
            }), i13;
          }(e11, r3);
          if (s3 && s3.element) return e11.graphic = o3, e11.hasMockGraphic = true, o3.add(s3), s3.element.insertBefore(o3.element, n12 ? n12.element : null), o3.element;
        }(t10), n11 = t10.options && t10.options.accessibility && false === t10.options.accessibility.enabled;
        if (i11) {
          if (t10.isNull && !a2) return void i11.setAttribute("aria-hidden", true);
          if (i11.setAttribute("tabindex", "-1"), e10.chart.styledMode || (i11.style.outline = "none"), r2 && !n11) {
            let e11 = t10.series, n12 = e11.options.accessibility?.point || {}, s3 = e11.chart.options.accessibility.point || {}, r3 = iY(i$(n12.descriptionFormat) && iW(n12.descriptionFormat, t10, e11.chart) || n12.descriptionFormatter?.(t10) || i$(s3.descriptionFormat) && iW(s3.descriptionFormat, t10, e11.chart) || s3.descriptionFormatter?.(t10) || i2(t10), e11.chart.renderer.forExport);
            i11.setAttribute("role", "img"), i11.setAttribute("aria-label", r3);
          } else i11.setAttribute("aria-hidden", true);
        }
      }), iG(t, n10), function(e11) {
        let t10 = e11.chart, i11 = t10.options.chart, n11 = i11.options3d && i11.options3d.enabled, s3 = t10.series.length > 1, r3 = t10.options.accessibility.series.describeSingleSeries, o3 = (e11.options.accessibility || {}).exposeAsGroupOnly;
        return !(n11 && s3) && (s3 || r3 || o3 || iJ(e11));
      }(e10)) {
        let t10 = e10.options.accessibility || {}, i11 = e10.chart.options.accessibility, s3 = i11.landmarkVerbosity;
        t10.exposeAsGroupOnly ? n10.setAttribute("role", "img") : "all" === s3 ? n10.setAttribute("role", "region") : n10.setAttribute("role", "group"), n10.setAttribute("tabindex", "-1"), e10.chart.styledMode || (n10.style.outline = "none"), n10.setAttribute("aria-label", iY(i11.series.descriptionFormatter && i11.series.descriptionFormatter(e10) || i3(e10), e10.chart.renderer.forExport));
      } else n10.removeAttribute("aria-label");
    }
  }
};
var {
  composed: i4
} = l();
var {
  addEvent: i9,
  defined: i6,
  pushUnique: i8
} = l();
var {
  getChartTitle: i7
} = B;
var {
  defaultPointDescriptionFormatter: ne,
  defaultSeriesDescriptionFormatter: nt
} = i5;
function ni(e10) {
  return !!e10.options.accessibility.announceNewData.enabled;
}
var nn = class {
  constructor(e10) {
    this.dirty = {
      allSeries: {}
    }, this.lastAnnouncementTime = 0, this.chart = e10;
  }
  init() {
    let e10 = this.chart, t = e10.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite";
    this.lastAnnouncementTime = 0, this.dirty = {
      allSeries: {}
    }, this.eventProvider = new L(), this.announcer = new en(e10, t), this.addEventListeners();
  }
  destroy() {
    this.eventProvider.removeAddedEvents(), this.announcer.destroy();
  }
  addEventListeners() {
    let e10 = this, t = this.chart, i10 = this.eventProvider;
    i10.addEvent(t, "afterApplyDrilldown", function() {
      e10.lastAnnouncementTime = 0;
    }), i10.addEvent(t, "afterAddSeries", function(t10) {
      e10.onSeriesAdded(t10.series);
    }), i10.addEvent(t, "redraw", function() {
      e10.announceDirtyData();
    });
  }
  onSeriesAdded(e10) {
    ni(this.chart) && (this.dirty.hasDirty = true, this.dirty.allSeries[e10.name + e10.index] = e10, this.dirty.newSeries = i6(this.dirty.newSeries) ? void 0 : e10);
  }
  announceDirtyData() {
    let e10 = this.chart, t = this;
    if (e10.options.accessibility.announceNewData && this.dirty.hasDirty) {
      let e11 = this.dirty.newPoint;
      e11 && (e11 = function(e12) {
        let t10 = e12.series.data.filter((t11) => e12.x === t11.x && e12.y === t11.y);
        return 1 === t10.length ? t10[0] : e12;
      }(e11)), this.queueAnnouncement(Object.keys(this.dirty.allSeries).map((e12) => t.dirty.allSeries[e12]), this.dirty.newSeries, e11), this.dirty = {
        allSeries: {}
      };
    }
  }
  queueAnnouncement(e10, t, i10) {
    let n10 = this.chart.options.accessibility.announceNewData;
    if (n10.enabled) {
      let s2 = +/* @__PURE__ */ new Date(), r2 = s2 - this.lastAnnouncementTime, o2 = Math.max(0, n10.minAnnounceInterval - r2), a2 = function(e11, t10) {
        let i11 = (e11 || []).concat(t10 || []).reduce((e12, t11) => (e12[t11.name + t11.index] = t11, e12), {});
        return Object.keys(i11).map((e12) => i11[e12]);
      }(this.queuedAnnouncement && this.queuedAnnouncement.series, e10), l2 = this.buildAnnouncementMessage(a2, t, i10);
      l2 && (this.queuedAnnouncement && clearTimeout(this.queuedAnnouncementTimer), this.queuedAnnouncement = {
        time: s2,
        message: l2,
        series: a2
      }, this.queuedAnnouncementTimer = setTimeout(() => {
        this && this.announcer && (this.lastAnnouncementTime = +/* @__PURE__ */ new Date(), this.announcer.announce(this.queuedAnnouncement.message), delete this.queuedAnnouncement, delete this.queuedAnnouncementTimer);
      }, o2));
    }
  }
  buildAnnouncementMessage(e10, t, i10) {
    let n10 = this.chart, s2 = n10.options.accessibility.announceNewData;
    if (s2.announcementFormatter) {
      let n11 = s2.announcementFormatter(e10, t, i10);
      if (false !== n11) return n11.length ? n11 : null;
    }
    let r2 = l().charts && l().charts.length > 1 ? "Multiple" : "Single", o2 = t ? "newSeriesAnnounce" + r2 : i10 ? "newPointAnnounce" + r2 : "newDataAnnounce", a2 = i7(n10);
    return n10.langFormat("accessibility.announceNewData." + o2, {
      chartTitle: a2,
      seriesDesc: t ? nt(t) : null,
      pointDesc: i10 ? ne(i10) : null,
      point: i10,
      series: t
    });
  }
};
function ns(e10) {
  let t = this.chart, i10 = t.accessibility?.components.series.newDataAnnouncer;
  i10 && i10.chart === t && ni(t) && (i10.dirty.newPoint = i6(i10.dirty.newPoint) ? void 0 : e10.point);
}
function nr() {
  let e10 = this.chart, t = e10.accessibility?.components.series.newDataAnnouncer;
  t && t.chart === e10 && ni(e10) && (t.dirty.hasDirty = true, t.dirty.allSeries[this.name + this.index] = this);
}
(nn || (nn = {})).compose = function(e10) {
  i8(i4, "A11y.NDA") && (i9(e10, "addPoint", ns), i9(e10, "updatedData", nr));
};
var no = nn;
var {
  doc: na,
  win: nl
} = l();
var {
  attr: nh,
  css: nd,
  merge: nc
} = l();
var {
  fireEventOnWrappedOrUnwrappedElement: nu
} = B;
var {
  cloneMouseEvent: np,
  cloneTouchEvent: ng,
  getFakeMouseEvent: nm,
  removeElement: nb
} = m;
var nf = class {
  constructor(e10, t, i10 = "button", n10, s2) {
    this.chart = e10, this.target = t, this.eventProvider = new L();
    let r2 = this.innerElement = na.createElement(i10), o2 = this.element = n10 ? na.createElement(n10) : r2;
    e10.styledMode || this.hideElementVisually(r2), n10 && ("li" !== n10 || e10.styledMode || (o2.style.listStyle = "none"), o2.appendChild(r2), this.element = o2), this.updateTarget(t, s2);
  }
  click() {
    let e10 = this.getTargetPosition();
    e10.x += e10.width / 2, e10.y += e10.height / 2;
    let t = nm("click", e10);
    nu(this.target.click, t);
  }
  updateTarget(e10, t) {
    this.target = e10, this.updateCSSClassName();
    let i10 = t || {};
    Object.keys(i10).forEach((e11) => {
      null === i10[e11] && delete i10[e11];
    });
    let n10 = this.getTargetAttr(e10.click, "aria-label");
    nh(this.innerElement, nc(n10 ? {
      "aria-label": n10
    } : {}, i10)), this.eventProvider.removeAddedEvents(), this.addProxyEventsToElement(this.innerElement, e10.click), this.refreshPosition();
  }
  refreshPosition() {
    let e10 = this.getTargetPosition();
    nd(this.innerElement, {
      width: (e10.width || 1) + "px",
      height: (e10.height || 1) + "px",
      left: (Math.round(e10.x) || 0) + "px",
      top: (Math.round(e10.y) || 0) + "px"
    });
  }
  remove() {
    this.eventProvider.removeAddedEvents(), nb(this.element);
  }
  updateCSSClassName() {
    let e10 = (e11) => e11.indexOf("highcharts-no-tooltip") > -1, t = this.chart.legend, i10 = t.group && t.group.div, n10 = e10(i10 && i10.className || ""), s2 = e10(this.getTargetAttr(this.target.click, "class") || "");
    this.innerElement.className = n10 || s2 ? "highcharts-a11y-proxy-element highcharts-no-tooltip" : "highcharts-a11y-proxy-element";
  }
  addProxyEventsToElement(e10, t) {
    ["click", "touchstart", "touchend", "touchcancel", "touchmove", "mouseover", "mouseenter", "mouseleave", "mouseout"].forEach((i10) => {
      let n10 = 0 === i10.indexOf("touch");
      this.eventProvider.addEvent(e10, i10, (e11) => {
        let i11 = n10 ? ng(e11) : np(e11);
        t && nu(t, i11), e11.stopPropagation(), n10 || e11.preventDefault();
      }, {
        passive: false
      });
    });
  }
  hideElementVisually(e10) {
    nd(e10, {
      borderWidth: 0,
      backgroundColor: "transparent",
      cursor: "pointer",
      outline: "none",
      opacity: 1e-3,
      filter: "alpha(opacity=1)",
      zIndex: 999,
      overflow: "hidden",
      padding: 0,
      margin: 0,
      display: "block",
      position: "absolute",
      "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)"
    });
  }
  getTargetPosition() {
    let e10 = this.target.click, t = e10.element ? e10.element : e10, i10 = this.target.visual || t, n10 = this.chart.renderTo, s2 = this.chart.pointer;
    if (n10 && i10?.getBoundingClientRect && s2) {
      let e11 = nl.scrollY || na.documentElement.scrollTop, t10 = i10.getBoundingClientRect(), n11 = s2.getChartPosition();
      return {
        x: (t10.left - n11.left) / n11.scaleX,
        y: (t10.top + e11 - n11.top) / n11.scaleY,
        width: t10.right / n11.scaleX - t10.left / n11.scaleX,
        height: t10.bottom / n11.scaleY - t10.top / n11.scaleY
      };
    }
    return {
      x: 0,
      y: 0,
      width: 1,
      height: 1
    };
  }
  getTargetAttr(e10, t) {
    return e10.element ? e10.element.getAttribute(t) : e10.getAttribute(t);
  }
};
var {
  doc: nx
} = l();
var {
  attr: ny,
  css: nv
} = l();
var {
  unhideChartElementFromAT: nw
} = B;
var {
  removeChildNodes: nE
} = m;
var nA = class {
  constructor(e10) {
    this.chart = e10, this.domElementProvider = new O(), this.groups = {}, this.groupOrder = [], this.beforeChartProxyPosContainer = this.createProxyPosContainer("before"), this.afterChartProxyPosContainer = this.createProxyPosContainer("after"), this.update();
  }
  addProxyElement(e10, t, i10 = "button", n10) {
    let s2 = this.groups[e10];
    if (!s2) throw Error("ProxyProvider.addProxyElement: Invalid group key " + e10);
    let r2 = "ul" === s2.type || "ol" === s2.type ? "li" : void 0, o2 = new nf(this.chart, t, i10, r2, n10);
    return s2.proxyContainerElement.appendChild(o2.element), s2.proxyElements.push(o2), o2;
  }
  addGroup(e10, t = "div", i10) {
    let n10, s2 = this.groups[e10];
    if (s2) return s2.groupElement;
    let r2 = this.domElementProvider.createElement(t);
    return i10 && i10.role && "div" !== t ? (n10 = this.domElementProvider.createElement("div")).appendChild(r2) : n10 = r2, n10.className = "highcharts-a11y-proxy-group highcharts-a11y-proxy-group-" + e10.replace(/\W/g, "-"), this.groups[e10] = {
      proxyContainerElement: r2,
      groupElement: n10,
      type: t,
      proxyElements: []
    }, ny(n10, i10 || {}), "ul" === t && r2.setAttribute("role", "list"), this.afterChartProxyPosContainer.appendChild(n10), this.updateGroupOrder(this.groupOrder), n10;
  }
  updateGroupAttrs(e10, t) {
    let i10 = this.groups[e10];
    if (!i10) throw Error("ProxyProvider.updateGroupAttrs: Invalid group key " + e10);
    ny(i10.groupElement, t);
  }
  updateGroupOrder(e10) {
    if (this.groupOrder = e10.slice(), this.isDOMOrderGroupOrder()) return;
    let t = e10.indexOf("series"), i10 = t > -1 ? e10.slice(0, t) : e10, n10 = t > -1 ? e10.slice(t + 1) : [], s2 = nx.activeElement;
    ["before", "after"].forEach((e11) => {
      let t10 = this["before" === e11 ? "beforeChartProxyPosContainer" : "afterChartProxyPosContainer"];
      nE(t10), ("before" === e11 ? i10 : n10).forEach((e12) => {
        let i11 = this.groups[e12];
        i11 && t10.appendChild(i11.groupElement);
      });
    }), (this.beforeChartProxyPosContainer.contains(s2) || this.afterChartProxyPosContainer.contains(s2)) && s2 && s2.focus && s2.focus();
  }
  clearGroup(e10) {
    let t = this.groups[e10];
    if (!t) throw Error("ProxyProvider.clearGroup: Invalid group key " + e10);
    nE(t.proxyContainerElement);
  }
  removeGroup(e10) {
    let t = this.groups[e10];
    t && (this.domElementProvider.removeElement(t.groupElement), t.groupElement !== t.proxyContainerElement && this.domElementProvider.removeElement(t.proxyContainerElement), delete this.groups[e10]);
  }
  update() {
    this.updatePosContainerPositions(), this.updateGroupOrder(this.groupOrder), this.updateProxyElementPositions();
  }
  updateProxyElementPositions() {
    Object.keys(this.groups).forEach(this.updateGroupProxyElementPositions.bind(this));
  }
  updateGroupProxyElementPositions(e10) {
    let t = this.groups[e10];
    t && t.proxyElements.forEach((e11) => e11.refreshPosition());
  }
  destroy() {
    this.domElementProvider.destroyCreatedElements();
  }
  createProxyPosContainer(e10) {
    let t = this.domElementProvider.createElement("div");
    return t.setAttribute("aria-hidden", "false"), t.className = "highcharts-a11y-proxy-container" + (e10 ? "-" + e10 : ""), nv(t, {
      top: "0",
      left: "0"
    }), this.chart.styledMode || (t.style.whiteSpace = "nowrap", t.style.position = "absolute"), t;
  }
  getCurrentGroupOrderInDOM() {
    let e10 = (e11) => {
      let t10 = Object.keys(this.groups), i11 = t10.length;
      for (; i11--; ) {
        let n11 = t10[i11], s2 = this.groups[n11];
        if (s2 && e11 === s2.groupElement) return n11;
      }
    }, t = (t10) => {
      let i11 = [], n11 = t10.children;
      for (let t11 = 0; t11 < n11.length; ++t11) {
        let s2 = e10(n11[t11]);
        s2 && i11.push(s2);
      }
      return i11;
    }, i10 = t(this.beforeChartProxyPosContainer), n10 = t(this.afterChartProxyPosContainer);
    return i10.push("series"), i10.concat(n10);
  }
  isDOMOrderGroupOrder() {
    let e10 = this.getCurrentGroupOrderInDOM(), t = this.groupOrder.filter((e11) => "series" === e11 || !!this.groups[e11]), i10 = e10.length;
    if (i10 !== t.length) return false;
    for (; i10--; ) if (e10[i10] !== t[i10]) return false;
    return true;
  }
  updatePosContainerPositions() {
    let e10 = this.chart;
    if (e10.renderer.forExport) return;
    let t = e10.renderer.box;
    e10.container.insertBefore(this.afterChartProxyPosContainer, t.nextSibling), e10.container.insertBefore(this.beforeChartProxyPosContainer, t), nw(this.chart, this.afterChartProxyPosContainer), nw(this.chart, this.beforeChartProxyPosContainer);
  }
};
var {
  unhideChartElementFromAT: nT,
  getAxisRangeDescription: nM
} = B;
var {
  addEvent: nC,
  attr: nk
} = l();
var nS = class extends q {
  init() {
    let e10 = this.chart;
    this.announcer = new en(e10, "polite");
  }
  onChartUpdate() {
    let e10 = this.chart, t = this, i10 = e10.rangeSelector;
    i10 && (this.updateSelectorVisibility(), this.setDropdownAttrs(), i10.buttons && i10.buttons.length && i10.buttons.forEach((e11) => {
      t.setRangeButtonAttrs(e11);
    }), i10.maxInput && i10.minInput && ["minInput", "maxInput"].forEach(function(n10, s2) {
      let r2 = i10[n10];
      r2 && (nT(e10, r2), t.setRangeInputAttrs(r2, "accessibility.rangeSelector." + (s2 ? "max" : "min") + "InputLabel"));
    }));
  }
  updateSelectorVisibility() {
    let e10 = this.chart, t = e10.rangeSelector, i10 = t && t.dropdown, n10 = t && t.buttons || [], s2 = (e11) => e11.setAttribute("aria-hidden", true);
    t && t.hasVisibleDropdown && i10 ? (nT(e10, i10), n10.forEach((e11) => s2(e11.element))) : (i10 && s2(i10), n10.forEach((t10) => nT(e10, t10.element)));
  }
  setDropdownAttrs() {
    let e10 = this.chart, t = e10.rangeSelector && e10.rangeSelector.dropdown;
    if (t) {
      let i10 = e10.langFormat("accessibility.rangeSelector.dropdownLabel", {
        rangeTitle: e10.options.lang.rangeSelectorZoom
      });
      t.setAttribute("aria-label", i10), t.setAttribute("tabindex", -1);
    }
  }
  setRangeButtonAttrs(e10) {
    nk(e10.element, {
      tabindex: -1,
      role: "button"
    });
  }
  setRangeInputAttrs(e10, t) {
    let i10 = this.chart;
    nk(e10, {
      tabindex: -1,
      "aria-label": i10.langFormat(t, {
        chart: i10
      })
    });
  }
  onButtonNavKbdArrowKey(e10, t) {
    let i10 = e10.response, n10 = this.keyCodes, s2 = this.chart, r2 = s2.options.accessibility.keyboardNavigation.wrapAround, o2 = t === n10.left || t === n10.up ? -1 : 1;
    return s2.highlightRangeSelectorButton(s2.highlightedRangeSelectorItemIx + o2) ? i10.success : r2 ? (e10.init(o2), i10.success) : i10[o2 > 0 ? "next" : "prev"];
  }
  onButtonNavKbdClick(e10) {
    let t = e10.response, i10 = this.chart;
    return 3 !== i10.oldRangeSelectorItemState && this.fakeClickEvent(i10.rangeSelector.buttons[i10.highlightedRangeSelectorItemIx].element), t.success;
  }
  onAfterBtnClick() {
    let e10 = this.chart, t = nM(e10.xAxis[0]), i10 = e10.langFormat("accessibility.rangeSelector.clickButtonAnnouncement", {
      chart: e10,
      axisRangeDescription: t
    });
    i10 && this.announcer.announce(i10);
  }
  onInputKbdMove(e10) {
    let t = this.chart, i10 = t.rangeSelector, n10 = t.highlightedInputRangeIx = (t.highlightedInputRangeIx || 0) + e10;
    if (n10 > 1 || n10 < 0) {
      if (t.accessibility) return t.accessibility.keyboardNavigation.exiting = true, t.accessibility.keyboardNavigation.tabindexContainer.focus(), t.accessibility.keyboardNavigation.move(e10);
    } else if (i10) {
      let e11 = i10[n10 ? "maxDateBox" : "minDateBox"], s2 = i10[n10 ? "maxInput" : "minInput"];
      e11 && s2 && t.setFocusToElement(e11, s2);
    }
    return true;
  }
  onInputNavInit(e10) {
    let t = this, i10 = this.chart, n10 = e10 > 0 ? 0 : 1, s2 = i10.rangeSelector, r2 = s2 && s2[n10 ? "maxDateBox" : "minDateBox"], o2 = s2 && s2.minInput, a2 = s2 && s2.maxInput;
    if (i10.highlightedInputRangeIx = n10, r2 && o2 && a2) {
      i10.setFocusToElement(r2, n10 ? a2 : o2), this.removeInputKeydownHandler && this.removeInputKeydownHandler();
      let e11 = (e12) => {
        (e12.which || e12.keyCode) === this.keyCodes.tab && t.onInputKbdMove(e12.shiftKey ? -1 : 1) && (e12.preventDefault(), e12.stopPropagation());
      }, s3 = nC(o2, "keydown", e11), l2 = nC(a2, "keydown", e11);
      this.removeInputKeydownHandler = () => {
        s3(), l2();
      };
    }
  }
  onInputNavTerminate() {
    let e10 = this.chart.rangeSelector || {};
    e10.maxInput && e10.hideInput("max"), e10.minInput && e10.hideInput("min"), this.removeInputKeydownHandler && (this.removeInputKeydownHandler(), delete this.removeInputKeydownHandler);
  }
  initDropdownNav() {
    let e10 = this.chart, t = e10.rangeSelector, i10 = t && t.dropdown;
    t && i10 && (e10.setFocusToElement(t.buttonGroup, i10), this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeDropdownKeydownHandler = nC(i10, "keydown", (t10) => {
      let i11 = (t10.which || t10.keyCode) === this.keyCodes.tab, n10 = e10.accessibility;
      i11 && (t10.preventDefault(), t10.stopPropagation(), n10 && n10.keyboardNavigation.move(t10.shiftKey ? -1 : 1));
    }));
  }
  getRangeSelectorButtonNavigation() {
    let e10 = this.chart, t = this.keyCodes, i10 = this;
    return new K(e10, {
      keyCodeMap: [[[t.left, t.right, t.up, t.down], function(e11) {
        return i10.onButtonNavKbdArrowKey(this, e11);
      }], [[t.enter, t.space], function() {
        return i10.onButtonNavKbdClick(this);
      }]],
      validate: function() {
        return !!(e10.rangeSelector && e10.rangeSelector.buttons && e10.rangeSelector.buttons.length);
      },
      init: function(t10) {
        let n10 = e10.rangeSelector;
        if (n10 && n10.hasVisibleDropdown) i10.initDropdownNav();
        else if (n10) {
          let i11 = n10.buttons.length - 1;
          e10.highlightRangeSelectorButton(t10 > 0 ? 0 : i11);
        }
      },
      terminate: function() {
        i10.removeDropdownKeydownHandler && (i10.removeDropdownKeydownHandler(), delete i10.removeDropdownKeydownHandler);
      }
    });
  }
  getRangeSelectorInputNavigation() {
    let e10 = this.chart, t = this;
    return new K(e10, {
      keyCodeMap: [],
      validate: function() {
        return !!(e10.rangeSelector && e10.rangeSelector.inputGroup && "hidden" !== e10.rangeSelector.inputGroup.element.style.visibility && false !== e10.options.rangeSelector.inputEnabled && e10.rangeSelector.minInput && e10.rangeSelector.maxInput);
      },
      init: function(e11) {
        t.onInputNavInit(e11);
      },
      terminate: function() {
        t.onInputNavTerminate();
      }
    });
  }
  getKeyboardNavigation() {
    return [this.getRangeSelectorButtonNavigation(), this.getRangeSelectorInputNavigation()];
  }
  destroy() {
    this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeInputKeydownHandler && this.removeInputKeydownHandler(), this.announcer && this.announcer.destroy();
  }
};
function nP(e10) {
  let t = this.rangeSelector && this.rangeSelector.buttons || [], i10 = this.highlightedRangeSelectorItemIx, n10 = this.rangeSelector && this.rangeSelector.selected;
  return void 0 !== i10 && t[i10] && i10 !== n10 && t[i10].setState(this.oldRangeSelectorItemState || 0), this.highlightedRangeSelectorItemIx = e10, !!t[e10] && (this.setFocusToElement(t[e10].box, t[e10].element), e10 !== n10 && (this.oldRangeSelectorItemState = t[e10].state, t[e10].setState(1)), true);
}
function nD() {
  let e10 = this.chart.accessibility;
  if (e10 && e10.components.rangeSelector) return e10.components.rangeSelector.onAfterBtnClick();
}
(nS || (nS = {})).compose = function(e10, t) {
  let i10 = e10.prototype;
  i10.highlightRangeSelectorButton || (i10.highlightRangeSelectorButton = nP, nC(t, "afterBtnClick", nD));
};
var nN = nS;
var {
  composed: nB
} = l();
var {
  addEvent: nI,
  merge: nF,
  pushUnique: nO
} = l();
!function(e10) {
  function t(e11) {
    nF(true, e11, {
      marker: {
        enabled: true,
        states: {
          normal: {
            opacity: 0
          }
        }
      }
    });
  }
  function i10(e11) {
    return e11.marker.states && e11.marker.states.normal && e11.marker.states.normal.opacity;
  }
  function n10(e11) {
    return !!(e11._hasPointMarkers && e11.points && e11.points.length);
  }
  function s2() {
    this.chart.styledMode && (this.markerGroup && this.markerGroup[this.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden"), n10(this) && this.points.forEach((e11) => {
      e11.graphic && (e11.graphic[e11.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), e11.graphic[false === e11.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible"));
    }));
  }
  function r2(e11) {
    this.resetA11yMarkerOptions = nF(e11.options.marker || {}, this.userOptions.marker || {});
  }
  function o2() {
    let e11 = this.options;
    !function(e12) {
      let t10 = e12.chart.options.accessibility.enabled, i11 = false !== (e12.options.accessibility && e12.options.accessibility.enabled);
      return t10 && i11 && function(e13) {
        let t11 = e13.chart.options.accessibility;
        return e13.points.length < t11.series.pointDescriptionEnabledThreshold || false === t11.series.pointDescriptionEnabledThreshold;
      }(e12);
    }(this) ? this.a11yMarkersForced && (delete this.a11yMarkersForced, function(e12) {
      let t10 = e12.resetA11yMarkerOptions;
      if (t10) {
        let i11 = t10.states && t10.states.normal && t10.states.normal.opacity;
        e12.userOptions && e12.userOptions.marker && (e12.userOptions.marker.enabled = true), e12.update({
          marker: {
            enabled: t10.enabled,
            states: {
              normal: {
                opacity: i11
              }
            }
          }
        });
      }
    }(this), delete this.resetA11yMarkerOptions) : (e11.marker && false === e11.marker.enabled && (this.a11yMarkersForced = true, t(this.options)), n10(this) && function(e12) {
      let n11 = e12.points.length;
      for (; n11--; ) {
        let r3 = e12.points[n11], o3 = r3.options, a3 = r3.hasForcedA11yMarker;
        if (delete r3.hasForcedA11yMarker, o3.marker) {
          var s3;
          let e13 = a3 && 0 === i10(o3);
          o3.marker.enabled && !e13 ? (nF(true, (s3 = o3).marker, {
            states: {
              normal: {
                opacity: i10(s3) || 1
              }
            }
          }), r3.hasForcedA11yMarker = false) : false === o3.marker.enabled && (t(o3), r3.hasForcedA11yMarker = true);
        }
      }
    }(this));
  }
  function a2() {
    this.boosted && this.a11yMarkersForced && (nF(true, this.options, {
      marker: {
        enabled: false
      }
    }), delete this.a11yMarkersForced);
  }
  e10.compose = function(e11) {
    nO(nB, "A11y.FM") && (nI(e11, "afterSetOptions", r2), nI(e11, "render", o2), nI(e11, "afterRender", s2), nI(e11, "renderCanvas", a2));
  };
}(r || (r = {}));
var nR = r;
var nL = l$.Point;
var nH = o.n(nL);
var nz = l$.Series;
var nq = o.n(nz);
var {
  seriesTypes: nU
} = tS();
var {
  doc: nK
} = l();
var {
  defined: nG,
  fireEvent: nW
} = l();
var {
  getPointFromXY: nV,
  getSeriesFromName: nX,
  scrollAxisToPoint: nY
} = B;
function nj(e10) {
  let t = e10.index, i10 = e10.series.points, n10 = i10.length;
  if (i10[t] === e10) return t;
  for (; n10--; ) if (i10[n10] === e10) return n10;
}
function nZ(e10) {
  let t = e10.chart.options.accessibility.keyboardNavigation.seriesNavigation, i10 = e10.options.accessibility || {}, n10 = i10.keyboardNavigation;
  return n10 && false === n10.enabled || false === i10.enabled || false === e10.options.enableMouseTracking || !e10.visible || t.pointNavigationEnabledThreshold && +t.pointNavigationEnabledThreshold <= e10.points.length;
}
function n$(e10) {
  let t = e10.series, i10 = t.options.nullInteraction, n10 = e10.options.accessibility, s2 = t.chart.options.accessibility, r2 = n10?.enabled === false;
  return s2.keyboardNavigation.seriesNavigation.skipNullPoints ?? (!(!e10.isNull || i10) && false === e10.visible || false === e10.isInside || r2 || nZ(t));
}
function n_(e10) {
  let t = e10.series || [], i10 = t.length;
  for (let e11 = 0; e11 < i10; ++e11) if (!nZ(t[e11])) {
    let i11 = function(e12) {
      let t10 = e12.points || [], i12 = t10.length;
      for (let e13 = 0; e13 < i12; ++e13) if (!n$(t10[e13])) return t10[e13];
      return null;
    }(t[e11]);
    if (i11) return i11;
  }
  return null;
}
function nQ(e10) {
  let t = e10.series.length, i10 = false;
  for (; t-- && (e10.highlightedPoint = e10.series[t].points[e10.series[t].points.length - 1], !(i10 = e10.series[t].highlightNextValidPoint())); ) ;
  return i10;
}
function nJ(e10) {
  delete e10.highlightedPoint;
  let t = n_(e10);
  return !!t && t.highlight();
}
var n0 = class {
  constructor(e10, t) {
    this.keyCodes = t, this.chart = e10;
  }
  init() {
    let e10 = this, t = this.chart, i10 = this.eventProvider = new L();
    i10.addEvent(nq(), "destroy", function() {
      return e10.onSeriesDestroy(this);
    }), i10.addEvent(t, "afterApplyDrilldown", function() {
      let e11 = n_(this);
      e11 && e11.highlight(false);
    }), i10.addEvent(t, "drilldown", function(t10) {
      let i11 = t10.point, n10 = i11.series;
      e10.lastDrilledDownPoint = {
        x: i11.x,
        y: i11.y,
        seriesName: n10 ? n10.name : ""
      };
    }), i10.addEvent(t, "drillupall", function() {
      setTimeout(function() {
        e10.onDrillupAll();
      }, 10);
    }), i10.addEvent(nH(), "afterSetState", function() {
      let e11 = this.graphic && this.graphic.element, i11 = nK.activeElement, n10 = i11 && i11.getAttribute("class"), s2 = n10 && n10.indexOf("highcharts-a11y-proxy-element") > -1;
      t.highlightedPoint === this && i11 !== e11 && !s2 && e11 && e11.focus && e11.focus();
    });
  }
  onDrillupAll() {
    let e10, t = this.lastDrilledDownPoint, i10 = this.chart, n10 = t && nX(i10, t.seriesName);
    t && n10 && nG(t.x) && nG(t.y) && (e10 = nV(n10, t.x, t.y)), e10 = e10 || n_(i10), i10.container && i10.container.focus(), e10 && e10.highlight && e10.highlight(false);
  }
  getKeyboardNavigationHandler() {
    let e10 = this, t = this.keyCodes, i10 = this.chart, n10 = i10.inverted;
    return new K(i10, {
      keyCodeMap: [[n10 ? [t.up, t.down] : [t.left, t.right], function(t10) {
        return e10.onKbdSideways(this, t10);
      }], [n10 ? [t.left, t.right] : [t.up, t.down], function(t10) {
        return e10.onKbdVertical(this, t10);
      }], [[t.enter, t.space], function(e11, t10) {
        let n11 = i10.highlightedPoint;
        if (n11) {
          let {
            plotLeft: e12,
            plotTop: i11
          } = this.chart, {
            plotX: s2 = 0,
            plotY: r2 = 0
          } = n11;
          t10 = __spreadProps(__spreadValues({}, t10), {
            chartX: e12 + s2,
            chartY: i11 + r2,
            point: n11,
            target: n11.graphic?.element || t10.target
          }), nW(n11.series, "click", t10), n11.firePointEvent("click", t10);
        }
        return this.response.success;
      }], [[t.home], function() {
        return nJ(i10), this.response.success;
      }], [[t.end], function() {
        return nQ(i10), this.response.success;
      }], [[t.pageDown, t.pageUp], function(e11) {
        return i10.highlightAdjacentSeries(e11 === t.pageDown), this.response.success;
      }]],
      init: function() {
        return e10.onHandlerInit(this);
      },
      validate: function() {
        return !!n_(i10);
      },
      terminate: function() {
        return e10.onHandlerTerminate();
      }
    });
  }
  onKbdSideways(e10, t) {
    let i10 = this.keyCodes, n10 = t === i10.right || t === i10.down;
    return this.attemptHighlightAdjacentPoint(e10, n10);
  }
  onHandlerInit(e10) {
    let t = this.chart;
    return t.options.accessibility.keyboardNavigation.seriesNavigation.rememberPointFocus && t.highlightedPoint ? t.highlightedPoint.highlight() : nJ(t), e10.response.success;
  }
  onKbdVertical(e10, t) {
    let i10 = this.chart, n10 = this.keyCodes, s2 = t === n10.down || t === n10.right, r2 = i10.options.accessibility.keyboardNavigation.seriesNavigation;
    if (r2.mode && "serialize" === r2.mode) return this.attemptHighlightAdjacentPoint(e10, s2);
    let o2 = i10.highlightedPoint && i10.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries";
    return i10[o2](s2), e10.response.success;
  }
  onHandlerTerminate() {
    let e10 = this.chart, t = e10.options.accessibility.keyboardNavigation;
    e10.tooltip && e10.tooltip.hide(0);
    let i10 = e10.highlightedPoint && e10.highlightedPoint.series;
    i10 && i10.onMouseOut && i10.onMouseOut(), e10.highlightedPoint && e10.highlightedPoint.onMouseOut && e10.highlightedPoint.onMouseOut(), t.seriesNavigation.rememberPointFocus || delete e10.highlightedPoint;
  }
  attemptHighlightAdjacentPoint(e10, t) {
    let i10 = this.chart, n10 = i10.options.accessibility.keyboardNavigation.wrapAround;
    return i10.highlightAdjacentPoint(t) ? e10.response.success : n10 && (t ? nJ(i10) : nQ(i10)) ? e10.response.success : e10.response[t ? "next" : "prev"];
  }
  onSeriesDestroy(e10) {
    let t = this.chart;
    t.highlightedPoint && t.highlightedPoint.series === e10 && (delete t.highlightedPoint, t.focusElement && t.focusElement.removeFocusBorder());
  }
  destroy() {
    this.eventProvider.removeAddedEvents();
  }
};
!function(e10) {
  function t(e11) {
    let t10, i11, n11 = this.series, s3 = this.highlightedPoint, r3 = s3 && nj(s3) || 0, o2 = s3 && s3.series.points || [], a2 = this.series && this.series[this.series.length - 1], l2 = a2 && a2.points && a2.points[a2.points.length - 1];
    if (!n11[0] || !n11[0].points) return false;
    if (s3) {
      if (t10 = n11[s3.series.index + (e11 ? 1 : -1)], (i11 = o2[r3 + (e11 ? 1 : -1)]) || !t10 || (i11 = t10.points[e11 ? 0 : t10.points.length - 1]), !i11) return false;
    } else i11 = e11 ? n11[0].points[0] : l2;
    return n$(i11) ? (nZ(t10 = i11.series) ? this.highlightedPoint = e11 ? t10.points[t10.points.length - 1] : t10.points[0] : this.highlightedPoint = i11, this.highlightAdjacentPoint(e11)) : i11.highlight();
  }
  function i10(e11) {
    let t10 = this.highlightedPoint, i11 = 1 / 0, n11;
    return !!nG(t10.plotX) && !!nG(t10.plotY) && (this.series.forEach((s3) => {
      nZ(s3) || s3.points.forEach((r3) => {
        if (!nG(r3.plotY) || !nG(r3.plotX) || r3 === t10) return;
        let o2 = r3.plotY - t10.plotY, a2 = Math.abs(r3.plotX - t10.plotX), l2 = Math.abs(o2) * Math.abs(o2) + a2 * a2 * 4;
        s3.yAxis && s3.yAxis.reversed && (o2 *= -1), !(o2 <= 0 && e11 || o2 >= 0 && !e11 || l2 < 5 || n$(r3)) && l2 < i11 && (i11 = l2, n11 = r3);
      });
    }), !!n11 && n11.highlight());
  }
  function n10(e11) {
    let t10, i11, n11, s3 = this.highlightedPoint, r3 = this.series && this.series[this.series.length - 1], o2 = r3 && r3.points && r3.points[r3.points.length - 1];
    return this.highlightedPoint ? !!(t10 = this.series[s3.series.index + (e11 ? -1 : 1)]) && !!(i11 = function(e12, t11, i12, n12) {
      let s4 = 1 / 0, r4, o3, a2, l2 = t11.points.length, h2 = (e13) => !(nG(e13.plotX) && nG(e13.plotY));
      if (!h2(e12)) {
        for (; l2--; ) !h2(r4 = t11.points[l2]) && (a2 = (e12.plotX - r4.plotX) * (e12.plotX - r4.plotX) * 4 + (e12.plotY - r4.plotY) * (e12.plotY - r4.plotY) * 1) < s4 && (s4 = a2, o3 = l2);
        return nG(o3) ? t11.points[o3] : void 0;
      }
    }(s3, t10, 4)) && (nZ(t10) ? (i11.highlight(), n11 = this.highlightAdjacentSeries(e11)) ? n11 : (s3.highlight(), false) : (i11.highlight(), i11.series.highlightNextValidPoint())) : (t10 = e11 ? this.series && this.series[0] : r3, !!(i11 = e11 ? t10 && t10.points && t10.points[0] : o2) && i11.highlight());
  }
  function s2(e11 = true) {
    let t10 = this.series.chart, i11 = t10.tooltip?.label?.element;
    (!this.isNull || this.series.options?.nullInteraction) && e11 ? this.onMouseOver() : t10.tooltip && t10.tooltip.hide(0), nY(this), this.graphic && (t10.setFocusToElement(this.graphic), !e11 && t10.focusElement && t10.focusElement.removeFocusBorder()), t10.highlightedPoint = this;
    let n11 = i11?.getBoundingClientRect().top;
    if (i11 && n11 && n11 < 0) {
      let e12 = window.scrollY;
      window.scrollTo({
        behavior: "smooth",
        top: e12 + n11
      });
    }
    return this;
  }
  function r2() {
    let e11 = this.chart.highlightedPoint, t10 = (e11 && e11.series) === this ? nj(e11) : 0, i11 = this.points, n11 = i11.length;
    if (i11 && n11) {
      for (let e12 = t10; e12 < n11; ++e12) if (!n$(i11[e12])) return i11[e12].highlight();
      for (let e12 = t10; e12 >= 0; --e12) if (!n$(i11[e12])) return i11[e12].highlight();
    }
    return false;
  }
  e10.compose = function(e11, o2, a2) {
    let l2 = e11.prototype, h2 = o2.prototype, d2 = a2.prototype;
    l2.highlightAdjacentPoint || (l2.highlightAdjacentPoint = t, l2.highlightAdjacentPointVertical = i10, l2.highlightAdjacentSeries = n10, h2.highlight = s2, d2.keyboardMoveVertical = true, ["column", "gantt", "pie"].forEach((e12) => {
      nU[e12] && (nU[e12].prototype.keyboardMoveVertical = false);
    }), d2.highlightNextValidPoint = r2);
  };
}(n0 || (n0 = {}));
var n1 = n0;
var {
  hideSeriesFromAT: n2
} = B;
var {
  describeSeries: n3
} = i5;
var n5 = class extends q {
  static compose(e10, t, i10) {
    no.compose(i10), nR.compose(i10), n1.compose(e10, t, i10);
  }
  init() {
    this.newDataAnnouncer = new no(this.chart), this.newDataAnnouncer.init(), this.keyboardNavigation = new n1(this.chart, this.keyCodes), this.keyboardNavigation.init(), this.hideTooltipFromATWhenShown(), this.hideSeriesLabelsFromATWhenShown();
  }
  hideTooltipFromATWhenShown() {
    let e10 = this;
    this.chart.tooltip && this.addEvent(this.chart.tooltip.constructor, "refresh", function() {
      this.chart === e10.chart && this.label && this.label.element && this.label.element.setAttribute("aria-hidden", true);
    });
  }
  hideSeriesLabelsFromATWhenShown() {
    this.addEvent(this.chart, "afterDrawSeriesLabels", function() {
      this.series.forEach(function(e10) {
        e10.labelBySeries && e10.labelBySeries.attr("aria-hidden", true);
      });
    });
  }
  onChartRender() {
    this.chart.series.forEach(function(e10) {
      false !== (e10.options.accessibility && e10.options.accessibility.enabled) && e10.visible && 0 !== e10.getPointsCollection().length ? n3(e10) : n2(e10);
    });
  }
  getKeyboardNavigation() {
    return this.keyboardNavigation.getKeyboardNavigationHandler();
  }
  destroy() {
    this.newDataAnnouncer.destroy(), this.keyboardNavigation.destroy();
  }
};
var {
  unhideChartElementFromAT: n4
} = B;
var {
  getFakeMouseEvent: n9
} = m;
var {
  attr: n6,
  pick: n8
} = l();
var n7 = class extends q {
  constructor() {
    super(...arguments), this.focusedMapNavButtonIx = -1;
  }
  init() {
    let e10 = this, t = this.chart;
    this.proxyProvider.addGroup("zoom", "div"), ["afterShowResetZoom", "afterApplyDrilldown", "drillupall"].forEach((i10) => {
      e10.addEvent(t, i10, function() {
        e10.updateProxyOverlays();
      });
    });
  }
  onChartUpdate() {
    let e10 = this.chart, t = this;
    e10.mapNavigation && e10.mapNavigation.navButtons.forEach((i10, n10) => {
      n4(e10, i10.element), t.setMapNavButtonAttrs(i10.element, "accessibility.zoom.mapZoom" + (n10 ? "Out" : "In"));
    });
  }
  setMapNavButtonAttrs(e10, t) {
    let i10 = this.chart;
    n6(e10, {
      tabindex: -1,
      role: "button",
      "aria-label": i10.langFormat(t, {
        chart: i10
      })
    });
  }
  onChartRender() {
    this.updateProxyOverlays();
  }
  updateProxyOverlays() {
    let e10 = this.chart;
    if (this.proxyProvider.clearGroup("zoom"), e10.resetZoomButton && this.createZoomProxyButton(e10.resetZoomButton, "resetZoomProxyButton", e10.langFormat("accessibility.zoom.resetZoomButton", {
      chart: e10
    })), e10.drillUpButton && e10.breadcrumbs && e10.breadcrumbs.list) {
      let t = e10.breadcrumbs.list[e10.breadcrumbs.list.length - 1];
      this.createZoomProxyButton(e10.drillUpButton, "drillUpProxyButton", e10.langFormat("accessibility.drillUpButton", {
        chart: e10,
        buttonText: e10.breadcrumbs.getButtonText(t)
      }));
    }
  }
  createZoomProxyButton(e10, t, i10) {
    this[t] = this.proxyProvider.addProxyElement("zoom", {
      click: e10
    }, "button", {
      "aria-label": i10,
      tabindex: -1
    });
  }
  getMapZoomNavigation() {
    let e10 = this.keyCodes, t = this.chart, i10 = this;
    return new K(t, {
      keyCodeMap: [[[e10.up, e10.down, e10.left, e10.right], function(e11) {
        return i10.onMapKbdArrow(this, e11);
      }], [[e10.tab], function(e11, t10) {
        return i10.onMapKbdTab(this, t10);
      }], [[e10.space, e10.enter], function() {
        return i10.onMapKbdClick(this);
      }]],
      validate: function() {
        return !!(t.mapView && t.mapNavigation && t.mapNavigation.navButtons.length);
      },
      init: function(e11) {
        return i10.onMapNavInit(e11);
      }
    });
  }
  onMapKbdArrow(e10, t) {
    let i10 = this.chart, n10 = this.keyCodes, s2 = i10.container, r2 = t === n10.up || t === n10.down, o2 = t === n10.left || t === n10.up ? 1 : -1, a2 = (r2 ? i10.plotHeight : i10.plotWidth) / 10 * o2, l2 = 10 * Math.random(), h2 = {
      x: s2.offsetLeft + i10.plotLeft + i10.plotWidth / 2 + l2,
      y: s2.offsetTop + i10.plotTop + i10.plotHeight / 2 + l2
    }, d2 = r2 ? {
      x: h2.x,
      y: h2.y + a2
    } : {
      x: h2.x + a2,
      y: h2.y
    };
    return [n9("mousedown", h2), n9("mousemove", d2), n9("mouseup", d2)].forEach((e11) => s2.dispatchEvent(e11)), e10.response.success;
  }
  onMapKbdTab(e10, t) {
    let i10 = this.chart, n10 = e10.response, s2 = t.shiftKey, r2 = s2 && !this.focusedMapNavButtonIx || !s2 && this.focusedMapNavButtonIx;
    if (i10.mapNavigation.navButtons[this.focusedMapNavButtonIx].setState(0), r2) return i10.mapView && i10.mapView.zoomBy(), n10[s2 ? "prev" : "next"];
    this.focusedMapNavButtonIx += s2 ? -1 : 1;
    let o2 = i10.mapNavigation.navButtons[this.focusedMapNavButtonIx];
    return i10.setFocusToElement(o2.box, o2.element), o2.setState(2), n10.success;
  }
  onMapKbdClick(e10) {
    let t = this.chart.mapNavigation.navButtons[this.focusedMapNavButtonIx].element;
    return this.fakeClickEvent(t), e10.response.success;
  }
  onMapNavInit(e10) {
    let t = this.chart, i10 = t.mapNavigation.navButtons[0], n10 = t.mapNavigation.navButtons[1], s2 = e10 > 0 ? i10 : n10;
    t.setFocusToElement(s2.box, s2.element), s2.setState(2), this.focusedMapNavButtonIx = e10 > 0 ? 0 : 1;
  }
  simpleButtonNavigation(e10, t, i10) {
    let n10 = this.keyCodes, s2 = this, r2 = this.chart;
    return new K(r2, {
      keyCodeMap: [[[n10.tab, n10.up, n10.down, n10.left, n10.right], function(e11, t10) {
        let i11 = e11 === n10.tab && t10.shiftKey || e11 === n10.left || e11 === n10.up;
        return this.response[i11 ? "prev" : "next"];
      }], [[n10.space, n10.enter], function() {
        return n8(i10(this, r2), this.response.success);
      }]],
      validate: function() {
        return r2[e10] && r2[e10].box && s2[t].innerElement;
      },
      init: function() {
        r2.setFocusToElement(r2[e10].box, s2[t].innerElement);
      }
    });
  }
  getKeyboardNavigation() {
    return [this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function(e10, t) {
      t.zoomOut();
    }), this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function(e10, t) {
      return t.drillUp(), e10.response.prev;
    }), this.getMapZoomNavigation()];
  }
};
var {
  doc: se,
  isMS: st,
  win: si
} = l();
var sn = {
  isHighContrastModeActive: function() {
    if (st && si.getComputedStyle) {
      let e10 = se.createElement("div");
      e10.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)", se.body.appendChild(e10);
      let t = (e10.currentStyle || si.getComputedStyle(e10)).backgroundImage;
      return se.body.removeChild(e10), "none" === t;
    }
    return si.matchMedia && si.matchMedia("(forced-colors: active)").matches;
  },
  setHighContrastTheme: function(e10) {
    e10.highContrastModeActive = true;
    let t = e10.options.accessibility.highContrastTheme;
    e10.update(t, false);
    let i10 = t.colors?.length > 1;
    e10.series.forEach(function(e11) {
      let n10 = t.plotOptions[e11.type] || {}, s2 = i10 && void 0 !== e11.colorIndex ? t.colors[e11.colorIndex] : n10.color || "window", r2 = {
        color: n10.color || "windowText",
        colors: i10 ? t.colors : [n10.color || "windowText"],
        borderColor: n10.borderColor || "window",
        fillColor: s2
      };
      e11.update(r2, false), e11.points && e11.points.forEach(function(e12) {
        e12.options && e12.options.color && e12.update({
          color: n10.color || "windowText",
          borderColor: n10.borderColor || "window"
        }, false);
      });
    }), e10.redraw();
  }
};
var ss = {
  chart: {
    backgroundColor: "window"
  },
  title: {
    style: {
      color: "windowText"
    }
  },
  subtitle: {
    style: {
      color: "windowText"
    }
  },
  colorAxis: {
    minColor: "windowText",
    maxColor: "windowText",
    stops: [],
    dataClasses: []
  },
  colors: ["windowText"],
  xAxis: {
    gridLineColor: "windowText",
    labels: {
      style: {
        color: "windowText"
      }
    },
    lineColor: "windowText",
    minorGridLineColor: "windowText",
    tickColor: "windowText",
    title: {
      style: {
        color: "windowText"
      }
    }
  },
  yAxis: {
    gridLineColor: "windowText",
    labels: {
      style: {
        color: "windowText"
      }
    },
    lineColor: "windowText",
    minorGridLineColor: "windowText",
    tickColor: "windowText",
    title: {
      style: {
        color: "windowText"
      }
    }
  },
  tooltip: {
    backgroundColor: "window",
    borderColor: "windowText",
    style: {
      color: "windowText"
    }
  },
  plotOptions: {
    series: {
      lineColor: "windowText",
      fillColor: "window",
      borderColor: "windowText",
      edgeColor: "windowText",
      borderWidth: 1,
      dataLabels: {
        connectorColor: "windowText",
        color: "windowText",
        style: {
          color: "windowText",
          textOutline: "none"
        }
      },
      marker: {
        lineColor: "windowText",
        fillColor: "windowText"
      }
    },
    pie: {
      color: "window",
      colors: ["window"],
      borderColor: "windowText",
      borderWidth: 1
    },
    boxplot: {
      fillColor: "window"
    },
    candlestick: {
      lineColor: "windowText",
      fillColor: "window"
    },
    errorbar: {
      fillColor: "window"
    }
  },
  legend: {
    backgroundColor: "window",
    itemStyle: {
      color: "windowText"
    },
    itemHoverStyle: {
      color: "windowText"
    },
    itemHiddenStyle: {
      color: "#555"
    },
    title: {
      style: {
        color: "windowText"
      }
    }
  },
  credits: {
    style: {
      color: "windowText"
    }
  },
  drilldown: {
    activeAxisLabelStyle: {
      color: "windowText"
    },
    activeDataLabelStyle: {
      color: "windowText"
    }
  },
  navigation: {
    buttonOptions: {
      symbolStroke: "windowText",
      theme: {
        fill: "window"
      }
    }
  },
  rangeSelector: {
    buttonTheme: {
      fill: "window",
      stroke: "windowText",
      style: {
        color: "windowText"
      },
      states: {
        hover: {
          fill: "window",
          stroke: "windowText",
          style: {
            color: "windowText"
          }
        },
        select: {
          fill: "#444",
          stroke: "windowText",
          style: {
            color: "windowText"
          }
        }
      }
    },
    inputBoxBorderColor: "windowText",
    inputStyle: {
      backgroundColor: "window",
      color: "windowText"
    },
    labelStyle: {
      color: "windowText"
    }
  },
  navigator: {
    handles: {
      backgroundColor: "window",
      borderColor: "windowText"
    },
    outlineColor: "windowText",
    maskFill: "transparent",
    series: {
      color: "windowText",
      lineColor: "windowText"
    },
    xAxis: {
      gridLineColor: "windowText"
    }
  },
  scrollbar: {
    barBackgroundColor: "#444",
    barBorderColor: "windowText",
    buttonArrowColor: "windowText",
    buttonBackgroundColor: "window",
    buttonBorderColor: "windowText",
    rifleColor: "windowText",
    trackBackgroundColor: "window",
    trackBorderColor: "windowText"
  }
};
var {
  error: sr,
  pick: so
} = l();
function sa(e10, t, i10) {
  let n10 = e10, s2, r2 = 0;
  for (; r2 < t.length - 1; ++r2) n10 = n10[s2 = t[r2]] = so(n10[s2], {});
  n10[t[t.length - 1]] = i10;
}
function sl(e10, t, i10, n10) {
  function s2(e11, t10) {
    return t10.reduce(function(e12, t11) {
      return e12[t11];
    }, e11);
  }
  let r2 = s2(e10.options, t), o2 = s2(e10.options, i10);
  Object.keys(n10).forEach(function(s3) {
    let a2 = r2[s3];
    void 0 !== a2 && (sa(o2, n10[s3], a2), sr(32, false, e10, {
      [t.join(".") + "." + s3]: i10.join(".") + "." + n10[s3].join(".")
    }));
  });
}
var sh = function(e10) {
  let t = e10.options.chart, i10 = e10.options.accessibility || {};
  ["description", "typeDescription"].forEach(function(n10) {
    t[n10] && (i10[n10] = t[n10], sr(32, false, e10, {
      [`chart.${n10}`]: `use accessibility.${n10}`
    }));
  }), e10.axes.forEach(function(t10) {
    let i11 = t10.options;
    i11 && i11.description && (i11.accessibility = i11.accessibility || {}, i11.accessibility.description = i11.description, sr(32, false, e10, {
      "axis.description": "use axis.accessibility.description"
    }));
  }), e10.series && function(e11) {
    let t10 = {
      description: ["accessibility", "description"],
      exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"],
      pointDescriptionFormatter: ["accessibility", "point", "descriptionFormatter"],
      skipKeyboardNavigation: ["accessibility", "keyboardNavigation", "enabled"],
      "accessibility.pointDescriptionFormatter": ["accessibility", "point", "descriptionFormatter"]
    };
    e11.series.forEach(function(i11) {
      Object.keys(t10).forEach(function(n10) {
        let s2 = i11.options[n10];
        "accessibility.pointDescriptionFormatter" === n10 && (s2 = i11.options.accessibility && i11.options.accessibility.pointDescriptionFormatter), void 0 !== s2 && (sa(i11.options, t10[n10], "skipKeyboardNavigation" === n10 ? !s2 : s2), sr(32, false, e11, {
          [`series.${n10}`]: "series." + t10[n10].join(".")
        }));
      });
    });
  }(e10), sl(e10, ["accessibility"], ["accessibility"], {
    pointDateFormat: ["point", "dateFormat"],
    pointDateFormatter: ["point", "dateFormatter"],
    pointDescriptionFormatter: ["point", "descriptionFormatter"],
    pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"],
    pointNavigationThreshold: ["keyboardNavigation", "seriesNavigation", "pointNavigationEnabledThreshold"],
    pointValueDecimals: ["point", "valueDecimals"],
    pointValuePrefix: ["point", "valuePrefix"],
    pointValueSuffix: ["point", "valueSuffix"],
    screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"],
    describeSingleSeries: ["series", "describeSingleSeries"],
    seriesDescriptionFormatter: ["series", "descriptionFormatter"],
    onTableAnchorClick: ["screenReaderSection", "onViewDataTableClick"],
    axisRangeDateFormat: ["screenReaderSection", "axisRangeDateFormat"]
  }), sl(e10, ["accessibility", "keyboardNavigation"], ["accessibility", "keyboardNavigation", "seriesNavigation"], {
    skipNullPoints: ["skipNullPoints"],
    mode: ["mode"]
  }), sl(e10, ["lang", "accessibility"], ["lang", "accessibility"], {
    legendItem: ["legend", "legendItem"],
    legendLabel: ["legend", "legendLabel"],
    mapZoomIn: ["zoom", "mapZoomIn"],
    mapZoomOut: ["zoom", "mapZoomOut"],
    resetZoomButton: ["zoom", "resetZoomButton"],
    screenReaderRegionLabel: ["screenReaderSection", "beforeRegionLabel"],
    rangeSelectorButton: ["rangeSelector", "buttonText"],
    rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"],
    rangeSelectorMinInput: ["rangeSelector", "minInputLabel"],
    svgContainerEnd: ["screenReaderSection", "endOfChartMarker"],
    viewAsDataTable: ["table", "viewAsDataTableButtonText"],
    tableSummary: ["table", "tableSummary"]
  });
};
var {
  defaultOptions: sd
} = l();
var {
  doc: sc
} = l();
var {
  addEvent: su,
  extend: sp,
  fireEvent: sg,
  merge: sm
} = l();
var {
  removeElement: sb
} = m;
var sf = class {
  constructor(e10) {
    this.init(e10);
  }
  init(e10) {
    if (this.chart = e10, !sc?.addEventListener) {
      this.zombie = true, this.components = {}, e10.renderTo.setAttribute("aria-hidden", true);
      return;
    }
    sh(e10), this.proxyProvider = new nA(this.chart), this.initComponents(), this.keyboardNavigation = new eV(e10, this.components);
  }
  initComponents() {
    let e10 = this.chart, t = this.proxyProvider, i10 = e10.options.accessibility;
    this.components = {
      container: new Y(),
      infoRegions: new ek(),
      legend: new te(),
      chartMenu: new eF(),
      rangeSelector: new nN(),
      series: new n5(),
      zoom: new n7(),
      navigator: new iH()
    }, i10.customComponents && sp(this.components, i10.customComponents);
    let n10 = this.components;
    this.getComponentOrder().forEach(function(i11) {
      n10[i11].initBase(e10, t), n10[i11].init();
    });
  }
  getComponentOrder() {
    return this.components ? this.components.series ? ["series"].concat(Object.keys(this.components).filter((e10) => "series" !== e10)) : Object.keys(this.components) : [];
  }
  update() {
    let e10 = this.components, t = this.chart, i10 = t.options.accessibility;
    sg(t, "beforeA11yUpdate"), t.types = this.getChartTypes();
    let n10 = i10.keyboardNavigation.order;
    this.proxyProvider.updateGroupOrder(n10), this.getComponentOrder().forEach(function(i11) {
      e10[i11].onChartUpdate(), sg(t, "afterA11yComponentUpdate", {
        name: i11,
        component: e10[i11]
      });
    }), this.keyboardNavigation.update(n10), !t.highContrastModeActive && false !== i10.highContrastMode && (sn.isHighContrastModeActive() || true === i10.highContrastMode) && sn.setHighContrastTheme(t), sg(t, "afterA11yUpdate", {
      accessibility: this
    });
  }
  destroy() {
    let e10 = this.chart || {}, t = this.components;
    Object.keys(t).forEach(function(e11) {
      t[e11].destroy(), t[e11].destroyBase();
    }), this.proxyProvider && this.proxyProvider.destroy(), e10.announcerContainer && sb(e10.announcerContainer), this.keyboardNavigation && this.keyboardNavigation.destroy(), e10.renderTo && e10.renderTo.setAttribute("aria-hidden", true), e10.focusElement && e10.focusElement.removeFocusBorder();
  }
  getChartTypes() {
    let e10 = {};
    return this.chart.series.forEach(function(t) {
      e10[t.type] = 1;
    }), Object.keys(e10);
  }
};
!function(e10) {
  function t() {
    this.accessibility && this.accessibility.destroy();
  }
  function i10() {
    this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled());
    let e11 = this.accessibility;
    e11 && !e11.zombie && (e11.proxyProvider.updateProxyElementPositions(), e11.getComponentOrder().forEach(function(t10) {
      e11.components[t10].onChartRender();
    }));
  }
  function n10(e11) {
    let t10 = e11.options.accessibility;
    t10 && (t10.customComponents && (this.options.accessibility.customComponents = t10.customComponents, delete t10.customComponents), sm(true, this.options.accessibility, t10), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility)), this.a11yDirty = true;
  }
  function s2() {
    let t10 = this.accessibility, i11 = this.options.accessibility, n11 = this.renderer.boxWrapper.element, s3 = this.title;
    if (i11 && i11.enabled) t10 && !t10.zombie ? t10.update() : (this.accessibility = t10 = new e10(this), t10 && !t10.zombie && t10.update(), "img" === n11.getAttribute("role") && n11.removeAttribute("role"));
    else if (t10) t10.destroy && t10.destroy(), delete this.accessibility;
    else {
      this.renderTo.setAttribute("role", "img"), this.renderTo.setAttribute("aria-hidden", false), this.renderTo.setAttribute("aria-label", (s3 && s3.element.textContent || "").replace(/</g, "&lt;")), n11.setAttribute("aria-hidden", true);
      let e11 = document.getElementsByClassName("highcharts-description")[0];
      e11 && (e11.setAttribute("aria-hidden", false), e11.classList.remove("highcharts-linked-description"));
    }
  }
  function r2() {
    this.series.chart.accessibility && (this.series.chart.a11yDirty = true);
  }
  e10.i18nFormat = T.i18nFormat, e10.compose = function(e11, o2, a2, l2, h2, d2) {
    eV.compose(e11), no.compose(l2), te.compose(e11, o2), eF.compose(e11), n5.compose(e11, a2, l2), T.compose(e11), $.compose(e11, h2), d2 && nN.compose(e11, d2);
    let c2 = e11.prototype;
    c2.updateA11yEnabled || (c2.updateA11yEnabled = s2, su(e11, "destroy", t), su(e11, "render", i10), su(e11, "update", n10), ["addSeries", "init"].forEach((t10) => {
      su(e11, t10, function() {
        this.a11yDirty = true;
      });
    }), ["afterApplyDrilldown", "drillupall"].forEach((t10) => {
      su(e11, t10, function() {
        let e12 = this.accessibility;
        e12 && !e12.zombie && e12.update();
      });
    }), su(a2, "update", r2), ["update", "updatedData", "remove"].forEach((e12) => {
      su(l2, e12, function() {
        this.chart.accessibility && (this.chart.a11yDirty = true);
      });
    }));
  };
}(sf || (sf = {})), sm(true, sd, {
  accessibility: {
    enabled: true,
    screenReaderSection: {
      beforeChartFormat: "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>",
      afterChartFormat: "{endOfChartMarker}",
      axisRangeDateFormat: "%Y-%m-%d %H:%M:%S"
    },
    series: {
      descriptionFormat: "{seriesDescription}{authorDescription}{axisDescription}",
      describeSingleSeries: false,
      pointDescriptionEnabledThreshold: 200
    },
    point: {
      valueDescriptionFormat: "{xDescription}{separator}{value}.",
      describeNull: true
    },
    landmarkVerbosity: "all",
    linkedDescription: '*[data-highcharts-chart="{index}"] + .highcharts-description',
    highContrastMode: "auto",
    keyboardNavigation: {
      enabled: true,
      focusBorder: {
        enabled: true,
        hideBrowserFocusOutline: true,
        style: {
          color: "#334eff",
          lineWidth: 2,
          borderRadius: 3
        },
        margin: 2
      },
      order: ["series", "zoom", "rangeSelector", "navigator", "legend", "chartMenu"],
      wrapAround: true,
      seriesNavigation: {
        skipNullPoints: void 0,
        pointNavigationEnabledThreshold: false,
        rememberPointFocus: false
      }
    },
    announceNewData: {
      enabled: false,
      minAnnounceInterval: 5e3,
      interruptUser: false
    }
  },
  legend: {
    accessibility: {
      enabled: true,
      keyboardNavigation: {
        enabled: true
      }
    }
  },
  exporting: {
    accessibility: {
      enabled: true
    }
  },
  navigator: {
    accessibility: {
      enabled: true
    }
  }
}, {
  accessibility: {
    highContrastTheme: ss
  },
  lang: {
    accessibility: {
      defaultChartTitle: "Chart",
      chartContainerLabel: "{title}. Highcharts interactive chart.",
      svgContainerLabel: "Interactive chart",
      drillUpButton: "{buttonText}",
      credits: "Chart credits: {creditsStr}",
      thousandsSep: ",",
      svgContainerTitle: "",
      graphicContainerLabel: "",
      screenReaderSection: {
        beforeRegionLabel: "",
        afterRegionLabel: "",
        annotations: {
          heading: "Chart annotations summary",
          descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}",
          descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{#each additionalAnnotationPoints}, also related to {this}{/each}",
          descriptionNoPoints: "{annotationText}"
        },
        endOfChartMarker: "End of interactive chart."
      },
      sonification: {
        playAsSoundButtonText: "Play as sound, {chartTitle}",
        playAsSoundClickAnnouncement: "Play"
      },
      legend: {
        legendLabelNoTitle: "Toggle series visibility, {chartTitle}",
        legendLabel: "Chart legend: {legendTitle}",
        legendItem: "Show {itemName}"
      },
      zoom: {
        mapZoomIn: "Zoom chart",
        mapZoomOut: "Zoom out chart",
        resetZoomButton: "Reset zoom"
      },
      rangeSelector: {
        dropdownLabel: "{rangeTitle}",
        minInputLabel: "Select start date.",
        maxInputLabel: "Select end date.",
        clickButtonAnnouncement: "Viewing {axisRangeDescription}"
      },
      navigator: {
        handleLabel: "{#eq handleIx 0}Start, percent{else}End, percent{/eq}",
        groupLabel: "Axis zoom",
        changeAnnouncement: "{axisRangeDescription}"
      },
      table: {
        viewAsDataTableButtonText: "View as data table, {chartTitle}",
        tableSummary: "Table representation of chart."
      },
      announceNewData: {
        newDataAnnounce: "Updated data for chart {chartTitle}",
        newSeriesAnnounceSingle: "New data series: {seriesDesc}",
        newPointAnnounceSingle: "New data point: {pointDesc}",
        newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}",
        newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}"
      },
      seriesTypeDescriptions: {
        boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
        arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.",
        areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.",
        bubble: "Bubble charts are scatter charts where each data point also has a size value.",
        columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.",
        errorbar: "Errorbar series are used to display the variability of the data.",
        funnel: "Funnel charts are used to display reduction of data in stages.",
        pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.",
        waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value."
      },
      chartTypes: {
        emptyChart: "Empty chart",
        mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.",
        unknownMap: "Map of unspecified region with {numSeries} data series.",
        combinationChart: "Combination chart with {numSeries} data series.",
        defaultSingle: "Chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
        defaultMultiple: "Chart with {numSeries} data series.",
        splineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
        splineMultiple: "Line chart with {numSeries} lines.",
        lineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
        lineMultiple: "Line chart with {numSeries} lines.",
        columnSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.",
        columnMultiple: "Bar chart with {numSeries} data series.",
        barSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.",
        barMultiple: "Bar chart with {numSeries} data series.",
        pieSingle: "Pie chart with {numPoints} {#eq numPoints 1}slice{else}slices{/eq}.",
        pieMultiple: "Pie chart with {numSeries} pies.",
        scatterSingle: "Scatter chart with {numPoints} {#eq numPoints 1}point{else}points{/eq}.",
        scatterMultiple: "Scatter chart with {numSeries} data series.",
        boxplotSingle: "Boxplot with {numPoints} {#eq numPoints 1}box{else}boxes{/eq}.",
        boxplotMultiple: "Boxplot with {numSeries} data series.",
        bubbleSingle: "Bubble chart with {numPoints} {#eq numPoints 1}bubbles{else}bubble{/eq}.",
        bubbleMultiple: "Bubble chart with {numSeries} data series."
      },
      axis: {
        xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}",
        xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.",
        yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}",
        yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.",
        timeRangeDays: "Data range: {range} days.",
        timeRangeHours: "Data range: {range} hours.",
        timeRangeMinutes: "Data range: {range} minutes.",
        timeRangeSeconds: "Data range: {range} seconds.",
        rangeFromTo: "Data ranges from {rangeFrom} to {rangeTo}.",
        rangeCategories: "Data range: {numCategories} categories."
      },
      exporting: {
        chartMenuLabel: "Chart menu",
        menuButtonLabel: "View chart menu, {chartTitle}"
      },
      series: {
        summary: {
          default: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
          defaultCombination: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
          line: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
          lineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
          spline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
          splineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
          column: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
          columnCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
          bar: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
          barCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
          pie: "{series.name}, pie {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.",
          pieCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Pie with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.",
          scatter: "{series.name}, scatter plot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.",
          scatterCombination: "{series.name}, series {seriesNumber} of {chart.series.length}, scatter plot with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.",
          boxplot: "{series.name}, boxplot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.",
          boxplotCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Boxplot with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.",
          bubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
          bubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
          map: "{series.name}, map {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.",
          mapCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Map with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.",
          mapline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
          maplineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
          mapbubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
          mapbubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}."
        },
        description: "{description}",
        xAxisDescription: "X axis, {name}",
        yAxisDescription: "Y axis, {name}",
        nullPointValue: "No value",
        pointAnnotationsDescription: "{#each annotations}Annotation: {this}{/each}"
      }
    }
  }
});
var sx = sf;
var sy = l();
sy.i18nFormat = sx.i18nFormat, sy.A11yChartUtilities = B, sy.A11yHTMLUtilities = m, sy.AccessibilityComponent = q, sy.KeyboardNavigationHandler = K, sy.SeriesAccessibilityDescriber = i5, sx.compose(sy.Chart, sy.Legend, sy.Point, sy.Series, sy.SVGElement, sy.RangeSelector);
var sv = l();
export {
  sv as default
};
//# sourceMappingURL=highcharts_esm_modules_accessibility.js.map
