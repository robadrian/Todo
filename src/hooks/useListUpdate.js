import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useListUpdate() {
  const [list, setList] = useState([]);
  const save = useLocalStorage();

  useEffect(() => {
    if (list.length > 0) {
      save("todos", JSON.stringify([...list]));
    } else return;
  }, [save, list]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("todos"));
    if (savedList) {
      setList(savedList);
    } else {
      return;
    }
  }, []);

  const addToList = (value) => {
    const nowDate = new Date();
    const formattedDate = `Last Updated: ${nowDate.toLocaleString("uk-UK", {
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })}`;
    const listObject = {
      id: Math.random() * 1000,
      input: value,
      date: formattedDate,
      isEditing: false,
    };
    setList((prevList) => [...prevList, listObject]);
  };

  const isEditing = (id, value) => {
    const nowDate = new Date();
    const formattedDate = `Last Updated: ${nowDate.toLocaleString("uk-UK", {
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })}`;
    const index = list.findIndex((item) => item.id === id);
    const editedListObject = {
      id: Math.random() * 10000,
      input: value,
      date: formattedDate,
      isEditing: true,
    };
    list[index] = editedListObject;
    const newList = [...list];
    setList(newList);
  };

  const editItem = (id, value) => {
    const nowDate = new Date();
    const formattedDate = `Last Updated: ${nowDate.toLocaleString("uk-UK", {
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })}`;
    const index = list.findIndex((item) => item.id === id);
    const editedListObject = {
      id: Math.random() * 10000,
      input: value,
      date: formattedDate,
      isEditing: false,
    };
    list[index] = editedListObject;
    const newList = [...list];
    setList(newList);
  };

  const deleteItem = (id) => {
    const index = list.findIndex((item) => item.id === id);
    const newArray = list.filter((item, i) => i !== index);
    setList([...newArray]);
  };

  return [list, addToList, editItem, isEditing, deleteItem];
}
