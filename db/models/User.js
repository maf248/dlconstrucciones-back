module.exports = (sequelize, DataTypes) => {

const cols = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user'
    },
    phone: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    dni: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: null
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
}

const config = {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true
}

const User = sequelize.define("User", cols, config);

User.associate = function(models) {
    User.hasMany(models.Project, {
        as: "Projects",
        foreignKey: "users_id"
    })
}


return User;

}
