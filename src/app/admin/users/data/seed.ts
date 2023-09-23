import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

import { roles, plans, statuses } from "./data"

const users = Array.from({ length: 100 }, () => ({
  id: faker.datatype.number(),
  name: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  status: faker.helpers.arrayElement(statuses).value,
  role: faker.helpers.arrayElement(roles).value,
  plan: faker.helpers.arrayElement(plans).value,
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
}))

fs.writeFileSync(
  path.join( __dirname, '../../../data/users.json'),
  JSON.stringify(users, null, 2)
)

console.log("✅ Users data generated.")
