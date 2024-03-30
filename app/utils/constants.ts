export const appName = 'GeData';

export const instruction = 'Given some descriptions, generate input and output sample of desired data for AI training. Format:\n' +
'```\n' +
'**INPUT:** {Sample Input Here}\n\n' +
'**OUTPUT:** {Sample Output Here}\n' + 
'```\n';

export const sampleResponse = "I'd be glad to help you format input and output samples for AI training!";

export const promptSamples = [
  "The input is text reviews of movies, with only have two possible output: 'POSITIVE', 'NEGATIVE', indicating whether each review is positive or negative.",
  "The input is a paragraph discussing a trending topic in the news and the output it one of 4 categories: politics, technology, sports, or entertainment.",
  "The input is sentences about a travel destination, and the output is all locations and entities.",
  "The input is an article, and the output is: 1. The summary 2. Classify the summary as either 'informative' or 'biased'.",
];

export const moreExamplesPrompts = [
  'Based on the description and the template, provide 5 more examples',
  'I believe there are more possibilities, provide 5 more',
  '5 more examples, and no similar data, please',
  'Please give me 5 more examples, try to have more different kinds of data',
  'Last 5 more examples',
];