const router = require("express").Router();

const productos = [];

router.get("/", (req, res) => {
  res.json(productos);
});

router.get("/:id", (req, res) => {
  const filteredList = productos.filter(
    (product) => product.id === Number(req.params.id)
  );
  if (filteredList.length === 0) res.json("producto no encontrado");
  else res.json(filteredList);
});

router.post("/", (req, res) => {
  const lastItem = productos.length - 1;
  const newId = productos.length > 0 ? productos[lastItem].id + 1 : 1;
  productos.push({
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
    id: newId,
  });
  res.json(productos);
});

router.put("/:id", (req, res) => {
  const filteredList = productos.filter(
    (product) => product.id === Number(req.params.id)
  );
  if (filteredList.length === 0) res.json("producto no encontrado");
  else {
    filteredList[0].title = req.body.title;
    filteredList[0].price = req.body.price;
    filteredList[0].thumbnail = req.body.thumbnail;
    res.json("updated");
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deletedItem = productos.filter((product) => product.id === Number(id));
  const filteredList = productos.filter((product) => product.id !== Number(id));
  if (deletedItem.length === 0) res.json("producto no encontrado");
  else res.json(filteredList);
});

module.exports = router;
