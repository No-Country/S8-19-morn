import User from '../DAOs/models/user.model.js';
import bcrypt from 'bcrypt'

;

// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { role, name, phone, email, password } = req.body;

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Encriptar la contraseña utilizando bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Crear un nuevo usuario
    const newUser = new User({
      role,
      name,
      phone,
      email,
      password : hashedPassword
    });

    // Guardar el nuevo usuario en la base de datos
    await newUser.save();

    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Ocurrió un error al crear el usuario' });
  }
};
// Controlador para iniciar sesion
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Verificar si el usuario existe en la base de datos
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'El usuario no existe' });
      }
  
      // Verificar la contraseña del usuario utilizando bcrypt
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }
  
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
      res.status(500).json({ message: 'Ocurrió un error al iniciar sesión' });
    }
  };

const getUserById = async (req, res) => {
    try {
      const userId = req.params.id;
  
      // Buscar el usuario por su ID en la base de datos
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      // Retornar el usuario encontrado
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Ocurrió un error al obtener el usuario' });
    }
  };  

  
export {
  createUser,
  login,
  getUserById
};