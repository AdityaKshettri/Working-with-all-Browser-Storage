const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

let db;

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onsuccess = function(event) {
  db = event.target.result;
};

dbRequest.onupgradeneeded = function(event) {
  db = event.target.result;

  const objStore = db.createObjectStore('products', { keyPath: 'id' });

  objStore.transaction.oncomplete = function(event) {
    const productsStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
  };
};

dbRequest.onerror = function(event) {
  console.log('ERROR!');
};

storeBtn.addEventListener('click', () => {
  if (!db) {
    return;
  }
  const userId = document.getElementById('id').value;
  const userName = document.getElementById('name').value;
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  productsStore.add({
    id: userId,
    name: userName
  });
});

retrBtn.addEventListener('click', () => {
  const retrId = document.getElementById('retrId').value;
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const request = productsStore.get(retrId);

  request.onsuccess = function() {
    console.log(request.result);
  }

  request.onerror = function() {
    console.log(error);
  }
});
