import { User } from '../entities/User'

import { Options } from '@mikro-orm/core'
// import { MongoHighlighter } from '@mikro-orm/mongo-highlighter'
import path from 'path'

import { __prod__ } from '../constants'

const config: Options = {
	entities: [User],
	// entities: [BaseUser],
	dbName: 'mongo-test',
	type: 'mongo',
	clientUrl: 'mongodb://localhost:27017?retryWrites=true',
	debug: !__prod__,
	migrations: {
		path: path.join(__dirname, '../migrations'),
		pattern: /^[\w-]+\d+\.[tj]s$/,
	},
	ensureIndexes: true,
	// highlighter: new MongoHighlighter(),
}

export default config
