// OpenRouter API client (OpenAI-compatible)
const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

const openRouterClient = {
  chat: {
    completions: {
      create: async ({ messages, model }) => {
        const response = await fetch(
          `${OPENROUTER_BASE_URL}/chat/completions`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${OPENROUTER_API_KEY}`,
              "Content-Type": "application/json",
              "HTTP-Referer": window.location.origin,
              "X-Title": "NetflixGPT",
            },
            body: JSON.stringify({
              model: model || "qwen/qwen3-next-80b-a3b-instruct:free",
              messages: messages,
            }),
          },
        );

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error?.message || "OpenRouter API error");
        }

        return response.json();
      },
    },
  },
};

export default openRouterClient;
