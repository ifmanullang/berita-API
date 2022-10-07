module.exports = (sequelize, Sequelize) => {
    const Berita = sequelize.define("komentar", {
        id_berita: {
            type: Sequelize.INTEGER
        },
        komentar: {
            type: Sequelize.STRING
        }
});
    return Berita;
};