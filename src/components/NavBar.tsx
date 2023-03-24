import { HStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModelSwitch from './ColorModelSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="1em">
      <Image src={logo} boxSize="60px" />
      <ColorModelSwitch />
    </HStack>
  );
};

export default NavBar;
