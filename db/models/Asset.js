module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    asset: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    type: {
      type: DataTypes.ENUM("image", "video"),
      allowNull: false,
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
    tableName: "assets",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true,
  };

  const Asset = sequelize.define("Asset", cols, config);

  Asset.associate = function (models) {
    Asset.belongsTo(models.Project, {
      as: "Projects",
      foreignKey: "projects_id",
    });
  };

  return Asset;
};
