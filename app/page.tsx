"use client";
import { useState } from "react";

export default function GoldenMartBakery() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Thanks for subscribing with ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-6 text-brown-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Golden Mart & Bakery</h1>
        <p className="text-lg">Freshly Baked Goodness, Every Day</p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {[
          {
            title: "Daily Breads",
            content: "Enjoy our variety of freshly baked breads made with premium ingredients."
          },
          {
            title: "Pastries & Cakes",
            content: "From cupcakes to celebration cakes, every piece is baked with love."
          },
          {
            title: "Mart Specials",
            content: "Groceries, snacks, and more to keep your kitchen stocked and happy."
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-md max-w-xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Subscribe for Updates</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="p-2 border rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe} className="bg-yellow-500 text-white px-4 py-2 rounded">
            Subscribe
          </button>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-brown-600">
        &copy; {new Date().getFullYear()} Golden Mart & Bakery. All rights reserved.
      </footer>
    </div>
  );
}
