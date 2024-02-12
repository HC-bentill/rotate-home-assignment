import React from "react";
import {Avatar, Box, Flex, Stack, Text} from "@chakra-ui/react";
type Props = {};

const AvatarProfile = (props: Props) => {
  return (
    <Flex as="div" justify="space-between" alignItems={"center"} gap={2}>
      <Box>
          <Text color={"black"} fontSize='md' as="b">Theodore Winters</Text>
          <Text color={"black"} fontSize='sm'>twinters@gmail.com</Text>
      </Box>
      <Avatar bg="teal.500" width={12} height={12} />
    </Flex>
  );
};

export default AvatarProfile;
