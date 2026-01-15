/*import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.json({ Hello: 'World' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/

import 'dotenv/config';
import "reflect-metadata";
import { DaemoClient } from 'daemo-engine';
import { initializeDaemo, startConnection, stopConnection } from './services/daemoService';

async function main() {
  const systemPrompt = `You are a news briefer. Your job is to summarize relevant news based on a user's query.`;
  const sessionData = initializeDaemo(systemPrompt);
  const hostedConnection = await startConnection(sessionData);

  const daemoClient = new DaemoClient({
      daemoAgentUrl: process.env.DAEMO_GATEWAY_URL,
      agentApiKey: process.env.DAEMO_AGENT_API_KEY,
  });
  /*
  const result = await daemoClient.processQuery("What is 2 to the power of 4?", {
      llmConfig: {
          provider: process.env.LLM_PROVIDER!,
          apiKey: process.env.LLM_API_KEY,
          model: process.env.LLM,
          maxTokens: 2048,
      },
  });

  console.log(result.response);
  stopConnection(hostedConnection);
  */
}

main();