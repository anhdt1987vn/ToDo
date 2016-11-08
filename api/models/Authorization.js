/**
 * Authorization.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,

  autoUpdatedAt: false,

  //connection: 'someMysqlServer',

  //tableName: 'TBL_PhanQuyen',

  attributes: {
    ID: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },

    IDChucNang: {
    	model: 'function'
    },

    IDNhomQuyen: {
    	model: 'rightgroup'
    }
  }
};


