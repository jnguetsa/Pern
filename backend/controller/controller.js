import express from "express";
import {
  getAllProduct_sql,
  createProduct_sql,
  updateProduct_sql,
  deleteProduct_sql,
  getProduct_sql,
} from "../services/servicesProduct.js";

export const getAllProducts = async (req, res) => {
  try {
    const getProducts = await getAllProduct_sql();
    return res
      .status(200)
      .json({ 
          message: "list of products : ", 
          getProducts 
      });
  } catch (error) {
    console.log("Erreur lors de la recherche des clients : ", error);
    res
      .status(500)
      .json({ message: "Erreur interne du serveur", error: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, image, price } = req.body;
  try {
    if (!name || !image || !price) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
    } else {
      console.log(name);
      const newProduct = await createProduct_sql({ name, image, price });
      return res.status(201).json({ message: "Article ajouté : ", newProduct });
    }
  } catch (error) {
    console.error("Erreur lors de la création du produit :", error);
    return res
      .status(500)
      .json({ message: "Erreur interne du serveur", error: error.message });
  }
};

export const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      return res.status(400).json({ message: "Veuillez renseigner l'id" });
    } else {
      const getProduct = await getProduct_sql(id);
      return res.status(200).json({ message: "Produit trouvé : ", getProduct });
    }
  } catch (error) {
    console.error("Erreur lors de la recherche du produit : ", error);
    return res
      .status(500)
      .json({ message: "Erreur interne du serveur", error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = req.body;

  try {
    if (!id) {
      return res.status(400).json({ message: "Veuillez renseigner l'id" });
    } else {
      const updatedProduct = await updateProduct_sql(id, product);
      return res
        .status(200)
        .json({ message: "Produit mis à jour : ", updatedProduct });
    }
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de l'exécution de la requête :",
      error
    );
    return res.status(500).json({
      message: "Une erreur est survenue lors de l'exécution de la requête",
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      return res.status(400).json({ message: "Renseigner l'identifiant" });
    } else {
      const delProduct = await deleteProduct_sql(id);
      return res.status(200).json({
        message: "Le produit a été supprimé avec succès : ",
        delProduct,
      });
    }
  } catch (error) {
    console.error("Une erreur est survenue lors de la suppression : ", error);
    return res.status(500).json({
      message: "Une erreur est survenue lors de la suppression : ",
      error: error.message,
    });
  }
};
