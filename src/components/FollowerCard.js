import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const FollowerCard = ({ details }) => {
  const { login, avatar_url } = details;
  return (
    <Flex my="3" w="100%" alignItems="center">
      <Avatar
        name={login}
        size="md"
        src={avatar_url}
        mx="3"
        cursor="pointer"
      ></Avatar>
      <Text>{login}</Text>
    </Flex>
  );
};

export default FollowerCard;
