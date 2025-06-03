import { Portfolio } from "../models/portfolio.js";

const handleGetPort = async (req, res) => {
    console.log("Getting portfolio...");
  try {
    const items = await Portfolio.find().sort({ createdAt: -1 });
    console.log("Fetched portfolio items:", items);

    if (!items || items.length === 0) {
      return res.status(404).json({ message: "No portfolio items found" });
    }

    return res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (err) {
    console.error("Error fetching portfolio items:", err);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching portfolio",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};

export default handleGetPort;
