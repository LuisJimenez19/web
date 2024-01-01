/**
 *
 * @param {string} birthdate "dd/mm/yyyy"
 * @returns {number} Age
 */
export function calculateAge(birthdate) {
  // eslint-disable-next-line no-unused-vars
  const [day, month, year] = birthdate.split("/");
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMotnh = currentDate.getMonth();

  const age =
    currentMotnh > parseInt(month) // Si todavia no ha pasado el mes de su cumpleaños
      ? currentYear - parseInt(year)
      : currentYear - parseInt(year) - 1;

  return age;
}
