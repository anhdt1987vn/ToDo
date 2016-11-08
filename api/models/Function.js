/**
 * Function.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,

  autoUpdatedAt: false,


  attributes: {
  	ID: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },

		TenChucNang: {
      type: 'string',
      required: true,
      //unique: true,
      //alphanumericdashed: true
    },

    IDChucNangCha: {
    	type: 'integer',
    },

    rightGroups: {
    	collection: 'rightgroup', // match model name here
      via: 'functions', // match attribute name on other model
      dominant: true // dominant side
    }

  }
};
