import { useContext } from 'react';
import Image from 'next/image';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

//also note the definint of multiple components ih one file (when ok when not(are kinda like pieces/sub components not really actual one))
//what going on here???
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      {/* only if you are calling the function with a param passed in do we use the () => funciton()  else just function name*/}
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        cursor="pointer"
        fontSize="2xl"
        d={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        cursor="pointer"
        fontSize="2xl"
        d={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overFlow: 'hidden' }}
    >
      {data.map((img) => (
        <Box width="910px" key={img.id} itemId={img.id} overflow="hidden" p="1">
          <Image
            placeholder="blur"
            blurDataURL={img.url}
            src={img.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            alt="property"
            key={img.id}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default ImageScrollbar;
