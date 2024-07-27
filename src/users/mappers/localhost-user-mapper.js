import { User } from "../models/user";



//Funcion que recibe un objeto o que luzca como ese objeto y crea la instancia de una clase con los datos, nos servira para no confundir los key del back ya se ahorita o en el futuro.
//Un Mapper en programación suele referirse a una clase que se encarga de tomar un objeto de una Clase A y convertirlo en un objeto de la Clase B asignando las propiedades de la primera a la segunda según se correspondan.
//En este caso se realizo porque el key del back puede sufrir algun cambio futuro ya que los envia en snakecase.
/**
 * 
 * @param {Like<User>} localHostUser 
 * @returns {User}
 */
export const localhostUserToModel = (localHostUser) => {
  const { avatar, balance, first_name, gender, id, isActive, last_name } =
    localHostUser;
  return new User({
    avatar,
    balance,
    firstName: first_name,
    gender,
    id,
    isActive,
    lastName: last_name,
  });
};
