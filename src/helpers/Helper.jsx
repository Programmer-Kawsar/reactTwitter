import Swal from "sweetalert2";

/**
 *
 * @param {*} mobile
 * @returns
 */
export const isValidmobile = (mobile) => {
  const mobilePatern = /^(01|8801|\+8801)[0-9]{9}$/;
  return mobilePatern.test(mobile);
};

/**
 * Validate Email
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  return emailPattern.test(email);
};

/**
 *
 * @param {alert icon} icon
 * @param {alert title} title
 * @param {alert message} message
 */
export const sweetalert = (icon, title, message) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: message,
  });
};
