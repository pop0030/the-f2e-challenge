import React from 'react';
import styled from 'styled-components';
import Icon from 'react-fontawesome';
import { WHITE, BLACK, PURPLE, NOMARL_GRAY, DARK_GRAY } from '../config';

const Card = ({
  title,
  cover,
  desc,
  source,
  category,
  address,
  postDate,
  ...restProp
}) => (
  <Container>
    <Cover cover={cover} />
    <Content>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      <Row>
        {source && <Source>{source}</Source>}
        {category && <Category>{category}</Category>}
      </Row>
      <Row style={{ marginBottom: 0 }}>
        <IconTag
          iconName="map-marker"
          onClick={() => {
            window.open(`https://www.google.com/maps/search/?api=1&query=${title}`)
          }}
        >{address}</IconTag>
        <IconTag iconName="phone">{postDate}</IconTag>
      </Row>
    </Content>
  </Container>
);

export default Card;

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  margin-bottom: 24px;
`;

const Cover = styled.div`
  flex: 0 0 220px;
  background-image: ${({ cover }) => `url(${cover})`};
  background-color: #fff;
  background-size: cover;
`

const Content = styled.div`
  flex: 1 1 100%;
  padding: 24px 20px;
  min-height: 220px;
`;

const Title = styled.h4`
  font-size: 24px;
  margin-bottom: 16px;
  font-weight: bold;
  color: ${PURPLE};
  line-height: 1.25;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 24px;
  height: 75px;
  overflow: hidden;
  margin-bottom: 13px;
`;

const Row = styled.div`
  margin-bottom: 13px;
`;

const Source = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 16px;
`;

const Category = styled.span`
  font-size: 16px;
  background-color: ${NOMARL_GRAY};
  color: ${WHITE};
  border-radius: 24px;
  padding: 2px 16px;
  font-style: italic;
`;

const IconTag = ({ children, iconName, onClick, ...props }) => (
  <IconTagWrapper
    onClick={onClick}
    {...props}
  >
    <Icon
      name={iconName}
      style={{
        marginRight: '7px'
      }}
      tag="i"
    />
    <span>{children}</span>
  </IconTagWrapper>
);

const IconTagWrapper = styled.div`
  display: inline-block;
  margin-right: 20px;
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};
  > span {
    color: ${DARK_GRAY};
  }
  .fa {
    color: ${BLACK};
  }
`;

