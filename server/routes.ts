import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { products } from "@shared/schema";

async function seedDatabase() {
  const existingProducts = await storage.getProducts();
  if (existingProducts.length === 0) {
    await db.insert(products).values([
      {
        name: "Farm Fresh Brown Eggs",
        description: "Nutritious and delicious brown eggs straight from our free-range hens.",
        category: "Eggs",
        price: "4.99",
        imageUrl: "https://images.unsplash.com/photo-1598965675045-45c5e7207d9e?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Premium White Eggs",
        description: "High-quality white eggs packed with protein for your daily breakfast.",
        category: "Eggs",
        price: "3.99",
        imageUrl: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Organic Chicken Feed",
        description: "Specially formulated organic feed for healthy and productive layers.",
        category: "Feed",
        price: "24.99",
        imageUrl: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800",
      }
    ]);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.products.list.path, async (req, res) => {
    const allProducts = await storage.getProducts();
    res.json(allProducts);
  });

  app.get(api.products.get.path, async (req, res) => {
    const product = await storage.getProduct(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  });

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const msg = await storage.createContactMessage(input);
      res.status(201).json(msg);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed database
  seedDatabase().catch(console.error);

  return httpServer;
}
