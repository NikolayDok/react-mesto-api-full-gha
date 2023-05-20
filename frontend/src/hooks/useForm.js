import React from "react";

const useForm = () => {
  const [values, setValues] = React.useState({});

  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setValues({ ...values, [name]: value });

    setIsValid(event.target.closest(".authorization__form").checkValidity());
  };

  return {
    values,
    handleChange,
    setValues,
    isValid,
    setIsValid,
  };
};

export default useForm;
