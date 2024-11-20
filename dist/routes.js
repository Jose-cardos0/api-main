"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
//exemplo http://localhost:3333/tarefas
router.get("/produtos", (req, res) => {
  res.json([
    {
      id: "1",
      produto: "leite uht integral",
      nutritional100g: {
        kcal: "125",
        carbo: "5",
        proteinas: "3",
        gorduras: "7",
      },
      nutritional50g: {
        kcal: "62",
        carbo: "2",
        proteinas: "1",
        gorduras: "3",
      },
      vd: {
        kcal: "6",
        carbo: "3",
        proteinas: "10",
        gorduras: "50",
      },
    },
    {
      id: "2",
      produto: "queijo prato",
      nutritional100g: {
        kcal: "350",
        carbo: "1",
        proteinas: "25",
        gorduras: "27",
      },
      nutritional50g: {
        kcal: "175",
        carbo: "0.5",
        proteinas: "12.5",
        gorduras: "13.5",
      },
      vd: {
        kcal: "8",
        carbo: "0.2",
        proteinas: "5",
        gorduras: "40",
      },
    },
  ]);
});
