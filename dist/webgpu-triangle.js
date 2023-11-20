/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./shaders/webgpu-triangle.wgsl":
/*!**************************************!*\
  !*** ./shaders/webgpu-triangle.wgsl ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"@vertex fn vs(\\n    @builtin(vertex_index) vertexIndex : u32\\n  ) -> @builtin(position) vec4f {\\n  let pos = array(\\n    vec2f( 0.0,  0.5),  // top center\\n    vec2f(-0.5, -0.5),  // bottom left\\n    vec2f( 0.5, -0.5)   // bottom right\\n  );\\n\\n  return vec4f(pos[vertexIndex], 0.0, 1.0);\\n}\\n\\n@fragment fn fs() -> @location(0) vec4f {\\n  return vec4f(1, 0, 0, 1);\\n}\");\n\n//# sourceURL=webpack://webgpu-examples/./shaders/webgpu-triangle.wgsl?");

/***/ }),

/***/ "./src/webgpu-triangle.ts":
/*!********************************!*\
  !*** ./src/webgpu-triangle.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst webgpu_triangle_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/webgpu-triangle.wgsl */ \"./shaders/webgpu-triangle.wgsl\"));\nfunction main() {\n    var _a;\n    return __awaiter(this, void 0, void 0, function* () {\n        const adapter = yield ((_a = navigator.gpu) === null || _a === void 0 ? void 0 : _a.requestAdapter());\n        const device = yield (adapter === null || adapter === void 0 ? void 0 : adapter.requestDevice());\n        if (!device) {\n            alert('need a browser that supports WebGPU');\n            return;\n        }\n        // Get a WebGPU context from the canvas and configure it\n        const canvas = document.querySelector('canvas');\n        const context = canvas.getContext('webgpu');\n        const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n        context.configure({\n            device,\n            format: presentationFormat,\n        });\n        const module = device.createShaderModule({\n            label: 'our hardcoded red triangle shaders',\n            code: webgpu_triangle_wgsl_1.default,\n        });\n        const pipeline = device.createRenderPipeline({\n            label: 'our hardcoded red triangle pipeline',\n            layout: 'auto',\n            vertex: {\n                module,\n                entryPoint: 'vs',\n            },\n            fragment: {\n                module,\n                entryPoint: 'fs',\n                targets: [{ format: presentationFormat }],\n            },\n        });\n        const renderPassDescriptor = {\n            label: 'our basic canvas renderPass',\n            colorAttachments: [\n                {\n                    // Get the current texture from the canvas context and\n                    // set it as the texture to render to.\n                    view: context.getCurrentTexture().createView(),\n                    clearValue: [0.3, 0.3, 0.3, 1],\n                    loadOp: 'clear',\n                    storeOp: 'store',\n                },\n            ],\n        };\n        function render() {\n            // make a command encoder to start encoding commands\n            const encoder = device.createCommandEncoder({ label: 'our encoder' });\n            // make a render pass encoder to encode render specific commands\n            const pass = encoder.beginRenderPass(renderPassDescriptor);\n            pass.setPipeline(pipeline);\n            pass.draw(3); // call our vertex shader 3 times.\n            pass.end();\n            const commandBuffer = encoder.finish();\n            device.queue.submit([commandBuffer]);\n        }\n        render();\n    });\n}\nmain();\n\n\n//# sourceURL=webpack://webgpu-examples/./src/webgpu-triangle.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/webgpu-triangle.ts");
/******/ 	
/******/ })()
;