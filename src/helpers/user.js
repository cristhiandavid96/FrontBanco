

export function getToken() {
    return (localStorage.getItem('jwt') === null ? false : true)
}

export function getName() {
    let jwt = JSON.parse(localStorage.getItem('jwt'));
    return `${jwt?.data?.name || '-'}`
}
export function getId() {
    let jwt = JSON.parse(localStorage.getItem('jwt'));
    return jwt?.data?.user_id;
}