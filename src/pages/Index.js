import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigations2 from '../components/navigations/IndexSectionNavigations2';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';
import IndexSectionFeatures3 from '../components/features/IndexSectionFeatures3';
import IndexSectionAbout5 from '../components/about/IndexSectionAbout5';
import IndexSection__structures12 from '../components/__structures/IndexSection__structures12';
import IndexSectionStats14 from '../components/stats/IndexSectionStats14';
import IndexSectionCta6 from '../components/cta/IndexSectionCta6';
import IndexSectionLogos8 from '../components/logos/IndexSectionLogos8';
import IndexSectionFaq9 from '../components/faq/IndexSectionFaq9';
import IndexSectionFooter11 from '../components/footer/IndexSectionFooter11';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations2 />
      <IndexSectionHeaders1 />
      <IndexSectionFeatures3 />
      <IndexSectionAbout5 />
      <IndexSection__structures12 />
      <IndexSectionStats14 />
      <IndexSectionCta6 />
      <IndexSectionLogos8 />
      <IndexSectionFaq9 />
      <IndexSectionFooter11 />
    </React.Fragment>
  );
}

