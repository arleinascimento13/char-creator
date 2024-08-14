export default function removeURL(url) {
  let urlObj = new URL(url, window.location.origin);
  let path = urlObj.pathname;
  return path;
}
