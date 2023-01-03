import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import Date from './Date';

const Container = styled.article`
  display: flex;
  margin: 2em 0;

  .photo {
    position: relative;
    width: 320px;
    height:180px;
    margin-right: 1em;

    & img {
      object-fit: cover;
      border-radius: 5px;
    display: block;
    box-shadow: 2px 2px 10px rgb(12, 13, 19);
    }
  }

  .content {
    width: 100%;
  }

  & h1 {
    margin 0 0;

    & a {
      color: ${(props) => props.theme.colors.headings};
    }
  }
`;

const PostSummary = ({ title, date, excerpt, link, image, imageAlt }) => {
  return (
    <Container>
      <section className="photo">
        <Image src={image} alt={imageAlt} fill priority />
      </section>
      <section className="content">
        <h1>
          <Link href={link}>{title}</Link>
        </h1>
        {excerpt && <p>{excerpt}</p>}
        <p>
          <Date date={date} />
        </p>
        <p>
          <Link href={link}>Read more</Link>
        </p>
      </section>
    </Container>
  );
};

PostSummary.defaultProps = {
  title: '[Title not set]',
  imageAlt: 'Hero image',
};

export default PostSummary;
