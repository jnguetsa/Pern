import query from "../index.js";

export const getProduct_sql = async (id) => {
  try {
    const getProduct = await query("SELECT * FROM SHOP WHERE id= 		$1", [id]);
    console.log("getProduct", getProduct);
    return res.status(200).json({ message: "Product found", data: getProduct });
  } catch (error) {
    console.error("Erreur lors de l'exécution de la requête :", error);
    return res
      .status(500)
      .json({ message: "Erreur lors de l'exécution de la requête" });
  }
};
export const getAllProduct_sql = async () => {
  try {
    console.log("Exécution de la requête pour récupérer les produits...");
    const { rows } = await query(
      "SELECT ID, NAME, IMAGE, PRICE FROM public.shop ORDER BY id ASC "
    );
    // const { rows } = await query("SELECT NAME, IMAGE, PRICE FROM public.shop");
    console.log("Produits récupérés :", rows);
    return rows;
  } catch (error) {
    console.error("Erreur lors de l'exécution de la requête :", error);
    throw error; // Rejeter l'erreur pour la gestion ultérieure
  }
};

export const createProduct_sql = async (product) => {
  const { name, image, price } = product; // Utiliser les noms de variables corrects ici
  const { rows } = await query(
    "INSERT INTO shop (name, image, price) VALUES ($1, $2, $3) RETURNING *",
    [name, image, price]
  );
  return rows[0];
};

export const updateProduct_sql = async (product_id, product) => {
  const { name, image, price } = product; // Utiliser les noms de variables corrects ici
  const { rows } = await query(
    "UPDATE shop SET name = $1, image = $2, price = $3 WHERE id = $4 RETURNING *",
    [name, image, price, product_id]
  );
  return rows[0];
};

export const deleteProduct_sql = async (id) => {
  const { rowCount } = await query("DELETE FROM shop WHERE id = $1", [id]);
  return rowCount > 0; // Retourne vrai si un produit a été supprimé
};
