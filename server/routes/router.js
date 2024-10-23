import { getAllEntrees, getAllDesserts, getAllStores, getAllDrinks, postEntree } from "../db/queries.js";

async function routes(fastify, options) {
    fastify.get("/", async (request, reply) => {
        return { hello: "world" };
    });

    fastify.get("/entrees", async (request, reply) => {
        try {
            const result = await getAllEntrees(fastify.pg);
            console.log("Fetched entrees:", result); 
            reply.send(result);
        } catch (error) {
            console.error("Error fetching entrees:", error); 
            reply.code(500).send({ error: 'Failed to fetch entrees' });
        }
    });

    fastify.get("/drinks", async (request, reply) => {
        try {
            const result = await getAllDrinks(fastify.pg);
            console.log("Fetched drinks:", result); 
            reply.send(result);
        } catch (error) {
            console.error("Error fetching drinks:", error); 
            reply.code(500).send({ error: 'Failed to fetch drinks' });
        }
    });

    fastify.get("/desserts", async (request, reply) => {
        try {
            const result = await getAllDesserts(fastify.pg);
            console.log("Fetched desserts:", result); 
            reply.send(result);
        } catch (error) {
            console.error("Error fetching desserts:", error); 
            reply.code(500).send({ error: 'Failed to fetch desserts' });
        }
    });

    fastify.get("/stores", async (request, reply) => {
        try {
            const result = await getAllStores(fastify.pg);
            console.log("Fetched stores:", result); 
            reply.send(result);
        } catch (error) {
            console.error("Error fetching stores:", error); 
            reply.code(500).send({ error: 'Failed to fetch stores' });
        }
    });

    fastify.post("/entrees", async (request, reply) => {
        const { entree, price } = request.body;
        try {
            const result = await postEntree(fastify.pg, entree, price)
            console.log("added entree", result)
            reply.send(result)
        } catch (error) {
            console.log("error adding entree", error)
            reply.code(500).send({ error: "failed to add entree" });
        }
    });
}

export default routes;
