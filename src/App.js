import React, { useState } from "react";
import { Button, Flex, Input, useToast } from "@chakra-ui/react";
import UserDetails from "./components/UserDetails";

function App() {
  let base_url = "https://api.github.com/users";
  const toast = useToast();
  const [userName, setUserName] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    setLoading(true);
    try {
      let resp = await fetch(`${base_url}/${userName}`);
      let data = await resp.json();
      console.log(data);
      if (data.message) {
        setUserDetails(null);
        toast({
          title: "Username Not Found",
          status: "error",
          duration: 4000,
          position: "top-right",
          isClosable: true,
        });
      } else {
        setUserDetails(data);
        toast({
          title: `Found @${userName}`,
          status: "success",
          duration: 4000,
          position: "top-right",
          isClosable: true,
        });
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
      <Input
        variant="filled"
        placeholder="Enter Github Username"
        size="lg"
        w="40vw"
        m="5"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && fetchDetails();
        }}
      />
      <Button
        colorScheme="green"
        size="lg"
        onClick={fetchDetails}
        isLoading={loading}
      >
        Search
      </Button>
      <UserDetails {...{ userDetails }} />
    </Flex>
  );
}

export default App;
