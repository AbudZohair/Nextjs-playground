import { NextSeo } from 'next-seo';
import axios from 'axios';
const About = ({ data }) => {
  const { API_URL } = process.env;
  console.log(data);
  const SEO = {
    title: 'About page',
    description: 'Just an about page',

    openGraph: {
      title: 'About page',
      description: 'Just  normal about page'
    }
  };
  return (
    <>
      <NextSeo {...SEO} />
      <h2>{data.Header}</h2>
      <img src={`${API_URL}${data.featured_Image[0].url}`} alt="Featured" />
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
      <div>{data.description}</div>
    </>
  );
};

export async function getStaticProps() {
  const { API_URL } = process.env;

  const response = await axios.get(`${API_URL}/about-page`);
  const { data } = await response;

  return {
    props: {
      data
    }
  };
}
export default About;
