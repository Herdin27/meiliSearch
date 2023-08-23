const { MeiliSearch } = require('meilisearch')

const handleSearch = async (params) => {
    const client = new MeiliSearch({
        host: 'http://localhost:7700',
        apiKey: 'PN7eTVpgOPvwIUVV9UNsKKUno3PMILkQIsQcpvgjSm0'
    })

    const index = await client.index('movies').addDocuments([
        { 'id': 1, 'title': 'Carol' },
        { 'id': 2, 'title': 'Wonder Woman' },
        { 'id': 3, 'title': 'Life of Pi' },
        { 'id': 4, 'title': 'Mad Max: Fury Road' },
        { 'id': 5, 'title': 'Moana' },
        { 'id': 6, 'title': 'Philadelphia' }
    ])

    // be aware this client is using the masterKey, it should not be used in front end
    await client.index('movies').search('M').then((res) => console.log(res.hits))
}

handleSearch('Carol');