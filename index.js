import { run } from "./learn_wgpu.js";

console.log("Running");
run().then(r => console.log("Weeee"), r => console.log("Woooo"));