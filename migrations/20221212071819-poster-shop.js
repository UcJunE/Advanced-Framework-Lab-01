"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable("poster-shop", {
    id: { type: "int", primaryKey: true, autoIncrement: true, unsigned: true },
    title: { type: "string", length: 100, notNull: true },
    cost: { type: "int", unsigned: true, notNull: true },
    description: { type: "text", lenght: 255 },
    date: { type: "date" },
    stock: { type: "int", unsigned: true, notNull: true },
    height: { type: "int", unsigned: true, notNull: true },
    width: { type: "int", unsigned: true, notNull: true },
  });
};

exports.down = function (db) {
  return db.dropTable("poster-shop");
};

exports._meta = {
  version: 1,
};
