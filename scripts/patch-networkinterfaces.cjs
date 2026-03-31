const os = require('node:os');

// Some restricted/sandboxed environments throw at os.networkInterfaces().
// Storybook uses it to print "On your network" URLs; falling back to {}
// keeps Storybook running (it will still bind to localhost).
const original = os.networkInterfaces.bind(os);
os.networkInterfaces = function patchedNetworkInterfaces() {
  try {
    return original();
  } catch {
    return {};
  }
};

