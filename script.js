const notifications = document.querySelector(".notifications-list");
const bell = document.querySelector('.bell-btn');

function hideOrShow() {
    let show = true

    if (show) {
        notifications.style.display = 'block';
        show = false
    } else {
        notifications.style.display = 'none';
        show = true
    }

}

bell.addEventListener('click', hideOrShow)