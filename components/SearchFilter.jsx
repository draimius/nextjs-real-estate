import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/FilterData';

import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from '@chakra-ui/react';

//**********add in the search by locations************************** */

const SearchFilter = () => {
  const [filter, setFilter] = useState(filterData);
  const router = useRouter();

  //very clever and powerful for routing and filtering results shown
  //alot going on here => first on function that takes in an array of filterValue
  // --(those values imported , and added in the array via our onChange in the Select below )
  // we are then accessing the router.pathname which gives us the
  const searchProperty = (filterValues) => {
    //pulls the current path/url
    const path = router.pathname;
    //destructer from router to access and add to the query object
    const { query } = router;
    //value = getFilterValue imported function that take in the passed in values obj array
    // and destrutures all filters and set then to thier new passed in values and return arr of objs
    const values = getFilterValues(filterValues);
    //loops over value building up the query where filter name set = to the filter value each iteration
    values.forEach((item) => {
      // what does this do?? 1st portion serves to only add in the query where a name and value exist (prevent empty value in query url)
      // 2nd hmm?? is it readding any value that already existed in the array originally (back into value to then be inserted again creating whole new url/path??? think soo)
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });
    //building up the new url req with the current path(url) then adding all the queries name and values
    router.push({ pathame: path, query });
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center" bg="gray.100">
      {filter?.map((op) => (
        <Box key={op.queryName}>
          <Select
            w="fit-content"
            p="2"
            placeholder={op.placeholder}
            // this [in bracks] its adding all the filter option we have back to back
            // so then we can build the url for request and filter to only those matching
            // the filter options choose (because we can have multiple filters together , not just one at a time ect...)
            onChange={(e) => searchProperty({ [op.queryName]: e.target.value })}
          >
            {op?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilter;
