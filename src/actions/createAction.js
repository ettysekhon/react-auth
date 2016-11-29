export default (type) => {
  return (payload, error) => {
    return {
      type,
      payload,
      error
    };
  };
};
