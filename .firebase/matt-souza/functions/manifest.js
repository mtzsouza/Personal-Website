export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.aaf2ed6e.js","app":"_app/immutable/entry/app.a61adcff.js","imports":["_app/immutable/entry/start.aaf2ed6e.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/singletons.68ac5aaf.js","_app/immutable/entry/app.a61adcff.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.73694274.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
