const AbstractRepository = require("./AbstractRepository");

class CompanyRepository extends AbstractRepository {
  constructor() {
    super({ table: "company" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async create(company) {
    const [result] = await this.database.query(
      `insert into ${this.table} (email, password, name, phone, size, validate) values (?, ?, ?, ?, ?, ?)`,
      [
        company.email,
        company.password,
        company.name,
        company.phone,
        company.size,
        company.validate,
      ]
    );
    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }

  async update(company) {
    const [result] = await this.database.query(
      `update ${this.table} set email = ?, password = ?, name = ?, phone = ?, size = ?, validate = ?`,
      [
        company.email,
        company.password,
        company.name,
        company.phone,
        company.size,
        company.validate,
      ]
    );
    return result.affectedRows;
  }
}
module.exports = CompanyRepository;
