/**
 * Created by shiro on 09/01/2017.
 */


/**
 * The abstract class `Collection` for hide the operate of multiple databases'
 * collection or table's API, i.e, mongodb, mysql or the binary sql for the
 * release desktop version Curve.
 * @abstract
 */
class Collection {
  /**
   * Build the collection instance for query the data of the specific
   * collection or table.
   * @constructor Build a collection for query data.
   * @param {string} collectionName - the name of collection or table.
   * @param {Object} db - The database connect to the database. You should
   * promise that the connection is stable connected and when you call the
   * constructor of Collection, the connection building is finished.
   */
  constructor(collectionName, db) {

  }

  /**
   * Get the list of value in collection or table with `start`,
   * `end`, and `step`. It will select the elements whose timestamps are
   * in [start, start + step, start + 2 * step, ..., start + k * step] where
   * start + k * step <= end.
   * @function getDocs.
   * @param {int} start - The timestamp start postion.
   * @param {int} end - Time timestamp end postion.
   * @param {int} step - Time timestamp's step in selecting.
   * @param {int} residual - The residual of timestamp mod step.
   * @param {int} global_min - The minimize timestamp in all the series.
   * @param {bool} download - Download means whether download the
   * step-and-step data from the server. If it is false, we will not do
   * down-sample but push all data to client. If it is true, we will use the
   * down-sample.
   * @return {Promise.<Array>} - The list of value whose index in [start start + step,
   * start + 2 * step, ..., start + k * step]. The type of the element of
   * list is always include (float, bool) or (float, int). Remember, the
   * element is a class include `timestamp` and `value`.
   */
  getDocs(start, end, step, residual, global_min, download) {

  }

  /**
   * Get all the docs in collection or table with no parameter. It will
   * select all the elements.
   * @function getAll.
   * @return {Promise.<Array>} The list of records in the collection or table.
   */
  getAll() {

  }

  /**
   * Mark the interval [start, end) with label `op`, no matter with mongodb
   * or mysql or binary sql. i.e, when (start, end) is (400, 560) with the
   * unit step is 20 in the setting of this table, the data array will be
   * marked in [400, 420, 440, ..., 540].
   * @function markInterval.
   * @param {int} start - left point of the interval that should be marked.
   * @param {int} end - right point of the interval that should be marked.
   * @param {int | bool} op - the label that we use to mark the interval
   * [start, end).
   */
  markInterval(start, end, op) {

  }

  /**
   * Insert one record `doc` into the current collection or table.
   * @function insertOne.
   * @param {Object} doc - A object that include the data of a record that
   * should be insert into the table.
   */
  insertOne(doc) {

  }

  /**
   * Insert many records `docs` into the current collection or table.
   * @function insertMany.
   * @param {Array.<Object>} docs - A list of objects that each one include
   * the data of a record that should be insert into the table.
   */
  insertMany(docs) {
    rows.forEach((doc) => {
      this.insertOne(doc);
    })
  }

  /**
   * Update one record 'doc` into the current collection or table.
   * @functino updateOne.
   * @param {Object} doc - A object that include the data of a record that
   * should be updated into the table. It's for searching the doc in the table.
   * @param {Object} set - After find the one record, try to set new value
   * to the doc.
   */
  updateOne(doc, set) {

  }

  /**
   * Update many records 'doc` into the current collection or table. The
   * difference between `updateOne` and `updateMany` is the number of
   * records that we can update. In `updateOne`, we can only update one
   * record, even there is more than one satisfied condition. But in
   * `updateMany`, we can update them all.
   * @functino updateOne.
   * @param {Object} doc - A object that include the data of a record that
   * should be updated into the table. It's for searching the doc in the table.
   * @param {Object} set - After find the one record, try to set new value
   * to the doc.
   */
  updateMany(doc, set) {

  }


  /**
   * Delete one record 'doc` into the current collection or table.
   * @functino deleteOne.
   * @param {Object} doc - A object that include the data of a record that
   * should be deleted into the table. It's for searching the doc in the table.
   * to the doc.
   */
  deleteOne(doc) {
  }

  /**
   * Delete many records 'doc` into the current collection or table. The
   * difference between `deleteOne` and `deleteMany` is the number of
   * records that we can delete. In `deleteOne`, we can only delete one
   * record, even there is more than one satisfied condition. But in
   * `deleteMany`, we can delete them all.
   * @functino deleteOne.
   * @param {Object} doc - A object that include the data of a record that
   * should be deleted into the table. It's for searching the doc in the table.
   * to the doc.
   */
  deleteMany(doc) {
  }


  /**
   * Drop the collection.
   * @function drop
   */
  drop() {

  }

  /**
   * Create the colleciton. If there is no table can use, we will create one
   * new.
   */
  create() {

  }
}

module.exports = Collection;
