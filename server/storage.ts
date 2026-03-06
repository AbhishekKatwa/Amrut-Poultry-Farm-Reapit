import { db } from "./db";
import {
  products,
  contactMessages,
  type Product,
  type ContactMessage,
  type InsertProduct,
  type InsertContactMessage
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createContactMessage(msg: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [msg] = await db.insert(contactMessages).values(insertMessage).returning();
    return msg;
  }
}

export const storage = new DatabaseStorage();
