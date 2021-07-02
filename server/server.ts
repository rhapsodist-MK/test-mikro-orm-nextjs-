// // mikro orm
// import 'reflect-metadata'
// import { MikroORM } from '@mikro-orm/core'

import startOrm from './config/initialize-database.js'

// base
import express from 'express'
import next from 'next'

// import microConfig from './config/mikro-orm'
import { __prod__ } from './constants'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = !__prod__
const app = next({ dev })
const handle = app.getRequestHandler()

const main = async () => {
	// const orm = await MikroORM.init(microConfig)
	// await orm.getMigrator().up()
	startOrm()

	app.prepare().then(() => {
		const server = express()

		server.all('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(port, (err?: any) => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${port}`)
		})
	})
}

main().catch((err) => {
	console.error(err)
})
