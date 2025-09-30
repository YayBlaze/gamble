const urlOrigin = "https://yayblaze.com";
const backendUrl = "https://yayblaze.com/api";
function myRedirect(destination) {
  window.location.href = urlOrigin + destination;
}
export {
  backendUrl as b,
  myRedirect as m,
  urlOrigin as u
};
