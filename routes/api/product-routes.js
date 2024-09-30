const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(products);
  } catch (err) {
    console.error('Error retrieving products:', err);
    res.status(500).json({ message: 'An error occurred while retrieving products.' });
  }
});

// GET one product by its id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (err) {
    console.error(`Error retrieving product with id ${req.params.id}:`, err);
    res.status(500).json({ message: 'An error occurred while retrieving the product.' });
  }
});

// POST a new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);

    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => ({
        product_id: product.id,
        tag_id,
      }));
      await ProductTag.bulkCreate(productTagIdArr);
    }

    res.status(201).json(product);
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(400).json({ message: 'An error occurred while creating the product.' });
  }
});

// PUT to update a product by its id
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updated) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Manage ProductTags
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTags = await ProductTag.findAll({
        where: { product_id: req.params.id },
      });

      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => ({
          product_id: req.params.id,
          tag_id,
        }));

      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    // Fetch and return the updated product
    const updatedProduct = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(`Error updating product with id ${req.params.id}:`, err);
    res.status(400).json({ message: 'An error occurred while updating the product.' });
  }
});

// DELETE a product by its id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id },
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(204).end();
  } catch (err) {
    console.error(`Error deleting product with id ${req.params.id}:`, err);
    res.status(500).json({ message: 'An error occurred while deleting the product.' });
  }
});

module.exports = router;
