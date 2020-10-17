import React, { FC } from "react";
import { Tag } from "../../components";
import { StateInterface } from "../../base";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div<{ isOpen: boolean }>`
  grid-area: details;
  font-size: 13px;
  color: ${props => props.theme.colors.primary};

  max-height: ${props => (props.isOpen ? "25vh" : "0px")};
  overflow: hidden;
  transition: max-height 0.3s ease;

  > div {
    margin: 0.5em 0;
  }
`;

const TagsOutterWrapper = styled.div`
  display: flex;
`;

const TagsInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 0.5em;

  margin-left: 0.5em;
`;

interface LogDetailsProps {
  isOpen: boolean;
  runId: string;
}

export const LogDetails: FC<LogDetailsProps> = ({ isOpen, runId }) => {
  const run = useSelector((state: StateInterface) => state.runs[runId]);
  const { runType: tags, location, note } = run;
  console.log(runId);
  return (
    <Wrapper isOpen={isOpen}>
      {location && <div>Location: {location}</div>}
      {tags.length && (
        <TagsOutterWrapper>
          Tags:
          <TagsInnerWrapper>
            {tags.map(tag => (
              <Tag key={`${runId}_${tag}`} tagName={tag} />
            ))}
          </TagsInnerWrapper>
        </TagsOutterWrapper>
      )}
      {note && <div>{note}</div>}
    </Wrapper>
  );
};
