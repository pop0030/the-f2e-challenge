import React from 'react';
import Icon from 'react-fontawesome';
import styled from 'styled-components';

const sites = [
  {
    name: 'facebook',
    icon: 'facebook-official',
    label: 'Facebook.com',
    url: '#',
    currectViews: 45836,
    lastViews: 44937
  },
  {
    name: 'google',
    icon: 'google',
    label: 'Google.com',
    url: '#',
    currectViews: 23582,
    lastViews: 22938
  },
  {
    name: 'shopify',
    label: 'Shopify.com',
    url: '#',
    currectViews: 2489,
    lastViews: 3128
  },
  {
    name: 'wordpress',
    icon: 'wordpress',
    label: 'Wordpress.com',
    url: '#',
    currectViews: 1057,
    lastViews: 1872
  }
];

const SiteSection = ({ icon, label, currectViews, lastViews }) => {
  const grow = Math.round((currectViews - lastViews) / lastViews * 100);
  return (
    <SectionContainer>
      <BrandField>
        <div>
          <LargeIcon name={icon || 'globe'} style={{ fontSize: '30px' }}/>
          <Label>{label}</Label>
        </div>
        <div>
          <Views>{currectViews}</Views>
        </div>
      </BrandField>
      <GrowField
        style={{
          color: grow > 0 ? '#7ED321' : '#D0021B'
        }}
      >
        <Icon
          name={(grow > 0 ? 'arrow-up' : 'arrow-down')}
          style={{
            marginRight: '8px'
          }}
        />
        <span>{`${grow}%`}</span>
      </GrowField>
    </SectionContainer>
  );
};

const TransactionSite = () => (
  <div>
    <div>Transaction Website</div>
    <div>
      {sites.map(site => <SiteSection {...site} key={site.name} />)}
    </div>
  </div>
);

export default TransactionSite;

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;
`;

const BrandField = styled.div`
  flex: 0 0 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GrowField = styled.div`
  flex: 1 1 auto;
  white-space: nowrap;
`;

const LargeIcon = styled(Icon)`
  margin-right: 12px;
  vertical-align: middle;
`;

const Label = styled.span`
  color: #9B9B9B;
  font-size: 16px;
`;

const Views = styled.span`
  font-size: 20px;
  text-align: right;
  padding: 0 20px 0 10px;
`;
