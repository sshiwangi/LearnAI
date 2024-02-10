const express = require("express");
const puppeteer = require("puppeteer");
const OpenAI = require("openai");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;

const openai = new OpenAI({
  apiKey: "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",
});

app.use(express.json());

async function getTopVideoUrlsForKeywords(keywords) {
  const browser = await puppeteer.launch({
    headless: false, // Set to false for debugging
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  const result = [];

  for (const keyword of keywords) {
    const url = `https://www.youtube.com/results?q=${encodeURIComponent(
      keyword
    )}`;

    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 0 });

      await page.waitForSelector("ytd-video-renderer", { timeout: 0 });

      const topVideoInfo = await page.evaluate((keyword) => {
        const videoElement = document.querySelector("ytd-video-renderer");
        const titleElement = videoElement.querySelector("#video-title");

        return {
          topic: keyword,
          title: titleElement.innerText.trim(),
          url: `https://www.youtube.com${titleElement.getAttribute("href")}`,
        };
      }, keyword);

      result.push(topVideoInfo);
    } catch (error) {
      console.error(`Error navigating to ${url}: ${error.message}`);
    }
  }

  await browser.close();
  return result;
}

app.post("/youtube/recommend-videos", async (req, res) => {
  const prompt = req.body.prompt;

  const systemMessage =
    "You are a Keyword/Search_phrases Bot. You are helping a user find the best learning path for a given request he wants to learn. They want to know the best resources to learn about this topic. They want to know the best tutorials and videos to watch. They want to know the best phrases to search for. They want to know the best learning path for a given topic on Youtube; the generated phrases or search_keywords should be in sequence and different from each other vastly to cover the entire depth of the topic as asked by the user. Generate Strictly 5 phrases only in an array separated by commas, give nothing else in response other than the array}";

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages: [
      { role: "system", content: systemMessage },
      { role: "user", content: `The User's Request is: ${prompt}` },
    ],
    max_tokens: 200,
    seed: 2323,
  });

  const response = completion.choices[0].message.content;
  const learningKeywords = JSON.parse(response);

  const result = await getTopVideoUrlsForKeywords(learningKeywords);

  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
