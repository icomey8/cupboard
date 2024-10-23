export async function getAllEntrees(fastify) {
    const query = 'SELECT * FROM entree'
    const { rows } = await fastify.query(query) // destructure rows so we avoid returning metadata
    return rows
}

export async function getAllDrinks(fastify) {
    const query = 'SELECT * FROM drink'
    const { rows } = await fastify.query(query)
    return rows
}

export async function getAllStores(fastify) {
    const query = 'SELECT * FROM stores'
    const { rows } = await fastify.query(query)
    return rows
}

export async function getAllDesserts(fastify) {
    const query = 'SELECT * FROM desserts'
    const { rows } = await fastify.query(query)
    return rows
}

export async function postEntree(fastify, name, price) {
    const query = 'INSERT INTO entree (name, price) VALUES ($1, $2)'
    const { rows } = await fastify.query(query, [name, price])
    return rows
}

