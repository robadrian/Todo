const useLocalStorage = () => {
  const save = (dataKey, data) => {
    localStorage.setItem(dataKey, data);
  };

  return save;
};

export default useLocalStorage;
