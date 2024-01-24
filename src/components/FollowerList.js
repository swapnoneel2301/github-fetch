import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import FollowerCard from "./FollowerCard";

const FollowerList = ({ followerList }) => {
  console.log(followerList.length);
  return (
    <Flex flexDirection="column" alignItems="center">
      {followerList?.map((follower, idx) => (
        <FollowerCard key={idx} details={follower}></FollowerCard>
      ))}
    </Flex>
  );
};

export default FollowerList;
