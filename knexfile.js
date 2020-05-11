module.exports = {
	client: 'postgresql',
	connection: {
		database: 'backendbibau',
		user: 'postgres',
		password: 'Nandy@99'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
