const storeBtn = document.getElementById('store-btn');
const retrieveBtn =  document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
    const userId = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    sessionStorage.setItem(userId, name);
});

retrieveBtn.addEventListener('click', () => {
    const retrId = document.getElementById('retrId').value;
    const userName = sessionStorage.getItem(retrId);
    if(userName) {
        console.log('Got the id : '+ userName);
    } else {
        console.log('Could not find UserId');
    }
});
