const prisma = require('../config/prisma');
// Create a new template
const createTemplate = async (req, res) => {
    try {
        const { name, category, description, emailSubject, emailBody, questions, userId } = req.body;
        const template = await prisma.template.create({
            data: {
                name,
                category,
                description,
                emailSubject,
                emailBody,
                questions,
                userId
            }
        });

        res.status(201).json(template);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all templates for a user
const getUserTemplates = async (req, res) => {
    try {
        const { userId } = req.query;

        const templates = await prisma.template.findMany({
            where: {
                userId
            }
        });

        res.json(templates);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single template by ID
const getTemplateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.query;

        const template = await prisma.template.findFirst({
            where: {
                id: parseInt(id),
                userId
            }
        });

        if (!template) {
            return res.status(404).json({ error: 'Template not found' });
        }

        res.json(template);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a template
const updateTemplate = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, ...updateData } = req.body;

        const template = await prisma.template.findFirst({
            where: {
                id: parseInt(id),
                userId
            }
        });

        if (!template) {
            return res.status(404).json({ error: 'Template not found' });
        }

        const updatedTemplate = await prisma.template.update({
            where: { id: parseInt(id) },
            data: updateData
        });

        res.json(updatedTemplate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a template
const deleteTemplate = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.query;

        const template = await prisma.template.findFirst({
            where: {
                id: parseInt(id),
                userId
            }
        });

        if (!template) {
            return res.status(404).json({ error: 'Template not found' });
        }

        await prisma.template.delete({
            where: { id: parseInt(id) }
        });

        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createTemplate,
    getUserTemplates,
    getTemplateById,
    updateTemplate,
    deleteTemplate
}; 