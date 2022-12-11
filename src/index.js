import express from "express"
import categoriesRoutes from "./Routes/categories.routes.js"
import gamesRoutes from "./Routes/games.routes.js"
import customerRoutes from "./Routes/customers.routes.js"

const app = express()
app.use(express.json())
app.use(categoriesRoutes)
app.use(gamesRoutes)
app.use(customerRoutes)

app.listen(4000, ()=> console.log("Server running in port: 4000"))