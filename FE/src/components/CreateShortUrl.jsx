import React, { useState } from "react";
import { Button, ButtonContainer, Card, ElemContainer, InfoText, TextField } from '../styles';
import { postShortUrl } from '../api';

export const CreateShortUrl = () => {
  const [shortUrl, setShortUrl] = useState('');
  const [info, setInfo] = useState('URL to short');

  const create = async event => {
    event.preventDefault();
    const url = event.target.url.value;
    if (url) {
      const resp = await postShortUrl(url);
      if (resp.success) {
        setShortUrl(`${window.location.origin}/${resp.shortUrl}`);
        setInfo('COPY to add URL to clipboard');
      } else {
        setInfo('an error occurred, please try again');
      }
    }
  }

  const backToCreate = () => {
    setShortUrl('');
    setInfo('URL to short');
  }

  const copyShortUrl = async () => {
    await navigator.clipboard.writeText(shortUrl);
    setInfo('URL copied to clipboard');
  }

  return (
    <Card>
      <ElemContainer>
        <InfoText>{info}</InfoText>
      </ElemContainer>
      {shortUrl ?
        <>
          <ElemContainer>
            {shortUrl}
          </ElemContainer>
          <ButtonContainer>
            <ElemContainer>
              <Button onClick={copyShortUrl}>Copy</Button>
            </ElemContainer>
            <ElemContainer>
              <Button onClick={backToCreate}>
                Create New
              </Button>
            </ElemContainer>
          </ButtonContainer>
        </>
      :  
        <form onSubmit={create}>
          <ElemContainer>
            <TextField name='url' />
          </ElemContainer>
          <ButtonContainer>
            <ElemContainer>
              <Button type="submit">
                Create
              </Button>
            </ElemContainer>
          </ButtonContainer>
        </form>
      }
    </Card>
  );
}
