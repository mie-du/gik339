const locationInfo = window.location;
const urlParams = new URLSearchParams(locationInfo.search);

console.log('Egenskapen location:', location);
console.log('URL Params:', urlParams);

let currentPage = 'list';

if (urlParams.size > 0) {
  if (urlParams.has('page')) {
    currentPage = urlParams.get('page');
  }
}
console.log(currentPage);
const allPages = document.querySelectorAll('.page');
allPages.forEach((page) => {
  if (page.id !== currentPage) {
    page.classList.add('hidden');
  } else {
    page.classList.remove('hidden');
  }
});
