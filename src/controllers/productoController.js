let datos = [
    {
        id: 1,
        nombre: 'Notebook',
        precio: 500
    },
    {
        id: 2,
        nombre: 'Monitor',
        precio: 400
    },
    {
        id: 3,
        nombre: 'Parlante',
        precio: 200
    }
] 

const allProductos = (req,res) => {
    res.json(datos)
}

const getProducto = (req,res) => {
    const id = req.params.id
    const producto = datos.find(dato => dato.id == id)
    res.json(producto)
}

const deleteProducto = (req,res) => {
    const id = req.params.id
    datos = datos.filter(dato => dato.id != id)
    res.status(204).end()
}

module.exports = { allProductos, getProducto, deleteProducto }