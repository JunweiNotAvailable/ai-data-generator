export const appName = 'GeData';

export const instruction = 'Given some descriptions, generate input and output sample of desired data for AI training. Format:\n' +
'```\n' +
'**INPUT:** {Sample Input Here}\n\n' +
'**OUTPUT:** {Sample Output Here}\n' + 
'```\n' +
'Description:\n';

export const sampleResponse = "I'd be glad to help you format input and output samples for AI training!";

export const promptSamples = [
  'A dataset of text reviews of movies, with labels indicating whether each review is either positive or negative.',
  "Write a short text snippet about a restaurant experience and classify it as either 'positive' or 'negative'.",
  "Generate a paragraph discussing a trending topic in the news and categorize it into one of the following topics: politics, technology, sports, or entertainment.",
  "Identify and label the named entities in the following sentence about a travel destination: 'I went on a trip to Paris, the capital of France'.",
  "Summarize an article in 1-2 sentences and classify the summary as either 'informative' or 'biased'.",
];