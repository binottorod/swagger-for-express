const fs = require('fs');
const yaml = require('js-yaml');
const swaggerSpec = require('./swagger');

const yamlStr = yaml.dump(swaggerSpec, { noRefs: true, lineWidth: -1 });

fs.writeFileSync('./swagger.yml', yamlStr, 'utf8');

console.log('✅ Swagger YAML saved to swagger.yml');
