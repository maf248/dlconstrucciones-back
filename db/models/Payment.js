module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    coin: {
      type: DataTypes.ENUM("ARS", "USD"),
      allowNull: false,
    },
    cotizacionUsd: {
      type: DataTypes.DECIMAL.UNSIGNED,
      allowNull: true,
    },
    totalUsd: {
      type: DataTypes.DECIMAL.UNSIGNED,
      allowNull: false,
    },
    subTotal: {
      type: DataTypes.DECIMAL.UNSIGNED,
      allowNull: true,
    },
    amount: {
      type: DataTypes.DECIMAL.UNSIGNED,
      allowNull: false,
    },
    receipt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wayToPay: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iva: {
      type: DataTypes.ENUM("true", "false"),
      allowNull: false,
      defaultValue: "false",
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
    tableName: "payments",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true,
  };

  const Payment = sequelize.define("Payment", cols, config);

  Payment.associate = function (models) {
    Payment.belongsTo(models.Project, {
      as: "Projects",
      foreignKey: "projects_id",
    });
  };

  return Payment;
};
