async function init() {
  const url = new URL('./build/release.wasm', import.meta.url)
  const {
    instance: { exports },
  } = await WebAssembly.instantiateStreaming(fetch(url), {})
  return exports
}
export default await init()
