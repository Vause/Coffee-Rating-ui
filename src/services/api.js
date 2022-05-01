import http from '../http-common';

export const getAll = () => {
    return http.get('/ratings');
};

export const get = id => {
    return http.get(`/ratings/${id}`);
};

export const save = data => {
    data.id ? update(data) : create(data);
}

export const create = data => {
    return http.post('/ratings', data);
};

export const update = data => {
    return http.put(`/ratings/${data.id}`, data);

}
