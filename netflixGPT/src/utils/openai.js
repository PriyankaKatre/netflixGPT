import OpenAI from 'openai';
import { openai_key } from './constants';

const openai = new OpenAI({
  apiKey: openai_key,
  dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;
