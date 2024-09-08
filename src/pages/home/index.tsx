import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Text, Flex, Input, Button } from "components";
import { StyledForm } from "./styled";

import { useAppDispatch } from "../../store/store";
import { getUserData } from "../../store/user/actions";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // navigate(inputValue);
    dispatch(getUserData("AntonenkoMax12345678"));
    // dispatch(getUserData("1212122121212122121"));
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="100%" py="120px">
      <Flex width="320px" flexDirection="column">
        <Text fontSize="40px" fontWeight="600" mb="24px">
          GitHub Profile
        </Text>

        <Text textAlign="start" width="100%" mb="14px">
          Enter GitHub profile name
        </Text>

        <StyledForm onSubmit={handleSubmit}>
          <Input
            mb="14px"
            value={inputValue}
            placeholder={"Enter Name"}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                navigate(inputValue);
              }
            }}
          />

          <Button width="100%" type="submit">
            Check Profile
          </Button>
        </StyledForm>
      </Flex>
    </Flex>
  );
};

export default Home;
