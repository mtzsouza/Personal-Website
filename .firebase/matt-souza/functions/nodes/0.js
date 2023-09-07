

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.6e7fa52a.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.73694274.js"];
export const stylesheets = ["_app/immutable/assets/0.54f8cf5c.css"];
export const fonts = [];
