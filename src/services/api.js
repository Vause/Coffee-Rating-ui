import http from '../http-common';

export const getAll = () => {
    return http.get('/ratings');
};

export const get = id => {
    return http.get(`/ratings/${id}`);
};

export const create = data => {
    return http.post('/ratings', data);
};

export const update = (id, data) => {
    return http.put(`/ratings/${id}`, data);

}
