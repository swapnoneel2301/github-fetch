import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import RepoCard from "./RepoCard";

const RepoList = ({ repoList }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      {repoList?.map((repo, idx) => (
        <RepoCard key={idx} {...{ repo }}></RepoCard>
      ))}
    </Flex>
  );
};

export default RepoList;
