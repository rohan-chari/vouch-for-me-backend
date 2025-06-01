const express = require('express');
const router = express.Router();
const {
    createTemplate,
    getUserTemplates,
    updateTemplate,
    deleteTemplate
} = require('../controllers/templateController');

// Routes
router.post('/create-template', createTemplate);
router.get('/:id', getUserTemplates);
router.put('/:id', updateTemplate);
router.delete('/:id', deleteTemplate);

module.exports = router; 