const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tags);
  } catch (err) {
    console.error('Error retrieving tags:', err);
    res.status(500).json({ message: 'An error occurred while retrieving tags.' });
  }
});

// GET one tag by its id
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });

    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.status(200).json(tag);
  } catch (err) {
    console.error(`Error retrieving tag with id ${req.params.id}:`, err);
    res.status(500).json({ message: 'An error occurred while retrieving the tag.' });
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    console.error('Error creating tag:', err);
    res.status(400).json({ message: 'An error occurred while creating the tag.' });
  }
});

// PUT to update a tag by its id
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Tag.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updated) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    // Fetch and return the updated tag
    const updatedTag = await Tag.findByPk(req.params.id);
    res.status(200).json(updatedTag);
  } catch (err) {
    console.error(`Error updating tag with id ${req.params.id}:`, err);
    res.status(400).json({ message: 'An error occurred while updating the tag.' });
  }
});

// DELETE a tag by its id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.status(204).end();
  } catch (err) {
    console.error(`Error deleting tag with id ${req.params.id}:`, err);
    res.status(500).json({ message: 'An error occurred while deleting the tag.' });
  }
});

module.exports = router;
