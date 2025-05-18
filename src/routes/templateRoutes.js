const express = require('express');
const router = express.Router();
const {
    createTemplate,
    getUserTemplates,
    getTemplateById,
    updateTemplate,
    deleteTemplate
} = require('../controllers/templateController');

// Test route
router.get('/test', (req, res) => {
    res.json({ message: 'Template routes are working!' });
});

// Routes
router.post('/create-template', createTemplate);
router.get('/', getUserTemplates);
router.get('/:id', getTemplateById);
router.put('/:id', updateTemplate);
router.delete('/:id', deleteTemplate);

module.exports = router; 