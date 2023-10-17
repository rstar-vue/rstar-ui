import { defineComponent as r, openBlock as a, createElementBlock as c, normalizeClass as p, unref as i, renderSlot as u } from "vue";
const f = {
  size: {
    type: String,
    default: "default"
  },
  type: {
    type: String
  },
  class: {
    type: String,
    default: ""
  }
}, e = "rs-button", m = /* @__PURE__ */ r({
  name: "RSButton",
  __name: "button",
  props: f,
  setup(n) {
    const t = n, s = [
      e,
      `${e}-${t.size}`,
      t.type && `${e}-${t.type}`,
      t.type && `${e}-${t.type}-active`,
      `${e}_hover`,
      t.class
    ].filter(Boolean);
    return (l, $) => (a(), c("button", {
      class: p(i(s))
    }, [
      u(l.$slots, "default")
    ], 2));
  }
}), o = { RSButton: m }, y = {
  install: (n) => {
    for (const t in o)
      n.component(t, o[t]);
  }
}, S = y.install;
export {
  m as RSButton,
  f as buttonProps,
  y as default,
  S as install
};
