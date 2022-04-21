export default [
	{
		input: "./src/poc.js",
		output: {
			file: "dist/poc.node.cjs",
			format: "cjs",
			exports: "named"
		}
	},
	{
		input: "./src/poc.js",
		output: {
			file: "dist/poc.umd.js",
			format: "umd",
			exports: "named",
			name: "POC"
		}
	},
	{	
		input: "./src/poc.js",
		output: {
			file: "dist/poc.module.js",
			format: "es"
		}
	}
];