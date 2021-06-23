const { response, request } = require('express');

const usersGet = (req = request, res = response) => {
    const {q, nombre = 'No name', apikey} = req.query;
    res.json({
        ok: true,
        msj: 'get API - controller',
        q,
        nombre,
        apikey
    });
};

const usersPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        ok: true,
        msj: 'put API - controller',
        id
    });
};

const usersPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    res.json({
        ok: true,
        msj: 'post API -  controller',
        nombre,
        edad
    });
};

const usersDelete = (req, res = response) => {
    res.json({
        ok: true,
        msj: 'delete API - controller'
    });
};

const usersPatch = (req, res = response) => {
    res.json({
        ok: true,
        msj: 'patch API - controller'
    });
};

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
} 