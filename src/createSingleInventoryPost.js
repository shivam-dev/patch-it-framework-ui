import fetch from 'isomorphic-fetch';



export function createSingleInventoryPost(data) {
    return fetch('http://localhost:5000/api/Inventory', {
        method: 'POST',
        mode: 'same-origin',
        body: JSON.stringify(data),
        headers: {
             'Accept':       'application/json',
             'Content-Type': 'application/json'
           //  'X-CSRFToken':  cookie.load('csrftoken')
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}