const { pool } = require('./conexion')

//Consultando los posts
const getPosts = async () => {
    const {rows} = await pool.query('SELECT * FROM posts')
    console.log(rows)
    return rows
}

const agregarPost = async (titulo, img, descripcion, likes) => {
    const consulta = "INSERT INTO posts values(DEFAULT, $1, $2, $3, $4)"
    const values = [titulo, img, descripcion, likes]
    const result = await pool.query(consulta, values)
    console.log('Post insertado')
    return result
}

module.exports = {
    getPosts,
    agregarPost
}