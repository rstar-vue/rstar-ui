import components from "./components"

export default {
  install: (app: any) => {
    for (const c in components) {
      app.component(c, components[c])
    }
  }
}
