import Item from "../models/Item.js";

// GET /api/items  — public
export const getAllItems = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const items = await Item.find(filter);
    return res.status(200).json({ success: true, data: items });
  } catch (error) {
    console.error("GetAllItems error:", error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// GET /api/items/:id  — public
export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }
    return res.status(200).json({ success: true, data: item });
  } catch (error) {
    console.error("GetItemById error:", error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// POST /api/items  — admin only
export const createItem = async (req, res) => {
  const { name, description, price, category, image } = req.body;

  if (!name || !price) {
    return res.status(400).json({ success: false, message: "Name and price are required" });
  }

  try {
    const item = await Item.create({ name, description, price, category, image });
    return res.status(201).json({ success: true, message: "Item created", data: item });
  } catch (error) {
    console.error("CreateItem error:", error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// PUT /api/items/:id  — admin only
export const updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }
    return res.status(200).json({ success: true, message: "Item updated", data: item });
  } catch (error) {
    console.error("UpdateItem error:", error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// DELETE /api/items/:id  — admin only
export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }
    return res.status(200).json({ success: true, message: "Item deleted" });
  } catch (error) {
    console.error("DeleteItem error:", error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
