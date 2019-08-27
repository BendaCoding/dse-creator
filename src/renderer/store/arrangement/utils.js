export const getSectionIndexFromId = ({ sections, sectionId }) =>
  sections.findIndex(({ id }) => id === sectionId);

export const getSnippetIndexFromId = ({ sections, sectionId, snippetId }) => {
  const sectionIndex = getSectionIndexFromId({ sections, sectionId });
  return sections[sectionIndex].snippets.findIndex(
    ({ id }) => id === snippetId
  );
};

export const getIndexes = payload => {
  const sectionIndex = getSectionIndexFromId(payload);
  const snippetIndex = getSnippetIndexFromId(payload);
  return { sectionIndex, snippetIndex };
};
