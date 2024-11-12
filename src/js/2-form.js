'use strict';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

document.addEventListener('DOMContentLoaded', getFormData);

function getFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    input.value = parsedData.email || '';
    textarea.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
