



import Type from "../entities/Type.js";

// Create a new type
export function createType(req, res) {
  const { nom, description } = req.body;

  const nouveauType = new Type({
    nom,
    description,
  });

  nouveauType.save()
    .then((type) => {
      res.status(201).json(type);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

// Get all types
export function getAllTypes(req, res) {
  Type.find()
    .then((types) => {
      res.status(200).json(types);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

// Get a type by ID
export function getTypeById(req, res) {
  const typeId = req.params.id;

  Type.findById(typeId)
    .then((type) => {
      if (!type) {
        return res.status(404).json({ message: 'Type not found' });
      }
      res.status(200).json(type);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

// Update a type
export function updateType(req, res) {
  const typeId = req.params.id;
  const { nom, description } = req.body;

  Type.findByIdAndUpdate(typeId, { nom, description }, { new: true })
    .then((type) => {
      if (!type) {
        return res.status(404).json({ message: 'Type not found' });
      }
      // Renvoyer le document mis à jour à la base de données
      return type.save();
    })
    .then((updatedType) => {
      res.status(200).json(updatedType);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

// Delete a type
export function deleteType(req, res) {
  const typeId = req.params.id;

  Type.findByIdAndRemove(typeId)
    .then((type) => {
      if (!type) {
        return res.status(404).json({ message: 'Type not found' });
      }
      res.status(200).json({ message: 'Type deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
