import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Avatar,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import RepoList from "./RepoList";
import FollowerList from "./FollowerList";

const UserDetails = ({ userDetails, repoList, followerList }) => {
  const { name, login, avatar_url, bio } = userDetails ? userDetails : {};

  return userDetails ? (
    <Grid
      w="100%"
      bg="white"
      h="100%"
      m="1"
      px="2"
      templateColumns="1fr 3fr"
      gap=""
    >
      <GridItem
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        bg="gray.200"
        borderLeftRadius="lg"
        pt="20"
        ml="5"
      >
        {avatar_url ? (
          <Avatar name={name} size="2xl" src={avatar_url} />
        ) : (
          <></>
        )}
        <Text
          fontSize="30px"
          fontWeight="bold"
          textAlign="center"
          w="70%"
          mb="4"
        >
          {name}
        </Text>
        <Text fontSize="20px" color="#656D76" fontWeight="400" w="70%" mb="1">
          @{login}
        </Text>
        <Text color="#1F2328" fontSize="16px" w="70%">
          {bio}
        </Text>
      </GridItem>

      <GridItem display="flex" justifyContent="center">
        <Tabs w="100%" isLazy p="5" variant="soft-rounded">
          <TabList>
            <Tab>Repositories</Tab>
            <Tab>Followers</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <RepoList {...{ repoList }} />
            </TabPanel>
            <TabPanel>
              <FollowerList {...{ followerList }} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
    </Grid>
  ) : (
    <></>
  );
};

export default UserDetails;
