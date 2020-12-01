import React, { useState, useCallback } from "react";
import { Config } from "./Config";
import { Title } from "./Title";
import { Search } from "./Search";
import { PhotoGrid } from "./PhotoGrid";
import { Tags } from "./Tags";
import { Subtitle } from "./Subtitle";

export const App = () => {
  const [apiKey, setApiKey] = useState("");
  const [tag, setTag] = useState("");

  const onApiKeyChange = useCallback(nextApiKey => {
    setApiKey(nextApiKey);
  }, []);

  const onSearch = (nextTag) => {
    setTag(nextTag);
  }

  return (
    <div className="container">
      <br />
      <Config onApiKeyChange={onApiKeyChange} />
      <hr />

      <div style={{ textAlign: "center" }}>
      <Title />
      <Search onSearch={onSearch} />
      <Tags />
      <Subtitle value={tag} />
      <PhotoGrid />
    </div>
    </div>
  );
};
