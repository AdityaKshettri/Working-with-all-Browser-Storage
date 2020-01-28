const storeBtn = document.getElementById('store-btn');
const retrieveBtn =  document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
    const userId = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    document.cookie = `${userId}=${name}; max-age=360`;
});

retrieveBtn.addEventListener('click', () => {
    const cookieData = document.cookie.split(';');
    const data = cookieData.map(i => {
        return i.trim();
    });
    console.log(data);
});
