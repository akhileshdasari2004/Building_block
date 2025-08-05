"use client";

import { motion } from "framer-motion";

export default function ComponentGrid() {
  const components = [
    { name: "Button", icon: "🔘", desc: "Interactive elements" },
    { name: "Card", icon: "📄", desc: "Content containers" },
    { name: "Modal", icon: "🪟", desc: "Overlay dialogs" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      {components.map((component, index) => (
        <motion.div
          key={component.name}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="text-center">
            <div className="mb-3 text-3xl">{component.icon}</div>
            <h3 className="mb-2 text-lg font-semibold text-white">{component.name}</h3>
            <p className="text-sm text-gray-300">{component.desc}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </motion.div>
      ))}
    </div>
  );
}
