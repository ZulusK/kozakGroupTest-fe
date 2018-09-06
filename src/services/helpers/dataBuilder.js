// import store from '../..store';

export const makeFormData = data => {
  let formData = new FormData();

  for (let [key, value] of Object.entries(data)) {
    formData.append(String(key), String(value));
  }

  return formData;
};
