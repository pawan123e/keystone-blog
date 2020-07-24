import React from 'react';
import styled from 'styled-components';
import { Container } from '@arch-ui/layout';
import { Title } from '@arch-ui/typography';

const Dashboard = () => (
  <Container>
    <DashboardWrap>
    <Title as="h1" margin="both" className = 'heading'>
      Dashboard
    </Title>
    <p>This is a custom dashboard in the Blog demo project Admin UI.</p>
    <p>
      It demonstrates the ability to change the default dashboard and render a custom page instead.
    </p>
    </DashboardWrap>
  </Container>
);

export default Dashboard;

const DashboardWrap = styled.div`
background: #252525;
color: white;
text-align: center;
height: 100vh;
width: 100%;
.heading {
  font-size: 3rem;
  padding-top: 2rem;
}
`
