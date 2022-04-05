import { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid username and age (not-empty values)!",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please enter a valid age (> 0)!",
      });
      return;
    }
    console.log(enteredUsername, enteredUserAge);
    props.onAddUser({
      id: Math.random(),
      name: enteredUsername,
      age: +enteredUserAge,
    });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit" onClick={addUserHandler}>
            Add user
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
