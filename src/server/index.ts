/* eslint-disable global-require */
/* eslint-disable no-console */
import compression from 'compression';
import dotenv from 'dotenv';
import express from 'express';
import useragent from 'express-useragent';
import next from 'next';
import nextBuild from 'next/dist/build';
import path from 'path';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const server = express();
// const memberServer = express();
server.use(compression());
server.use(useragent.express());
const app = next({ dev });
const handler = app.getRequestHandler();

if (!process.env.NEXT_BUILD) {
    // server.post('/upload', (req, res, next) => {
    //     //@ts-ignore
    //     // app.render(req, res, `/posts/*`, req.query);
    //     res.status(201).send('testing');
    // });
    // rewrites posts to bai-viet
    // server.get('/bai-viet/*', (req, res, next) => {
    //     //@ts-ignore
    //     app.render(req, res, `/posts/*`, req.query);
    //     return next();
    // });

    // //CustomRoute config
    // memberServer.get('/sample/*', (req, res) => {
    //     //@ts-ignore
    //     return app.render(req, res, '/sample/*', req.query);
    // });
    // memberServer.get(
    //     '/sample/:test(/^(?=.{8,20}$)(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$/g)',
    //     (req, res) => {
    //         //@ts-ignore
    //         return app.render(req, res, `/sample/*${req.path}`, req.query);
    //     },
    // );
    // memberServer.get('*', (req, res) => {
    //     return handler(req, res);
    // });

    // server.use(express.static(path.join(__dirname, '../../public')));
    // server.use(vhost('localhost/*', memberServer)); // for match all subdomain per user as username
    server.get('*', (req, res) => {
        return handler(req, res);
    });

    app.prepare().then(() => {
        console.log('NextJS started');

        server.listen(process.env.NEXT_PUBLIC_PORT, async () => {
            console.log(`Server listening on ${process.env.NEXT_PUBLIC_PORT}...`);
        });
    });
} else {
    server.listen(process.env.NEXT_PUBLIC_PORT, async () => {
        console.log('NextJS is now building...');
        await nextBuild(path.join(__dirname, '../'));
        process.exit();
    });
}
