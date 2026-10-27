function functionWithCallback(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
}

functionWithCallback(() => {
  console.log("Callback executed after 3 seconds");
});
