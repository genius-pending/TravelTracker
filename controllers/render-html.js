const { Sequelize } = require('sequelize');
const Holiday = require('../models/Holiday');
const helpers = require('../views/helpers/helpers');


module.exports = {
  indexHTML: async (res) => {
    try {
      const random = await Holiday.findAll({
        order: Sequelize.literal('rand()'),
        limit: 2,
        raw: true
      });
      res.render('index', { random, helpers: {
        dateFormat: helpers.dateFormat
      }});
    } catch (error) {
      console.log('Error on GET/:', error);
      res.sendStatus(500);
    }
  },
  submitHTML: async (res) => {
    try {
      res.render('submit');
    } catch (error) {
      console.log('Error on GET/:', error);
      res.sendStatus(500);
    }
  },
  browseHTML: async (res) => {
    try {
      const results = await Holiday.findAll({
        raw: true
      });
      res.render('browse', {results});
    } catch (error) {
      console.log('Error on GET/:', error);
      res.sendStatus(500);
    }
  },
  reviewHTML: async (res) => {
    try {
      res.render('review');
    } catch (error) {
      console.log('Error on GET/:', error);
      res.sendStatus(500);
    }
  }
};