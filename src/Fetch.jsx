const url = 'http://localhost:3000/api'

const method = (type, body={}) => fetch(url, {
    method: 'POST',
    headers: {
        'content-type':'application/json; charset=utf-8'
    },
    body: JSON.stringify({
        type,
        body: {
            ...body, 
            
        }
    })
}).then(e => e.json())


export const getData = (param) => method('getData', {param:param})