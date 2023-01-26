import init, { run } from "./learning-webgpu/pkg/learn_wgpu.js";

console.log("Initializing");
await init();
console.log("Running");
run();