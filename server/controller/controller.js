//Instance Pool to connect PostgreSQL
const { request } = require('express');
const pool = require('../model/model');


// CREATE
const createProduct = async(req, res) => {

    const { ID, nombre_producto, caracteristicas, fecha_vencimiento } = req.body;
    if (ID === undefined) {
        res.status(400).send('El ID es obligatorio');
    } else {
        const response = await pool.query(
            'INSERT INTO productos (ID, nombre_producto, caracteristicas, fecha_vencimiento) VALUES ($1,$2,$3,$4)', [ID, nombre_producto, caracteristicas, fecha_vencimiento]);

        res.json({
            message: 'Producto Agregado',
            body: {
                person: { ID, nombre_producto, caracteristicas, fecha_vencimiento }
            }
        })
        res.send('Producto Agregado!');
    }
}

// READ
const obtainProduct = async(req, res) => {

    const response = await pool.query('SELECT * FROM productos');
    //Parce the Json
    res.status(200).json(response.rows);
    // console.log(response.rows);
    // res.send('Consulta de total de Personas');
}

// UPDATE
const updateProduct = async(req, res) => {

    const { ID, nombre_producto, caracteristicas, fecha_vencimiento } = req.body;
    const response = await pool.query('UPDATE productos SET nombre_producto = $1, caracteristicas =$2, fecha_vencimiento=$3 WHERE id=$4', [nombre_producto, caracteristicas, fecha_vencimiento, ID]);
    res.send('Producto actualizado correctamente');
}

// READ - SEARCH
const searchProduct = async(req, res) => {

    const response = await pool.query('SELECT * FROM productos WHERE ID = $1', [req.params.id]);
    res.json(response.rows);
}

// DELETE
const deleteProduct = async(req, res) => {

    const response = await pool.query('DELETE FROM productos WHERE id = $1', [req.params.id]);
    res.json(`Producto eliminado con ID ${req.params.id} de forma correcta`);
}

module.exports = {
    createProduct,
    obtainProduct,
    updateProduct,
    searchProduct,
    deleteProduct
}