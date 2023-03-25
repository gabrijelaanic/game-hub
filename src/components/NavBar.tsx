import { HStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModelSwitch from './ColorModelSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding="1em">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModelSwitch />
    </HStack>
  );
};
export default NavBar;
