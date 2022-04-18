module.exports = (sequelize, DataTypes) => {
    const cols = {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cashflow: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    };
  
    const config = {
      tableName: "cashflows",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      paranoid: true,
    };
  
    const Cashflow = sequelize.define("Cashflow", cols, config);
  
    Cashflow.associate = function (models) {
      Cashflow.belongsTo(models.Project, {
        as: "Projects",
        foreignKey: "projects_id",
      });
    };
  
    return Cashflow;
  };
  