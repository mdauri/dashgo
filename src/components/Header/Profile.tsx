import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true }: ProfileProps){
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="14" textAlign="right">      
          <Text>Márcio Daurí</Text>
          <Text color="gray.300" fontSize="small">mdauri@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Márcio Daurí" src="https://avatars.githubusercontent.com/u/7568819?v=4"/>
    </Flex>
  );
}