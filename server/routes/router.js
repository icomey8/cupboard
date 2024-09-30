import { getEntrees, postEntrees } from "../db/queries.js";

async function routes(fastify, options) {
    fastify.get("/", async (request, reply) => {
        return { hello: "world" };
    });

    fastify.get("/entrees", async (request, reply) => {
        try {
            const result = await getEntrees(fastify.pg);
            console.log("Fetched entrees:", result); // Add logging
            reply.send(result);
        } catch (error) {
            console.error("Error fetching entrees:", error); // Add logging
            reply.code(500).send({ error: 'Failed to fetch entrees' });
        }
    });

    fastify.post("/entrees", async (request, reply) => {
        const { entree, price } = request.body;
        try {
            const result = await postEntrees(fastify.pg, entree, price)
            console.log("added entree", result)
            reply.send(result)
        } catch (error) {
            console.log("error adding entree", error)
            reply.code(500).send({ error: "failed to add entree" });
        }
    })
}

export default routes;
