import React, { useState, useEffect } from 'react';
import HelmetTag from '@Common/HelmetTag/HelmetTag';
import meta from '../../meta/home';
import pageNotFoundImg from '@Assets/images/PageNotFound/page-not-found-img.png';
const PageNotFound = (props: any) => {
  return (
    <>
      <HelmetTag meta={meta} />

      <img src={pageNotFoundImg} alt="img"></img>
    </>
  );
};

export default PageNotFound;
