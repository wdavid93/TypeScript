const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:MiMa5158**@localhost:5432/ecommerce');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Définir le modèle de produit
const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

// Synchroniser le modèle avec la base de données
sequelize.sync();

// Endpoint pour récupérer tous les produits
app.get('/api/products', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM products');
    client.release();
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching products', err);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// Endpoint pour récupérer un produit par son ID
app.get('/api/products/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM products WHERE id = $1', [id]);
    client.release();
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    console.error(`Error fetching product with id ${id}`, err);
    res.status(500).json({ message: `Error fetching product with id ${id}` });
  }
});

// Endpoint pour créer un nouveau produit
app.post('/api/products', async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, quantity]
    );
    client.release();
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating product', err);
    res.status(500).json({ message: 'Error creating product' });
  }
});

// Endpoint pour mettre à jour un produit
app.put('/api/products/:id', async (req, res) => {
  const id = req.params.id;
  const { name, description, price, quantity } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5 RETURNING *',
      [name, description, price, quantity, id]
    );
    client.release();
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    console.error(`Error updating product with id ${id}`, err);
    res.status(500).json({ message: `Error updating product with id ${id}` });
  }
});

// Endpoint pour supprimer un produit
app.delete('/api/products/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const client = await pool.connect();
    await client.query('DELETE FROM products WHERE id = $1', [id]);
    client.release();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    console.error(`Error deleting product with id ${id}`, err);
    res.status(500).json({ message: `Error deleting product with id ${id}` });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



// const express = require('express');
// const bodyParser = require('body-parser');
// const pg = require('pg');

// const app = express();
// const port = 3000;

// // Configurer bodyParser pour lire les données du corps des requêtes
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Configurer la connexion à PostgreSQL
// const pool = new pg.Pool({
//   user: 'your_username',
//   host: 'localhost',
//   database: 'your_database_name',
//   password: 'your_password',
//   port: 5432,
// });

// // Middleware pour gérer les erreurs de la connexion à PostgreSQL
// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err);
//   process.exit(-1);
// });

// // Endpoint pour récupérer tous les produits
// app.get('/api/products', async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM products');
//     client.release();
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error fetching products', err);
//     res.status(500).json({ message: 'Error fetching products' });
//   }
// });

// // Endpoint pour récupérer un produit par son ID
// app.get('/api/products/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM products WHERE id = $1', [id]);
//     client.release();
//     if (result.rows.length > 0) {
//       res.json(result.rows[0]);
//     } else {
//       res.status(404).json({ message: 'Product not found' });
//     }
//   } catch (err) {
//     console.error(`Error fetching product with id ${id}`, err);
//     res.status(500).json({ message: `Error fetching product with id ${id}` });
//   }
// });

// // Endpoint pour créer un nouveau produit
// app.post('/api/products', async (req, res) => {
//   const { name, description, price, quantity } = req.body;
//   try {
//     const client = await pool.connect();
//     const result = await client.query(
//       'INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *',
//       [name, description, price, quantity]
//     );
//     client.release();
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error('Error creating product', err);
//     res.status(500).json({ message: 'Error creating product' });
//   }
// });

// // Endpoint pour mettre à jour un produit
// app.put('/api/products/:id', async (req, res) => {
//   const id = req.params.id;
//   const { name, description, price, quantity } = req.body;
//   try {
//     const client = await pool.connect();
//     const result = await client.query(
//       'UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5 RETURNING *',
//       [name, description, price, quantity, id]
//     );
//     client.release();
//     if (result.rows.length > 0) {
//       res.json(result.rows[0]);
//     } else {
//       res.status(404).json({ message: 'Product not found' });
//     }
//   } catch (err) {
//     console.error(`Error updating product with id ${id}`, err);
//     res.status(500).json({ message: `Error updating product with id ${id}` });
//   }
// });

// // Endpoint pour supprimer un produit
// app.delete('/api/products/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const client = await pool.connect();
//     await client.query('DELETE FROM products WHERE id = $1', [id]);
//     client.release();
//     res.json({ message: 'Product deleted' });
//   } catch (err) {
//     console.error(`Error deleting product with id ${id}`, err);
//     res.status(500).json({ message: `Error deleting product with id ${id}` });
//   }
// });

// // Démarrer le serveur
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
