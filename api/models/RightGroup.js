/**
 * RightGroup.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt: false,

  autoUpdatedAt: false,

  //connection: 'someMysqlServer',

  //tableName: 'TBL_NhomQuyen',

  attributes: {
    ID: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },

    TenNhom: {
      type: 'string',
      required: true,
      unique: true
    },

    MoTa: {
      type: 'string',
      defaultsTo: ''
    },

    functions: {
      collection: 'function', // match model name here
      via: 'rightGroups', // match attribute name on other model
      dominant: true // dominant side
    }
  }

};
