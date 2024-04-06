import React from "react";
import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, HStack, StackDivider, Link, Spacer, useColorModeValue } from "@chakra-ui/react";
import { FaRegNewspaper, FaRegClock, FaRegUserCircle } from "react-icons/fa";

const NewsCard = ({ title, summary, imageUrl, author, date }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg={useColorModeValue("white", "gray.800")} shadow="md">
      <HStack spacing={4} divider={<StackDivider borderColor="gray.200" />}>
        <Image borderRadius="md" boxSize="100px" objectFit="cover" src={imageUrl} alt={title} />
        <VStack align="start" spacing={2}>
          <Heading size="md">{title}</Heading>
          <Text noOfLines={3}>{summary}</Text>
          <HStack fontSize="sm" color="gray.500">
            <FaRegUserCircle />
            <Text>{author}</Text>
            <Spacer />
            <FaRegClock />
            <Text>{date}</Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

const Index = () => {
  // Sample data for news articles
  const articles = [
    {
      title: "Breaking News: Market Reaches All-Time High",
      summary: "The stock market reached an all-time high today, with major indices pushing past their previous records amid a surge in trading...",
      imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldHxlbnwwfHx8fDE3MTIzODQwMzJ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      author: "Jane Doe",
      date: "April 10, 2023",
    },
    // ...other articles
  ];

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading size="2xl" mb={2}>
            The Daily Update
          </Heading>
          <HStack justifyContent="center" color="gray.500">
            <FaRegNewspaper />
            <Text>Your source for the latest news</Text>
          </HStack>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {articles.map((article, index) => (
            <NewsCard key={index} {...article} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
