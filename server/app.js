import Fastify from "fastify";
import routes from './routes/router.js';
import fastifyPostgres from "@fastify/postgres";
import dotenv from 'dotenv';
import envPath from './db/path.js';
import fastifyCors from '@fastify/cors';

// configure correct path to .env
dotenv.config({ path: envPath });

const fastify = Fastify({
	logger: true,
});

fastify.register(fastifyCors, {
	origin: '*',  // Allow all origins. Set this to specific origins in production.
  });

// the register API is the only way to add routes, plugins, et cetera.
fastify.register(fastifyPostgres, {
	connectionString: process.env.DB_URL
})

fastify.register(routes); 

fastify.listen({ port: 3000 }, function (err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
