import { Content } from '@google/generative-ai';
import { createClient } from '@vercel/postgres';
import { DataProps } from './interfaces';

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

export const insertData = async (dataInfo: DataProps) => {
  const client = createClient({ connectionString: process.env.postgresUrlNonPooling });
  await client.connect();
  const { name, user_email, prompt, sample, filename, generating_step } = dataInfo;
  try {
    const data = await client.sql`INSERT INTO data (name, user_email, prompt, sample, filename, generating_step) VALUES (${name}, ${user_email}, ${prompt}, ${sample}, ${filename}, ${generating_step}) RETURNING id;`;
    return data.rows[0].id;
  } catch (error) {
    console.error(error);
    throw new Error('Error inserting data');
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

export const updateDataStep = async (id: string, step: number) => {
  const client = createClient({ connectionString: process.env.postgresUrlNonPooling });
  await client.connect();
  try {
    await client.sql`UPDATE data SET generating_step = ${step} WHERE id = ${id}`;
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

export const getAllData = async (userEmail: string) => {
  const client = createClient({ connectionString: process.env.postgresUrlNonPooling });
  await client.connect();
  try {
    const result = await client.sql`SELECT id, name FROM data WHERE user_email = ${userEmail}`;
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting history');
  } finally {
    await client.end();
  }
}

export const getDataInfo = async (id: number) => {
  const client = createClient({ connectionString: process.env.postgresUrlNonPooling });
  await client.connect();
  try {
    const result = await client.sql`SELECT * FROM data WHERE id = ${id}`;
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting history');
  } finally {
    await client.end();
  }
}

////// DELETE //////

export const deleteChat = async (chatName: string, userEmail: string) => {
  const client = createClient({ connectionString: process.env.postgresUrlNonPooling });
  await client.connect();
  try {
    await client.sql`DELETE FROM chat WHERE name = ${chatName} AND user_email = ${userEmail}`;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting history');
  } finally {
    await client.end();
  }
}