const urlPath = window.location.pathname;
const urlParams = new URLSearchParams(window.location.search);
let currentPage = 'list';
let requestedPage = 'list';
console.log('URL Path:', urlPath);
console.log('URL Params:', urlParams);
console.lo;
if (urlParams.size > 0) {
  requestedPage = urlParams.get('page');
}
const allPages = document.querySelectorAll('.page');
allPages.forEach((page) => {
  if (page.id !== currentPage) {
    page.classList.add('hidden');
  } else {
    page.classList.remove('hidden');
  }
});
