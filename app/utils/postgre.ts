import { Content } from '@google/generative-ai';
import { createClient } from '@vercel/postgres';

////// INSERT //////

export const insertChat = async (chatName: string, initialHistory: Content[], userEmail: string) => {
  const client = createClient({ connectionString: process.env.postgresUrlNonPooling });
  await client.connect();
  const historyJson = JSON.stringify(initialHistory);
  try {
    await client.sql`INSERT INTO chat (name, history, user_email) VALUES (${chatName}, ${historyJson}, ${userEmail});`;
  } catch (error) {
    console.error(error);
    throw new Error('Error inserting chat');
  } finally {
    await client.end();
  }
}

////// UPDATE //////

export const insertMessage = async (chatName: string, messages: Content[], userEmail: string) => {
  const client = createClient({ connectionString: process.env.postgresUrlNonPooling });
  await client.connect();
  const messagesJson = JSON.stringify(messages);
  try {
    // console.log(`UPDATE chat SET history = history || ${messagesJson} WHERE name = ${chatName} AND user_email = ${userEmail}`)
    await client.sql`UPDATE chat SET history = history || ${messagesJson} WHERE name = ${chatName} AND user_email = ${userEmail}`;
  } catch (error) {
    console.log(error);
    throw new Error('Error inserting message');
  } finally {
    await client.end();
  }
}

////// GET //////

export const getChatId = async (chatName: string, userEmail: string) => {
  const client = createClient({ connectionString: process.env.postgresUrlNonPooling });
  await client.connect();
  try {
    const result = await client.sql`SELECT id FROM chat WHERE name = ${chatName} AND user_email = ${userEmail}`;
    return result
  } catch (error) {
    console.error(error);
    throw new Error('Error getting id');
  } finally {
    await client.end();
  }
}

export const getChatHistory = async (chatName: string, userEmail: string) => {
  const client = createClient({ connectionString: process.env.postgresUrlNonPooling });
  await client.connect();
  try {
    const result = await client.sql`SELECT history FROM chat WHERE name = ${chatName} AND user_email = ${userEmail}`;
    return result
  } catch (error) {
    console.error(error);
    throw new Error('Error getting history');
  } finally {
    await client.end();
  }
}