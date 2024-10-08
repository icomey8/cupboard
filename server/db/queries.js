export async function getEntrees(fastify) {
    const query = 'SELECT * FROM Entree';
    const { rows } = await fastify.query(query); // destructure rows so we avoid returning metadata
    return rows;
}


export async function postEntrees(fastify, name, price) {
    const query = 'INSERT INTO Entrees (name, price) VALUES ($1, $2)';
    const { rows } = await fastify.query(query, [name, price]);
    return rows;
}

