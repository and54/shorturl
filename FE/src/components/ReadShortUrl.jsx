import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadShortUrl } from "../api";
import { Card, ElemContainer, ErrorCard } from '../styles';

export const ReadShortUrl = () => {
  const { shortUrl } = useParams();
  const [status, setStatus] = useState('loading...');
  const [cmp, setCmp] = useState(Card);

  useEffect(async () => {
    const resp = await loadShortUrl(shortUrl);
    if (!resp.success) {
      setStatus(resp.error);
      setCmp(ErrorCard);
    } else {
      setStatus('redirecting to url...');
      setTimeout(() => window.location = resp.url, 2000);
    }
  }, []);
  
  const Component = cmp;
  return (
    <Component>
      <ElemContainer>
        {status}
      </ElemContainer>
    </Component>)
}