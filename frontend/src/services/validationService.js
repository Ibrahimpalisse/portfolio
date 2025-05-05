import { z } from "zod";

// Validation pour le formulaire de contact
export const contactSchema = z.object({
  name: z.string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères")
    .refine(value => !/^\d+$/.test(value), "Le nom ne peut pas être composé uniquement de chiffres"),
  
  email: z.string()
    .email("Format d'email invalide")
    .min(5, "L'email est trop court")
    .max(100, "L'email ne peut pas dépasser 100 caractères"),
  
  message: z.string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères")
});

// Fonction utilitaire pour formater les erreurs Zod
export const formatZodErrors = (error) => {
  if (!error || !error.errors || error.errors.length === 0) return "";
  
  // Retourne les messages d'erreur formatés
  return error.errors.map(err => err.message).join(" | ");
};

// Autres schémas de validation pour d'autres parties du site peuvent être ajoutés ici 