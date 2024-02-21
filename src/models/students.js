'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Students.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    department: DataTypes.STRING,
    registration_number: DataTypes.STRING,
    roll_number: DataTypes.STRING,
    linkedin_profile: DataTypes.STRING,
    resume_link: DataTypes.STRING,
    internship_place: DataTypes.STRING,
    matriculation_passing_year: DataTypes.INTEGER,
    matriculation_percentage: DataTypes.FLOAT,
    matriculation_board: DataTypes.STRING,
    intermediate_passing_year: DataTypes.INTEGER,
    intermediate_percentage: DataTypes.FLOAT,
    intermediate_board: DataTypes.STRING,
    Achievements: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Students;
};