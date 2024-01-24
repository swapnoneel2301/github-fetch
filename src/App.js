import React, { useState } from "react";
import { Button, Flex, Input, useToast } from "@chakra-ui/react";
import UserDetails from "./components/UserDetails";

function App() {
  let base_url = "https://api.github.com/users";
  const toast = useToast();
  const [userName, setUserName] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [repoList, setRepoList] = useState(null);
  const [followerList, setFollowerList] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRepoList = async () => {
    try {
      let resp = await fetch(`${base_url}/${userName}/repos`);
      let data = await resp.json();
      if (data.message) {
        toast({
          title: "Repositories Not Found",
          status: "error",
          duration: 4000,
          position: "top-right",
          isClosable: true,
        });
        // setRepoList(null);
        return null;
      } else {
        // setRepoList(data);
        return data;
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Not able to fetch Repositories",
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
      return null;
    }
  };

  const fetchFollowerList = async () => {
    try {
      let resp = await fetch(`${base_url}/${userName}/followers`);
      let data = await resp.json();
      if (data.message) {
        toast({
          title: "Followers Not Found",
          status: "error",
          duration: 4000,
          position: "top-right",
          isClosable: true,
        });
        // setFollowerList(null);
        return null;
      } else {
        // setFollowerList(data);
        return data;
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Not able to fetch Followers",
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
      return null;
    }
  };
  const fetchDetails = async () => {
    setLoading(true);
    try {
      let resp = await fetch(`${base_url}/${userName}`);
      let data = await resp.json();
      console.log(data);
      if (data.message) {
        setUserDetails(null);
        setRepoList(null);
        setFollowerList(null);
        toast({
          title: "Username Not Found",
          status: "error",
          duration: 4000,
          position: "top-right",
          isClosable: true,
        });
      } else {
        // fetch repo list
        const localRespList = await fetchRepoList();

        // fetch folower list
        const localFollowerList = await fetchFollowerList();
        toast({
          title: `Found @${userName}`,
          status: "success",
          duration: 4000,
          position: "top-right",
          isClosable: true,
        });
        setUserDetails(data);
        setRepoList(localRespList);
        setFollowerList(localFollowerList);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast({
        title: "Some Error Occured",
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
      setLoading(false);
    }
  };
  return (
    <Flex
      w="100vw"
      h="100vh"
      // bg="pink"
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="column"
    >
      <Flex alignItems="center">
        <Input
          variant="filled"
          placeholder="Enter Github Username"
          w="40vw"
          m="5"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && fetchDetails();
          }}
        />
        <Button colorScheme="green" onClick={fetchDetails} isLoading={loading}>
          Search
        </Button>
      </Flex>
      <UserDetails {...{ userDetails, repoList, followerList }} />
    </Flex>
  );
}

export default App;
