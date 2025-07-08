# Inventory API

## Description
A simple Express.js API to manage inventory items, connected to MongoDB using Mongoose.

---

## Endpoints

### GET /
Returns a welcome message.

### GET /health
Returns server health status.

### GET /items
Returns all inventory items.

### POST /items
Creates a new inventory item.

```json
{
  "name": "Apple",
  "quantity": 20,
  "price": 5
}
