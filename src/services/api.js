import http from '../http-common';

export const getAll = () => {
    return http.get('/ratings');
};

export const create = data => {
    return http.post('/ratings', data);
};

