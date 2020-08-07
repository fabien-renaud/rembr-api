import hapiswagger from 'hapi-swagger';

const swaggerConfig = {
    plugin: hapiswagger,
    options: {
        info: {
            title: 'rembr API',
            version: '1.0.0'
        }
    }
};

export default swaggerConfig;
