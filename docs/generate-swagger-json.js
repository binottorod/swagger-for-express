const fs = require('fs');
const swaggerSpec = require('./swagger');

fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2), 'utf8');

console.log('✅ Swagger JSON saved to swagger.json');
