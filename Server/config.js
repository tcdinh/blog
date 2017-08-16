var config = {
    expressPort: 1111,
    client: {
        mongodb: {
            defaultDatabase: "blogData",
            defaultCollection: "users",
            defaultUri: "mongodb://localhost:27017"
		}
    }
};

module.exports = config;