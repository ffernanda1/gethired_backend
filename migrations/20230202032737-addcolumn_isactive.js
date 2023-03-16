'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'todos',
      'is_active',
     Sequelize.BOOLEAN
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'todos',
      'is_active'
    );
  }
};
