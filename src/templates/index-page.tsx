import { Button, Typography } from 'antd';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';
import collegeLogo from '../img/cict-dark.svg';
import cictLines from '../img/cict-lines.svg';

const { Title } = Typography;


interface Props {
  title: String,
  heading: String,
  subheading: String,
  mainpitch: object,
  description: String,
  intro: any,
  goal: String
}

export const IndexPageTemplate = ({  
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  goal,
}: Props) => (
    <div style={{ textAlign: 'center'}}>
      <div style={{ backgroundColor: '#fff', borderTop: '1px solid rgb(204, 204, 204)' ,padding: '2rem 1rem' }}>
        <img style={{ width: 'auto', height: '200px', margin: '2rem auto' }} src={collegeLogo} />
        <Title level={2} style={{ textAlign: 'center' }}>{heading}</Title>
        <p style={{
          maxWidth: '740px',
          margin: '0 auto 1.5em'
        }}>{subheading}</p>
        <Button size="large" type="primary" href="https://medium.com/cictwvsu-online/our-story-87a461c14ab" target="_blank">Learn More</Button>
      </div>
      <div style={{ marginTop: '3rem', padding: '2rem 1rem' }}>
        <img style={{ width: 'auto', height: '200px', margin: '2rem auto' }} src={cictLines} />
        <p style={{ maxWidth: '740px', margin: '0 auto' }}>{goal}</p>
      </div>
    </div>
  )

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate        
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        goal={frontmatter.goal}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        goal
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
