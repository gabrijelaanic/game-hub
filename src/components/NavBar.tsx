import { HStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModelSwitch from './ColorModelSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="1em">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModelSwitch />
    </HStack>
  );
};
export default NavBar;
