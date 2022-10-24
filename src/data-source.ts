import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "dbpasswd",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: ['./**/models/*.ts'],
  migrations: [],
  subscribers: [],
})
