import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";

const RepoCard = ({ repo }) => {
  const { name, description } = repo;
  return (
    <Flex
      direction="column"
      borderBottom="2px"
      borderColor="gray.200"
      w="100%"
      py="5"
    >
      <Flex alignItems="center">
        <Text color="#0969DA" fontSize="20px" fontWeight="600">
          {name}
        </Text>
        <Text
          border="2px"
          borderColor="gray.200"
          borderRadius="2xl"
          px="2"
          py="1"
          fontSize="12px"
          color="gray.700"
          fontWeight="600"
          ml="3"
          mt="1"
        >
          {repo.private ? "Private" : "Public"}
        </Text>
      </Flex>
      <Text fontSize="14px" color="gray.600">
        {description}
      </Text>
    </Flex>
  );
};

export default RepoCard;
