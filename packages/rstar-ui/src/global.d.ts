declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    RSButton: typeof import("@rstar-ui/components/Button")
  }

  interface ComponentCustomProperties {
    // $message: typeof import('rstar-ui')['message'],
  }
}
export {}
