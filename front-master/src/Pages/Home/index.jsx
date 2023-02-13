import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 500px;
  height: 300px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
`;

const Home = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch('../../api/post.json')
      .then(res => res.json())
      .then(data => setPost(data));
  }, []);

  return (
    <CardContainer>
      <Title>{post.titutlo}</Title>
      <Content>{post.texto}</Content>
    </CardContainer>
  );
};

export default Home;
