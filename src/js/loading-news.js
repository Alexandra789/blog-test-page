const loadMoreBtn = document.querySelector('.load-more-btn');
const latestNewsBlockWrapper = document.querySelector('.latest-news__wrapper');

loadMoreBtn.addEventListener('click', (e) => {
    latestNewsBlockWrapper.classList.add('open');
    loadMoreBtn.classList.add('hidden');
})