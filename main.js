const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

const helloRoutes = require('./routes/hello');
const loginRoutes = require('./routes/login');

const app = express();
app.use(express.json());

app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/', helloRoutes);
app.use('/', loginRoutes);


app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
  console.log('Swagger UI at http://localhost:3000/api-docs');
});
