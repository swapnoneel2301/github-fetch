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

const UserDetails = ({ userDetails }) => {
  const { name, login, avatar_url, bio } = userDetails ? userDetails : {};

  return userDetails ? (
    <Grid
      w="100%"
      bg="white"
      h="100%"
      m="5"
      px="5"
      templateColumns="1fr 2fr"
      gap=""
    >
      <GridItem
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="gray.200"
        borderLeftRadius="lg"
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
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
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
